'use client';

import React from 'react';
import { Users, TrendingUp, Wifi } from 'lucide-react';

interface EarningRole {
  role: string;
  howYouEarn: string;
  reward: string;
  icon: React.ReactNode;
}

const roles: EarningRole[] = [
  {
    role: "Virtual Concierge",
    howYouEarn: "Crowd Management",
    reward: "Native Tokens",
    icon: <Users className="w-6 h-6" />
  },
  {
    role: "Reputation Mining",
    howYouEarn: "Social Engagement",
    reward: "Sponsor Perks",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    role: "Node Support",
    howYouEarn: "Relaying Bandwidth",
    reward: "Protocol Fees",
    icon: <Wifi className="w-6 h-6" />
  }
];

export default function StakedEconomyMatrix() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#C6FF00] via-yellow-400 to-[#C6FF00] bg-clip-text text-transparent">
            The "Staked" Economy
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Active participation earns you real rewards
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#C6FF00]">
                  <th className="text-left py-5 px-8 text-[#C6FF00] font-bold text-lg">
                    Role
                  </th>
                  <th className="text-left py-5 px-8 text-[#C6FF00] font-bold text-lg">
                    How You Earn
                  </th>
                  <th className="text-left py-5 px-8 text-[#C6FF00] font-bold text-lg">
                    Reward
                  </th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-800 hover:bg-[#C6FF00]/5 transition-colors duration-200"
                  >
                    <td className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="text-[#C6FF00]">
                          {role.icon}
                        </div>
                        <span className="text-white font-bold text-lg">
                          {role.role}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-8 text-gray-300 text-base">
                      {role.howYouEarn}
                    </td>
                    <td className="py-6 px-8">
                      <span className="text-[#C6FF00] font-semibold text-base">
                        {role.reward}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#C6FF00]/10 to-[#C6FF00]/5 border border-[#C6FF00]/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#C6FF00]">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {role.role}
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400 mb-1">How You Earn:</p>
                  <p className="text-gray-300">{role.howYouEarn}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Reward:</p>
                  <p className="text-[#C6FF00] font-semibold">{role.reward}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
