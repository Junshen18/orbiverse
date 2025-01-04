import Image from "next/image";

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

export function ExploreSection() {
  return (
    <section id="explore" className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto relative z-10">
        <Image src="/explore.png" alt="Explore the Orbiverse" width={60} height={60} className="opacity-80 absolute top-[-3%] md:top-[-3%] left-[50%] translate-x-[-50%] md:translate-x-[0%] md:left-[31%] z-[-1] object-cover" />
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore the Orbiverse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exploreSections.map((section, index) => (
            <div
              key={index}
              className="hover:translate-y-[-5px] p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 