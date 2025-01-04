import { emotions, themes } from "@/lib/constants";

type Theme = keyof typeof themes;
type Emotion = keyof typeof emotions;

type PreviewProps = {
  orbData: {
    content: {
      text: string;
      images: string[];
      files: string[];
    };
    customization: {
      emotion: Emotion;
      theme: Theme;
    };
    unlockCriteria: {
      type: string;
      date: string;
      location: { lat: number; lng: number };
    };
  };
};

export function Preview({ orbData }: PreviewProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
      <h3 className="text-lg font-medium mb-4">Preview</h3>
      <div className="aspect-square max-w-[200px] mx-auto relative">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${
              orbData.customization.theme ? themes[orbData.customization.theme] : '#4ECDC4'
            }, transparent)`,
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
          }}
        />
        {orbData.customization.emotion && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
            {emotions[orbData.customization.emotion]?.icon}
          </div>
        )}
      </div>
    </div>
  );
} 