'use client';

import { useState } from 'react';

type CalculatorTab = 'sponsor' | 'node' | 'creator' | 'landowner' | 'eventhost';

export default function RevenueCalculator() {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('sponsor');
  
  // Sponsor inputs
  const [sponsorshipCommitment, setSponsorshipCommitment] = useState(5000000);
  
  // Node operator inputs
  const [bandwidth, setBandwidth] = useState(1000); // GB
  const [uptime, setUptime] = useState(99);
  
  // Asset creator inputs
  const [itemsPerMonth, setItemsPerMonth] = useState(10);
  const [avgPrice, setAvgPrice] = useState(50);
  
  // Landowner inputs
  const [eventFrequency, setEventFrequency] = useState(12);
  
  // Event host inputs
  const [eventsPerYear, setEventsPerYear] = useState(12);
  const [attendance, setAttendance] = useState(250000000);
  
  // Calculations
  const calculateSponsorMediaValue = () => {
    const impressions = 250000000 * 0.75; // 75% engagement rate
    const cpm = 25; // $25 CPM
    const brandValue = (impressions / 1000) * cpm;
    const verifiedImpressionValue = (sponsorshipCommitment / 15000000) * 200000000; // Share of $200 million sponsorship pool
    const totalMediaValue = brandValue + verifiedImpressionValue;
    
    // Compare to Super Bowl: $7M for 30sec ad reaching ~115M viewers
    const superBowlCPM = (7000000 / 115000000) * 1000; // ~$60 CPM
    const efficiencyMultiplier = superBowlCPM / cpm;
    
    return {
      impressions: impressions.toLocaleString(),
      brandValue: `$${(brandValue / 1000000).toFixed(2)}M`,
      verifiedImpressionValue: `$${(verifiedImpressionValue / 1000000).toFixed(2)}M`,
      totalMediaValue: `$${(totalMediaValue / 1000000).toFixed(2)}M`,
      efficiencyVsSuperBowl: `${efficiencyMultiplier.toFixed(1)}x more efficient`
    };
  };
  
  const calculateNodeEarnings = () => {
    const bandwidthFee = bandwidth * 0.05;
    const cpuFee = bandwidth * 0.1; // Assume CPU proportional to bandwidth
    const monthlyFees = (bandwidthFee + cpuFee) * (uptime / 100);
    const annualRevenue = monthlyFees * 12;
    
    return {
      monthlyFees: `$${monthlyFees.toFixed(2)}`,
      annualRevenue: `$${annualRevenue.toLocaleString()}`,
      effectiveUptime: `${uptime}%`
    };
  };
  
  const calculateCreatorRevenue = () => {
    const conversionRate = 0.15; // 15% of fans buy
    const monthlySales = itemsPerMonth * avgPrice * conversionRate * 1000; // 1000 potential buyers
    const marketplaceFee = monthlySales * 0.025;
    const netRevenue = monthlySales - marketplaceFee;
    const annualRevenue = netRevenue * 12;
    
    return {
      monthlySales: `$${monthlySales.toLocaleString()}`,
      marketplaceFee: `$${marketplaceFee.toFixed(2)}`,
      netRevenue: `$${netRevenue.toLocaleString()}`,
      annualRevenue: `$${annualRevenue.toLocaleString()}`
    };
  };
  
  const calculateLandownerRevenue = () => {
    const baseRent = 50000; // $50k per event
    const plotPremium = 1.5; // DreamBIG Technology Arena premium
    const operationalFees = eventFrequency * baseRent * plotPremium;
    const initialValue = 10000000; // $10M initial
    const growthRate = 1.25; // 25% annual growth
    const infrastructureValueGrowth = initialValue * Math.pow(growthRate, 3) - initialValue; // 3 years
    const totalRevenue = operationalFees + infrastructureValueGrowth;
    
    return {
      operationalFees: `$${operationalFees.toLocaleString()}`,
      infrastructureValueGrowth: `$${infrastructureValueGrowth.toLocaleString()}`,
      totalRevenue: `$${totalRevenue.toLocaleString()}`,
      revenueShare: `${((totalRevenue / initialValue) * 100).toFixed(0)}%`
    };
  };
  
  const calculateEventHostRevenue = () => {
    const attendanceMultiplier = attendance / 250000000;
    
    // Ticket Revenue (per event at full capacity)
    const whaleRevenue = 237500000 * attendanceMultiplier;
    const retailGA = 1125000000 * attendanceMultiplier;
    const retailAddons = 362500000 * attendanceMultiplier;
    const ticketSubtotal = whaleRevenue + retailGA + retailAddons;
    
    // Sponsorship Revenue (per event)
    const adSlots = 130000000; // Jumbotron ads
    const namingRights = 25000000;
    const brandedShards = 25000000; // 5 zones × $5M
    const atmSponsor = 10000000;
    const signatureDrop = 17500000; // Average $15M-$20M
    const sponsorshipSubtotal = adSlots + namingRights + brandedShards + atmSponsor + signatureDrop;
    
    // Total per event
    const totalPerEvent = ticketSubtotal + sponsorshipSubtotal;
    const platformTreasury = totalPerEvent * 0.30;
    
    // Annual projections
    const annualRevenue = eventsPerYear * totalPerEvent;
    const annualTreasury = eventsPerYear * platformTreasury;
    
    return {
      ticketRevenue: `$${(ticketSubtotal / 1000000000).toFixed(2)}B`,
      sponsorshipRevenue: `$${(sponsorshipSubtotal / 1000000).toFixed(0)}M`,
      totalPerEvent: `$${(totalPerEvent / 1000000000).toFixed(2)}B`,
      platformTreasury: `$${(platformTreasury / 1000000).toFixed(0)}M`,
      annualRevenue: `$${(annualRevenue / 1000000000).toFixed(2)}B`,
      annualTreasury: `$${(annualTreasury / 1000000000).toFixed(2)}B`
    };
  };
  
  const sponsorResults = calculateSponsorMediaValue();
  const nodeResults = calculateNodeEarnings();
  const creatorResults = calculateCreatorRevenue();
  const landownerResults = calculateLandownerRevenue();
  const eventHostResults = calculateEventHostRevenue();
  
  const tabs = [
    { id: 'eventhost' as CalculatorTab, label: 'Event Host', icon: '🎪', color: 'from-[#C6FF00] to-[#4B21FF]' },
    { id: 'sponsor' as CalculatorTab, label: 'Sponsor Media Value', icon: '🏢', color: 'from-[#4B21FF] to-[#C6FF00]' },
    { id: 'node' as CalculatorTab, label: 'Node Operator', icon: '⚡', color: 'from-[#4B21FF] to-[#00F0FF]' },
    { id: 'creator' as CalculatorTab, label: 'Asset Creator', icon: '🎨', color: 'from-[#00F0FF] to-[#C6FF00]' },
    { id: 'landowner' as CalculatorTab, label: 'Landowner', icon: '🏟️', color: 'from-[#C6FF00] to-[#4B21FF]' }
  ];
  
  return (
    <div className="bg-[#0B0B0B] border-2 border-[#C6FF00] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(198,255,0,0.3)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] p-6">
        <h2 className="text-3xl font-bold text-white text-center">Revenue Calculator</h2>
        <p className="text-center text-white/90 mt-2">Estimate your earnings in the DreamBIG Technology Arena economy</p>
      </div>
      
      {/* Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-4 bg-black/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-4 rounded-lg font-bold transition-all ${
              activeTab === tab.id
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <div className="text-2xl mb-1">{tab.icon}</div>
            <div className="text-sm">{tab.label}</div>
          </button>
        ))}
      </div>
      
      {/* Calculator Content */}
      <div className="p-6 md:p-8">
        {/* Event Host */}
        {activeTab === 'eventhost' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#C6FF00]/20 to-[#4B21FF]/20 border border-[#C6FF00]/50 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-[#C6FF00] mb-2">$1.925B Per Event Revenue Model</h3>
              <p className="text-gray-300">Based on 250 million capacity with Titan-class sponsorships</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Events Per Year: {eventsPerYear}
              </label>
              <input
                type="range"
                min="1"
                max="52"
                step="1"
                value={eventsPerYear}
                onChange={(e) => setEventsPerYear(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C6FF00]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 event</span>
                <span>52 events (weekly)</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Expected Attendance: {(attendance / 1000000).toFixed(0)}M
              </label>
              <input
                type="range"
                min="1000000"
                max="250000000"
                step="1000000"
                value={attendance}
                onChange={(e) => setAttendance(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C6FF00]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1M</span>
                <span>250 million (full capacity)</span>
              </div>
            </div>
            
            {/* Revenue Breakdown */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Per Event Revenue</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#00F0FF]/20 to-transparent border border-[#00F0FF]/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Ticket Sales</div>
                  <div className="text-3xl font-bold text-[#00F0FF]">{eventHostResults.ticketRevenue}</div>
                  <div className="text-xs text-gray-500 mt-1">Whales + Retail + Add-ons</div>
                </div>
                
                <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border border-[#4B21FF]/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Sponsorships</div>
                  <div className="text-3xl font-bold text-[#4B21FF]">{eventHostResults.sponsorshipRevenue}</div>
                  <div className="text-xs text-gray-500 mt-1">Ads + Naming + Shards</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#C6FF00]/30 to-transparent border-2 border-[#C6FF00] rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-1">Total Per Event</div>
                <div className="text-5xl font-bold text-[#C6FF00] mb-2">{eventHostResults.totalPerEvent}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Platform Treasury (30%)</span>
                  <span className="text-2xl font-bold text-[#C6FF00]">{eventHostResults.platformTreasury}</span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mt-6">Annual Projections</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Annual Revenue</div>
                  <div className="text-3xl font-bold text-[#C6FF00]">{eventHostResults.annualRevenue}</div>
                  <div className="text-xs text-gray-500 mt-1">{eventsPerYear} events × $1.925B</div>
                </div>
                
                <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400">Annual Treasury</div>
                  <div className="text-3xl font-bold text-[#C6FF00]">{eventHostResults.annualTreasury}</div>
                  <div className="text-xs text-gray-500 mt-1">Funds infrastructure & growth</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Sponsor Media Value */}
        {activeTab === 'sponsor' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#4B21FF]/20 to-[#C6FF00]/20 border border-[#4B21FF]/50 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-[#4B21FF] mb-2">Media Buy Calculator</h3>
              <p className="text-gray-300">Compare your reach efficiency vs. Super Bowl advertising</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Sponsorship Commitment: ${(sponsorshipCommitment / 1000000).toFixed(1)}M
              </label>
              <input
                type="range"
                min="1000000"
                max="15000000"
                step="1000000"
                value={sponsorshipCommitment}
                onChange={(e) => setSponsorshipCommitment(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C6FF00]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$1M</span>
                <span>$15M</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border border-[#4B21FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Verified Impressions</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{sponsorResults.impressions}</div>
              </div>
              <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border border-[#4B21FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Brand Value (CPM)</div>
                <div className="text-2xl font-bold text-[#00F0FF]">{sponsorResults.brandValue}</div>
              </div>
              <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border border-[#4B21FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">PoT Impression Value</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{sponsorResults.verifiedImpressionValue}</div>
              </div>
              <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4 md:col-span-2">
                <div className="text-sm text-gray-400">Total Media Value Delivered</div>
                <div className="text-3xl font-bold text-[#C6FF00]">{sponsorResults.totalMediaValue}</div>
              </div>
              <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">vs. Super Bowl</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{sponsorResults.efficiencyVsSuperBowl}</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Node Operator */}
        {activeTab === 'node' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bandwidth Capacity: {bandwidth} GB/month
              </label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={bandwidth}
                onChange={(e) => setBandwidth(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#4B21FF]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Uptime: {uptime}%
              </label>
              <input
                type="range"
                min="50"
                max="100"
                step="1"
                value={uptime}
                onChange={(e) => setUptime(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#4B21FF]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border border-[#4B21FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Monthly Fees</div>
                <div className="text-2xl font-bold text-[#4B21FF]">{nodeResults.monthlyFees}</div>
              </div>
              <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border border-[#4B21FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Annual Revenue</div>
                <div className="text-2xl font-bold text-[#00F0FF]">{nodeResults.annualRevenue}</div>
              </div>
              <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border border-[#4B21FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Effective Uptime</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{nodeResults.effectiveUptime}</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Asset Creator */}
        {activeTab === 'creator' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Items Created Per Month: {itemsPerMonth}
              </label>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={itemsPerMonth}
                onChange={(e) => setItemsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Average Price: ${avgPrice}
              </label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={avgPrice}
                onChange={(e) => setAvgPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-[#00F0FF]/20 to-transparent border border-[#00F0FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Monthly Sales</div>
                <div className="text-2xl font-bold text-[#00F0FF]">{creatorResults.monthlySales}</div>
              </div>
              <div className="bg-gradient-to-br from-[#00F0FF]/20 to-transparent border border-[#00F0FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Marketplace Fee</div>
                <div className="text-2xl font-bold text-gray-400">{creatorResults.marketplaceFee}</div>
              </div>
              <div className="bg-gradient-to-br from-[#00F0FF]/20 to-transparent border border-[#00F0FF]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Net Revenue</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{creatorResults.netRevenue}</div>
              </div>
              <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Annual Revenue</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{creatorResults.annualRevenue}</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Landowner */}
        {activeTab === 'landowner' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Event Frequency: {eventFrequency} events/year
              </label>
              <input
                type="range"
                min="1"
                max="52"
                step="1"
                value={eventFrequency}
                onChange={(e) => setEventFrequency(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C6FF00]"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Operational Fees</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{landownerResults.operationalFees}</div>
              </div>
              <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Infrastructure Growth (3yr)</div>
                <div className="text-2xl font-bold text-[#00F0FF]">{landownerResults.infrastructureValueGrowth}</div>
              </div>
              <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Total Revenue</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{landownerResults.totalRevenue}</div>
              </div>
              <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/50 rounded-lg p-4">
                <div className="text-sm text-gray-400">Revenue Share</div>
                <div className="text-2xl font-bold text-[#C6FF00]">{landownerResults.revenueShare}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
