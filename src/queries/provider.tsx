import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ComponentType } from "react";

export const queryClient = new QueryClient();

export const wrapQuery = (Comp: ComponentType) => () =>
  (
    <QueryClientProvider client={queryClient}>
      <Comp />
    </QueryClientProvider>
  );
