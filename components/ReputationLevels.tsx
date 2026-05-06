'use client';

import React from 'react';
import { Award, Crown, Star, Sparkles } from 'lucide-react';

interface ReputationLevel {
  name: string;
  color: string;
  icon: React.ReactNode;
  perks: string[];
  gradient: string;
  borderColor: string;
}

const levels: ReputationLevel[] = [
  {
    name: "Bronze Level",
    color: "#CD7F32",
    icon: <Award className="w-12 h-12" />,
    perks: [
      "Access to GA areas and standard kiosks",
      "Basic social features and networking",
      "Standard event notifications"
    ],
    gradient: "from-orange-700/20 to-orange-900/5",
    borderColor: "border-orange-700/30"
  },
  {
    name: "Gold Level",
    color: "#FFD700",
    icon: <Star className="w-12 h-12" />,
    perks: [
      "Unlocks the Whale Networking hub",
      "Early-bird Bling drops and exclusive merch",
      "Priority customer support",
      "Enhanced social visibility"
    ],
    gradient: "from-yellow-500/20 to-yellow-700/5",
    borderColor: "border-yellow-500/30"
  },
  {
    name: "Legendary Level",
    color: "#C6FF00",
    icon: <Crown className="w-12 h-12" />,
    perks: [
      "Direct proximity to celebrity avatars",
      "Stadium naming rights voting power",
      "Private Leviathan lounges access",
      "Exclusive backstage passes",
      "Revenue sharing opportunities",
      "Custom avatar enhancements"
    ],
    gradient: "from-[#C6FF00]/20 to-[#C6FF00]/5",
    borderColor: "border-[#C6FF00]/30"
  }
];

export default function ReputationLevels() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-[#C6FF00]" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-yellow-400 to-[#C6FF00] bg-clip-text text-transparent">
              Reputation Score & Social Perks
            </h2>
            <Sparkles className="w-10 h-10 text-[#C6FF00]" />
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Your Social Capital at DreamBIG Technology Arena
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Your <span className="text-[#C6FF00] font-bold">Reputation Score</span> is an immutable metric of your value to the community.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${level.gradient} ${level.borderColor} border-2 rounded-2xl p-8 
                hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
              style={{
                boxShadow: `0 0 30px ${level.color}20`
              }}
            >
              {/* Level Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div 
                  className="rounded-full p-4 border-4 bg-gray-900"
                  style={{ 
                    borderColor: level.color,
                    color: level.color
                  }}
                >
                  {level.icon}
                </div>
              </div>

              {/* Level Name */}
              <h3 
                className="text-2xl font-bold text-center mt-8 mb-6"
                style={{ color: level.color }}
              >
                {level.name}
              </h3>

              {/* Perks List */}
              <ul className="space-y-3">
                {level.perks.map((perk, perkIndex) => (
                  <li key={perkIndex} className="flex items-start gap-3">
                    <div 
                      className="mt-1 flex-shrink-0"
                      style={{ color: level.color }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${level.color}10, transparent)`
                }}
              />
            </div>
          ))}
        </div>

        {/* Progress Visualization */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Your Reputation Journey
          </h3>
          
          {/* Progress Bar */}
          <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-yellow-500 to-[#C6FF00] rounded-full"
              style={{ width: '0%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Milestone Markers */}
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-700 border-4 border-gray-900 flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-400">Bronze</p>
              <p className="text-sm font-bold text-orange-500">0 tokens</p>
            </div>
            <div className="flex-1 h-1 bg-gray-700 mx-2" />
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-500 border-4 border-gray-900 flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-400">Gold</p>
              <p className="text-sm font-bold text-yellow-500">1,000 tokens</p>
            </div>
            <div className="flex-1 h-1 bg-gray-700 mx-2" />
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C6FF00] border-4 border-gray-900 flex items-center justify-center mb-2">
                <Crown className="w-6 h-6 text-black" />
              </div>
              <p className="text-xs text-gray-400">Legendary</p>
              <p className="text-sm font-bold text-[#C6FF00]">10,000 tokens</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Start building your reputation today
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 via-yellow-400 to-[#C6FF00] text-black font-bold rounded-lg 
            hover:shadow-2xl hover:shadow-[#C6FF00]/50 transition-all duration-300 hover:scale-105">
            Claim Your Profile
          </button>
        </div>
      </div>
    </section>
  );
}
