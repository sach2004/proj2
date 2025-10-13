import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Multi-Chain Token Transfer</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Send tokens on Ethereum and Solana networks
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Ethereum Network</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Connect your Ethereum wallet to send ERC20 tokens
          </p>
          <Link
            href="/clientPage"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Connect ETH Wallet
          </Link>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Solana Network</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Connect your Solana wallet to send SPL tokens
          </p>
          <Link
            href="/clientPage"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Connect Sol Wallet
          </Link>
        </div>
      </div>
    </div>
  );
}
