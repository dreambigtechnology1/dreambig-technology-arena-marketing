'use client';

import { useState } from 'react';

export default function NodeServiceFeeEstimator() {
  const [serviceType, setServiceType] = useState<'sfu' | 'gps' | 'atm'>('sfu');

  const serviceFees = {
    sfu: {
      name: 'SFU Host (Audio/Video Streaming)',
      icon: '🎥',
      baseRate: '$0.05 per minute per user',
      peakMultiplier: '2x during peak events',
      estimatedMonthly: '$15,000 - $50,000',
      description: 'Stream audio and video for immersive experiences',
      metrics: [
        { label: 'Concurrent Users', value: '500-2,000' },
        { label: 'Bandwidth Required', value: '1-5 Gbps' },
        { label: 'Latency Target', value: '<100ms' },
        { label: 'Uptime Required', value: '99.9%' }
      ]
    },
    gps: {
      name: 'Data GPS (Spatial Awareness)',
      icon: '📍',
      baseRate: '$0.02 per position update',
      peakMultiplier: '1.5x during peak events',
      estimatedMonthly: '$8,000 - $25,000',
      description: 'Track and relay user positions in the metaverse',
      metrics: [
        { label: 'Updates Per Second', value: '10,000-50,000' },
        { label: 'Bandwidth Required', value: '500 Mbps - 2 Gbps' },
        { label: 'Latency Target', value: '<50ms' },
        { label: 'Uptime Required', value: '99.9%' }
      ]
    },
    atm: {
      name: 'ATM Relay (Transaction Processing)',
      icon: '💳',
      baseRate: '0.1% of transaction value',
      peakMultiplier: '1.2x during peak events',
      estimatedMonthly: '$20,000 - $100,000',
      description: 'Process and validate blockchain transactions',
      metrics: [
        { label: 'Transactions Per Hour', value: '1,000-10,000' },
        { label: 'Bandwidth Required', value: '100-500 Mbps' },
        { label: 'Latency Target', value: '<200ms' },
        { label: 'Uptime Required', value: '99.99%' }
      ]
    }
  };

  const currentService = serviceFees[serviceType];

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-black/50" id="service-fees">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Service Fee Structure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your node role and see the service fees you'll earn for verified delivery.
          </p>
        </div>

        {/* Service Type Selector */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => setServiceType('sfu')}
            className={`px-6 py-4 rounded-xl font-bold text-lg transition-all ${
              serviceType === 'sfu'
                ? 'bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] scale-105'
                : 'border-2 border-gray-700 hover:border-[#4B21FF]'
            }`}
          >
            🎥 SFU Host
          </button>
          <button
            onClick={() => setServiceType('gps')}
            className={`px-6 py-4 rounded-xl font-bold text-lg transition-all ${
              serviceType === 'gps'
                ? 'bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] scale-105'
                : 'border-2 border-gray-700 hover:border-[#00F0FF]'
            }`}
          >
            📍 Data GPS
          </button>
          <button
            onClick={() => setServiceType('atm')}
            className={`px-6 py-4 rounded-xl font-bold text-lg transition-all ${
              serviceType === 'atm'
                ? 'bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] scale-105'
                : 'border-2 border-gray-700 hover:border-[#C6FF00]'
            }`}
          >
            💳 ATM Relay
          </button>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Service Info */}
          <div className="p-8 rounded-2xl border-2 border-[#00F0FF]/30 bg-gradient-to-br from-[#00F0FF]/10 to-transparent">
            <div className="text-6xl mb-4">{currentService.icon}</div>
            <h3 className="text-3xl font-bold mb-4">{currentService.name}</h3>
            <p className="text-gray-300 mb-6">{currentService.description}</p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-black/30">
                <div className="text-sm text-gray-400 mb-1">Base Rate</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{currentService.baseRate}</div>
              </div>
              <div className="p-4 rounded-lg bg-black/30">
                <div className="text-sm text-gray-400 mb-1">Peak Multiplier</div>
                <div className="text-2xl font-bold text-[#4B21FF]">{currentService.peakMultiplier}</div>
              </div>
              <div className="p-4 rounded-lg bg-black/30">
                <div className="text-sm text-gray-400 mb-1">Estimated Monthly Revenue</div>
                <div className="text-2xl font-bold text-[#00F0FF]">{currentService.estimatedMonthly}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Technical Requirements */}
          <div className="p-8 rounded-2xl border-2 border-[#4B21FF]/30 bg-gradient-to-br from-[#4B21FF]/10 to-transparent">
            <h3 className="text-2xl font-bold mb-6">Technical Requirements</h3>
            
            <div className="space-y-4">
              {currentService.metrics.map((metric, index) => (
                <div key={index} className="p-4 rounded-lg bg-black/30 border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{metric.label}</span>
                    <span className="text-lg font-bold text-white">{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-transparent border border-green-500/30">
              <p className="text-sm text-gray-300">
                ✓ <span className="font-semibold">Payment Method:</span> Automated smart contract payments in native ITMV tokens. No invoicing, no delays.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Role Bonus */}
        <div className="mt-12 p-8 rounded-2xl border-2 border-[#C6FF00] bg-gradient-to-br from-[#C6FF00]/20 via-[#4B21FF]/10 to-transparent">
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold mb-4">Multi-Role Bonus</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Run all three services on one node and earn a <span className="text-[#C6FF00] font-bold">20% bonus</span> on all service fees. Plus, unlock priority routing and higher reputation scores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="p-4 rounded-lg bg-black/30">
                <div className="text-sm text-gray-400 mb-1">Combined Monthly Potential</div>
                <div className="text-3xl font-bold text-[#C6FF00]">$50,000 - $200,000+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
