'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center"
          >
            <Image
              src="/img/logo_intown_metaverse.png"
              alt="InTown Metaverse"
              width={180}
              height={54}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Activate Genesis Stake Button */}
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] font-semibold hover:scale-105 transition-transform">
            Activate Genesis Stake
          </button>
        </div>
      </div>
    </header>
  );
}
