'use client';

export default function ManagedServiceFulfillment() {
  const services = [
    {
      title: 'Access Pass Fulfillment',
      icon: '🎫',
      color: '#00F0FF',
      description: 'Managing the high-velocity distribution and minting of entry rights.',
      details: [
        'Real-time inventory management',
        'Dynamic pricing controls',
        'Automated mint process',
        'Protocol fee settlement'
      ]
    },
    {
      title: 'Premium Experience Curation',
      icon: '🐋',
      color: '#C6FF00',
      description: 'Orchestrating "Whale Hubs" and exclusive celebrity proximity zones.',
      details: [
        'VIP lounge curation',
        'Status-gated environments',
        'High-value networking',
        'Wallet metadata verification'
      ]
    },
    {
      title: 'Brand Inventory Management',
      icon: '📺',
      color: '#4B21FF',
      description: 'Executing sponsor takeovers and 3D kiosk deployments.',
      details: [
        '3D ad slot management',
        'Naming rights execution',
        'Asset integrity verification',
        'Sponsor dashboard access'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Event Service <span className="text-[#C6FF00]">Fulfillment</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Promoters manage the Multi-Billion Dollar event flow through these key delivery streams
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0B0B0B] border-2 rounded-xl p-6 hover:scale-105 transition-transform"
            style={{ borderColor: `${service.color}50` }}
          >
            {/* Icon and Title */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>

            {/* Details List */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              {service.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: service.color }}
                  ></div>
                  <span className="text-sm text-gray-400">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
