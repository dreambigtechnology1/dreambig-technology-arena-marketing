'use client';

import React from 'react';
import { Award, Star, Crown } from 'lucide-react';

export default function ReputationProgressBar() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-yellow-400 to-[#C6FF00] bg-clip-text text-transparent">
            Your Path to Legendary
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Build your reputation and unlock exclusive perks
          </p>
        </div>

        {/* Progress Container */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
          {/* Progress Bar */}
          <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-yellow-500 to-[#C6FF00] rounded-full"
              style={{ width: '0%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Milestone Markers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bronze */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-700 border-4 border-gray-900 mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-2">Bronze</h3>
              <p className="text-sm text-gray-400 mb-3">0 points</p>
              <p className="text-sm text-gray-300">
                Standard Access & Social
              </p>
            </div>

            {/* Gold */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 border-4 border-gray-900 mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Gold</h3>
              <p className="text-sm text-gray-400 mb-3">1,000 points</p>
              <p className="text-sm text-gray-300">
                Whale Hub & Exclusive Merch Drops
              </p>
            </div>

            {/* Legendary */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C6FF00] border-4 border-gray-900 mb-4">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-[#C6FF00] mb-2">Legendary</h3>
              <p className="text-sm text-gray-400 mb-3">10,000 points</p>
              <p className="text-sm text-gray-300">
                Celebrity Proximity & Exclusive Perks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
