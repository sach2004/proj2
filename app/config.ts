import { createConfig, http } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [injected(), metaMask()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
