"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
interface ReactQueryProviderProvider {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const ReactQueryProvider = ({ children }: ReactQueryProviderProvider) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
