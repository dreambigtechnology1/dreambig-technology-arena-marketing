'use client';

import React from 'react';
import { Crown, Users, Sparkles, TrendingUp, Award, Star } from 'lucide-react';

interface Lounge {
  name: string;
  tier: string;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  networking: string[];
  minTokens: string;
}

const lounges: Lounge[] = [
  {
    name: "The Whale Networking Hub",
    tier: "Gold",
    color: "#FFD700",
    gradient: "from-yellow-500/20 to-yellow-700/5",
    icon: <Star className="w-10 h-10" />,
    description: "Where high-value contributors connect and collaborate",
    features: [
      "Private video chat rooms with spatial audio",
      "Exclusive merchandise drops and early access",
      "Priority seating for main stage events",
      "Direct messaging with verified whales"
    ],
    networking: [
      "Connect with top 1% contributors",
      "Business partnership opportunities",
      "Investor networking sessions",
      "Collaborative project spaces"
    ],
    minTokens: "1,000"
  },
  {
    name: "The Leviathan Lounge",
    tier: "Legendary",
    color: "#C6FF00",
    gradient: "from-[#C6FF00]/20 to-[#C6FF00]/5",
    icon: <Crown className="w-10 h-10" />,
    description: "The ultimate VIP experience for elite members",
    features: [
      "Direct proximity to celebrity avatars",
      "Private backstage access and meet & greets",
      "Stadium naming rights voting power",
      "Custom avatar enhancements and effects",
      "Revenue sharing from venue operations",
      "Exclusive NFT airdrops and collectibles"
    ],
    networking: [
      "One-on-one sessions with headliners",
      "C-suite executive networking",
      "Venture capital pitch opportunities",
      "Strategic partnership facilitation",
      "Media and press access",
      "Influencer collaboration spaces"
    ],
    minTokens: "10,000"
  }
];

export default function VIPLounges() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* VIP Lounge Showcase with Image */}
        <div className="mb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Images */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C6FF00]/30 shadow-2xl shadow-[#C6FF00]/20">
                <img 
                  src="/img/stadium_vip_lounge.png" 
                  alt="VIP Lounge" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
                <img 
                  src="/img/stadium_vip_lounge_2.png" 
                  alt="VIP Lounge Interior" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Who You'll Meet */}
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Who You'll Meet in the <span className="text-[#C6FF00]">VIP Lounges</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                The VIP lounges are where the elite of Web3 and entertainment converge. Your reputation score grants you access to rub shoulders with:
              </p>

              <div className="space-y-6">
                {/* NFT Blue Chips */}
                <div className="bg-gradient-to-r from-[#C6FF00]/10 to-transparent border-l-4 border-[#C6FF00] p-4 rounded-r-lg">
                  <h4 className="text-xl font-bold text-[#C6FF00] mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Blue Chip NFT Holders
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Connect with holders of the most prestigious NFT collections:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#C6FF00]/20 text-[#C6FF00] rounded-full text-xs font-bold">BAYC</span>
                    <span className="px-3 py-1 bg-[#C6FF00]/20 text-[#C6FF00] rounded-full text-xs font-bold">CryptoPunks</span>
                    <span className="px-3 py-1 bg-[#C6FF00]/20 text-[#C6FF00] rounded-full text-xs font-bold">Azuki</span>
                    <span className="px-3 py-1 bg-[#C6FF00]/20 text-[#C6FF00] rounded-full text-xs font-bold">Doodles</span>
                  </div>
                </div>

                {/* Celebrities */}
                <div className="bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h4 className="text-xl font-bold text-purple-400 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    A-List Celebrities
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Meet stars from across entertainment and sports:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">NBA Players</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">Chart-Topping Rappers</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">Grammy Winners</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">NFL Stars</span>
                  </div>
                </div>

                {/* Crypto Whales */}
                <div className="bg-gradient-to-r from-[#00F0FF]/10 to-transparent border-l-4 border-[#00F0FF] p-4 rounded-r-lg">
                  <h4 className="text-xl font-bold text-[#00F0FF] mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Crypto Whales & Founders
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Network with the builders and investors shaping Web3:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#00F0FF]/20 text-[#00F0FF] rounded-full text-xs font-bold">DeFi Founders</span>
                    <span className="px-3 py-1 bg-[#00F0FF]/20 text-[#00F0FF] rounded-full text-xs font-bold">VC Partners</span>
                    <span className="px-3 py-1 bg-[#00F0FF]/20 text-[#00F0FF] rounded-full text-xs font-bold">Protocol Developers</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="text-yellow-400 font-bold">Pro Tip:</span> Your reputation score determines which lounges you can access. Start earning tokens today to unlock these exclusive networking opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="w-12 h-12 text-[#C6FF00]" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-[#C6FF00] to-[#00F0FF] bg-clip-text text-transparent">
              VIP Lounges & High-Profile Networking
            </h2>
            <Crown className="w-12 h-12 text-[#C6FF00]" />
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Where Influence Meets Opportunity
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Unlock exclusive spaces where the world's top contributors, celebrities, and business leaders converge. 
            Your reputation opens doors to <span className="text-[#C6FF00] font-bold">life-changing connections</span>.
          </p>
        </div>

        {/* Lounges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {lounges.map((lounge, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${lounge.gradient} border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              style={{
                borderColor: `${lounge.color}50`,
                boxShadow: `0 0 40px ${lounge.color}20`
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div style={{ color: lounge.color }}>
                      {lounge.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {lounge.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    {lounge.description}
                  </p>
                </div>
                <div 
                  className="px-4 py-2 rounded-full text-sm font-bold"
                  style={{ 
                    backgroundColor: `${lounge.color}20`,
                    color: lounge.color,
                    border: `2px solid ${lounge.color}50`
                  }}
                >
                  {lounge.tier}
                </div>
              </div>

              {/* Minimum Tokens */}
              <div className="mb-6 p-4 bg-black/30 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Minimum Reputation:</span>
                  <span className="text-xl font-bold" style={{ color: lounge.color }}>
                    {lounge.minTokens} tokens
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5" style={{ color: lounge.color }} />
                  <h4 className="text-lg font-bold text-white">Exclusive Features</h4>
                </div>
                <ul className="space-y-2">
                  {lounge.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1" style={{ color: lounge.color }}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Networking Opportunities */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5" style={{ color: lounge.color }} />
                  <h4 className="text-lg font-bold text-white">Networking Opportunities</h4>
                </div>
                <ul className="space-y-2">
                  {lounge.networking.map((opportunity, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1" style={{ color: lounge.color }}>
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <span className="text-gray-300 text-sm">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${lounge.color}10, transparent)`
                }}
              />
            </div>
          ))}
        </div>

        {/* Benefits Banner */}
        <div className="bg-gradient-to-r from-yellow-500/10 via-[#C6FF00]/10 to-[#00F0FF]/10 border border-[#C6FF00]/30 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-6">
            Why High-Profile Networking Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C6FF00]/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-[#C6FF00]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Build Your Brand</h4>
              <p className="text-gray-400 text-sm">
                Connect with influencers and thought leaders to amplify your presence in the metaverse
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Unlock Opportunities</h4>
              <p className="text-gray-400 text-sm">
                Access exclusive deals, partnerships, and investment opportunities not available to the general public
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00F0FF]/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#00F0FF]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Elite Community</h4>
              <p className="text-gray-400 text-sm">
                Join a curated network of high-achievers, innovators, and industry leaders shaping the future
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Start earning tokens today to unlock these exclusive spaces
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-yellow-400 via-[#C6FF00] to-[#00F0FF] text-black text-lg font-bold rounded-lg 
            hover:shadow-2xl hover:shadow-[#C6FF00]/50 transition-all duration-300 hover:scale-105">
            Begin Your VIP Journey
          </button>
        </div>
      </div>
    </section>
  );
}
