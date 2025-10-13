"use client";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  const { connect, connectors } = useConnect();

  if (!mounted) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      {connectors.map((connector) => {
        return (
          <button key={connector.uid} onClick={() => connect({ connector })}>
            {connector.name}
          </button>
        );
      })}
    </div>
  );
}
