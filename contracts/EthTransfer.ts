export const EthTransferABI = [
  {
    type: "function",
    name: "sendEth",
    inputs: [{ name: "_to", type: "address", internalType: "address payable" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false },
      { name: "timestamp", type: "uint256", indexed: false },
    ],
    anonymous: false,
  },
] as const;
