import { useFetchUser } from "./useFetchUser";
import { useAuthState } from "../providers/auth-state";

export function useCurrentUser() {
  const { userId } = useAuthState();
  return useFetchUser(userId);
}
