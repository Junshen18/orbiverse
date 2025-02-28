"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useNavigation } from "@/context/NavigationContext";
import { useRouter } from "next/navigation";
import useSound from 'use-sound';
import { SoundButton } from "@/components/ui/SoundButton";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { publicKey } = useWallet();
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound('/flowerday.mp3', {
    volume: 0.5,
    loop: true,
  });

  const handleSoundToggle = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  // Stop sound when component unmounts
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const handleStart = () => {
    router.push('/authenticated-pages/dashboard');
  };

  return (
    <BackgroundGradientAnimation className="border-b border-background">
      <SoundButton onToggle={handleSoundToggle} isPlaying={isPlaying} />
      
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center gap-4">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/20 text-4xl lg:text-3xl md:mb-10">
          OrbiVerse
        </p>
        <p className="text-white/80 font-bold text-base md:text-lg lg:text-7xl w-[50vw]">
          Your Life, Your Orbs, Your Universe.
        </p>
        <p className="hidden md:block w-[50vw] text-white font-normal text-base md:text-lg lg:text-xl">
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
        {publicKey && (
          <div 
            onClick={handleStart}
            className="pointer-events-auto cursor-pointer font-chillax font-medium px-4 py-2 z-[100] bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm"
          >
            Create a Memory Orb
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-background"></div>
      </div>
    </BackgroundGradientAnimation>
  );
} 