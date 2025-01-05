import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/navigation";

export function DashboardHeader() {
const router = useRouter();
  const { publicKey } = useWallet();
  return (
    <div className="flex justify-between items-center mb-8">
      
      <div onClick={()=>{
        router.push("/authenticated-pages/dashboard");
      }} className="cursor-pointer flex flex-col items-start md:w-80">
        <p className="md:text-4xl font-bold text-3xl">Orb Vault</p>
        <p className="hidden md:block text-sm text-gray-400">Manage and explore your memory orbs</p>
      </div>

      <div className="hidden md:block">
        <h1 className="text-4xl font-bold mb-2">Orbiverse</h1>
      </div>
      <div className="flex items-center gap-2 md:w-80 justify-end">

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
