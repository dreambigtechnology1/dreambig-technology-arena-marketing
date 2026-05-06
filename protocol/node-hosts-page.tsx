import Link from 'next/link';
import Navigation from '@/components/Navigation';
import NodeRoleBreakdown from '@/components/NodeRoleBreakdown';
import NodeServiceFeeEstimator from '@/components/NodeServiceFeeEstimator';
import TechnicalRequirementsTable from '@/components/TechnicalRequirementsTable';
import SetupWizard from '@/components/SetupWizard';
import ProgressFooter from '@/components/ProgressFooter';

export const metadata = {
  title: 'Node Hosts - Infrastructure Service Providers | InTown Metaverse',
  description: 'Turn your server into a venue pillar. Provide critical infrastructure services for 250M-capacity venue. Service fee structure: packet delivery, PoT validation, transaction processing, performance bonding.',
};

export default function NodeHostsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4B21FF]/20 via-[#00F0FF]/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#4B21FF] via-[#00F0FF] to-[#C6FF00] bg-clip-text text-transparent">
                The Venue Pillar
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Turn your server into critical infrastructure for a $1.9B event. Support 250M-capacity venue infrastructure and receive service fees for verified delivery.
            </p>

            {/* Key Metrics Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl border-2 border-[#00F0FF]/30 bg-gradient-to-br from-[#00F0FF]/10 to-transparent">
                <div className="text-sm text-gray-400 mb-2">Infrastructure Capacity</div>
                <div className="text-4xl font-bold text-[#00F0FF]">250M</div>
                <div className="text-sm text-gray-400 mt-1">Concurrent Slots</div>
              </div>
              <div className="p-6 rounded-xl border-2 border-[#C6FF00]/30 bg-gradient-to-br from-[#C6FF00]/10 to-transparent">
                <div className="text-sm text-gray-400 mb-2">Revenue Pool</div>
                <div className="text-4xl font-bold text-[#C6FF00]">$1.9B</div>
                <div className="text-sm text-gray-400 mt-1">Per Event</div>
              </div>
              <div className="p-6 rounded-xl border-2 border-[#4B21FF]/30 bg-gradient-to-br from-[#4B21FF]/10 to-transparent">
                <div className="text-sm text-gray-400 mb-2">Capital Required</div>
                <div className="text-4xl font-bold text-[#4B21FF]">$0</div>
                <div className="text-sm text-gray-400 mt-1">Use Existing Hardware</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#service-fees"
                className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] hover:scale-105 transition-transform"
              >
                View Service Fees
              </a>
              <a
                href="#requirements"
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#C6FF00] hover:bg-[#C6FF00]/10 transition-colors"
              >
                Infrastructure Requirements
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Node Host Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What is a Node Host?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your node isn't just a relay; it's a venue pillar powering the immersive experience for millions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept 1 */}
            <div className="p-8 rounded-2xl border-2 border-[#4B21FF]/30 bg-gradient-to-br from-[#4B21FF]/10 to-transparent">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-3">The Venue Pillar</h3>
              <p className="text-gray-300">
                Your node isn't just a relay; it's a venue pillar. Powers the immersive experience for millions and is critical infrastructure for the Multi Billion Dollar Economy.
              </p>
            </div>

            {/* Concept 2 */}
            <div className="p-8 rounded-2xl border-2 border-[#00F0FF]/30 bg-gradient-to-br from-[#00F0FF]/10 to-transparent">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Multi-Functional Stack</h3>
              <p className="text-gray-300">
                SFU Host (audio/video streaming), Data GPS (spatial awareness), and ATM Relay (transaction processing) all in one node.
              </p>
            </div>

            {/* Concept 3 */}
            <div className="p-8 rounded-2xl border-2 border-[#C6FF00]/30 bg-gradient-to-br from-[#C6FF00]/10 to-transparent">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Service Fee Payments</h3>
              <p className="text-gray-300">
                Compensated in Native Token for verified service delivery. Multiple automated fee structures with no middlemen or payment delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Node Roles Breakdown */}
      <NodeRoleBreakdown />

      {/* Service Fee Estimator */}
      <NodeServiceFeeEstimator />

      {/* Technical Requirements */}
      <TechnicalRequirementsTable />

      {/* Setup Wizard */}
      <SetupWizard />

      {/* Proof of Transport Explainer */}
      <section className="py-16 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 rounded-2xl border-2 border-[#00F0FF] bg-gradient-to-br from-[#00F0FF]/20 via-[#4B21FF]/10 to-transparent">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📦</div>
              <h2 className="text-4xl font-bold mb-4">Proof of Transport (PoT)</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A cryptographic receipt system that proves your node delivered sponsor ad data to users. <span className="text-[#C6FF00] font-semibold">Like UPS being paid per package delivered</span> — this is a consumable service, not an investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* How It Works */}
              <div>
                <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00F0FF] text-black flex items-center justify-center font-bold">1</span>
                    <div>
                      <div className="font-semibold">Ad Request</div>
                      <div className="text-sm text-gray-400">User's client requests sponsor ad from your node</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00F0FF] text-black flex items-center justify-center font-bold">2</span>
                    <div>
                      <div className="font-semibold">Delivery</div>
                      <div className="text-sm text-gray-400">Your node serves the ad (video, image, 3D model)</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00F0FF] text-black flex items-center justify-center font-bold">3</span>
                    <div>
                      <div className="font-semibold">Receipt</div>
                      <div className="text-sm text-gray-400">Client signs cryptographic receipt confirming delivery</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00F0FF] text-black flex items-center justify-center font-bold">4</span>
                    <div>
                      <div className="font-semibold">Validation</div>
                      <div className="text-sm text-gray-400">Your node submits receipt to PoT Validator contract</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00F0FF] text-black flex items-center justify-center font-bold">5</span>
                    <div>
                      <div className="font-semibold">Payout</div>
                      <div className="text-sm text-gray-400">Smart contract releases payment to your wallet</div>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <div className="font-semibold text-green-400 mb-2">✓ For Sponsors</div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 100% verified impressions (no fraud)</li>
                      <li>• Blockchain audit trail</li>
                      <li>• Real-time analytics</li>
                      <li>• Pay-per-impression model</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                    <div className="font-semibold text-blue-400 mb-2">✓ For Hosts</div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Direct payment for bandwidth</li>
                      <li>• Automated via smart contract</li>
                      <li>• No invoicing or payment delays</li>
                      <li>• Scales with event size</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Progress Footer */}
      <ProgressFooter />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] bg-clip-text text-transparent">
                InTown Metaverse
              </h3>
              <p className="text-gray-400 text-sm">
                Building the future of live events with decentralized infrastructure.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-[#C6FF00] transition-colors">Home</Link></li>
                <li><Link href="/economy" className="hover:text-[#C6FF00] transition-colors">Economy</Link></li>
                <li><Link href="/sponsors" className="hover:text-[#C6FF00] transition-colors">Sponsors</Link></li>
                <li><Link href="/promoters" className="hover:text-[#C6FF00] transition-colors">Promoters</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#C6FF00] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#C6FF00] transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-[#C6FF00] transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-[#C6FF00] transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>nodes@intownmetaverse.com</li>
                <li>Discord: #node-hosts</li>
                <li>Response: &lt;24 hours</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2026 InTown Metaverse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
