'use client';

import { useState } from 'react';
import Image from 'next/image';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/img/stadium_exterior.png',
    title: 'Stadium Exterior',
    category: 'Architecture'
  },
  {
    id: 2,
    src: '/img/stadium_interior.png',
    title: 'Main Arena',
    category: 'Performance Space'
  },
  {
    id: 3,
    src: '/img/stadium_vip_lounge.png',
    title: 'VIP Lounge',
    category: 'Premium Access'
  },
  {
    id: 4,
    src: '/img/stadium_vip_lounge_2.png',
    title: 'VIP Lounge 2',
    category: 'Premium Access'
  },
  {
    id: 5,
    src: '/img/stadium_concourse_full.png',
    title: 'Main Concourse',
    category: 'Social Spaces'
  },
  {
    id: 6,
    src: '/img/stadium_concourse_coinbase.png',
    title: 'Coinbase Activation',
    category: 'Brand Experiences'
  },
  {
    id: 7,
    src: '/img/stadium_concourse_amiri.png',
    title: 'Amiri Lounge',
    category: 'Brand Experiences'
  },
  {
    id: 8,
    src: '/img/stadium_concourse_yeezy.png',
    title: 'Yeezy Experience',
    category: 'Brand Experiences'
  },
];

export default function VenueGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#C6FF00] to-[#00F0FF] bg-clip-text text-transparent">
          🎨 VENUE GALLERY
        </h2>
        <p className="text-gray-400">
          Explore every corner of the metaverse's most advanced stadium
        </p>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-square bg-[#0B0B0B] rounded-xl overflow-hidden border-2 border-[#4B21FF]/30 hover:border-[#C6FF00] transition-all duration-300 hover:scale-105"
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs text-[#C6FF00] font-semibold mb-1">
                  {image.category}
                </div>
                <div className="text-sm font-bold text-white">
                  {image.title}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#C6FF00] text-4xl font-bold transition-colors"
            >
              ×
            </button>
            
            {/* Image */}
            <div className="relative aspect-video bg-[#0B0B0B] rounded-2xl overflow-hidden border-2 border-[#C6FF00] shadow-[0_0_50px_rgba(198,255,0,0.5)]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Info */}
            <div className="mt-4 text-center">
              <div className="text-sm text-[#C6FF00] font-semibold mb-1">
                {selectedImage.category}
              </div>
              <div className="text-2xl font-bold text-white">
                {selectedImage.title}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
