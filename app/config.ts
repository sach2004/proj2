import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [sepolia],
  connectors: [injected(), metaMask()],
  transports: {
    [sepolia.id]: http("https://rpc.sepolia.org"),
  },
});

export const ETH_CONTRACT_ADDRESS =
  "0xd9145CCE52D386f254917e481eB44e9943F39138" as const;
export const SOL_PROGRAM_ID =
  "E22sB56h9LWTRJmZRVEHHxGNwToGF4Laf9TrPe4etfpo" as const;
