'use client';

export default function PromoterGenesisLicense() {
  const tiers = [
    {
      name: 'The Believers',
      slots: 10,
      fee: '1%',
      color: '#00F0FF',
      icon: '⚡',
      badge: 'EARLY ADOPTERS'
    },
    {
      name: 'The Builders',
      slots: 10,
      fee: '3%',
      color: '#C6FF00',
      icon: '🔨',
      badge: 'ACTIVE CONTRIBUTORS'
    },
    {
      name: 'The Establishers',
      slots: 5,
      fee: '7%',
      color: '#4B21FF',
      icon: '👑',
      badge: 'PREMIUM TIER'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-block mb-6">
          <div className="px-6 py-2 bg-gradient-to-r from-[#00F0FF]/20 to-[#C6FF00]/20 border border-[#00F0FF]/30 rounded-full">
            <span className="text-[#00F0FF] font-bold">$0 Upfront</span>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-[#C6FF00] font-bold">Performance-Based</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The Genesis <span className="text-[#C6FF00]">Promoter License</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          To remove the liquidity barrier for homegrown creators, the Genesis Promoter License is <span className="text-[#C6FF00] font-bold">$0 upfront</span>. 
          You earn based on your tier of entry into the protocol.
        </p>
      </div>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#0B0B0B] to-transparent border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            style={{ 
              borderColor: `${tier.color}50`,
              boxShadow: `0 0 30px ${tier.color}20`
            }}
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div 
                className="px-4 py-1 text-black text-xs font-bold rounded-full"
                style={{ backgroundColor: tier.color }}
              >
                {tier.badge}
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 mt-4">
              <div 
                className="w-20 h-20 rounded-full border-2 flex items-center justify-center text-4xl"
                style={{ 
                  borderColor: tier.color,
                  backgroundColor: `${tier.color}20`
                }}
              >
                {tier.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white text-center mb-2">{tier.name}</h3>
            
            {/* Slots */}
            <div className="text-center mb-6">
              <div className="text-sm text-gray-400 mb-2">Available Slots</div>
              <div 
                className="text-4xl font-bold"
                style={{ color: tier.color }}
              >
                {tier.slots}
              </div>
            </div>

            {/* Fee Structure */}
            <div 
              className="border-2 rounded-lg p-4 mb-6"
              style={{ borderColor: `${tier.color}50`, backgroundColor: `${tier.color}10` }}
            >
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">Protocol Service Fee</div>
                <div 
                  className="text-3xl font-bold"
                  style={{ color: tier.color }}
                >
                  {tier.fee}
                </div>
                <div className="text-xs text-gray-500 mt-1">for life</div>
              </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2">
                <span style={{ color: tier.color }}>✓</span>
                <span className="text-sm text-gray-300">Transferable asset</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: tier.color }}>✓</span>
                <span className="text-sm text-gray-300">Lifetime service fee rate</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: tier.color }}>✓</span>
                <span className="text-sm text-gray-300">Social portfolio linking</span>
              </li>
            </ul>

            {/* CTA Button */}
            <button 
              className="w-full py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: tier.color,
                color: '#000',
                boxShadow: `0 0 20px ${tier.color}50`
              }}
            >
              Mint Genesis License
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
