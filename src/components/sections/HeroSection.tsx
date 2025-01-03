"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function HeroSection() {
  const { publicKey } = useWallet();

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center gap-4">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/20 text-3xl md:text-4xl lg:text-3xl mb-10">
          OrbiVerse
        </p>
        <p className="text-white/80 font-bold text-base md:text-lg lg:text-7xl w-[50vw]">
          Your Life, Your Orbs, Your Universe.
        </p>
        <p className="w-[50vw] text-white font-normal text-base md:text-lg lg:text-xl">
          Orbiverse is a decentralized time capsule dApp that allows you to
          store, secure, and relive your cherished memories as vibrant orbs
          powered by blockchain technology.
        </p>
        {!publicKey && (
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
              Connect Wallet
            </WalletMultiButton>
          </div>
        )}
        {publicKey && <div onClick={() => {
          console.log("clicked");
        }} className="pointer-events-auto cursor-pointer font-chillax font-medium px-4 py-2 z-[100] bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm">
          Create an Memory Orb
        </div>}
      </div>
    </BackgroundGradientAnimation>
  );
} 