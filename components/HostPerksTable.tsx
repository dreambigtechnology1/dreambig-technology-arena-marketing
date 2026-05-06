'use client';

export default function HostPerksTable() {
  const perks = [
    {
      feature: 'Automated Settlement',
      benefit: 'No 30-day payout waits. Service fees are settled via smart contracts in real-time—removing administrative friction.',
      implementation: 'Native Token AMM',
      icon: '⚡',
      color: '#C6FF00'
    },
    {
      feature: 'Global Audience Engagement',
      benefit: '"Global Shoutouts" paid for by fans increase the event\'s reach—a tool for increasing the Network Health of your event.',
      implementation: 'Token Burn Mechanic',
      icon: '🚀',
      color: '#C6FF00'
    },
    {
      feature: 'Verified Networking',
      benefit: 'Orchestrators can invite "Whales" (Hedge funds, Brands) to private rooms for B2B deals—curating high-value connections.',
      implementation: 'ERC-4337 Account Abstraction',
      icon: '🤝',
      color: '#4B21FF'
    },
    {
      feature: 'Automated Dashboard',
      benefit: 'Deploy venue updates or "Sponsor Takeovers" via the automated workflow—your real-time, auditable control panel for event management.',
      implementation: 'CI-driven Reconciliation',
      icon: '⚙️',
      color: '#C6FF00'
    }
  ];
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Orchestrator <span className="text-[#C6FF00]">Tools</span> & Utilities
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Beyond service fees, DreamBIG Technology Arena orchestrators get exclusive operational tools 
          powered by cutting-edge blockchain infrastructure—emphasizing <span className="text-[#C6FF00] font-bold">Performance Efficiency</span>.
        </p>
      </div>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[#00F0FF]/20 via-[#C6FF00]/20 to-[#4B21FF]/20 border-2 border-[#C6FF00]/50">
              <th className="px-6 py-4 text-left text-lg font-bold text-white">Tool</th>
              <th className="px-6 py-4 text-left text-lg font-bold text-white">Orchestrator Utility</th>
              <th className="px-6 py-4 text-left text-lg font-bold text-white">Technical Implementation</th>
            </tr>
          </thead>
          <tbody>
            {perks.map((perk, index) => (
              <tr 
                key={index}
                className="border-b border-gray-800 hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{perk.icon}</div>
                    <div className="text-xl font-bold text-white">{perk.feature}</div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <p className="text-gray-300 leading-relaxed">{perk.benefit}</p>
                </td>
                <td className="px-6 py-6">
                  <div 
                    className="inline-block px-4 py-2 rounded-lg font-bold border-2"
                    style={{ 
                      borderColor: perk.color,
                      backgroundColor: `${perk.color}20`,
                      color: perk.color
                    }}
                  >
                    {perk.implementation}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {perks.map((perk, index) => (
          <div 
            key={index}
            className="bg-[#0B0B0B] border-2 rounded-xl p-6 hover:scale-105 transition-transform"
            style={{ borderColor: `${perk.color}50` }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-5xl">{perk.icon}</div>
              <div className="text-2xl font-bold text-white">{perk.feature}</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-2">Orchestrator Utility</div>
                <p className="text-gray-300 leading-relaxed">{perk.benefit}</p>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 mb-2">Technical Implementation</div>
                <div 
                  className="inline-block px-4 py-2 rounded-lg font-bold border-2"
                  style={{ 
                    borderColor: perk.color,
                    backgroundColor: `${perk.color}20`,
                    color: perk.color
                  }}
                >
                  {perk.implementation}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-2 border-[#00F0FF]/50 rounded-xl p-6">
          <div className="text-4xl mb-3">🌐</div>
          <h4 className="text-xl font-bold text-white mb-2">Performance Efficiency</h4>
          <p className="text-gray-300">
            No physical security costs or local permits. Your "security" is the 
            <span className="text-[#00F0FF] font-bold"> Stake-Weighted Reporting</span> system, 
            and your "permit" is the smart contract lease—pure operational efficiency.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#C6FF00]/10 to-transparent border-2 border-[#C6FF00]/50 rounded-xl p-6">
          <div className="text-4xl mb-3">📊</div>
          <h4 className="text-xl font-bold text-white mb-2">Auditable Proof of Work</h4>
          <p className="text-gray-300">
            With "push-based" automated sync, all event manifests and asset identities 
            are auditable. The <span className="text-[#C6FF00] font-bold">250 million verified user metrics</span> serve as 
            your Proof of Work—justifying every service fee you earn.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#4B21FF]/10 to-transparent border-2 border-[#4B21FF]/50 rounded-xl p-6">
          <div className="text-4xl mb-3">🎯</div>
          <h4 className="text-xl font-bold text-white mb-2">Massive Scale Operations</h4>
          <p className="text-gray-300">
            Unlike a physical stadium capped at 100k, DreamBIG Technology Arena leverages the 
            <span className="text-[#4B21FF] font-bold"> InTown Metaverse Protocol</span> to 
            deliver services to millions of concurrent users via P2P relay nodes.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#C6FF00]/10 to-transparent border-2 border-[#C6FF00]/50 rounded-xl p-6">
          <div className="text-4xl mb-3">💰</div>
          <h4 className="text-xl font-bold text-white mb-2">Recurring Service Model</h4>
          <p className="text-gray-300">
            Orchestrate multiple events per year on the same infrastructure. Each successful event compounds your 
            reputation and <span className="text-[#C6FF00] font-bold">increases future service fee potential</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
