import { emotions, themes } from "./constants";

export type OrbData = {
  content: {
    title: string;
    text: string;
    images: string[];
    files: string[];
  };
  customization: {
    emotion: keyof typeof emotions;
    theme: keyof typeof themes;
  };
  unlockCriteria: {
    type: string;
    date: string;
    location: { lat: number; lng: number };
  };
}; 