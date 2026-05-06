'use client';

import { useState } from 'react';

export default function PromoterEarningsBreakdown() {
  const [selectedStream, setSelectedStream] = useState<'tickets' | 'whale' | 'sponsorship'>('tickets');
  
  const revenueStreams = {
    tickets: {
      title: 'Access Pass Fulfillment',
      total: '$1.2 Billion',
      color: '#00F0FF',
      icon: '🎫',
      details: [
        {
          name: 'GA Access (17.5M Tickets)',
          description: 'Payment for delivering entry rights to 17.5M fans. Orchestrators manage the $50–$100 mint process, with a small protocol fee supporting the Node Provider Pool.',
          revenue: '$875M',
          percentage: '73%'
        },
        {
          name: 'Dynamic Pricing Management',
          description: 'Using the live Real-Time Inventory ticker, orchestrators adjust pricing as capacity fills—a service fee for managing demand and maximizing venue utilization.',
          revenue: '$325M',
          percentage: '27%'
        }
      ]
    },
    whale: {
      title: 'Premium Experience Service',
      total: '$500 Million',
      color: '#C6FF00',
      icon: '🐋',
      details: [
        {
          name: 'VIP & Status Gating',
          description: 'Fees for managing high-value social networking and status environments. "Floor" and "VIP Lounge" access is gated by Wallet Metadata—orchestrators earn for curating these premium spaces.',
          revenue: '$300M',
          percentage: '60%'
        },
        {
          name: 'Bling & Wearables',
          description: 'Compensation for hosting branded assets in-venue. A percentage of every item sold (using the brand\'s Geometric Patterns) flows to the orchestrator as a platform service fee.',
          revenue: '$200 million',
          percentage: '40%'
        }
      ]
    },
    sponsorship: {
      title: 'Brand Inventory Management',
      total: '$200 Million',
      color: '#4B21FF',
      icon: '📺',
      details: [
        {
          name: 'The Jumbotron Inventory',
          description: 'Compensation for hosting and verifying brand assets. Orchestrators manage 3D ad slots and naming rights deals, earning service fees for maintaining brand integrity.',
          revenue: '$130M',
          percentage: '65%'
        },
        {
          name: 'ATM Swap Service Fee',
          description: 'A small percentage of every ATM-to-AMM swap (ETH to Native Token) compensates the orchestrator for maintaining the venue\'s economic infrastructure.',
          revenue: '$70M',
          percentage: '35%'
        }
      ]
    }
  };
  
  const currentStream = revenueStreams[selectedStream];
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Service Fee <span className="text-[#C6FF00]">Allocation</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          Based on <span className="text-[#C6FF00] font-bold">$1.9 Billion</span> in total economic activity managed for a marquee event, 
          here's how service fees are allocated to orchestrators for successful event fulfillment.
        </p>
        
        {/* Total Revenue Display */}
        <div className="inline-flex items-center bg-gradient-to-r from-[#00F0FF]/20 via-[#C6FF00]/20 to-[#4B21FF]/20 border-2 border-[#C6FF00] rounded-lg px-8 py-4">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Total Economic Activity Managed</div>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#00F0FF] via-[#C6FF00] to-[#4B21FF] bg-clip-text text-transparent">
              $1.9B
            </div>
          </div>
        </div>
      </div>
      
      {/* Revenue Stream Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setSelectedStream('tickets')}
          className={`p-6 rounded-xl border-2 transition-all ${
            selectedStream === 'tickets'
              ? 'bg-[#00F0FF]/20 border-[#00F0FF] scale-105 shadow-[0_0_30px_rgba(0,240,255,0.5)]'
              : 'bg-[#0B0B0B] border-[#00F0FF]/30 hover:border-[#00F0FF]/60'
          }`}
        >
          <div className="text-5xl mb-3">🎫</div>
          <div className="text-xl font-bold text-white mb-2">Access Pass Fulfillment</div>
          <div className="text-3xl font-bold text-[#00F0FF]">$1.2B</div>
          <div className="text-sm text-gray-400 mt-2">63% of total revenue</div>
        </button>
        
        <button
          onClick={() => setSelectedStream('whale')}
          className={`p-6 rounded-xl border-2 transition-all ${
            selectedStream === 'whale'
              ? 'bg-[#C6FF00]/20 border-[#C6FF00] scale-105 shadow-[0_0_30px_rgba(198,255,0,0.5)]'
              : 'bg-[#0B0B0B] border-[#C6FF00]/30 hover:border-[#C6FF00]/60'
          }`}
        >
          <div className="text-5xl mb-3">🐋</div>
          <div className="text-xl font-bold text-white mb-2">Premium Experience Service</div>
          <div className="text-3xl font-bold text-[#C6FF00]">$500M</div>
          <div className="text-sm text-gray-400 mt-2">26% of total revenue</div>
        </button>
        
        <button
          onClick={() => setSelectedStream('sponsorship')}
          className={`p-6 rounded-xl border-2 transition-all ${
            selectedStream === 'sponsorship'
              ? 'bg-[#4B21FF]/20 border-[#4B21FF] scale-105 shadow-[0_0_30px_rgba(75,33,255,0.5)]'
              : 'bg-[#0B0B0B] border-[#4B21FF]/30 hover:border-[#4B21FF]/60'
          }`}
        >
          <div className="text-5xl mb-3">📺</div>
          <div className="text-xl font-bold text-white mb-2">Brand Inventory Management</div>
          <div className="text-3xl font-bold text-[#4B21FF]">$200 million</div>
          <div className="text-sm text-gray-400 mt-2">11% of total revenue</div>
        </button>
      </div>
      
      {/* Detailed Breakdown */}
      <div className="bg-gradient-to-br from-[#0B0B0B] to-transparent border-2 rounded-2xl p-8" style={{ borderColor: currentStream.color }}>
        <div className="flex items-center space-x-4 mb-6">
          <div className="text-6xl">{currentStream.icon}</div>
          <div>
            <h3 className="text-3xl font-bold text-white">{currentStream.title}</h3>
            <div className="text-4xl font-bold mt-2" style={{ color: currentStream.color }}>
              {currentStream.total}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {currentStream.details.map((detail, index) => (
            <div 
              key={index}
              className="bg-black/50 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-bold text-white">{detail.name}</h4>
                <div className="text-right">
                  <div className="text-2xl font-bold" style={{ color: currentStream.color }}>
                    {detail.revenue}
                  </div>
                  <div className="text-sm text-gray-400">{detail.percentage} of stream</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Key Insight */}
      <div className="bg-gradient-to-r from-[#C6FF00]/10 to-[#00F0FF]/10 border-2 border-[#C6FF00]/50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">⚙️</div>
          <div>
            <h4 className="text-xl font-bold text-[#C6FF00] mb-2">The Orchestrator's Utility</h4>
            <p className="text-gray-300">
              Unlike traditional venues that limit compensation to ticket sales and "bar spend," 
              at DreamBIG Technology Arena, orchestrators earn service fees for managing the <span className="text-[#C6FF00] font-bold">entire event infrastructure</span>. 
              Every transaction, upgrade, and sponsorship deal is facilitated through your event's smart contract—with the 
              <span className="text-[#C6FF00] font-bold"> 250 million verified user metrics</span> serving as your Proof of Work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
