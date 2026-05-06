import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import EconomicLayerCard from '@/components/EconomicLayerCard';
import OpportunityTable from '@/components/OpportunityTable';
import RevenueCalculator from '@/components/RevenueCalculator';
import LiveActivityFeed from '@/components/LiveActivityFeed';
import ProgressFooter from '@/components/ProgressFooter';

export default function EconomyPage() {
  const economicLayers = [
    {
      title: 'Venue Operations & Staffing',
      icon: '💼',
      description: 'Professional roles powering the digital venue',
      features: [
        'Virtual Concierges: Provide high-touch support, compensated from Community Treasury',
        'Event Staff: Manage venue operations and earn service fees',
        'Asset Creators: Design and sell branded merchandise using custom designs'
      ],
      color: '[#00F0FF]',
      uiElement: 'Electric Cyan UI'
    },
    {
      title: 'High-Net-Worth Professional Networking',
      icon: '🤝',
      description: 'Premium utility for verified high-value participants',
      features: [
        'Professional Networking Hubs: Priority access gated by wallet metadata and NFT holdings',
        'The Big Screen: Purchase broadcast slots with 250 Million seat venue capacity',
        'Curated Experiences: Automatic sorting into high-net-worth networking rooms'
      ],
      color: '[#C6FF00]',
      uiElement: 'Electric Lime UI'
    },
    {
      title: 'Venue & Brand Partnerships',
      icon: '🏢',
      description: 'The stadium as a revenue-generating venue',
      features: [
        'Venue Operations: DreamBIG Technology Arena generates operational revenue in Native Token',
        'Brand Partnerships: Companies secure naming rights and Jumbotron real estate as NFTs',
        'Commerce Integration: In-venue commerce systems for seamless transactions'
      ],
      color: '[#4B21FF]',
      uiElement: 'Primary Purple UI'
    }
  ];
  
  return (
    <main className="min-h-screen bg-black text-white pb-24">
      {/* Navigation */}
      <Navigation />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C6FF00] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Role Selection
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/stadium_interior.png"
            alt="Stadium Economy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C6FF00] via-[#00F0FF] to-[#4B21FF] bg-clip-text text-transparent">
                DreamBIG Technology Arena Economy
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed">
                A thriving economic ecosystem where every user contributes to venue operations and receives compensation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#C6FF00]/20 border border-[#C6FF00]/50 rounded-lg px-6 py-3">
                  <div className="text-sm text-gray-400">Per Event Revenue</div>
                  <div className="text-3xl font-bold text-[#C6FF00]">$1.9B</div>
                </div>
                <div className="bg-[#00F0FF]/20 border border-[#00F0FF]/50 rounded-lg px-6 py-3">
                  <div className="text-sm text-gray-400">Venue Capacity</div>
                  <div className="text-3xl font-bold text-[#00F0FF]">250 million</div>
                  <div className="text-xs text-gray-500">Seats</div>
                </div>
                <div className="bg-[#4B21FF]/20 border border-[#4B21FF]/50 rounded-lg px-6 py-3">
                  <div className="text-sm text-gray-400">Revenue Streams</div>
                  <div className="text-3xl font-bold text-[#4B21FF]">12+</div>
                </div>
                <div className="bg-[#C6FF00]/20 border border-[#C6FF00]/50 rounded-lg px-6 py-3">
                  <div className="text-sm text-gray-400">Events Per Year</div>
                  <div className="text-3xl font-bold text-[#C6FF00]">52</div>
                  <div className="text-xs text-gray-500">potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Layers Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three <span className="text-[#C6FF00]">Economic Layers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The InTown Metaverse isn't just a place to watch; it's a place to operate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {economicLayers.map((layer, index) => (
            <EconomicLayerCard key={index} {...layer} />
          ))}
        </div>
      </section>

      {/* Economic Opportunity Table */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Economic <span className="text-[#C6FF00]">Opportunity</span> Breakdown
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four distinct roles, each with unique earning mechanisms and brand experiences.
          </p>
        </div>
        
        <div className="bg-[#0B0B0B] border-2 border-[#C6FF00]/50 rounded-2xl p-6 md:p-8">
          <OpportunityTable />
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#4B21FF]/20 via-[#C6FF00]/20 to-[#00F0FF]/20 border-2 border-[#C6FF00] rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#C6FF00]">$200 million</span> in Sponsorship Opportunities
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Titan-class ad slots and immersive brand presence. 250 million-capacity infrastructure. 2x Super Bowl capacity at competitive pricing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-black/50 rounded-lg p-6">
              <div className="text-4xl mb-2">📺</div>
              <div className="text-2xl font-bold text-[#4B21FF] mb-1">$130M</div>
              <div className="text-sm text-gray-400">Jumbotron Ad Slots</div>
            </div>
            <div className="bg-black/50 rounded-lg p-6">
              <div className="text-4xl mb-2">🎪</div>
              <div className="text-2xl font-bold text-[#00F0FF] mb-1">$70M</div>
              <div className="text-sm text-gray-400">Immersive Presence</div>
            </div>
            <div className="bg-black/50 rounded-lg p-6">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-[#C6FF00] mb-1">250 million</div>
              <div className="text-sm text-gray-400">Synchronized Reach</div>
            </div>
          </div>
          
          <Link 
            href="/sponsors"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(198,255,0,0.5)]"
          >
            Explore Sponsorship Opportunities →
          </Link>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Calculate Your <span className="text-[#C6FF00]">Earnings</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estimate your potential revenue based on the $1.925B per-event model.
          </p>
        </div>
        
        <RevenueCalculator />
      </section>

      {/* Live Activity Feed */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <LiveActivityFeed />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#4B21FF]/20 via-[#C6FF00]/20 to-[#00F0FF]/20 border-2 border-[#C6FF00] rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join the <span className="text-[#C6FF00]">Economy</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a sponsor, promoter, creator, or fan, there's a place for you in the DreamBIG Technology Arena economy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/sponsors" className="px-8 py-4 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(198,255,0,0.5)]">
              Become a Sponsor
            </Link>
            <Link href="/promoters" className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#C6FF00] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.5)]">
              Promote Events
            </Link>
            <Link href="/fans" className="px-8 py-4 bg-gradient-to-r from-[#C6FF00] to-[#4B21FF] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(75,33,255,0.5)]">
              Experience as a Fan
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
              <h3 className="text-xl font-bold mb-4 text-[#C6FF00]">About the Economy</h3>
              <p className="text-gray-400 text-sm">
                DreamBIG Technology Arena is a thriving economic ecosystem with $1.9B in potential value per event, 
                powered by 250 Million seat venue capacity and secured by blockchain technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#00F0FF]">Revenue Streams</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Ticket Sales & VIP Access</li>
                <li>• Marketplace Commissions (Creators)</li>
                <li>• Sponsorship & Advertising</li>
                <li>• Brand Partnerships</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#4B21FF]">Get Started</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><Link href="/" className="hover:text-[#C6FF00] transition-colors">Genesis Campaign</Link></li>
                <li><Link href="/economy" className="hover:text-[#C6FF00] transition-colors">Economy Overview</Link></li>
                <li><a href="#calculator" className="hover:text-[#C6FF00] transition-colors">Revenue Calculator</a></li>
                <li><a href="#" className="hover:text-[#C6FF00] transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>© 2026 InTown Metaverse. All rights reserved.</p>
            <p className="mt-2">Built on Ethereum. Powered by the community. Secured by technology.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
