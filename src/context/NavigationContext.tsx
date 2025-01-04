"use client";

import { createContext, useContext, useState } from "react";

type NavigationContextType = {
  showLoading: () => void;
  hideLoading: () => void;
  isLoading: boolean;
};

const NavigationContext = createContext<NavigationContextType>({
  showLoading: () => {},
  hideLoading: () => {},
  isLoading: false,
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true); // Start with loading on initial page load

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <NavigationContext.Provider value={{ showLoading, hideLoading, isLoading }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext); 