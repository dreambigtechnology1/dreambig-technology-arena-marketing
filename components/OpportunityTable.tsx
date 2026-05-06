export default function OpportunityTable() {
  const opportunities = [
    {
      role: 'The Fan',
      icon: '🎮',
      howYouEarn: 'Engagement Rewards: Contributions to viral growth and event vitality through attendance and participation',
      brandElement: 'Electric Cyan UI',
      color: '[#00F0FF]'
    },
    {
      role: 'The Host',
      icon: '⚡',
      howYouEarn: 'Infrastructure Service Fees: Fulfillment of data delivery and GPS sync tasks via P2P relay nodes',
      brandElement: 'Primary Purple UI',
      color: '[#4B21FF]'
    },
    {
      role: 'The Whale',
      icon: '🐋',
      howYouEarn: 'Premium Utility Access: Enhanced networking tools and priority venue access for high-net-worth participants',
      brandElement: 'Electric Lime UI',
      color: '[#C6FF00]'
    },
    {
      role: 'The Sponsor',
      icon: '🏢',
      howYouEarn: 'Verified Impression Delivery: Media value based on PoT-verified brand reach via 250 million-capacity infrastructure',
      brandElement: 'Full Logo Branding',
      color: '[#4B21FF]'
    },
    {
      role: 'The Event Host',
      icon: '🎪',
      howYouEarn: '$1.925B per event: Tickets ($1.725B) + Sponsorships ($200 million) + 30% Platform Treasury',
      brandElement: 'Full Platform',
      color: '[#C6FF00]'
    }
  ];
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-[#4B21FF] to-[#C6FF00]">
            <th className="p-4 text-left text-white font-bold">Role</th>
            <th className="p-4 text-left text-white font-bold">How You Earn</th>
            <th className="p-4 text-left text-white font-bold">Brand/UX Element</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opp, index) => (
            <tr 
              key={index}
              className={`border-b border-gray-800 hover:bg-${opp.color}/10 transition-colors`}
            >
              <td className="p-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{opp.icon}</span>
                  <span className={`text-xl font-bold text-${opp.color}`}>{opp.role}</span>
                </div>
              </td>
              <td className="p-4 text-gray-300">{opp.howYouEarn}</td>
              <td className="p-4">
                <span className={`inline-block px-4 py-2 bg-${opp.color}/20 border border-${opp.color}/50 rounded-lg text-${opp.color} font-semibold`}>
                  {opp.brandElement}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Mobile View */}
      <div className="md:hidden space-y-4 mt-4">
        {opportunities.map((opp, index) => (
          <div 
            key={index}
            className={`bg-${opp.color}/10 border border-${opp.color}/30 rounded-lg p-4`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-3xl">{opp.icon}</span>
              <span className={`text-xl font-bold text-${opp.color}`}>{opp.role}</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="text-sm text-gray-500">How You Earn</div>
                <div className="text-gray-300">{opp.howYouEarn}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Brand Element</div>
                <span className={`inline-block px-3 py-1 bg-${opp.color}/20 border border-${opp.color}/50 rounded text-${opp.color} font-semibold text-sm`}>
                  {opp.brandElement}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
