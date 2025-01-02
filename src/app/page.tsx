"use client";

import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SplineViewer } from "@/components/ui/spline-viewer";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            OrbiVerse
          </p>
          <p className="text-white/60 font-normal text-base md:text-lg lg:text-xl mt-4">
            Your Life, Your Orbs, Your Universe.
          </p>
          {/* CTA Button - remove pointer-events-none from parent to make this clickable */}
          <button className="pointer-events-auto mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-base font-normal flex items-center justify-center">
            Get Started
          </button>
        </div>
      </BackgroundGradientAnimation>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-background relative overflow-visible">
        <div className="max-w-full mx-10 h-[50vh]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Orbiverse?
          </h2>
          <div className="relative flex flex-row justify-center">
            {/* Add Spline viewer as a background */}
            <div className="w-full h-[500px] z-[1] absolute">
              <SplineViewer
                url="https://prod.spline.design/bsKVBJe8ZeafTv8B/scene.splinecode"
                className="w-full h-full"
              />
            </div>
            {/* Features grid with backdrop blur for better readability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-96 gap-y-10 relative z-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-md border max-w-80 border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of users preserving their memories in the Orbiverse.
          </p>
          <button className="px-8 py-4 bg-primary rounded-full text-lg font-semibold hover:bg-primary/80 transition-colors">
            Create Your First Orb
          </button>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Timeless Memories",
    description: "Capture your moments and secure them for the future.",
    icon: "🌟",
  },
  {
    title: "Emotional Design",
    description:
      "Experience a visual journey where every memory orb reflects your emotions.",
    icon: "💫",
  },
  {
    title: "True Ownership",
    description:
      "Each orb is an NFT, granting you complete control and authenticity.",
    icon: "🔐",
  },
  {
    title: "Community & Sharing",
    description:
      "Collaborate and share memories with loved ones or keep them private.",
    icon: "🤝",
  },
];

const steps = [
  {
    title: "Create Your Orb",
    description:
      "Add text, images, or files, and customize the orb's emotion and theme.",
  },
  {
    title: "Set the Unlock Criteria",
    description: "Choose a future date, a location, or a specific event.",
  },
  {
    title: "Store and Share",
    description:
      "Securely save your orb on the blockchain and optionally share it with others.",
  },
];
