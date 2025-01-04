import Image from "next/image";

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

export function BlockchainSection() {
  return (
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
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
  );
} 