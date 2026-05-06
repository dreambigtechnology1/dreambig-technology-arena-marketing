'use client';

import React from 'react';
import { Coins, TrendingUp, Users, Wifi } from 'lucide-react';

interface EconomyOpportunity {
  role: string;
  description: string;
  earning: string;
  icon: React.ReactNode;
}

const opportunities: EconomyOpportunity[] = [
  {
    role: "Virtual Concierge",
    description: "Guide new fans and moderate the crowd.",
    earning: "Paid in Native Tokens from the Community Treasury",
    icon: <Users className="w-6 h-6" />
  },
  {
    role: "Reputation Mining",
    description: "Engage, share, and stay active to boost your score.",
    earning: "High scores unlock Sponsor Perks and exclusive gear",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    role: "Affiliate Kiosks",
    description: "Direct fans to branded kiosks and earn commissions.",
    earning: "Automatic smart contract payouts on every sale",
    icon: <Coins className="w-6 h-6" />
  },
  {
    role: "Node Support",
    description: "Use your spare bandwidth to support local P2P gossip.",
    earning: "Earn protocol fees for keeping the stadium stable",
    icon: <Wifi className="w-6 h-6" />
  }
];

export default function FanEconomyTable() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#C6FF00] via-yellow-400 to-[#C6FF00] bg-clip-text text-transparent">
            The Fan Economy
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Get Paid to Play
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            DreamBIG Technology Arena offers "Human Jobs" that allow fans to earn their way to VIP status.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#C6FF00]">
                <th className="text-left py-4 px-6 text-[#C6FF00] font-bold text-lg">
                  Opportunity
                </th>
                <th className="text-left py-4 px-6 text-[#C6FF00] font-bold text-lg">
                  Role
                </th>
                <th className="text-left py-4 px-6 text-[#C6FF00] font-bold text-lg">
                  Earning Mechanism
                </th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((opp, index) => (
                <tr 
                  key={index}
                  className="border-b border-gray-800 hover:bg-[#C6FF00]/5 transition-colors duration-200"
                >
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="text-[#C6FF00]">
                        {opp.icon}
                      </div>
                      <span className="text-white font-bold text-lg">
                        {opp.role}
                      </span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-gray-300">
                    {opp.description}
                  </td>
                  <td className="py-6 px-6">
                    <span className="text-[#C6FF00] font-semibold">
                      {opp.earning}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          {opportunities.map((opp, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#C6FF00]/10 to-[#C6FF00]/5 border border-[#C6FF00]/30 rounded-xl p-6 hover:shadow-xl hover:shadow-[#C6FF00]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#C6FF00]">
                  {opp.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {opp.role}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                {opp.description}
              </p>
              <div className="pt-4 border-t border-[#C6FF00]/20">
                <p className="text-sm text-gray-400 mb-2">Earning Mechanism:</p>
                <p className="text-[#C6FF00] font-semibold">
                  {opp.earning}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#C6FF00]/20 to-[#C6FF00]/5 border border-[#C6FF00]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#C6FF00] mb-2">$1.9B</div>
            <div className="text-gray-300">Total Economy Size</div>
          </div>
          <div className="bg-gradient-to-br from-[#C6FF00]/20 to-[#C6FF00]/5 border border-[#C6FF00]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#C6FF00] mb-2">250 million</div>
            <div className="text-gray-300">Active Participants</div>
          </div>
          <div className="bg-gradient-to-br from-[#C6FF00]/20 to-[#C6FF00]/5 border border-[#C6FF00]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#C6FF00] mb-2">4</div>
            <div className="text-gray-300">Earning Opportunities</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#C6FF00] to-yellow-400 text-black font-bold rounded-lg 
            hover:shadow-2xl hover:shadow-[#C6FF00]/50 transition-all duration-300 hover:scale-105">
            Start Earning Today
          </button>
        </div>
      </div>
    </section>
  );
}
