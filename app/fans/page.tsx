import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ProtocolUtilityGrid from '@/components/ProtocolUtilityGrid';
import ReputationProgressBar from '@/components/ReputationProgressBar';
import StakedEconomyMatrix from '@/components/StakedEconomyMatrix';
import GenesisTiersOnly from '@/components/GenesisTiersOnly';
import ProgressFooter from '@/components/ProgressFooter';

export default function FansPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Back Navigation */}
      <div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C6FF00] transition-colors text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Role Selection
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Stadium Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/stadium_stacked.png)',
            filter: 'brightness(0.5)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        
        {/* Animated Accent Glows */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#00F0FF] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#C6FF00] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <div className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#00F0FF]/20 to-[#C6FF00]/20 border border-[#00F0FF]/30 rounded-full">
              <span className="text-[#00F0FF] font-bold text-xs sm:text-sm md:text-base">250M Capacity</span>
              <span className="text-gray-400 mx-1 sm:mx-2">•</span>
              <span className="text-[#C6FF00] font-bold text-xs sm:text-sm md:text-base">Multi Billion $ Economy</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            <span className="bg-gradient-to-r from-[#00F0FF] via-purple-400 to-[#C6FF00] bg-clip-text text-transparent">
              LIVE THE EVENT.
            </span>
            <br />
            <span className="text-white">
              OWN THE STATUS.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-2">
            Transform from spectator to participant in the world's first <span className="text-[#00F0FF] font-bold">Livable Digital City</span>. 
            One transaction triggers your <span className="text-[#C6FF00] font-bold">Lifetime Access</span> and activates the DreamBIG Arena economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12 px-2">
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] text-black text-base sm:text-lg font-bold rounded-lg 
              hover:shadow-2xl hover:shadow-[#00F0FF]/50 transition-all duration-300 hover:scale-105">
              Activate Fan Stake
            </button>
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gray-800 hover:bg-gray-700 text-white text-base sm:text-lg font-bold rounded-lg 
              border border-gray-700 transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00F0FF] mb-1 sm:mb-2">250M</div>
              <div className="text-xs sm:text-sm text-gray-400">Venue Capacity</div>
            </div>
            <div className="bg-gradient-to-br from-[#C6FF00]/10 to-transparent border border-[#C6FF00]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C6FF00] mb-1 sm:mb-2">$10B+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projected Economy</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">8</div>
              <div className="text-xs sm:text-sm text-gray-400">Experiences</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-400 mb-1 sm:mb-2">4</div>
              <div className="text-xs sm:text-sm text-gray-400">Earning Ways</div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Utility Grid - 6 Cards */}
      <ProtocolUtilityGrid />

      {/* Reputation Progress Bar - Simplified */}
      <ReputationProgressBar />

      {/* Staked Economy Matrix - Earning Table */}
      <StakedEconomyMatrix />

      {/* Genesis Tiers Only - $500/$1,200 */}
      <GenesisTiersOnly />

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] bg-clip-text text-transparent px-2">
            Ready to Own Your Status?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-2">
            Secure stakeholder status in the DreamBIG Arena economy. One transaction. Lifetime access.
          </p>
          <button className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] text-black text-lg sm:text-xl font-bold rounded-lg 
            hover:shadow-2xl hover:shadow-[#00F0FF]/50 transition-all duration-300 hover:scale-105">
            Activate Fan Stake
          </button>
          <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 px-2">
            Join the Genesis Raise — Limited Early Bird slots at $500
          </p>
        </div>
      </section>

      <ProgressFooter />
    </div>
  );
}
