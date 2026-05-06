import Link from 'next/link';

export default function EconomyOverviewSection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-[#C6FF00]">DreamBIG Technology Arena</span> Economy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A $1.9B per-event ecosystem where every participant earns, creates, and builds value.
          </p>
        </div>

        {/* Key Economic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#C6FF00]/10 to-transparent border border-[#C6FF00]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#C6FF00] mb-2">$1.9B</div>
            <div className="text-sm text-gray-400">Per Event Revenue</div>
          </div>
          <div className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#00F0FF] mb-2">250 million</div>
            <div className="text-sm text-gray-400">Venue Capacity</div>
          </div>
          <div className="bg-gradient-to-br from-[#4B21FF]/10 to-transparent border border-[#4B21FF]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#4B21FF] mb-2">12+</div>
            <div className="text-sm text-gray-400">Revenue Streams</div>
          </div>
          <div className="bg-gradient-to-br from-[#C6FF00]/10 to-transparent border border-[#C6FF00]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#C6FF00] mb-2">52</div>
            <div className="text-sm text-gray-400">Events/Year Potential</div>
          </div>
        </div>

        {/* Three Economic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-2 border-[#00F0FF]/30 rounded-xl p-6">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold text-white mb-3">Fan Economy</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Fans earn tokens through participation, unlock VIP experiences, and build reputation in the digital venue.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#C6FF00]/10 to-transparent border-2 border-[#C6FF00]/30 rounded-xl p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Infrastructure Economy</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Promoters and hosts earn service fees by orchestrating events and providing bandwidth infrastructure.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#4B21FF]/10 to-transparent border-2 border-[#4B21FF]/30 rounded-xl p-6">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white mb-3">Brand Economy</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sponsors access 250 Million seat capacity with zero ad fraud and cryptographic proof of delivery.
            </p>
          </div>
        </div>

        {/* CTA to Full Economy Page */}
        <div className="text-center">
          <Link 
            href="/economy"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(198,255,0,0.5)]"
          >
            Explore Full Economy →
          </Link>
        </div>
      </div>
    </section>
  );
}
