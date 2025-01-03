'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the features section
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        const featuresSectionTop = featuresSection.offsetTop;
        // Show header when scrolled past features section
        setIsVisible(window.scrollY > featuresSectionTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#6c00a2]/20 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-chillax font-semibold text-xl">OrbiVerse</div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm hover:text-white/80">
            Features
          </a>
          <a href="#how-it-works" className="text-sm hover:text-white/80">
            How It Works
          </a>
          <a href="#explore" className="text-sm hover:text-white/80">
            Explore
          </a>
          <a href="#blockchain" className="text-sm hover:text-white/80">
            Why Solana?
          </a>
          <a href="#testimonials" className="py-1 text-sm hover:text-white/80">
            Testimonials
          </a>
          {/* <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm">
            Connect Wallet
          </button> */}
          <div className="flex items-center gap-2">
            <WalletMultiButton style={{
              padding: '0.25rem 1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease-in-out',
              fontFamily: 'var(--font-chillax)',
            }} className="hover:bg-white/20" />
            {/* <WalletMultiButton
                className="connect-wallet-button"
            /> */}
          </div>
        </nav>
      </div>
    </header>
  );
} 



// className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm"