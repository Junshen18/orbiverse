import { OrbData } from "@/lib/types";
import { themes, emotions } from "@/lib/constants";

type ThemeId = keyof typeof themes;
type EmotionId = keyof typeof emotions;

const emotionOptions: { id: EmotionId; label: string; icon: string }[] = [
  { id: 'happy', label: 'Happy', icon: '😊' },
  { id: 'sad', label: 'Sad', icon: '😢' },
  { id: 'excited', label: 'Excited', icon: '🎉' },
  { id: 'nostalgic', label: 'Nostalgic', icon: '🌟' },
  { id: 'love', label: 'Love', icon: '❤️' },
  { id: 'angry', label: 'Angry', icon: '😠' },
  { id: 'scared', label: 'Scared', icon: '😱' },
  { id: 'surprised', label: 'Surprised', icon: '😲' },
];

const themeOptions: { id: ThemeId; color: string }[] = [
  { id: 'warm', color: '#FF6B6B' },
  { id: 'cool', color: '#4ECDC4' },
  { id: 'nature', color: '#95E1D3' },
  { id: 'sunset', color: '#FFB174' },
  { id: 'ocean', color: '#0066cc' },
];

type CustomizeStepProps = {
  data: OrbData['customization'];
  onChange: (customization: OrbData['customization']) => void;
};

export function CustomizeStep({ data, onChange }: CustomizeStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <label className="block text-lg font-medium mb-4">Choose an Emotion</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {emotionOptions.map((emotion) => (
            <button
              key={emotion.id}
              className={`p-4 rounded-lg border ${
                data.emotion === emotion.id
                  ? 'border-white bg-white/20'
                  : 'border-white/20 hover:bg-white/10'
              }`}
              onClick={() => onChange({ ...data, emotion: emotion.id })}
            >
              <div className="text-2xl mb-2">{emotion.icon}</div>
              <div className="text-sm">{emotion.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-lg font-medium mb-4">Select a Theme</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {themeOptions.map((theme) => (
            <button
              key={theme.id}
              className={`p-4 rounded-lg border ${
                data.theme === theme.id
                  ? 'border-white'
                  : 'border-white/20'
              }`}
              onClick={() => onChange({ ...data, theme: theme.id })}
              style={{ backgroundColor: theme.color + '33' }}
            >
              <div
                className="w-full h-12 rounded-md mb-2"
                style={{ backgroundColor: theme.color }}
              />
              <div className="text-sm capitalize">{theme.id}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 