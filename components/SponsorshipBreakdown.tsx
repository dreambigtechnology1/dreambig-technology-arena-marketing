'use client';

import { useState } from 'react';

export default function SponsorshipBreakdown() {
  const [selectedCategory, setSelectedCategory] = useState<'ads' | 'immersive'>('ads');
  
  const adSlots = [
    {
      name: 'Global Audience Sync',
      duration: '30 seconds',
      price: '$5,000,000',
      available: 10,
      sold: 3,
      totalRevenue: '$50,000,000',
      description: '250 million-capacity infrastructure enables synchronized global audience—verified pre-show placement'
    },
    {
      name: 'Peak Engagement Window',
      duration: '60 seconds',
      price: '$15,000,000',
      available: 4,
      sold: 1,
      totalRevenue: '$60,000,000',
      description: 'Verified attention during intermission—highest CPM efficiency'
    },
    {
      name: 'Post-Show Cool Down',
      duration: '30 seconds',
      price: '$2,000,000',
      available: 10,
      sold: 5,
      totalRevenue: '$20,000,000',
      description: 'Lasting impression as users exit'
    }
  ];
  
  const immersiveSponsors = [
    {
      name: 'Stadium Naming Rights',
      price: '$25,000,000',
      available: 1,
      sold: 0,
      description: 'Logo on exterior, tickets, and loading screens—infrastructure built for 250 million concurrent connections',
      icon: '🏟️'
    },
    {
      name: 'Point-of-Sale Infrastructure',
      price: '$5,000,000',
      available: 5,
      sold: 2,
      description: 'Operational kiosk processing transactions—your branded commerce relay',
      icon: '🎨'
    },
    {
      name: 'Payment Gateway Branding',
      price: '$10,000,000',
      available: 1,
      sold: 0,
      description: 'Brand the payment gateway—every transaction bears your logo',
      icon: '💳'
    },
    {
      name: 'Direct-to-Avatar Commerce',
      price: '$15M - $20M',
      available: 1,
      sold: 0,
      description: 'Artist wears your 3D gear—fans purchase via one-click checkout',
      icon: '👕'
    }
  ];
  
  const totalAdSlots = adSlots.reduce((sum, slot) => sum + slot.available, 0);
  const soldAdSlots = adSlots.reduce((sum, slot) => sum + slot.sold, 0);
  const remainingAdSlots = totalAdSlots - soldAdSlots;
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#C6FF00]">Infrastructure Capacity</span> Sponsorship Opportunities
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          With 250 million-capacity infrastructure, this is the world's largest digital stadium. 
          <span className="text-[#C6FF00] font-bold"> 2x Super Bowl capacity</span> at competitive pricing.
        </p>
        
        {/* Live Counter */}
        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#4B21FF]/20 to-[#C6FF00]/20 border border-[#C6FF00]/50 rounded-lg px-6 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">LIVE</span>
          </div>
          <div className="text-2xl font-bold text-[#C6FF00]">{remainingAdSlots} of {totalAdSlots}</div>
          <span className="text-gray-300">ad slots remaining</span>
        </div>
      </div>
      
      {/* Category Toggle */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setSelectedCategory('ads')}
          className={`px-8 py-4 rounded-lg font-bold transition-all ${
            selectedCategory === 'ads'
              ? 'bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] text-white shadow-lg scale-105'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          📺 Jumbotron Ad Slots
        </button>
        <button
          onClick={() => setSelectedCategory('immersive')}
          className={`px-8 py-4 rounded-lg font-bold transition-all ${
            selectedCategory === 'immersive'
              ? 'bg-gradient-to-r from-[#C6FF00] to-[#00F0FF] text-white shadow-lg scale-105'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🎪 Immersive Presence
        </button>
      </div>
      
      {/* Ad Slots */}
      {selectedCategory === 'ads' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adSlots.map((slot, index) => (
            <div 
              key={index}
              className="bg-[#0B0B0B] border-2 border-[#4B21FF]/50 rounded-2xl p-6 hover:border-[#C6FF00] hover:scale-105 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{slot.name}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  slot.available - slot.sold > 0 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}>
                  {slot.available - slot.sold > 0 ? `${slot.available - slot.sold} Available` : 'SOLD OUT'}
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white font-semibold">{slot.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Price per Slot</span>
                  <span className="text-[#C6FF00] font-bold text-xl">{slot.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Revenue</span>
                  <span className="text-[#00F0FF] font-semibold">{slot.totalRevenue}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">{slot.description}</p>
              
              <button className="w-full py-3 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(198,255,0,0.5)]">
                Reserve Slot
              </button>
            </div>
          ))}
        </div>
      )}
      
      {/* Immersive Presence */}
      {selectedCategory === 'immersive' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {immersiveSponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="bg-[#0B0B0B] border-2 border-[#C6FF00]/50 rounded-2xl p-8 hover:border-[#00F0FF] hover:scale-105 transition-all"
            >
              <div className="text-6xl mb-4 text-center">{sponsor.icon}</div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{sponsor.name}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  sponsor.available - sponsor.sold > 0 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}>
                  {sponsor.available - sponsor.sold > 0 ? `${sponsor.available - sponsor.sold} Available` : 'SOLD OUT'}
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-[#C6FF00] mb-2">{sponsor.price}</div>
              </div>
              
              <p className="text-gray-300 text-center mb-6">{sponsor.description}</p>
              
              <button className="w-full py-4 bg-gradient-to-r from-[#C6FF00] to-[#00F0FF] rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(198,255,0,0.5)]">
                Reserve Now
              </button>
            </div>
          ))}
        </div>
      )}
      
      {/* Total Revenue Summary */}
      <div className="bg-gradient-to-r from-[#4B21FF]/20 via-[#C6FF00]/20 to-[#00F0FF]/20 border-2 border-[#C6FF00] rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-sm text-gray-400 mb-2">Total Ad Slot Revenue</div>
            <div className="text-4xl font-bold text-[#4B21FF]">$130M</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-2">Total Immersive Revenue</div>
            <div className="text-4xl font-bold text-[#00F0FF]">$70M</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-2">Combined Sponsorship</div>
            <div className="text-4xl font-bold text-[#C6FF00]">$200 million</div>
          </div>
        </div>
      </div>
    </div>
  );
}
