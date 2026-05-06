'use client';

import React from 'react';
import { Users, Tv, ShoppingBag, Camera, MessageCircle, Zap, Globe, CreditCard } from 'lucide-react';

interface ExperienceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: 'social' | 'entertainment' | 'commerce';
}

const experiences: ExperienceFeature[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "The Global Mixer",
    description: "Connect Instagram, TikTok, and X directly to your avatar. Your profile is your brand—meet people and swap socials with a single click.",
    category: 'social'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Meet Your Match",
    description: "Meet like-minded fans in themed Party Zones. Use the InTown Pin Symbol to see who's nearby and share your digital Business Card.",
    category: 'social'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Celebrity Access",
    description: "Use your Reputation Score to enter restricted zones where you can rub shoulders with Whales and the stars of the show.",
    category: 'social'
  },
  {
    icon: <Tv className="w-8 h-8" />,
    title: "Private Party Pods",
    description: "Host Super Bowl-style watch parties both virtually and physically. Create private sub-instances in the metaverse or sync with real-world venues—bars, clubs, and event spaces—where millions gather to experience the event together.",
    category: 'entertainment'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Shoutout",
    description: "Pay for a Global Shoutout to have your message or avatar projected onto the Jumbotron across the 250 million-capacity venue—a guaranteed viral moment.",
    category: 'entertainment'
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Physical Food Delivery",
    description: "Order real-world food through the in-venue interface. We bridge the gap between the metaverse and your doorstep.",
    category: 'commerce'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Branded Web2 Kiosks",
    description: "Walk up to an Amazon or Shopify kiosk within the stadium. Buy physical event merch or daily essentials without taking off your headset.",
    category: 'commerce'
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "ATM-to-AMM Flow",
    description: "Use in-world ATMs to swap ETH for native tokens. Tip your favorite Virtual Concierge or buy Bling instantly using Account Abstraction.",
    category: 'commerce'
  }
];

export default function FanExperienceGrid() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'social':
        return 'from-[#00F0FF]/20 to-[#00F0FF]/5 border-[#00F0FF]/30';
      case 'entertainment':
        return 'from-purple-500/20 to-purple-500/5 border-purple-500/30';
      case 'commerce':
        return 'from-[#C6FF00]/20 to-[#C6FF00]/5 border-[#C6FF00]/30';
      default:
        return 'from-gray-500/20 to-gray-500/5 border-gray-500/30';
    }
  };

  const getCategoryIconColor = (category: string) => {
    switch (category) {
      case 'social':
        return 'text-[#00F0FF]';
      case 'entertainment':
        return 'text-purple-400';
      case 'commerce':
        return 'text-[#C6FF00]';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00F0FF] via-purple-400 to-[#C6FF00] bg-clip-text text-transparent">
            The Fan Experience
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Live the Event, Not Just Watch It
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            at DreamBIG Technology Arena, you aren't just a spectator; you are a participant in a <span className="text-[#C6FF00] font-bold">Multi Billion Dollar Economy</span>. 
            Every interaction is powered by the <span className="text-[#00F0FF]">InTown Metaverse Protocol</span>.
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#00F0FF]"></div>
            <span className="text-sm text-gray-300">Social Synergy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-purple-400"></div>
            <span className="text-sm text-gray-300">Entertainment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#C6FF00]"></div>
            <span className="text-sm text-gray-300">Commerce</span>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${getCategoryColor(experience.category)} 
                border rounded-xl p-6 hover:scale-105 transition-all duration-300 
                hover:shadow-2xl hover:shadow-${experience.category === 'social' ? '[#00F0FF]' : experience.category === 'commerce' ? '[#C6FF00]' : 'purple-500'}/20`}
            >
              {/* Icon */}
              <div className={`${getCategoryIconColor(experience.category)} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {experience.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {experience.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {experience.description}
              </p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                bg-gradient-to-br ${experience.category === 'social' ? 'from-[#00F0FF]/10' : experience.category === 'commerce' ? 'from-[#C6FF00]/10' : 'from-purple-500/10'} to-transparent pointer-events-none`}>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to transform from spectator to participant?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] text-black font-bold rounded-lg 
            hover:shadow-2xl hover:shadow-[#00F0FF]/50 transition-all duration-300 hover:scale-105">
            Get Your Lifetime Ticket
          </button>
        </div>
      </div>
    </section>
  );
}
