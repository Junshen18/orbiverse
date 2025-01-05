"use client";

import { useState } from "react";
import { useNavigation } from "@/context/NavigationContext";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { OrbData } from "@/lib/types";
import { StepIndicator } from "@/components/createorb/StepIndicator";
import { ContentStep } from "@/components/createorb/ContentStep";
import { CustomizeStep } from "@/components/createorb/CustomizeStep";
import { UnlockStep } from "@/components/createorb/UnlockStep";
import { Preview } from "@/components/createorb/Preview";

export default function CreateOrb() {
  const [currentStep, setCurrentStep] = useState(1);
  const [orbData, setOrbData] = useState<OrbData>({
    content: {
      title: "",
      text: "",
      images: [] as string[],
      files: [] as string[],
    },
    customization: {
      emotion: "happy",
      theme: "warm",
    },
    unlockCriteria: {
      type: "date",
      date: "",
      location: { lat: 0, lng: 0 },
    },
  });

  const steps = [
    { number: 1, title: "Memory Content" },
    { number: 2, title: "Emotion & Theme" },
    { number: 3, title: "Unlock Criteria" },
  ];

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCreate = () => {
    // Handle orb creation
    console.log("Creating orb:", orbData);
  };

  return (
    <main className="min-h-screen bg-background p-8">
      <DashboardHeader />
      
      <div className="max-w-4xl mx-auto">
        <StepIndicator steps={steps} currentStep={currentStep} />

        <div className="mt-8 bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          {currentStep === 1 && (
            <ContentStep
              data={orbData.content}
              onChange={(content: OrbData["content"]) => setOrbData({ ...orbData, content })}
            />
          )}
          {currentStep === 2 && (
            <CustomizeStep
              data={orbData.customization}
              onChange={(customization: OrbData["customization"]) => setOrbData({ ...orbData, customization })}
            />
          )}
          {currentStep === 3 && (
            <UnlockStep
              data={orbData.unlockCriteria}
              onChange={(unlockCriteria: OrbData["unlockCriteria"]) => setOrbData({ ...orbData, unlockCriteria })}
            />
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              className={`px-4 py-2 rounded-full border border-white/20 ${
                currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
              }`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button
              onClick={currentStep === 3 ? handleCreate : handleNext}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full"
            >
              {currentStep === 3 ? 'Create Orb' : 'Next'}
            </button>
          </div>
        </div>

        <div className="mt-8">
          <Preview orbData={orbData} />
        </div>
      </div>
    </main>
  );
}
