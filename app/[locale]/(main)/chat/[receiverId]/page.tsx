"use client";

import { useParams } from "next/navigation";
import React, {
  memo,
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { io, type Socket } from "socket.io-client";

import { ActiveChatWindow } from "./ActiveChatWindow";
import { useAuthState } from "~/app/providers/auth-state";
import { API_BASE_URL, apiRoutes } from "~/app/api-routes";
import { useFocusConv, useRegisterConv } from "../covn-list";
import { produce } from "immer";
import { MessageControllerContext } from "./msg-ctrl";

function useSocket() {
  const { userId } = useAuthState();

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io(API_BASE_URL);
    socket.emit("join", userId);
    setSocket(socket);

    return () => {
      socket.emit("leave", userId);
      socket.disconnect();
    };
  }, [userId]);

  return socket;
}

function useConversation(
  receiverId: any,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>
) {
  const [conversation, setConversation] = useState<any>(null);

  const registerConv = useRegisterConv();

  useEffect(() => {
    if (!receiverId) return;

    async function loadConv() {
      try {
        const { fresh, conversation, messages } =
          await apiRoutes.resumeConversationSingle({ receiverId });

        setConversation(conversation);
        setMessages(messages);
        // TODO: update/show conversation in list
        registerConv(conversation);
      } catch {
        // Handle not found (never for now)
      }
    }

    loadConv();
  }, [receiverId, setMessages]);

  return { conversation };
}

function useListenMessages(
  socket: Socket | null,
  userId: any,
  conversation: any,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>
) {
  const focusConv = useFocusConv();

  useEffect(() => {
    if (!socket || !conversation) return;

    socket.on("receiveMessage", ({ conversationId, message }) => {
      if (
        conversationId === conversation["_id"] &&
        message["senderId"] !== userId
      ) {
        setMessages((prev) => [...prev, message]);
        focusConv(conversation, message["content"]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [socket, conversation, userId, setMessages]);
}

const ChatWindow = memo(({ receiverId }: { receiverId: string }) => {
  const { userId } = useAuthState();

  const [messages, setMessages] = useState<any[]>([]);
  const { conversation } = useConversation(receiverId, setMessages);

  const socket = useSocket();
  useListenMessages(socket, userId, conversation, setMessages);

  const focusConv = useFocusConv();

  const sendMessage = useCallback(
    (content: string) => {
      if (!socket || !content) return;

      const message = {
        conversationId: conversation["_id"],
        senderId: userId,
        content,
      };

      socket.emit("sendMessage", message);

      // Optimistic update
      message["sentAt"] = new Date();
      setMessages((prev) => [...prev, message]);

      focusConv(conversation, content);
    },
    [conversation, socket, userId]
  );

  return (
    <MessageControllerContext.Provider
      value={{
        removeMessage(messageId: string) {
          setMessages(
            produce((draft) => {
              const index = draft.findIndex((message) => message["_id"] === messageId);
              if (index !== -1) {
                draft.splice(index, 1);
              }
            })
          );
        },
      }}
    >
      {conversation ? (
        <ActiveChatWindow
          conversation={conversation}
          messages={messages}
          sendMessage={sendMessage}
        />
      ) : null}
    </MessageControllerContext.Provider>
  );
});

export default function ChatPage() {
  const { receiverId } = useParams<{ receiverId: string }>();

  return <ChatWindow receiverId={receiverId} />;
}
