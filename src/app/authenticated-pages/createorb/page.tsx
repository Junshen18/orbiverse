"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { OrbData } from "@/lib/types";
import { StepIndicator } from "@/components/createorb/StepIndicator";
import { ContentStep } from "@/components/createorb/ContentStep";
import { CustomizeStep } from "@/components/createorb/CustomizeStep";
import { UnlockStep } from "@/components/createorb/UnlockStep";
import { Preview } from "@/components/createorb/Preview";
import { saveOrb } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { PaymentModal } from "@/components/createorb/PaymentModal";
import Confetti from "@/components/ui/confetti";

export default function CreateOrb() {
  const router = useRouter();
  const { publicKey, signTransaction, connected } = useWallet();
  const [currentStep, setCurrentStep] = useState(1);
  const [orbData, setOrbData] = useState<OrbData>({
    content: {
      title: "",
      text: "",
      images: [] as string[],
      files: [] as string[],
    },
    customization: {
      emotion: "happy",
      theme: "warm",
    },
    unlockCriteria: {
      type: "date",
      date: "",
      location: { lat: 0, lng: 0 },
    },
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'error' | null>(null);
  const [paymentMessage, setPaymentMessage] = useState('');

  const steps = [
    { number: 1, title: "Memory Content" },
    { number: 2, title: "Emotion & Theme" },
    { number: 3, title: "Unlock Criteria" },
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: string[] = [];

    if (step === 1) {
      if (!orbData.content.title.trim()) {
        newErrors.push("Title is required");
      }
      if (!orbData.content.text.trim()) {
        newErrors.push("Description is required");
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCreate = async () => {
    if (!validateStep(currentStep)) return;
    
    if (!connected || !publicKey || !signTransaction) {
      setErrors(['Please connect your wallet first']);
      return;
    }

    try {
      setIsProcessing(true);
      
      // Create a test transaction (sending 0.001 SOL to yourself)
      const connection = new Connection('https://api.devnet.solana.com');
      
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: publicKey,
          lamports: LAMPORTS_PER_SOL * 0.001,
        })
      );

      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      const signedTransaction = await signTransaction(transaction);
      const txid = await connection.sendRawTransaction(signedTransaction.serialize());
      await connection.confirmTransaction(txid);
      
      // If payment successful, save the orb
      const savedOrb = saveOrb(orbData);
      
      setPaymentStatus('success');
      setPaymentMessage('Your memory orb has been successfully created and minted!');
      
    } catch (error) {
      console.error('Transaction error:', error);
      setPaymentStatus('error');
      setPaymentMessage('Transaction failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleModalClose = () => {
    if (paymentStatus === 'success') {
      router.push('/authenticated-pages/dashboard');
    } else {
      setPaymentStatus(null);
      setPaymentMessage('');
    }
  };

  return (
    <main className="min-h-screen bg-background p-8">
      <DashboardHeader />
      
      
      <div className="max-w-4xl mx-auto">
        <StepIndicator steps={steps} currentStep={currentStep} />

        {currentStep === 3 && !connected && (
          <div className="mb-4 flex justify-center">
            <WalletMultiButton />
          </div>
        )}

        <div className="mt-8 bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          {currentStep === 1 && (
            <ContentStep
              data={orbData.content}
              onChange={(content: OrbData["content"]) => setOrbData({ ...orbData, content })}
            />
          )}
          {currentStep === 2 && (
            <CustomizeStep
              data={orbData.customization}
              onChange={(customization: OrbData["customization"]) => setOrbData({ ...orbData, customization })}
            />
          )}
          {currentStep === 3 && (
            <UnlockStep
              data={orbData.unlockCriteria}
              onChange={(unlockCriteria: OrbData["unlockCriteria"]) => setOrbData({ ...orbData, unlockCriteria })}
            />
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              className={`px-4 py-2 rounded-full border border-white/20 ${
                currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
              }`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button
              onClick={currentStep === 3 ? handleCreate : handleNext}
              disabled={isProcessing}
              className={`px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full ${
                isProcessing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isProcessing ? 'Processing...' : currentStep === 3 ? 'Create Orb' : 'Next'}
            </button>
          </div>
        </div>

        <div className="mt-8">
          <Preview orbData={orbData} />
        </div>
      </div>

      {errors.length > 0 && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          {errors.map((error, index) => (
            <p key={index} className="text-red-400 text-sm">{error}</p>
          ))}
        </div>
      )}

      {paymentStatus && (
        <PaymentModal
          status={paymentStatus}
          message={paymentMessage}
          orb={
            paymentStatus === 'success'
              ? {
                  name: orbData.content.title,
                  preview: orbData.content.images[0] || `/gradient-${Math.floor(Math.random() * 7) + 1}.png`,
                  walletAddress: publicKey?.toBase58() || '',
                }
              : undefined
          }
          onClose={handleModalClose}
        />
      )}
    </main>
  );
}
