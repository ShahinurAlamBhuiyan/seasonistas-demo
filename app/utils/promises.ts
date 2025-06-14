import toast from "react-hot-toast";
import { ApiReplyError } from "../api-routes";

export function sleep(ms: number = 2500) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
}

export async function delay<T>(promise: Promise<T>, ms: number = 2500): Promise<T> {
  await sleep(ms);
  return await promise;
}

export type WithUserFeedbackOptions = Parameters<typeof toast.promise>[1];

export function reportedCall<T>(
  replyPromise: Promise<T>,
  opts?: WithUserFeedbackOptions
) {
  return toast.promise(replyPromise, {
    ...(opts || {}),
    loading: "Loading...",
    success: (reply) => reply["message"],
    error: (error) => ApiReplyError.userMessage(error),
  });
}
