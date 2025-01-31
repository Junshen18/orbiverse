"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ExploreSection } from "@/components/sections/ExploreSection";
import { BlockchainSection } from "@/components/sections/BlockchainSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useNavigation } from "@/context/NavigationContext";
import { useEffect } from "react";

export default function Home() {
  const { isLoading, hideLoading } = useNavigation();

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      hideLoading();
    }, 3000);

    return () => clearTimeout(timer);
  }, [hideLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <main className="min-h-screen">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <ExploreSection />
            <BlockchainSection />
            <TestimonialsSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
