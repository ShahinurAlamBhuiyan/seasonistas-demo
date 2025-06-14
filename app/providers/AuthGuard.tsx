"use client";

import { PropsWithChildren, useLayoutEffect } from "react";
import { getAuthState, useAuthState } from "./auth-state";
import { usePathname, useRouter } from "next/navigation";

const isProtected = (route: string) => !route.includes("/login") && !route.includes("/register") && !route.includes("/reset-password") && !route.includes("/forgot-password");

export default function AuthGuard({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const reactiveAuthState = useAuthState();

  useLayoutEffect(() => {
    const { isLoggedIn } = getAuthState();
    const locale = pathname.split('/')[1]; // Extract the locale from the path

    // if (!isLoggedIn && isProtected(pathname)) {
    //   router.replace(`/${locale}/login`);
    // } else if ((isLoggedIn && pathname.includes("/login")) || pathname === `/${locale}`) {
    //   router.replace(`/${locale}/home`);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reactiveAuthState.isLoggedIn]);

  return <>{children}</>;
}