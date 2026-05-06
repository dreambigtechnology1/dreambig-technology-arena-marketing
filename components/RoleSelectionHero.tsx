'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Image mapping for each role
const ROLE_IMAGES = {
  fan: ['/img/stadium_interior.png', '/img/stadium_vip_lounge.png'],
  promoter: ['/img/stadium_exterior.png', '/img/stadium_stacked.png'],
  sponsor: ['/img/stadium_concourse_full.png', '/img/stadium_interior.png'],
};

const ALL_IMAGES = [
  '/img/stadium_exterior.png',
  '/img/stadium_interior.png',
  '/img/stadium_vip_lounge.png',
  '/img/stadium_concourse_full.png',
];

interface RoleCardProps {
  icon: string;
  title: string;
  benefit: string;
  href: string;
  accentColor: string;
  onHover: () => void;
  onHoverEnd: () => void;
}

function RoleCard({ icon, title, benefit, href, accentColor, onHover, onHoverEnd }: RoleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverEnd();
  };

  return (
    <div
      className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        borderColor: isHovered ? accentColor : 'rgba(75, 85, 99, 0.5)',
        boxShadow: isHovered ? `0 0 40px ${accentColor}40` : undefined,
      }}
    >
      {/* Icon */}
      <div className="text-7xl mb-6 text-center">{icon}</div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-white mb-4 text-center">{title}</h3>

      {/* Benefit Statement */}
      <p className="text-sm text-gray-300 mb-6 text-center leading-relaxed min-h-[60px]">
        {benefit}
      </p>

      {/* CTA Button */}
      <Link href={href}>
        <button
          className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
            boxShadow: isHovered ? `0 0 20px ${accentColor}80` : undefined,
          }}
        >
          Enter Site
        </button>
      </Link>
    </div>
  );
}

export default function RoleSelectionHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeImages, setActiveImages] = useState(ALL_IMAGES);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  // Auto-advance slides when not hovering
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % activeImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, activeImages.length]);

  const handleRoleHover = (role: 'fan' | 'promoter' | 'sponsor') => {
    setHoveredRole(role);
    setActiveImages(ROLE_IMAGES[role]);
    setCurrentImageIndex(0);
    setIsAutoPlaying(true);
  };

  const handleRoleHoverEnd = () => {
    setHoveredRole(null);
    setActiveImages(ALL_IMAGES);
    setCurrentImageIndex(0);
    setIsAutoPlaying(true);
  };

  const roles = [
    {
      id: 'fan',
      icon: '🎭',
      title: 'The Fan',
      benefit: 'Lifetime access to DreamBIG Technology Arena. Networking with celebrities. VIP lounges and perks.',
      href: '/fans',
      accentColor: '#00F0FF',
    },
    {
      id: 'promoter',
      icon: '⚡',
      title: 'The Promoter',
      benefit: 'Earn protocol fees by orchestrating events. Turn infrastructure into revenue.',
      href: '/promoters',
      accentColor: '#C6FF00',
    },
    {
      id: 'sponsor',
      icon: '🏢',
      title: 'The Sponsor',
      benefit: 'Reach 250 million users with zero ad-fraud. Cryptographic proof of delivery.',
      href: '/sponsors',
      accentColor: '#4B21FF',
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow */}
      {activeImages.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt="Stadium"
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dark tint overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#C6FF00] to-[#4B21FF] bg-clip-text text-transparent">
                  DreamBIG Technology Arena
                </span>
              </h1>
              
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-3">
                Choose Your Role
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                How will you participate in the DreamBIG Technology Arena ecosystem?
              </p>
            </div>
            {/* Role Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {roles.map((role) => (
                <RoleCard
                  key={role.id}
                  icon={role.icon}
                  title={role.title}
                  benefit={role.benefit}
                  href={role.href}
                  accentColor={role.accentColor}
                  onHover={() => handleRoleHover(role.id as 'fan' | 'promoter' | 'sponsor')}
                  onHoverEnd={handleRoleHoverEnd}
                />
              ))}
            </div>

            {/* Bottom Tagline */}
            <div className="mt-16 text-center">
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                <span className="text-[#C6FF00] font-bold">You're not just buying a ticket.</span>
                {' '}You're securing stakeholder status in a $1.9B per-event economy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small Logo in Bottom Corner */}
      <div className="absolute bottom-8 left-8 z-20">
        <Image
          src="/img/logo_intown_metaverse.png"
          alt="InTown Metaverse"
          width={150}
          height={45}
          className="opacity-60 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {activeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 3000);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex
                ? 'bg-[#C6FF00] w-8 shadow-[0_0_10px_rgba(198,255,0,0.8)]'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
