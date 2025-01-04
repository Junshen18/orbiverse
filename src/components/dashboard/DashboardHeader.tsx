import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function DashboardHeader() {
  const { publicKey } = useWallet();
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-xl font-bold mb-2">Orbiverse</h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold items-center">Orb Vault</p>
        <p className="text-sm text-gray-400">Manage and explore your memory orbs</p>

      </div>
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full">
          Create New Orb
        </button>
        <div className="font-chillax font-medium px-4 py-0 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm">
          <WalletMultiButton
            style={{
              backgroundColor: "transparent",
              borderRadius: "0",
              border: "0",
              margin: "0",
              padding: "0",
              fontSize: "0.875rem",
              fontFamily: "var(--font-chillax)",
              height: "2.5rem",
            }}
          >
            {publicKey
              ? `${publicKey.toBase58().slice(0, 4)}...${publicKey
                  .toBase58()
                  .slice(-4)}`
              : "Connect Wallet"}
          </WalletMultiButton>
        </div>
      </div>
    </div>
  );
}
