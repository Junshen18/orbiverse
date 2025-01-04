'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletModalButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const { publicKey } = useWallet();

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
        <div href="" className="font-chillax font-semibold text-xl">OrbiVerse</div>
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
          <div className="font-chillax font-medium px-4 py-0 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm">
            <WalletMultiButton style={{backgroundColor: 'transparent', borderRadius: '0', border: '0', margin: '0', padding: '0', fontSize: '0.875rem', fontFamily: 'var(--font-chillax)', height: '2.5rem'}}>
            {publicKey ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}` : 'Connect Wallet'}
            </WalletMultiButton>
          </div>
        </nav>
        <div className="md:hidden font-chillax font-medium px-4 py-0 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm">
            <WalletMultiButton style={{backgroundColor: 'transparent', borderRadius: '0', border: '0', margin: '0', padding: '0', fontSize: '0.875rem', fontFamily: 'var(--font-chillax)', height: '2.5rem'}}>
            {publicKey ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}` : 'Connect Wallet'}
            </WalletMultiButton>
          </div>
      </div>
    </header>
  );
} 



// className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm"