'use client';

import React from 'react';
import { Check, Zap, Crown } from 'lucide-react';

export default function GenesisTiersOnly() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-gradient-to-r from-[#00F0FF]/20 to-[#C6FF00]/20 border border-[#00F0FF]/30 rounded-full">
              <span className="text-[#00F0FF] font-bold">Genesis Raise Only</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-[#C6FF00] font-bold">Limited Availability</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] via-purple-400 to-[#C6FF00] bg-clip-text text-transparent">
            Genesis Stake: Lifetime Access
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Permanent entry to all events + Immediate Reputation Boost + Founding SBT badge
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Early Bird Tier */}
          <div className="relative bg-gradient-to-br from-[#00F0FF]/10 to-[#00F0FF]/5 border-2 border-[#00F0FF]/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00F0FF]/30">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="px-4 py-1 bg-[#00F0FF] text-black text-sm font-bold rounded-full flex items-center gap-2">
                <Zap className="w-4 h-4" />
                CURRENT TIER
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 mt-4">
              <div className="w-20 h-20 rounded-full bg-[#00F0FF]/20 border-2 border-[#00F0FF] flex items-center justify-center">
                <Zap className="w-10 h-10 text-[#00F0FF]" />
              </div>
            </div>

            {/* Title & Price */}
            <h3 className="text-2xl font-bold text-white text-center mb-2">Early Bird</h3>
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-[#00F0FF] mb-2">$500</div>
              <div className="text-sm text-gray-400">Limited Time Offer</div>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {[
                "Lifetime Access to All Events",
                "Founding Member SBT Badge",
                "Immediate 500 Reputation Boost",
                "Priority Support Channel",
                "Early Access to New Features"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full py-4 bg-gradient-to-r from-[#00F0FF] to-[#00F0FF]/80 text-black font-bold rounded-lg hover:shadow-xl hover:shadow-[#00F0FF]/50 transition-all duration-300 hover:scale-105">
              Activate Fan Stake
            </button>
          </div>

          {/* Genesis Standard Tier */}
          <div className="relative bg-gradient-to-br from-[#C6FF00]/10 to-[#C6FF00]/5 border-2 border-[#C6FF00]/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C6FF00]/30">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="px-4 py-1 bg-[#C6FF00] text-black text-sm font-bold rounded-full flex items-center gap-2">
                <Crown className="w-4 h-4" />
                NEXT TIER
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 mt-4">
              <div className="w-20 h-20 rounded-full bg-[#C6FF00]/20 border-2 border-[#C6FF00] flex items-center justify-center">
                <Crown className="w-10 h-10 text-[#C6FF00]" />
              </div>
            </div>

            {/* Title & Price */}
            <h3 className="text-2xl font-bold text-white text-center mb-2">Genesis Standard</h3>
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-[#C6FF00] mb-2">$1,200</div>
              <div className="text-sm text-gray-400">After Early Bird Sells Out</div>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {[
                "All Early Bird Benefits",
                "1,000 Reputation Boost (Gold Tier)",
                "Exclusive Genesis Merch Drop",
                "VIP Lounge Access from Day 1",
                "Revenue Sharing Eligibility"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C6FF00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full py-4 bg-gradient-to-r from-[#C6FF00] to-[#C6FF00]/80 text-black font-bold rounded-lg hover:shadow-xl hover:shadow-[#C6FF00]/50 transition-all duration-300 hover:scale-105">
              Reserve Next Tier
            </button>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            🔥 <span className="text-[#00F0FF] font-bold">Early Bird slots filling fast</span> — Lock in your Genesis Stake before price increases to $1,200
          </p>
        </div>
      </div>
    </section>
  );
}
