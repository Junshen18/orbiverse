'use client';

import { useEffect, useRef } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
}

export function SplineViewer({ url, className = '' }: SplineViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSpline = async () => {
      // Create the spline-viewer element
      const viewer = document.createElement('spline-viewer');
      viewer.setAttribute('url', url);
      
      // Set style to fill container
      viewer.style.width = '100%';
      viewer.style.height = '100%';
      
      // Clear and append to container
      if (viewerRef.current) {
        viewerRef.current.innerHTML = '';
        viewerRef.current.appendChild(viewer);
      }
    };

    loadSpline();

    // Add script if it doesn't exist
    if (!document.querySelector('script[src*="spline-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
      document.head.appendChild(script);
    }
  }, [url]);

  return <div ref={viewerRef} className={className} />;
} 