"use client";

import clsx from "clsx";

export default function ChatPageEmpty() {
  return (
    <div
      className={clsx(
        "flex-1 flex flex-col justify-center items-center",
        "bg-white"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/no_chat_selected.png" className="w-[30rem]" alt="" />
      <p className="text-lg text-gray-600 mb-20">
        Select a chat from the contacts list.
      </p>
    </div>
  );
}
