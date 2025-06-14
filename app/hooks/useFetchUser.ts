import { useCallback, useLayoutEffect, useState } from "react";
import { apiRoutes } from "../api-routes";

export function useFetchUser(userId?: string) {
  const [status, setStatus] = useState<"ok" | "loading" | "error">("loading");
  const [user, setUser] = useState<any>(null);

  const loadUser = useCallback(
    async (userId: string) => {
      setUser(null);
      setStatus("loading");
      try {
        const user = await apiRoutes.getUser(userId);
        setUser(user);
        setStatus("ok");
      } catch {
        setStatus("error");
      }
    },
    [setUser, setStatus]
  );

  useLayoutEffect(() => {
    if (userId) {
      loadUser(userId);
    } else {
      setUser(null);
      setStatus("error");
    }
  }, [userId, loadUser]);

  const refreshUser = useCallback(() => {
    if (userId)
      loadUser(userId);
  }, [loadUser, userId]);

  return {
    user,
    status,
    isLoading: status == "loading",
    isError: status == "error",
    refreshUser,
  };
}
