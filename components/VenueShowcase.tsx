'use client';

import { useState } from 'react';
import Image from 'next/image';

const VENUE_FEATURES = [
  {
    id: 1,
    title: 'Stadium Exterior',
    description: 'Iconic architecture meets cutting-edge metaverse technology',
    image: '/img/stadium_exterior.png',
    icon: '🏟️',
    highlights: ['Photorealistic rendering', '360° exploration', 'Day/night cycles']
  },
  {
    id: 2,
    title: 'Main Arena',
    description: 'Immersive concert experience with crystal-clear audio and visuals',
    image: '/img/stadium_interior.png',
    icon: '🎭',
    highlights: ['50,000+ capacity', 'Dynamic lighting', 'Spatial audio']
  },
  {
    id: 3,
    title: 'VIP Lounges',
    description: 'Exclusive spaces for premium ticket holders',
    image: '/img/stadium_vip_lounge.png',
    icon: '👑',
    highlights: ['Private areas', 'Premium amenities', 'Networking spaces']
  },
  {
    id: 4,
    title: 'Concourse & Sponsors',
    description: 'Interactive brand experiences and social spaces',
    image: '/img/stadium_concourse_full.png',
    icon: '🎪',
    highlights: ['Brand activations', 'Social hubs', 'Digital collectibles']
  },
];

export default function VenueShowcase() {
  const [selectedFeature, setSelectedFeature] = useState(VENUE_FEATURES[0]);
  
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-[#4B21FF] via-[#C6FF00] to-[#00F0FF] bg-clip-text text-transparent">
          EXPERIENCE THE VENUE
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The world's first fully-immersive metaverse stadium. Infrastructure capacity: 250 million simultaneous connections.
          Powered by blockchain. This is what you're actually paying for.
        </p>
      </div>
      
      {/* Main Feature Display */}
      <div className="bg-[#0B0B0B] border-2 border-[#C6FF00] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(198,255,0,0.3)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-video lg:aspect-square bg-gradient-to-br from-purple-900 to-pink-900">
            <Image
              src={selectedFeature.image}
              alt={selectedFeature.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Details */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-6xl mb-4">{selectedFeature.icon}</div>
            <h3 className="text-4xl font-bold text-[#C6FF00] mb-4">
              {selectedFeature.title}
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              {selectedFeature.description}
            </p>
            
            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {selectedFeature.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C6FF00] rounded-full"></div>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-4 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(198,255,0,0.4)]">
              Secure Your Access
            </button>
          </div>
        </div>
      </div>
      
      {/* Feature Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {VENUE_FEATURES.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
            className={`bg-[#0B0B0B] rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 border-2 ${
              selectedFeature.id === feature.id
                ? 'border-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.5)]'
                : 'border-[#4B21FF]/30 hover:border-[#C6FF00]/50'
            }`}
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h4 className="font-bold text-white mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-400 line-clamp-2">
              {feature.description}
            </p>
          </button>
        ))}
      </div>
      
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#0B0B0B] border border-[#C6FF00]/30 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-[#C6FF00] mb-2">250 million</div>
          <div className="text-sm text-gray-400">Global Reach</div>
        </div>
        <div className="bg-[#0B0B0B] border border-[#00F0FF]/30 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-[#00F0FF] mb-2">50K+</div>
          <div className="text-sm text-gray-400">Capacity</div>
        </div>
        <div className="bg-[#0B0B0B] border border-[#4B21FF]/30 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-[#4B21FF] mb-2">100+</div>
          <div className="text-sm text-gray-400">Venue Sections</div>
        </div>
        <div className="bg-[#0B0B0B] border border-gray-700 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-white mb-2">24/7</div>
          <div className="text-sm text-gray-400">Access</div>
        </div>
      </div>
    </section>
  );
}
