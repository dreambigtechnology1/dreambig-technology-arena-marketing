'use client';

import { useState, useEffect } from 'react';

interface GenesisProgressBarProps {
  currentAmount?: number;
  goalAmount?: number;
  fansCount?: number;
  fansTier?: number;
  fansTierPrice?: string;
  brandsCount?: number;
  brandsTier?: number;
  brandsTierPrice?: string;
  promotersCount?: number;
  promotersTier?: number;
  promotersTierFee?: string;
  daysRemaining?: number;
}

export default function GenesisProgressBar({
  currentAmount = 0,
  goalAmount = 15000000,
  fansCount = 0,
  fansTier = 1,
  fansTierPrice = '$500',
  brandsCount = 0,
  brandsTier = 1,
  brandsTierPrice = '$150,000',
  promotersCount = 0,
  promotersTier = 1,
  promotersTierFee = '1%',
  daysRemaining = 45,
}: GenesisProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const percentageFunded = Math.round((currentAmount / goalAmount) * 100);

  useEffect(() => {
    // Animate progress bar on mount
    const timer = setTimeout(() => {
      setProgress(percentageFunded);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentageFunded]);

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#C6FF00]/30 rounded-2xl p-8 shadow-2xl">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#4B21FF] via-[#C6FF00] to-[#00F0FF] bg-clip-text text-transparent">
            Genesis Activation Progress
          </span>
        </h2>
        <p className="text-gray-400 text-sm">
          Staggered Utility Activation • Multi-Stakeholder Infrastructure
        </p>
      </div>

      {/* Main Progress Section */}
      <div className="mb-8">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-lg text-gray-400">Total Raised</span>
          <div className="text-right">
            <span className="text-4xl font-bold text-[#C6FF00]">
              {formatCurrency(currentAmount)}
            </span>
            <span className="text-xl text-gray-400 ml-2">
              / {formatCurrency(goalAmount)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-6 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#4B21FF] via-[#C6FF00] to-[#00F0FF] rounded-full transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(198,255,0,0.6)]"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white drop-shadow-lg">
            {percentageFunded}% Funded
          </div>
        </div>
      </div>

      {/* Role-Specific Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Fans */}
        <div className="bg-black/50 border border-[#00F0FF]/30 rounded-xl p-5 hover:border-[#00F0FF] transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400 uppercase tracking-wide">Fans</span>
            <span className="text-xs bg-[#00F0FF]/20 text-[#00F0FF] px-2 py-1 rounded-full">
              Tier {fansTier}
            </span>
          </div>
          <div className="text-3xl font-bold text-[#00F0FF] mb-2">
            {fansCount.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">
            <span className="text-gray-400">/ 7,500 Total</span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="text-xs text-gray-400">Current Price:</div>
            <div className="text-lg font-bold text-[#00F0FF]">{fansTierPrice}</div>
          </div>
        </div>

        {/* Brands */}
        <div className="bg-black/50 border border-[#4B21FF]/30 rounded-xl p-5 hover:border-[#4B21FF] transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400 uppercase tracking-wide">Brands</span>
            <span className="text-xs bg-[#4B21FF]/20 text-[#4B21FF] px-2 py-1 rounded-full">
              Tier {brandsTier}
            </span>
          </div>
          <div className="text-3xl font-bold text-[#4B21FF] mb-2">
            {brandsCount}
          </div>
          <div className="text-xs text-gray-500">
            <span className="text-gray-400">/ 10 Total</span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="text-xs text-gray-400">Current Price:</div>
            <div className="text-lg font-bold text-[#4B21FF]">{brandsTierPrice}</div>
          </div>
        </div>

        {/* Promoters */}
        <div className="bg-black/50 border border-[#C6FF00]/30 rounded-xl p-5 hover:border-[#C6FF00] transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400 uppercase tracking-wide">Promoters</span>
            <span className="text-xs bg-[#C6FF00]/20 text-[#C6FF00] px-2 py-1 rounded-full">
              Tier {promotersTier}
            </span>
          </div>
          <div className="text-3xl font-bold text-[#C6FF00] mb-2">
            {promotersCount}
          </div>
          <div className="text-xs text-gray-500">
            <span className="text-gray-400">/ 25 Total</span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="text-xs text-gray-400">Service Fee:</div>
            <div className="text-lg font-bold text-[#C6FF00]">{promotersTierFee} Fee</div>
          </div>
        </div>
      </div>

      {/* Countdown & CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-700">
        <div className="text-center md:text-left">
          <div className="text-sm text-gray-400 mb-1">Time Remaining</div>
          <div className="text-3xl font-bold text-[#C6FF00] animate-pulse">
            {daysRemaining} Days
          </div>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-[0_0_30px_rgba(198,255,0,0.5)]">
          SECURE YOUR GENESIS STAKE
        </button>
      </div>

      {/* Urgency Message */}
      {daysRemaining <= 7 && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-center font-bold animate-pulse">
            ⚠️ FINAL WEEK! Tier prices increase as slots fill. Act now to lock in current rates.
          </p>
        </div>
      )}
    </div>
  );
}
