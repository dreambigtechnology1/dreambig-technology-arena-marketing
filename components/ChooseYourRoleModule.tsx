'use client';

import { useState } from 'react';
import Link from 'next/link';

interface RoleCardProps {
  icon: string;
  title: string;
  subtitle: string;
  benefit: string;
  ctaText: string;
  ctaLink: string;
  accentColor: string;
  features: string[];
}

function RoleCard({ icon, title, subtitle, benefit, ctaText, ctaLink, accentColor, features }: RoleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-gradient-to-br from-gray-900 to-black border-2 rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
        isHovered ? `border-[${accentColor}] shadow-2xl` : 'border-gray-800'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? accentColor : undefined,
        boxShadow: isHovered ? `0 0 40px ${accentColor}40` : undefined,
      }}
    >
      {/* Icon */}
      <div className="text-7xl mb-6 text-center">{icon}</div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-white mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-400 mb-4 text-center">{subtitle}</p>

      {/* Primary Benefit */}
      <div className="bg-black/50 border border-gray-700 rounded-lg p-4 mb-6">
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Primary Benefit</div>
        <p className="text-sm text-gray-300 leading-relaxed">{benefit}</p>
      </div>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-[#C6FF00] mt-1">✓</span>
            <span className="text-sm text-gray-400">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link href={ctaLink}>
        <button
          className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
            boxShadow: isHovered ? `0 0 20px ${accentColor}80` : undefined,
          }}
        >
          {ctaText}
        </button>
      </Link>

      {/* Subtext */}
      <p className="text-xs text-gray-500 text-center mt-3">
        Activate your Genesis Stake
      </p>
    </div>
  );
}

export default function ChooseYourRoleModule() {
  const roles = [
    {
      icon: '🎭',
      title: 'The Fan',
      subtitle: 'Experience & Network',
      benefit: 'Lifetime access to DreamBIG Technology Arena. Networking with celebrities. VIP lounges and "Livable City" perks.',
      ctaText: 'Get Lifetime Ticket',
      ctaLink: '/fans',
      accentColor: '#00F0FF',
      features: [
        'Access all events at DreamBIG Technology Arena',
        'Earn tokens through participation',
        'Network in VIP lounges',
        'Build reputation & unlock perks',
      ],
    },
    {
      icon: '⚡',
      title: 'The Host',
      subtitle: 'Infrastructure Provider',
      benefit: 'Earn protocol fees by providing bandwidth and compute power. Turn your server into venue infrastructure.',
      ctaText: 'Host a Node',
      ctaLink: '/promoters#node-hosting',
      accentColor: '#C6FF00',
      features: [
        'Earn fees for bandwidth delivery',
        'Automated smart contract payments',
        'Support 250 million-capacity infrastructure',
        'Zero middlemen or delays',
      ],
    },
    {
      icon: '🏢',
      title: 'The Brand',
      subtitle: 'Verified Reach',
      benefit: 'Reach 250 million users with zero ad-fraud. Cryptographic proof of every impression via Proof of Transport.',
      ctaText: 'Book Capacity',
      ctaLink: '/sponsors',
      accentColor: '#4B21FF',
      features: [
        '250 Million seat venue capacity',
        'Zero ad fraud guarantee',
        'Cryptographic delivery proof',
        'Full 3D brand integration',
      ],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#C6FF00] to-[#4B21FF] bg-clip-text text-transparent">
              Choose Your Role
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            How will you participate in the DreamBIG Technology Arena ecosystem?
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            One transaction. Multiple benefits. Lifetime stakeholder status in a sovereign economic zone.
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <RoleCard key={index} {...role} />
          ))}
        </div>

        {/* Bottom Explainer */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#4B21FF]/20 to-[#C6FF00]/20 border border-[#C6FF00]/30 rounded-xl px-8 py-6 max-w-4xl">
            <p className="text-lg text-gray-300 mb-2">
              <span className="text-[#C6FF00] font-bold">You're not just buying a ticket.</span>
            </p>
            <p className="text-base text-gray-400">
              You're securing stakeholder status in a $1.9B per-event economy. This is the Genesis Raise phase ($3.2M/$15M). 
              Every contribution activates your role in the infrastructure, the protocol, and the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
