type Step = {
  number: number;
  title: string;
};

type StepIndicatorProps = {
  steps: Step[];
  currentStep: number;
};

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex justify-center items-center gap-4">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step.number <= currentStep
                ? 'bg-white/20 text-white'
                : 'bg-white/5 text-white/50'
            }`}
          >
            {step.number}
          </div>
          <span className="ml-2 text-sm">{step.title}</span>
          {index < steps.length - 1 && (
            <div
              className={`w-20 h-[1px] mx-4 ${
                step.number < currentStep ? 'bg-white/20' : 'bg-white/5'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
} 