"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-transform duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-64 h-64">
        <DotLottieReact
          src="/Loader.json"
          autoplay
          loop
        />
      </div>
    </div>
  );
} 