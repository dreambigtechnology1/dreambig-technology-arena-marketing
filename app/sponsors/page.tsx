import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import SponsorshipBreakdown from '@/components/SponsorshipBreakdown';
import MediaValueCalculator from '@/components/MediaValueCalculator';
import ProgressFooter from '@/components/ProgressFooter';
import EmptyStadiumSection from '@/components/EmptyStadiumSection';
import PerformanceBasedFees from '@/components/PerformanceBasedFees';
import ArtistFunnelExplainer from '@/components/ArtistFunnelExplainer';
import VenueGallery from '@/components/VenueGallery';
import EconomyOverviewSection from '@/components/EconomyOverviewSection';

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-24">
      {/* Navigation */}
      <Navigation 
        buttonText="Sponsor Now"
        buttonTextMobile="Sponsor"
        buttonHref="mailto:sponsors@intownmetaverse.com"
      />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C6FF00] transition-colors text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Role Selection
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/stadium_interior.png"
            alt="Sponsorship Opportunities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative h-full min-h-[60vh] sm:min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#C6FF00] via-[#00F0FF] to-[#4B21FF] bg-clip-text text-transparent">
                Sponsor DreamBIG Technology Arena
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                The world's largest digital venue with <span className="text-[#4B21FF] font-bold">250M seat capacity</span>. <span className="text-[#C6FF00] font-bold">Zero ad fraud.</span> <span className="text-[#00F0FF] font-bold">Verified delivery</span> of every impression.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-[#C6FF00]/20 border border-[#C6FF00]/50 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                  <div className="text-xs sm:text-sm text-gray-400">Venue Capacity</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C6FF00]">250M</div>
                  <div className="text-xs text-gray-500">Seats</div>
                </div>
                <div className="bg-[#4B21FF]/20 border border-[#4B21FF]/50 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                  <div className="text-xs sm:text-sm text-gray-400">Potential Reach</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4B21FF]">2x</div>
                  <div className="text-xs text-gray-500">Super Bowl</div>
                </div>
                <div className="bg-[#00F0FF]/20 border border-[#00F0FF]/50 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                  <div className="text-xs sm:text-sm text-gray-400">Ad Fraud</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00F0FF]">0%</div>
                  <div className="text-xs text-gray-500">Verified</div>
                </div>
                <div className="bg-[#C6FF00]/20 border border-[#C6FF00]/50 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                  <div className="text-xs sm:text-sm text-gray-400">Media Value</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C6FF00]">$200M</div>
                  <div className="text-xs text-gray-500">per event</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a 
                  href="#brand-activations"
                  className="px-8 py-4 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(198,255,0,0.5)]"
                >
                  View Brand Opportunities
                </a>
                <a 
                  href="mailto:sponsors@intownmetaverse.com"
                  className="px-8 py-4 bg-white/10 border-2 border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
                >
                  Contact Sales Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Funnel Explainer */}
      <div className="py-8">
        <ArtistFunnelExplainer />
      </div>

      {/* Empty Stadium Section */}
      <div className="py-8">
        <EmptyStadiumSection />
      </div>

      {/* Brand Activations Section */}
      <section id="brand-activations" className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent via-[#4B21FF]/5 to-transparent">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#C6FF00]">Brand Activations</span> & Commerce Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our branded kiosks process real transactions—from avatar fashion to physical food delivery. Integrate your brand with the next generation of digital commerce.
          </p>
        </div>

        {/* Featured Brand Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Coinbase Example */}
          <div className="bg-gradient-to-br from-[#0052FF]/20 to-transparent border-2 border-[#0052FF]/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <div className="relative h-64 w-full">
              <Image
                src="/img/stadium_concourse_coinbase.png"
                alt="Coinbase ATM Integration"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#0052FF] rounded-full flex items-center justify-center text-3xl font-bold text-white">
                  C
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Coinbase</h3>
                  <p className="text-sm text-gray-400">Crypto Exchange Integration</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="text-[#00F0FF] font-bold">Payment Gateway Integration:</span> Fans convert fiat to crypto with seamless one-click checkout. 
                Coinbase logo on every transaction. Zero friction purchases that maximize conversion.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>Point-of-Sale integration with Coinbase branding</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>One-click transactions for fans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>Branded avatar accessories as consumables</span>
                </div>
              </div>
            </div>
          </div>

          {/* Yeezy Example */}
          <div className="bg-gradient-to-br from-gray-700/20 to-transparent border-2 border-gray-500/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <div className="relative h-64 w-full">
              <Image
                src="/img/stadium_concourse_yeezy.png"
                alt="Yeezy Fashion Store"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  YZY
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Yeezy</h3>
                  <p className="text-sm text-gray-400">Fashion & Avatar Apparel</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="text-[#00F0FF] font-bold">Digital Shopping Experience:</span> Limited-edition Yeezy sneakers for avatars. 
                Each purchase includes digital fashion + proof of ownership. 250 million potential customers, instant checkout.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>Consumable avatar Yeezy Boost 350 V2</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>3D try-on with instant purchase</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>Digital receipt for authenticity</span>
                </div>
              </div>
            </div>
          </div>

          {/* DoorDash/Uber Eats Concierge */}
          <div className="bg-gradient-to-br from-[#FF3008]/20 to-transparent border-2 border-[#FF3008]/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <div className="relative h-64 w-full">
              <Image
                src="/img/stadium_concourse_full.png"
                alt="Virtual Concierge Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF3008] to-[#06C167] rounded-full flex items-center justify-center text-3xl">
                  🍔
                </div>
                <div>
                  <h3 className="text-2xl font-bold">DoorDash & Uber Eats</h3>
                  <p className="text-sm text-gray-400">Virtual Concierge Services</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="text-[#00F0FF] font-bold">Physical Food Ordering Integration:</span> Fan clicks branded kiosk → 
                Transaction processed seamlessly → Real food arrives at fan's home. Bridge digital and physical commerce.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>Branded kiosk with custom UI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>Physical delivery to fan's location</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>In-game delivery tracking + branded items</span>
                </div>
              </div>
            </div>
          </div>

          {/* AMIRI Store */}
          <div className="bg-gradient-to-br from-[#000000]/40 to-transparent border-2 border-white/30 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <div className="relative h-64 w-full">
              <Image
                src="/img/stadium_concourse_amiri.png"
                alt="AMIRI Luxury Boutique"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-900 border-2 border-white/50 rounded-full flex items-center justify-center text-xl font-bold text-white">
                  AMIRI
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AMIRI</h3>
                  <p className="text-sm text-gray-400">Luxury Fashion Boutique</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="text-[#00F0FF] font-bold">Luxury Commerce Experience:</span> Full 3D AMIRI boutique in VIP lounge. 
                High-net-worth attendees purchase exclusive avatar clothing. Each item includes digital fashion + redeemable physical merchandise.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>3D boutique with seamless checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>Consumable avatar leather jackets & denim</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6FF00]">✓</span>
                  <span>Physical redemption via digital receipt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-[#4B21FF]/20 via-[#C6FF00]/20 to-[#00F0FF]/20 border-2 border-[#C6FF00] rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Activate Your <span className="text-[#C6FF00]">Brand Stake</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Not an investment. Not a donation. A <span className="text-[#C6FF00] font-bold">verified infrastructure capacity booking</span> with 250 Million seat venue and guaranteed proof of delivery. Secure stakeholder status in the digital venue economy.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:sponsors@intownmetaverse.com"
              className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] text-black rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Contact Sales Team
            </a>
            <Link 
              href="/"
              className="px-8 py-4 bg-white/10 border-2 border-[#4B21FF]/50 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
            >
              View Genesis Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Progress Footer */}
      <ProgressFooter />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 mt-12 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#C6FF00]">Sponsorship</h3>
              <p className="text-gray-400 text-sm">
                Sponsorship opportunities in the world's largest digital venue. 
                250 Million seat capacity. $200 million in premium media inventory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#00F0FF]">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#brand-activations" className="hover:text-[#C6FF00] transition-colors">Brand Activations</a></li>
                <li><a href="mailto:sponsors@intownmetaverse.com" className="hover:text-[#C6FF00] transition-colors">Contact Sales</a></li>
                <li><Link href="/" className="hover:text-[#C6FF00] transition-colors">Genesis Campaign</Link></li>
                <li><Link href="/fans" className="hover:text-[#C6FF00] transition-colors">Fan Experience</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#4B21FF]">Contact</h3>
              <p className="text-gray-400 text-sm">
                For enterprise sponsorship inquiries:<br/>
                <a href="mailto:sponsors@intownmetaverse.com" className="text-[#C6FF00] hover:underline">
                  sponsors@intownmetaverse.com
                </a>
              </p>
            </div>
          </div>
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>© 2026 InTown Metaverse. All rights reserved.</p>
            <p className="mt-2">Built on Ethereum. Powered by the community.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
