'use client';

import { useState, useMemo } from 'react';

export default function NodeEarningsCalculator() {
  const [bandwidth, setBandwidth] = useState(1000); // GB/month
  const [uptime, setUptime] = useState(99); // percentage
  const [stakingAmount, setStakingAmount] = useState(10000); // ITMV tokens
  const [eventsPerYear, setEventsPerYear] = useState(12); // events

  // Calculate earnings
  const earnings = useMemo(() => {
    // Constants
    const totalNetworkBandwidth = 100000; // GB (estimated)
    const ticketPoolPerEvent = 875000000; // $875M from 17.5M tickets
    const totalStaked = 1000000; // 1M ITMV tokens staked network-wide
    const treasuryPoolPerEvent = 50000000; // $50M treasury per event

    // Ticket Minting Fees
    const ticketFees = (bandwidth / totalNetworkBandwidth) * ticketPoolPerEvent * (uptime / 100) * 0.001; // 0.1% to nodes

    // Proof of Transport (per GB delivered)
    const potEarnings = (bandwidth * 50) * (uptime / 100) * eventsPerYear; // $50 per GB

    // Transaction Tax (2% of swaps)
    const txTax = (bandwidth * 20) * (uptime / 100) * eventsPerYear; // $20 per GB in tx fees

    // Staking Rewards
    const stakingRewards = (stakingAmount / totalStaked) * treasuryPoolPerEvent * (uptime / 100) * eventsPerYear;

    // Total calculations
    const annualEarnings = ticketFees + potEarnings + txTax + stakingRewards;
    const monthlyEarnings = annualEarnings / 12;
    const roiOnStaking = stakingAmount > 0 ? (stakingRewards / (stakingAmount * 0.5)) * 100 : 0; // Assuming $0.50 per ITMV
    const maintenanceHoursPerMonth = 10; // Estimated
    const effectiveHourlyRate = monthlyEarnings / maintenanceHoursPerMonth;

    return {
      ticketFees,
      potEarnings,
      txTax,
      stakingRewards,
      monthlyEarnings,
      annualEarnings,
      roiOnStaking,
      effectiveHourlyRate
    };
  }, [bandwidth, uptime, stakingAmount, eventsPerYear]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="earnings">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Earnings Calculator
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Calculate your potential earnings based on your node's capacity and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Your Node Configuration</h3>

          {/* Bandwidth Slider */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Bandwidth Capacity: <span className="text-[#00F0FF]">{bandwidth} GB/month</span>
            </label>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={bandwidth}
              onChange={(e) => setBandwidth(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>100 GB</span>
              <span>10,000 GB</span>
            </div>
          </div>

          {/* Uptime Slider */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Uptime Percentage: <span className="text-[#C6FF00]">{uptime}%</span>
            </label>
            <input
              type="range"
              min="50"
              max="100"
              step="1"
              value={uptime}
              onChange={(e) => setUptime(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C6FF00]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Staking Amount Slider */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Staking Amount: <span className="text-[#4B21FF]">{stakingAmount.toLocaleString()} ITMV</span>
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={stakingAmount}
              onChange={(e) => setStakingAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#4B21FF]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1,000</span>
              <span>100,000</span>
            </div>
          </div>

          {/* Events Per Year Slider */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Events Per Year: <span className="text-[#C6FF00]">{eventsPerYear}</span>
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
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 event</span>
              <span>52 events</span>
            </div>
          </div>

          {/* Info Box */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-[#4B21FF]/20 to-transparent border border-[#4B21FF]/30">
            <p className="text-sm text-gray-300">
              💡 <span className="font-semibold">Tip:</span> Higher uptime and bandwidth capacity directly increase your earnings. Staking more tokens improves your reputation score and unlocks higher reward tiers.
            </p>
          </div>
        </div>

        {/* Right Column - Outputs */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Your Projected Earnings</h3>

          {/* Revenue Breakdown */}
          <div className="space-y-4">
            {/* Ticket Minting Fees */}
            <div className="p-4 rounded-lg border-2 border-[#4B21FF]/30 bg-gradient-to-r from-[#4B21FF]/10 to-transparent">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">🎫 Ticket Minting Fees</span>
                <span className="text-lg font-bold text-[#4B21FF]">
                  {formatCurrency(earnings.ticketFees)}
                </span>
              </div>
            </div>

            {/* Proof of Transport */}
            <div className="p-4 rounded-lg border-2 border-[#00F0FF]/30 bg-gradient-to-r from-[#00F0FF]/10 to-transparent">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">📡 Proof of Transport</span>
                <span className="text-lg font-bold text-[#00F0FF]">
                  {formatCurrency(earnings.potEarnings)}
                </span>
              </div>
            </div>

            {/* Transaction Tax */}
            <div className="p-4 rounded-lg border-2 border-[#C6FF00]/30 bg-gradient-to-r from-[#C6FF00]/10 to-transparent">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">💳 Transaction Tax</span>
                <span className="text-lg font-bold text-[#C6FF00]">
                  {formatCurrency(earnings.txTax)}
                </span>
              </div>
            </div>

            {/* Staking Rewards */}
            <div className="p-4 rounded-lg border-2 border-[#4B21FF]/30 bg-gradient-to-r from-[#4B21FF]/10 to-transparent">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">🔒 Staking Rewards</span>
                <span className="text-lg font-bold text-[#4B21FF]">
                  {formatCurrency(earnings.stakingRewards)}
                </span>
              </div>
            </div>
          </div>

          {/* Total Earnings */}
          <div className="p-6 rounded-xl border-2 border-[#C6FF00] bg-gradient-to-br from-[#C6FF00]/20 via-[#4B21FF]/10 to-transparent">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Monthly Earnings</span>
                <span className="text-2xl font-bold text-[#C6FF00]">
                  {formatCurrency(earnings.monthlyEarnings)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Annual Revenue</span>
                <span className="text-3xl font-bold text-[#C6FF00]">
                  {formatCurrency(earnings.annualEarnings)}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-[#4B21FF]/30 bg-[#4B21FF]/5">
              <div className="text-xs text-gray-400 mb-1">ROI on Staking</div>
              <div className="text-xl font-bold text-[#4B21FF]">
                {formatPercent(earnings.roiOnStaking)}
              </div>
            </div>
            <div className="p-4 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/5">
              <div className="text-xs text-gray-400 mb-1">Effective Hourly Rate</div>
              <div className="text-xl font-bold text-[#00F0FF]">
                {formatCurrency(earnings.effectiveHourlyRate)}/hr
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-xs text-gray-400">
              ⚠️ <span className="font-semibold">Disclaimer:</span> Earnings are estimates based on current protocol parameters and may vary based on network conditions, event frequency, and token prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
