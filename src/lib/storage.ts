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
  try {
    const storedOrbs = getOrbs();
    const newOrb: StoredOrb = {
      ...orb,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    
    // Try to save
    try {
      localStorage.setItem('orbs', JSON.stringify([...storedOrbs, newOrb]));
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        // If storage is full, keep only the 10 most recent orbs
        const recentOrbs = storedOrbs
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 9);
        
        localStorage.setItem('orbs', JSON.stringify([...recentOrbs, newOrb]));
      } else {
        throw e;
      }
    }
    
    return newOrb;
  } catch (error) {
    console.error('Storage error:', error);
    // Fallback to session storage if localStorage fails
    const sessionOrbs = sessionStorage.getItem('orbs');
    const parsedSessionOrbs = sessionOrbs ? JSON.parse(sessionOrbs) : [];
    const newOrb: StoredOrb = {
      ...orb,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    sessionStorage.setItem('orbs', JSON.stringify([...parsedSessionOrbs, newOrb]));
    return newOrb;
  }
};

export const getOrbs = (): StoredOrb[] => {
  try {
    if (typeof window === 'undefined') return [];
    const orbs = localStorage.getItem('orbs');
    return orbs ? JSON.parse(orbs) : [];
  } catch (error) {
    // Try session storage as fallback
    const sessionOrbs = sessionStorage.getItem('orbs');
    return sessionOrbs ? JSON.parse(sessionOrbs) : [];
  }
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