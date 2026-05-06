'use client';

import React from 'react';
import { MapPin, Users, Tv, TrendingUp, Sparkles, Building2 } from 'lucide-react';

export default function PhysicalVenuesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building2 className="w-10 h-10 text-purple-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-[#00F0FF] bg-clip-text text-transparent">
              Physical Venue Watch Parties
            </h2>
            <Building2 className="w-10 h-10 text-purple-400" />
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            The Super Bowl Experience, Everywhere
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Just like millions gather at bars, clubs, and event spaces for the Super Bowl, DreamBIG Technology Arena enables <span className="text-purple-400 font-bold">synchronized physical watch parties</span> worldwide—all connected to the same metaverse event.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: How It Works */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/5 border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Tv className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-bold text-white">How It Works</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Register Your Venue</h4>
                  <p className="text-gray-400 text-sm">
                    Bars, clubs, restaurants, and event spaces register as official DreamBIG Technology Arena watch party locations
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Sync to the Metaverse</h4>
                  <p className="text-gray-400 text-sm">
                    Venues stream the event on big screens while patrons join the metaverse on their phones or VR headsets
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Earn Together</h4>
                  <p className="text-gray-400 text-sm">
                    Venues earn tokens for hosting, attendees earn reputation, and everyone shares in the collective experience
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Global Leaderboards</h4>
                  <p className="text-gray-400 text-sm">
                    Compete with other venues worldwide for the most engaged crowd, biggest watch party, and highest energy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="space-y-6">
            {/* For Venues */}
            <div className="bg-gradient-to-br from-[#00F0FF]/10 to-[#00F0FF]/5 border border-[#00F0FF]/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-[#00F0FF]" />
                <h4 className="text-xl font-bold text-white">For Venues</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Increased foot traffic and revenue during events</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Token rewards for hosting official watch parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Marketing exposure to 250 million global users</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Branded presence in the metaverse venue map</span>
                </li>
              </ul>
            </div>

            {/* For Attendees */}
            <div className="bg-gradient-to-br from-[#C6FF00]/10 to-[#C6FF00]/5 border border-[#C6FF00]/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#C6FF00]" />
                <h4 className="text-xl font-bold text-white">For Attendees</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C6FF00] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Best of both worlds: physical atmosphere + digital perks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C6FF00] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Earn reputation tokens for attending watch parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C6FF00] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Network with local fans while connecting globally</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C6FF00] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Exclusive venue-specific NFTs and collectibles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-purple-500/20 via-[#00F0FF]/20 to-[#C6FF00]/20 border border-purple-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            The Power of Physical + Digital
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-sm text-gray-300">Registered Venues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00F0FF] mb-2">50M</div>
              <div className="text-sm text-gray-300">Physical Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C6FF00] mb-2">200 million</div>
              <div className="text-sm text-gray-300">Digital Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Synchronized</div>
            </div>
          </div>
        </div>

        {/* Venue Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Sports Bars</h4>
            <p className="text-gray-400 text-sm">
              The classic watch party venue with big screens, cold drinks, and electric atmosphere
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00F0FF]/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#00F0FF]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Nightclubs</h4>
            <p className="text-gray-400 text-sm">
              Turn the event into a party with DJs, lights, and an unforgettable experience
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C6FF00]/20 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-[#C6FF00]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Event Spaces</h4>
            <p className="text-gray-400 text-sm">
              Dedicated venues for large-scale watch parties with premium amenities
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Ready to host or attend a watch party?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-[#00F0FF] text-white font-bold rounded-lg 
              hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              Register Your Venue
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] text-black font-bold rounded-lg 
              hover:shadow-2xl hover:shadow-[#00F0FF]/50 transition-all duration-300 hover:scale-105">
              Find a Watch Party Near You
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
