"use client";

import type { PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>
    </QueryClientProvider>
  );
};
