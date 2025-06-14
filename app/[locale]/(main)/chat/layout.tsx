"use client";

import { PropsWithChildren } from "react";

import { AppLayout } from "~/components/AppLayout/AppLayout";

import { ContactsListWindow } from "./ContactsListWindow";

export default function ChatPageLayout({ children }: PropsWithChildren) {
  return (
    <AppLayout>
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
        <ContactsListWindow />
        {children}
      </div>
    </AppLayout>
  );
}
