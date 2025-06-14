"use client";

import clsx from "clsx";
import { Avatar, Typography } from "@material-tailwind/react";
import { IconMessage, IconSend2 } from "@tabler/icons-react";

import { Button } from "~/components/Button/Button";

import { MessageList } from "./MessageList";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { singleConvParticipants } from "../utils";
import { useAuthState } from "~/app/providers/auth-state";

function NewMessageInput({
  sendMessage,
}: {
  sendMessage: (content: string) => void;
}) {
  const [newMessage, setNewMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
  }

  return (
    <form
      className={clsx(
        "bg-white",
        "absolute bottom-0 w-full h-20 flex items-center gap-x-4",
        "px-8"
      )}
      onSubmit={handleSubmit}
    >
      <div className="border border-black/20 rounded-xl flex-1 flex overflow-hidden px-2.5 py-2.5 gap-x-1.5">
        <IconMessage size={17} className="self-center" />
        <input
          size={1}
          className="flex-1 outline-none bg-transparent"
          placeholder="Enter message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </div>
      <Button type="submit" disabled={!newMessage}>
        Send
        <IconSend2 />
      </Button>
    </form>
  );
}

function ChatHeader({ conversation }: { conversation: any }) {
  const { userId } = useAuthState();

  const receiver = useMemo(() => {
    const { receiver } = singleConvParticipants(conversation, userId);
    return receiver;
  }, [conversation, userId]);

  return (
    <div
      className={clsx(
        "bg-teal",
        "absolute top-0 w-full",
        "z-[60]",
        "flex gap-x-4",
        "py-2 px-4"
      )}
    >
      <Avatar variant="circular" alt="User" src="/profile_empty_gradient.png" />
      <div className="flex-1">
        <Typography variant="h6" color="white">
          {receiver?.fullName}
        </Typography>
        <Typography variant="small" color="white" className="font-normal">
          Senior Software Engineer
        </Typography>
      </div>
    </div>
  );
}

export function ActiveChatWindow({
  messages,
  conversation,
  sendMessage,
}: {
  messages: any[];
  conversation: any;
  sendMessage: (content: string) => void;
}) {
  return (
    <div className={clsx("flex-1", "md:max-h-[80vh]", "relative bg-[#e0dcdc]")}>
      <ChatHeader conversation={conversation} />
      <MessageList
        messages={messages}
        conversation={conversation}
      />
      <NewMessageInput sendMessage={sendMessage} />
    </div>
  );
}
