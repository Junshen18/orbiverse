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
        <div className="flex flex-wrap flex-row gap-4 md:gap-8 justify-center">
          {blockchainFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center w-[35vw] md:w-[20vw] flex flex-col items-center justify-center relative"
            >
              <div className="relative mb-2 md:mb-4 h-20 md:h-auto">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className=" z-10 w-16 h-16 md:w-20 md:h-20"
                />
                <div className="z-[-1] absolute translate-x-[-50%] translate-y-[-55%] top-[50%] left-[50%] w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white/10 rounded-full backdrop-blur-md"></div>
                <div className="z-[-2] absolute translate-x-[-50%] translate-y-[-55%] top-[50%] left-[50%] w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-sky-500/50 rounded-full"></div>
              </div>
              <div className="text-base md:text-xl font-semibold h-12 text-center flex items-center justify-center"><h3>{feature.title}</h3></div>
              <p className="text-gray-400 text-sm md:text-base h-20 md:h-auto">{feature.description}</p>
            </div>
          ))}
        </div>
        <Image
          src="/solana-icon.png"
          alt="Solana Logo"
          width={60}
          height={60}
          className="opacity-80 z-[-1] -rotate-12 absolute top-[-6%] md:top-[-3%] right-[50%] translate-x-[50%] md:translate-x-[0%] md:right-[25%] bg-white rounded-full"
        />
      </div>
    </section>
  );
} 