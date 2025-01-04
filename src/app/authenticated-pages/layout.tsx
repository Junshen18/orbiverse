"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { LoadingScreen } from "@/components/ui/loading-screen";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { connected, publicKey } = useWallet();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Add a small delay to ensure wallet state is properly initialized
    const timer = setTimeout(() => {
      if (!connected || !publicKey) {
        router.push('/');
      }
      setIsChecking(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, [connected, publicKey, router]);

  // Show loading screen while checking wallet status
  if (isChecking) {
    return <LoadingScreen />;
  }

  // If not checking and not connected, the useEffect will handle redirect
  if (!connected || !publicKey) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
} 