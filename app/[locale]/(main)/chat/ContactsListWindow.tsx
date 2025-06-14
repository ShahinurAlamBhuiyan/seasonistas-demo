"use client";

import clsx from "clsx";
import { Badge, Avatar } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

import { useParams, useRouter } from "next/navigation";

import { apiRoutes } from "~/app/api-routes";
import { useAuthState } from "~/app/providers/auth-state";

import { singleConvParticipants } from "./utils";
import { useGetConversations, useLoadConvList } from "./covn-list";

export function ContactsListWindow() {
  // const { isLoading, data: conversations } = useQuery<any[]>({
  //   queryKey: ["getConversations"],
  //   queryFn: () => apiRoutes.getConversations(),
  //   initialData: [],
  //   placeholderData: [],
  // });

  useLoadConvList();
  const conversations = useGetConversations();

  return (
    <div
      className={clsx(
        "overflow-y-auto max-h-[500px] md:max-h-[80vh] md:w-1/4 min-w-[16rem]",
        "bg-white border-r border-gray-300",
        "p-3 pb-20"
      )}
    >
      <h1 className="text-2xl font-bold ml-2 mt-2 mb-4">Chats</h1>
      {conversations.length === 0 && "You have no chats yet"}
      {conversations.map((conv) => (
        <Conversation key={conv["_id"]} conversation={conv} />
      ))}
    </div>
  );
}

function Conversation({ conversation }: { conversation: any }) {
  const router = useRouter();
  const params = useParams();
  const activeReceiverId: string | null = (params.receiverId as any) ?? null;

  // assume conversations["kind"] === "single"

  const { userId } = useAuthState();
  const { receiver } = singleConvParticipants(conversation, userId);

  const receiverId = receiver["_id"];

  return (
    <button
      className={clsx(
        "flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md text-left w-full",
        activeReceiverId === receiverId && "bg-teal/30"
      )}
      onClick={() => {
        const locale = localStorage.getItem("locale") || "en";
        router.push(`/${locale}/chat/${receiverId}`);
      }}
    >
      <Badge
        placement="top-start"
        overlap="circular"
        color="blue-gray"
        withBorder
        className="shrink-0"
      >
        <Avatar
          // size="lg"
          className="object-center"
          src="/profile_empty_gradient.png"
          alt="avatar"
        />
      </Badge>
      <div className="flex-1 ml-3">
        <h2 className="text-lg font-semibold">{receiver.fullName}</h2>
        <p className="text-gray-600 max-w-[100px] overflow-hidden text-ellipsis">
          {/* Let's catch up soon. It's been too long! */}
          {conversation["lastMessage"]}
        </p>
      </div>
    </button>
  );
}
