import { OrbData } from "./types";

// Add Orb type definition
export type Orb = {
  id: string;
  name: string;
  emotion: string;
  status: string;
  unlockCriteria: string;
  preview: string;
  description: string;
};

export type StoredOrb = OrbData & {
  id: string;
  createdAt: string;
};

const dummyOrbs: Orb[] = [
  {
    id: "1",
    name: "Birthday 2024",
    emotion: "happy",
    status: "locked",
    unlockCriteria: "data",
    preview: "/gradient-1.png",
    description: "This is a description of the memory",
  },
  {
    id: "2",
    name: "2024 Recap",
    emotion: "happy",
    status: "locked",
    unlockCriteria: "manual",
    preview: "/sea.jpg",
    description: "This is a description of the memory",
  },
  {
    id: "3",
    name: "2023 Recap",
    emotion: "love",
    status: "locked",
    unlockCriteria: "location",
    preview: "/sunset.png",
    description: "This is a description of the memory",
  },
  {
    id: "4",
    name: "2022 Recap",
    emotion: "love",
    status: "locked",
    unlockCriteria: "location",
    preview: "/field.jpg",
    description: "This is a description of the memory",
  },
  // ... other dummy orbs
];

export const saveOrb = (orb: OrbData) => {
  const storedOrbs = getOrbs();
  const newOrb: StoredOrb = {
    ...orb,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  
  localStorage.setItem('orbs', JSON.stringify([...storedOrbs, newOrb]));
  return newOrb;
};

export const getOrbs = (): StoredOrb[] => {
  if (typeof window === 'undefined') return [];
  const orbs = localStorage.getItem('orbs');
  return orbs ? JSON.parse(orbs) : [];
};

export const hideOrb = (orbId: string) => {
  const hiddenOrbs = getHiddenOrbs();
  localStorage.setItem('hiddenOrbs', JSON.stringify([...hiddenOrbs, orbId]));
};

export const getHiddenOrbs = (): string[] => {
  if (typeof window === 'undefined') return [];
  const hiddenOrbs = localStorage.getItem('hiddenOrbs');
  return hiddenOrbs ? JSON.parse(hiddenOrbs) : [];
};

export const isOrbHidden = (orbId: string): boolean => {
  const hiddenOrbs = getHiddenOrbs();
  return hiddenOrbs.includes(orbId);
};

export const unhideOrb = (orbId: string) => {
  const hiddenOrbs = getHiddenOrbs();
  const updatedHiddenOrbs = hiddenOrbs.filter(id => id !== orbId);
  localStorage.setItem('hiddenOrbs', JSON.stringify(updatedHiddenOrbs));
};

export const getHiddenOrbsData = (): Orb[] => {
  const hiddenOrbIds = getHiddenOrbs();
  const allOrbs = [...dummyOrbs, ...getOrbs().map(orb => ({
    id: orb.id,
    name: orb.content.title,
    emotion: orb.customization.emotion,
    status: "locked",
    unlockCriteria: orb.unlockCriteria,
    preview: orb.content.images[0] || "/gradient-1.png",
    description: orb.content.text,
  }))];
  
  return allOrbs.filter(orb => hiddenOrbIds.includes(orb.id)) as Orb[];
}; 