'use client';

import { useState, useMemo } from 'react';

export default function NodeServiceFeeEstimator() {
  const [bandwidth, setBandwidth] = useState(1000); // GB/month
  const [uptime, setUptime] = useState(99); // percentage
  const [bondAmount, setBondAmount] = useState(10000); // ITMV tokens
  const [eventsPerYear, setEventsPerYear] = useState(12); // events

  // Calculate service fees
  const fees = useMemo(() => {
    // Constants
    const totalNetworkBandwidth = 100000; // GB (estimated)
    const ticketPoolPerEvent = 875000000; // $875M from 17.5M tickets
    const totalBonded = 1000000; // 1M ITMV tokens bonded network-wide
    const treasuryPoolPerEvent = 50000000; // $50M treasury per event

    // Packet Delivery Fees (SFU Host)
    const packetDeliveryFees = (bandwidth / totalNetworkBandwidth) * ticketPoolPerEvent * (uptime / 100) * 0.001; // 0.1% to nodes

    // Proof of Transport (per GB delivered)
    const potFees = (bandwidth * 50) * (uptime / 100) * eventsPerYear; // $50 per GB

    // Transaction Processing Fees (ATM Relay)
    const txProcessingFees = (bandwidth * 20) * (uptime / 100) * eventsPerYear; // $20 per GB in tx fees

    // Performance Bond Yield (not staking rewards - this is collateral yield)
    const bondYield = (bondAmount / totalBonded) * treasuryPoolPerEvent * (uptime / 100) * eventsPerYear;

    // Total calculations
    const annualServiceFees = packetDeliveryFees + potFees + txProcessingFees + bondYield;
    const monthlyServiceFees = annualServiceFees / 12;
    const bondYieldPercent = bondAmount > 0 ? (bondYield / (bondAmount * 0.5)) * 100 : 0; // Assuming $0.50 per ITMV
    const maintenanceHoursPerMonth = 10; // Estimated
    const effectiveHourlyRate = monthlyServiceFees / maintenanceHoursPerMonth;

    // Task completion metrics
    const packetsDeliveredPerMonth = (bandwidth * 1000 * 1024 / 0.4) * (uptime / 100); // Assuming 400 bytes per packet
    const potReceiptsPerMonth = (bandwidth * 100) * (uptime / 100); // Estimated receipts per GB
    const transactionsProcessedPerMonth = (bandwidth * 50) * (uptime / 100); // Estimated transactions per GB

    return {
      packetDeliveryFees,
      potFees,
      txProcessingFees,
      bondYield,
      monthlyServiceFees,
      annualServiceFees,
      bondYieldPercent,
      effectiveHourlyRate,
      packetsDeliveredPerMonth,
      potReceiptsPerMonth,
      transactionsProcessedPerMonth
    };
  }, [bandwidth, uptime, bondAmount, eventsPerYear]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="service-fees">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Service Fee Estimator
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Estimate your service fees based on infrastructure capacity and task completion rates. <span className="text-[#C6FF00] font-semibold">Payment is per verified delivery</span>, not speculative returns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Your Infrastructure Configuration</h3>

          {/* Bandwidth Slider */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Service Capacity: <span className="text-[#00F0FF]">{bandwidth} GB/month</span>
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
              SLA Uptime: <span className="text-[#C6FF00]">{uptime}%</span>
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

          {/* Bond Amount Slider */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Performance Bond: <span className="text-[#4B21FF]">{bondAmount.toLocaleString()} ITMV</span>
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={bondAmount}
              onChange={(e) => setBondAmount(Number(e.target.value))}
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
              Events Serviced Per Year: <span className="text-[#C6FF00]">{eventsPerYear}</span>
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
              💡 <span className="font-semibold">Note:</span> Higher uptime and service capacity directly increase your fees. Performance bond ensures service quality and unlocks higher fee tiers.
            </p>
          </div>

          {/* Task Completion Metrics */}
          <div className="p-6 rounded-xl border-2 border-[#00F0FF]/30 bg-gradient-to-r from-[#00F0FF]/10 to-transparent">
            <h4 className="text-lg font-bold mb-4">📊 Estimated Task Completion (Monthly)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Packets Delivered:</span>
                <span className="font-semibold text-[#00F0FF]">{formatNumber(fees.packetsDeliveredPerMonth)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">PoT Receipts Validated:</span>
                <span className="font-semibold text-[#00F0FF]">{formatNumber(fees.potReceiptsPerMonth)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transactions Processed:</span>
                <span className="font-semibold text-[#00F0FF]">{formatNumber(fees.transactionsProcessedPerMonth)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Outputs */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Your Projected Service Fees</h3>

          {/* Fee Breakdown */}
          <div className="space-y-4">
            {/* Packet Delivery Fees */}
            <div className="p-4 rounded-lg border-2 border-[#4B21FF]/30 bg-gradient-to-r from-[#4B21FF]/10 to-transparent">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">📦 Packet Delivery Fees</span>
                <span className="text-lg font-bold text-[#4B21FF]">
                  {formatCurrency(fees.packetDeliveryFees)}
                </span>
              </div>
            </div>

            {/* Proof of Transport */}
            <div className="p-4 rounded-lg border-2 border-[#00F0FF]/30 bg-gradient-to-r from-[#00F0FF]/10 to-transparent">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">📡 Proof of Transport</span>
                <span className="text-lg font-bold text-[#00F0FF]">
                  {formatCurrency(fees.potFees)}
                </span>
              </div>
            </div>

            {/* Transaction Processing */}
            <div className="p-4 rounded-lg border-2 border-[#C6FF00]/30 bg-gradient-to-r from-[#C6FF00]/10 to-transparent">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">💳 Transaction Processing</span>
                <span className="text-lg font-bold text-[#C6FF00]">
                  {formatCurrency(fees.txProcessingFees)}
                </span>
              </div>
            </div>

            {/* Performance Bond Yield */}
            <div className="p-4 rounded-lg border-2 border-[#4B21FF]/30 bg-gradient-to-r from-[#4B21FF]/10 to-transparent">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">🔒 Performance Bond Yield</span>
                <span className="text-lg font-bold text-[#4B21FF]">
                  {formatCurrency(fees.bondYield)}
                </span>
              </div>
            </div>
          </div>

          {/* Total Service Fees */}
          <div className="p-6 rounded-xl border-2 border-[#C6FF00] bg-gradient-to-br from-[#C6FF00]/20 via-[#4B21FF]/10 to-transparent">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Monthly Service Fees</span>
                <span className="text-2xl font-bold text-[#C6FF00]">
                  {formatCurrency(fees.monthlyServiceFees)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Annual Service Fees</span>
                <span className="text-3xl font-bold text-[#C6FF00]">
                  {formatCurrency(fees.annualServiceFees)}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-[#4B21FF]/30 bg-[#4B21FF]/5">
              <div className="text-xs text-gray-400 mb-1">Performance Bond Yield</div>
              <div className="text-xl font-bold text-[#4B21FF]">
                {formatPercent(fees.bondYieldPercent)}
              </div>
            </div>
            <div className="p-4 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/5">
              <div className="text-xs text-gray-400 mb-1">Effective Hourly Rate</div>
              <div className="text-xl font-bold text-[#00F0FF]">
                {formatCurrency(fees.effectiveHourlyRate)}/hr
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-xs text-gray-400">
              ⚠️ <span className="font-semibold">Disclaimer:</span> Service fees are estimates based on current protocol parameters and may vary based on network conditions, event frequency, task completion rates, and token prices. Fees are paid for verified service delivery, not speculative returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
