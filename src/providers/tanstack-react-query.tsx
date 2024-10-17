import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export const url = "https://api.github.com/repos/TanStack/query";
export const jsonUsersUrl = "https://jsonplaceholder.typicode.com/users";

export const urlStack = {
  tanStack: "https://api.github.com/repos/TanStack/query",
  jsonUsers: "https://jsonplaceholder.typicode.com/users",
};

export const useQueryHook = <T,>({
  key,
  url,
}: {
  key: string;
  url: string;
}): { isLoading: boolean; isError: boolean; resData: T | []; dataUpdatedAt: number } => {
  const [resData, setResData] = useState<T | []>([]);
  const {
    isLoading,
    isError,
    dataUpdatedAt,
    data: response,
  } = useQuery({
    queryKey: [key],
    queryFn: () => axios.get(url),
  });

  useEffect(() => {
    setResData(response?.data as T);
  }, [response]);

  return { isLoading, isError, resData, dataUpdatedAt };
};

export default QueryProvider;
