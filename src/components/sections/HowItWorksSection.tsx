"use client";

import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Create Your Orb",
    content:
      "Add text, images, or files to your memory orb. Customize its emotion and theme to perfectly capture the moment's essence. Each orb is uniquely crafted to hold your precious memories.",
    img: "/gradient-1.png",
  },
  {
    number: 2,
    title: "Set the Unlock Criteria",
    content:
      "Choose when and how your memory can be accessed. Set a future date for time-locked memories, specify a location for geofenced experiences, or create special conditions for unlocking your orbs.",
    img: "/gradient-2.png",
  },
  {
    number: 3,
    title: "Store and Share",
    content:
      "Securely save your orb on the Solana blockchain. Choose to keep it private in your personal vault or share it with specific people. Your memories are protected and preserved forever.",
    img: "/gradient-3.png",
  },
  {
    number: 4,
    title: "Unlock and Relive",
    content:
      "When the time comes or conditions are met, unlock your orb to relive your cherished memories. Experience them in a whole new way, enhanced by the emotional context you captured.",
    img: "/gradient-4.png",
  },
];

export function HowItWorksSection() {
  const [expandedStep, setExpandedStep] = useState(1);

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 bg-darkpurple border-b-2 border-white/20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="hidden md:flex md:flex-nowrap overflow-x-visible gap-6 pb-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex-shrink-0 rounded-lg border border-white/10 relative overflow-hidden text-white transition-all duration-300 ease-in-out hover:border-white/20 h-[20vh] md:h-[80vh] ${
                expandedStep === step.number ? "w-[40%]" : "w-[20%]"
              }`}
              onMouseEnter={() => setExpandedStep(step.number)}
            >
              {/* Gradient Background */}
              {/* <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`} /> */}
              <div className="absolute inset-0 bg-transparent backdrop-blur-lg">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>

              {/* Content with blur overlay */}
              <div className={`relative z-10 h-full backdrop-blur-md`}>
                <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                  <div className="flex justify-end mb-4">
                    <div className={`rounded-full flex items-center justify-center font-bold mr-4 backdrop-blur-md text-4xl md:text-8xl`}>
                      {step.number}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <h4 className="hidden md:block font-semibold" style={{fontWeight: expandedStep === step.number ? "bold" : "semibold", fontSize: expandedStep === step.number ? "2rem" : "1.5rem"}}>{step.title}</h4>
                      <h4 className="block md:hidden font-bold text-base" >{step.title}</h4>
                    </div>
                    <div
                      className="hidden md:block overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      style={{
                        maxHeight:
                          expandedStep === step.number ? "200px" : "0px",
                      }}
                    >
                      <p className="font-chillax">{step.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* mobile */}
        <div className="grid grid-cols-2 overflow-x-visible gap-6 pb-4 md:hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex-shrink-0 rounded-lg border border-white/10 relative overflow-hidden text-white transition-all duration-300 ease-in-out hover:border-white/20 h-[20vh]`}
              onMouseEnter={() => setExpandedStep(step.number)}
            >
              {/* Gradient Background */}
              {/* <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`} /> */}
              <div className="absolute inset-0 bg-transparent backdrop-blur-lg">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>

              {/* Content with blur overlay */}
              <div className={`relative z-10 h-full backdrop-blur-md`}>
                <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                  <div className="flex justify-end mb-4">
                    <div className={`rounded-full flex items-center justify-center font-bold mr-4 backdrop-blur-md text-4xl md:text-8xl`}>
                      {step.number}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <h4 className="hidden md:block font-semibold" style={{fontWeight: expandedStep === step.number ? "bold" : "semibold", fontSize: expandedStep === step.number ? "2rem" : "1.5rem"}}>{step.title}</h4>
                      <h4 className="block md:hidden font-bold text-base" >{step.title}</h4>
                    </div>
                    <div
                      className="hidden md:block overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      style={{
                        maxHeight:
                          expandedStep === step.number ? "200px" : "0px",
                      }}
                    >
                      <p className="font-chillax">{step.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
