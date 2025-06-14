import { createContext, useContext } from "react";

export interface IMessageControllerContext {
  removeMessage: (messageId: string) => void;
}

export const MessageControllerContext =
  createContext<IMessageControllerContext | null>(null);

export function useMessageCtrl() {
  return useContext(MessageControllerContext)!;
}