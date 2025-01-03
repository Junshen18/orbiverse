"use client";

import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SplineViewer } from "@/components/ui/spline-viewer";
import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import {
  WalletConnectButton,
  WalletModalButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Home() {
  const { publicKey } = useWallet();
  // const { isConnected } = 

  return (
    <>
      <main className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center gap-4">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/20 text-3xl md:text-4xl lg:text-3xl mb-10">
              OrbiVerse
            </p>
            <p className=" text-white/80 font-bold text-base md:text-lg lg:text-7xl w-[50vw]">
              Your Life, Your Orbs, Your Universe.
            </p>
            <p className="w-[50vw] text-white font-normal text-base md:text-lg lg:text-xl">
              Orbiverse is a decentralized time capsule dApp that allows you to
              store, secure, and relive your cherished memories as vibrant orbs
              powered by blockchain technology.
            </p>
            {/* <button className="pointer-events-auto mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-base font-normal flex items-center justify-center">
              Get Started
            </button> */}
            {publicKey ? (
              <div className="cursor-pointer font-chillax font-medium px-4 py-2 z-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm">
                Create an Memory Orb
              </div>
            ) : (
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
            <div className="h-12"></div>
          </div>
        </BackgroundGradientAnimation>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 px-4 bg-background/40 relative overflow-visible"
        >
          <div className="max-w-full mx-10 h-[60vh]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Orbiverse?
            </h2>
            <div className="relative flex flex-row justify-center">
              {/* Spline viewer with higher z-index */}
              <div className="w-full h-[500px] absolute z-10 pointer-events-none">
                <SplineViewer
                  url="https://prod.spline.design/bsKVBJe8ZeafTv8B/scene.splinecode"
                  className="w-full h-full pointer-events-auto"
                />
              </div>
              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-96 gap-y-10 relative z-0">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="hover:translate-y-[-5px] brightness-125 p-6 rounded-lg bg-white/5 backdrop-blur-md border max-w-80 border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full bg-background/40 flex items-center justify-center">
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
        <section
          id="how-it-works"
          className="py-20 px-4 bg-background border-b-2 border-white/20"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center w-[20vw] mx-auto flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section id="explore" className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Explore the Orbiverse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {exploreSections.map((section, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blockchain Section */}
        <section id="blockchain" className="py-20 px-4 bg-background/40 ">
          <div className="max-w-6xl mx-auto z-10 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 z-10">
              Why Blockchain on Solana?
            </h2>
            <div className="flex flex-wrap flex-row gap-8 justify-center">
              {blockchainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center w-[20vw] flex flex-col items-center justify-center relative"
                >
                  <div className="relative">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="mb-4 z-10"
                    />
                    <div className="z-[-1] absolute translate-x-[-50%] translate-y-[-55%] top-[50%] left-[50%] w-[120px] h-[120px] bg-white/10 rounded-full backdrop-blur-md"></div>
                    <div className="z-[-2] absolute translate-x-[-50%] translate-y-[-55%] top-[50%] left-[50%] w-[80px] h-[80px] bg-sky-500/50 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
            <Image
              src="/solana-icon.png"
              alt="Solana Logo"
              width={60}
              height={60}
              className="opacity-80 z-[-1] -rotate-12 absolute top-[-3%] right-[25%] bg-white rounded-full"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-background/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/10"
                >
                  <p className="text-lg text-gray-300 mb-6">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm text-gray-400">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
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
  {
    title: "Unlock and Relive",
    description:
      "On the future date, unlock your orb and experience the memories it holds.",
  },
];

const exploreSections = [
  {
    title: "Personal Vaults",
    description: "A private space to store your most treasured moments.",
  },
  {
    title: "Community Capsules",
    description: "Collaborate on memories with friends and family.",
  },
  {
    title: "Public Gallery",
    description: "Share your orbs with the world and explore others' stories.",
  },
];

const blockchainFeatures = [
  {
    title: "Immutability",
    description: "Your memories are forever preserved.",
    img: "/immutability.png",
  },
  {
    title: "Transparency",
    description: "Every interaction is verifiable and secure.",
    img: "/secure.png",
  },
  {
    title: "Low Costs",
    description: "Affordable transactions, making it accessible to everyone.",
    img: "/lowcosts.png",
  },
  {
    title: "Speed and Scalability",
    description: "Lightning-fast and scalable performance.",
    img: "/speed.png",
  },
  {
    title: "Eco-Friendly",
    description: "Energy-efficient proof-of-stake system.",
    img: "/eco.png",
  },
];

const testimonials = [
  {
    quote:
      "Orbiverse has turned my cherished moments into glowing memories I can revisit anytime. It's magical!",
    author: "Avid User",
  },
  {
    quote:
      "I love how Orbiverse combines emotions and technology. It's like a diary, but for the future!",
    author: "Early Adopter",
  },
];
