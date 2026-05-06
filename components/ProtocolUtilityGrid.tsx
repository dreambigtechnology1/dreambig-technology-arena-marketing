'use client';

import React from 'react';
import { User, Users, Award, ShoppingCart, Zap, Globe } from 'lucide-react';

interface UtilityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

const utilities: UtilityCard[] = [
  {
    icon: <User className="w-8 h-8" />,
    title: "Digital Identity",
    description: "Link IG/TikTok/X. Your profile is your brand.",
    color: "text-[#00F0FF]",
    gradient: "from-[#00F0FF]/20 to-[#00F0FF]/5 border-[#00F0FF]/30"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Hyper-Social",
    description: "Meet-and-swap socials with a single tap.",
    color: "text-[#00F0FF]",
    gradient: "from-[#00F0FF]/20 to-[#00F0FF]/5 border-[#00F0FF]/30"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "VIP Access",
    description: "Use Reputation to enter the Whale Hubs.",
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-500/5 border-purple-500/30"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Real-World Commerce",
    description: "Order physical food to your door via UI.",
    color: "text-[#C6FF00]",
    gradient: "from-[#C6FF00]/20 to-[#C6FF00]/5 border-[#C6FF00]/30"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Viral Influence",
    description: "Project your avatar onto the Jumbotron.",
    color: "text-[#C6FF00]",
    gradient: "from-[#C6FF00]/20 to-[#C6FF00]/5 border-[#C6FF00]/30"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Hybrid Watch Parties",
    description: "Join 10k+ physical venues synced in real-time.",
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-500/5 border-purple-500/30"
  }
];

export default function ProtocolUtilityGrid() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] via-purple-400 to-[#C6FF00] bg-clip-text text-transparent">
            Protocol at a Glance
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Scan the utility of the protocol in seconds
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilities.map((utility, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${utility.gradient} 
                border rounded-xl p-6 hover:scale-105 transition-all duration-300 
                hover:shadow-2xl`}
            >
              {/* Icon */}
              <div className={`${utility.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {utility.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {utility.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {utility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
