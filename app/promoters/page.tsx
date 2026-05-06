import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import OperationalEfficiencyGrid from '@/components/OperationalEfficiencyGrid';
import ManagedServiceFulfillment from '@/components/ManagedServiceFulfillment';
import PerformancePipeline from '@/components/PerformancePipeline';
import PromoterGenesisLicense from '@/components/PromoterGenesisLicense';
import ProgressFooter from '@/components/ProgressFooter';

export default function PromotersPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-24">
      {/* Navigation */}
      <Navigation 
        buttonText="Mint Event License"
        buttonTextMobile="Mint License"
        buttonHref="#genesis"
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

      {/* Hero Section - The Infrastructure Lead */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/stadium_interior.png"
            alt="Infrastructure Lead"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative h-full min-h-[60vh] sm:min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00F0FF] via-[#C6FF00] to-[#4B21FF] bg-clip-text text-transparent">
                THE INFINITE VENUE
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                Stop renting space, start owning capacity. The world's first 
                <span className="text-[#00F0FF] font-bold"> scalable 250 million seat Digital Arena </span> 
                is now open for <span className="text-[#C6FF00] font-bold">activation</span>.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-[#00F0FF]/20 border border-[#00F0FF]/50 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                  <div className="text-xs sm:text-sm text-gray-400">Concurrent Fans</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00F0FF]">250M</div>
                  <div className="text-xs text-gray-500">Seats</div>
                </div>
                <div className="bg-[#C6FF00]/20 border border-[#C6FF00]/50 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                  <div className="text-xs sm:text-sm text-gray-400">Per-Event Economy</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C6FF00]">Multi-B</div>
                  <div className="text-xs text-gray-500">Dollar Scale</div>
                </div>
                <div className="bg-[#4B21FF]/20 border border-[#4B21FF]/50 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                  <div className="text-xs sm:text-sm text-gray-400">Physical Overhead</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4B21FF]">Zero</div>
                  <div className="text-xs text-gray-500">Infrastructure</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#genesis"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] rounded-lg font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.5)] text-center"
                >
                  Mint Genesis License
                </a>
                <a
                  href="#pipeline"
                  className="px-8 py-4 bg-white/10 border-2 border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
                >
                  View Tech Stack
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Efficiency (3-Pillar Advantage) */}
      <section className="container mx-auto px-4 py-16">
        <OperationalEfficiencyGrid />
      </section>

      {/* Managed Service Fulfillment */}
      <section className="container mx-auto px-4 py-16">
        <ManagedServiceFulfillment />
      </section>

      {/* The Performance Pipeline */}
      <section id="pipeline" className="container mx-auto px-4 py-16">
        <PerformancePipeline />
      </section>

      {/* The Genesis License */}
      <section id="genesis" className="container mx-auto px-4 py-16">
        <PromoterGenesisLicense />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#00F0FF]/20 via-[#C6FF00]/20 to-[#4B21FF]/20 border-2 border-[#C6FF00] rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#C6FF00]">Host Your Event Now</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the next generation of event architects. Execute world-class events with
            <span className="text-[#C6FF00] font-bold"> $0 upfront</span> and
            <span className="text-[#C6FF00] font-bold"> performance-based compensation</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#genesis"
              className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Mint Genesis License
            </a>
            <Link
              href="/economy"
              className="px-8 py-4 bg-white/10 border-2 border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors inline-block"
            >
              View Full Economy
            </Link>
            <Link
              href="/sponsors"
              className="px-8 py-4 bg-white/10 border-2 border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors inline-block"
            >
              Sponsorship Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Progress Footer */}
      <ProgressFooter />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#C6FF00]">Event Architects</h3>
              <p className="text-gray-400 text-sm">
                Host the world's largest digital events. Execute world-class shows for 250 million concurrent fans
                with $0 upfront and performance-based compensation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#00F0FF]">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#genesis" className="hover:text-[#C6FF00] transition-colors">Genesis License</a></li>
                <li><a href="#pipeline" className="hover:text-[#C6FF00] transition-colors">Tech Stack</a></li>
                <li><Link href="/economy" className="hover:text-[#C6FF00] transition-colors">Full Economy</Link></li>
                <li><Link href="/sponsors" className="hover:text-[#C6FF00] transition-colors">Sponsorship</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#4B21FF]">Contact</h3>
              <p className="text-gray-400 text-sm">
                For event architect inquiries:<br />
                <a href="mailto:architects@intownmetaverse.com" className="text-[#C6FF00] hover:underline">
                  architects@intownmetaverse.com
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
