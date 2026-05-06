'use client';

import React from 'react';
import { Camera, MessageCircle, Music2, Link2 } from 'lucide-react';

interface SocialPlatform {
  name: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  description: string;
}

const platforms: SocialPlatform[] = [];

export default function SocialIntegrationBadges() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00F0FF] via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Connect Your World
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Seamless Social Integration
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Link your social profiles directly to your avatar. Your profile is your brand—meet people in the crowd and swap socials with a single click.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 
                hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div 
                className="relative z-10 mb-6 flex items-center justify-center"
                style={{ color: platform.color }}
              >
                {platform.icon}
              </div>

              {/* Platform Name */}
              <h3 className="relative z-10 text-2xl font-bold text-white text-center mb-4">
                {platform.name}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 text-center text-sm leading-relaxed mb-6">
                {platform.description}
              </p>

              {/* Connect Button */}
              <button 
                className={`relative z-10 w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r ${platform.gradient} 
                  hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                Connect {platform.name}
              </button>

              {/* Border Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${platform.color}40`
                }}
              />
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* One-Click Sharing */}
          <div className="bg-gradient-to-br from-[#00F0FF]/10 to-[#00F0FF]/5 border border-[#00F0FF]/30 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00F0FF]/20 flex items-center justify-center">
                <Link2 className="w-6 h-6 text-[#00F0FF]" />
              </div>
              <h3 className="text-2xl font-bold text-white">One-Click Sharing</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Share your in-game moments directly to your social feeds. Capture screenshots, record clips, and broadcast your experience to millions with a single tap.
            </p>
          </div>

          {/* Digital Business Card */}
          <div className="bg-gradient-to-br from-[#00F0FF]/10 to-[#00F0FF]/5 border border-[#00F0FF]/30 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00F0FF]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#00F0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Digital Business Card</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Exchange contact information instantly with other fans. Your InTown profile becomes your digital business card, complete with all your social links and achievements.
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#00F0FF]/20 via-purple-500/20 to-pink-500/20 border border-[#00F0FF]/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00F0FF] mb-2">250 million</div>
              <div className="text-gray-300 text-sm">Connected Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-gray-300 text-sm">Social Platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">1-Click</div>
              <div className="text-gray-300 text-sm">Profile Sharing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C6FF00] mb-2">∞</div>
              <div className="text-gray-300 text-sm">Networking Potential</div>
            </div>
          </div>
        </div>

        {/* Success State CTA */}
        <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-[#00F0FF]/30 rounded-2xl p-12 text-center">
          <div className="mb-6">
            <div className="inline-block p-4 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] rounded-full mb-4">
              <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Your Success State
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Once you buy your ticket on the <span className="text-[#00F0FF] font-bold">Box Office</span> site, you receive your unique <span className="text-[#C6FF00] font-bold">InTown Lifetime Ticket</span>.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Download the <span className="text-[#00F0FF]">Electron App</span> to claim your reputation and start your journey at DreamBIG Technology Arena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] text-black font-bold rounded-lg 
              hover:shadow-2xl hover:shadow-[#00F0FF]/50 transition-all duration-300 hover:scale-105">
              Get Your Lifetime Ticket
            </button>
            <button className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg 
              transition-all duration-300 hover:scale-105">
              Download Electron App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
