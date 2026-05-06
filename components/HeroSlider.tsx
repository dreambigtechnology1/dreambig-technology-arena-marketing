'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SLIDES = [
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

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-3xl">
                {/* Icon */}
                <div className="text-8xl mb-6 animate-bounce-slow">
                  {slide.icon}
                </div>

                {/* Title */}
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C6FF00] via-[#00F0FF] to-[#4B21FF] bg-clip-text text-transparent">
                  {slide.title}
                </h2>

                {/* Description */}
                <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed">
                  {slide.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-10">
                  {slide.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#C6FF00] rounded-full"></div>
                      <span className="text-lg text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="px-10 py-5 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(198,255,0,0.5)]">
                  Activate Genesis Stake
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-black/70 border-2 border-[#C6FF00]/50 hover:border-[#C6FF00] rounded-full flex items-center justify-center transition-all group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-[#C6FF00] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-black/70 border-2 border-[#C6FF00]/50 hover:border-[#C6FF00] rounded-full flex items-center justify-center transition-all group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-[#C6FF00] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-[#C6FF00] w-8 shadow-[0_0_10px_rgba(198,255,0,0.8)]'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Tagline */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-center max-w-5xl px-4">
        <p className="text-xl md:text-2xl text-white font-semibold">
          The world's first fully-immersive metaverse stadium. Infrastructure capacity: 250 million simultaneous connections.
        </p>
        <p className="text-lg md:text-xl text-[#C6FF00] font-bold mt-2">
          You're not buying a ticket. You're activating stakeholder status in a sovereign economic zone.
        </p>
      </div>
    </section>
  );
}
