import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config";

export default function EthModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}></QueryClientProvider>
        {children}
      </WagmiProvider>
    </div>
  );
}
