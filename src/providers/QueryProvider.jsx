import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function QueryProvider({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-50 py-2">{children}</div>
    </QueryClientProvider>
  );
}

export default QueryProvider;
