import { SplineViewer } from "@/components/ui/spline-viewer";

const features = [
  {
    title: "Timeless Memories",
    description: "Capture your moments and secure them for the future.",
    icon: "🌟",
  },
  {
    title: "Emotional Design",
    description: "Experience a visual journey where every memory orb reflects your emotions.",
    icon: "💫",
  },
  {
    title: "True Ownership",
    description: "Each orb is an NFT, granting you complete control and authenticity.",
    icon: "🔐",
  },
  {
    title: "Community & Sharing",
    description: "Collaborate and share memories with loved ones or keep them private.",
    icon: "🤝",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:px-4 bg-background relative overflow-visible">
      <div className="max-w-full mx-5 md:mx-10 md:h-[60vh]">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:mb-12">
          Why Choose Orbiverse?
        </h2>
        <div className="relative flex flex-col justify-center items-center">
          <div className="w-full h-[300px] md:h-[500px] block md:absolute z-10 pointer-events-none">
            <SplineViewer
              url="https://prod.spline.design/bsKVBJe8ZeafTv8B/scene.splinecode"
              className="w-full h-full pointer-events-auto"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 md:gap-x-72 md:gap-y-10 relative z-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="hover:translate-y-[-5px] brightness-125 p-6 rounded-lg bg-white/5 backdrop-blur-md border max-w-80 border-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-xl md:text-2xl md:w-12 md:h-12 mb-4 rounded-full bg-background/40 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className=" text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 