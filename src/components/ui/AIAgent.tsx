"use client";

import { useState } from "react";
import { SplineViewer } from "./spline-viewer";

export function AIAgent() {
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Toggle button */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute top-2 right-2 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full"
      >
        {isMinimized ? "↗" : "↙"}
      </button>

      {/* Spline container */}
      <div
        className={`
        transition-all duration-300 ease-in-out
        bg-darkpurple/80 backdrop-blur-md rounded-2xl border border-white/10 relative
        ${isMinimized ? "w-16 h-16" : "w-80 h-[40vh]"}
      `}
      >
        {!isMinimized && (
          <p className="text-white font-bold text-center text-base z-10 absolute top-4 left-1/2 -translate-x-1/2">
            Memora
          </p>
        )}

        <div
          className={`w-full h-full overflow-hidden ${
            isMinimized ? "opacity-50" : "opacity-100"
          }`}
        >
          <SplineViewer
            url="https://prod.spline.design/bsKVBJe8ZeafTv8B/scene.splinecode"
            className="w-full h-full pointer-events-none"
          />
        </div>

        {/* Chat interface (visible when not minimized) */}
        {!isMinimized && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-darkpurple/90 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask Memora anything about creating orbs..."
                className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/10 focus:outline-none focus:border-white/20"
              />
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg">
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
