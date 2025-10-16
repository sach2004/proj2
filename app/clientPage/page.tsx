"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";

export default function Page() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [mounted, setMounted] = useState(false);
  const { connect, connectors } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const balance = useBalance({ address });
  const [selectedValue, setSelectedValue] = useState("ETH");
  const [dynamicAddress, setDynamicAddress] = useState("");

 

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedValue === "ETH") {
      setDynamicAddress(String(address));
    } else if (selectedValue === "Solana") {
      setDynamicAddress(String(wallet.publicKey));
    }
  }, [selectedValue, address, wallet.publicKey]);

  if (!mounted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      {!address ? (
        <div>
          <h2 className="text-2xl font-bold mb-6">Connect Ethereum Wallet</h2>
          <div className="space-y-3">
            {connectors.map((connector) => (
              <button
                key={connector.uid}
                onClick={() => connect({ connector })}
                className="w-full px-6 py-4 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-medium">{connector.name}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Ethereum Wallet</h2>
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Address
              </p>
              <p className="font-mono text-sm break-all">{address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Balance
              </p>
              <p className="text-lg font-semibold">
                {balance.data?.formatted || "0"} {balance.data?.symbol || "ETH"}
              </p>
            </div>
          </div>
          <button
            onClick={() => disconnect()}
            className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Disconnect
          </button>
        </div>
      )}

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Send Tokens</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Choose Token</label>
            <select
              name="Token"
              onChange={(e) => {
                setSelectedValue(e.target.value);
              }}
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent"
            >
              <option value="ETH">ETH</option>
              <option value="Solana">Solana</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Your Address</label>
            <input
              type="text"
              value={dynamicAddress}
              readOnly
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">To Address</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent"
              placeholder="0x..."
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Amount</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent"
              placeholder="0.0"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
