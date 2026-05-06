'use client';

import { useState } from 'react';

type NodeRole = 'sfu' | 'gps' | 'atm';

interface RoleData {
  title: string;
  icon: string;
  color: string;
  job: string;
  stadiumFunction: string[];
  techStack: string[];
  serviceFeeStructure: string;
  slaRequirements: string[];
}

const nodeRoles: Record<NodeRole, RoleData> = {
  sfu: {
    title: 'SFU Host',
    icon: '🎥',
    color: '#4B21FF',
    job: 'Audio-Visual packet routing service managing low-latency spatial audio and avatar data',
    stadiumFunction: [
      'Real-time voice chat for 17.5M+ users',
      'Spatial audio (hear people around you)',
      'Avatar position synchronization',
      'Binary optimization reduces bandwidth by 80%'
    ],
    techStack: [
      'Custom NAF Protobuf Adapter',
      'WebRTC with EasyRTC',
      'Socket.io for signaling',
      'P2P gossip protocol'
    ],
    serviceFeeStructure: 'Fee per Protobuf Binary Packet successfully routed and verified',
    slaRequirements: [
      'Maintain 99%+ uptime for full fee eligibility',
      'Packet delivery success rate: 95%+',
      'Response time: <100ms latency',
      'Slashing: 10% bond reduction for <90% uptime'
    ]
  },
  gps: {
    title: 'Data GPS & Spatial Awareness',
    icon: '📍',
    color: '#00F0FF',
    job: 'Coordinate validation service tracking avatar integrity on Plot 28',
    stadiumFunction: [
      'Validates avatar positions',
      'Enforces tier-based access (Whale vs Citizen)',
      'Prevents coordinate spoofing',
      'Enables status-based networking hubs'
    ],
    techStack: [
      'Blockchain wallet metadata validation',
      'Real-time coordinate tracking',
      'Access control logic',
      'Zone boundary enforcement'
    ],
    serviceFeeStructure: 'Compensation per Wallet Metadata check performed to secure VIP zones',
    slaRequirements: [
      'Maintain 99%+ uptime for full fee eligibility',
      'Validation accuracy: 99.9%+',
      'Response time: <50ms per check',
      'Slashing: 15% bond reduction for security failures'
    ]
  },
  atm: {
    title: 'ATM-to-AMM Relay',
    icon: '💳',
    color: '#C6FF00',
    job: 'Transaction processing service via ERC-4337 Bundler for in-world ATMs',
    stadiumFunction: [
      'Processes social login transactions',
      'Enables seamless ETH to Native Token swaps',
      'No MetaMask popups (account abstraction)',
      'Instant liquidity for users'
    ],
    techStack: [
      'ERC-4337 bundler implementation',
      'AMM integration (Uniswap-style)',
      'Social login relay',
      'Gas abstraction layer'
    ],
    serviceFeeStructure: 'Service fee per ATM transaction successfully processed',
    slaRequirements: [
      'Maintain 99.5%+ uptime for full fee eligibility',
      'Transaction success rate: 98%+',
      'Processing time: <3 seconds',
      'Slashing: 20% bond reduction for failed transactions'
    ]
  }
};

export default function NodeRoleBreakdown() {
  const [selectedRole, setSelectedRole] = useState<NodeRole>('sfu');
  const currentRole = nodeRoles[selectedRole];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Infrastructure Service Roles
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your node performs critical infrastructure services. Choose a role to learn about service responsibilities and fee structures.
        </p>
      </div>

      {/* Role Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {(Object.keys(nodeRoles) as NodeRole[]).map((role) => {
          const roleData = nodeRoles[role];
          const isSelected = selectedRole === role;
          
          return (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-opacity-100 scale-105 shadow-2xl'
                  : 'border-opacity-30 hover:border-opacity-60 hover:scale-102'
              }`}
              style={{
                borderColor: roleData.color,
                background: isSelected
                  ? `linear-gradient(135deg, ${roleData.color}20, transparent)`
                  : 'transparent'
              }}
            >
              <div className="text-5xl mb-3">{roleData.icon}</div>
              <h3 className="text-xl font-bold mb-2">{roleData.title}</h3>
              <p className="text-sm text-gray-400">
                {isSelected ? 'Selected' : 'Click to view'}
              </p>
            </button>
          );
        })}
      </div>

      {/* Role Details Card */}
      <div
        className="rounded-2xl border-2 p-8 md:p-12 transition-all duration-500"
        style={{
          borderColor: currentRole.color,
          background: `linear-gradient(135deg, ${currentRole.color}10, transparent)`
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-6xl">{currentRole.icon}</div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {currentRole.title}
            </h3>
            <p className="text-lg text-gray-300">
              <span className="font-semibold" style={{ color: currentRole.color }}>
                Service Description:
              </span>{' '}
              {currentRole.job}
            </p>
          </div>
        </div>

        {/* Service Responsibilities */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>📋</span>
            Service Responsibilities
          </h4>
          <ul className="space-y-3">
            {currentRole.stadiumFunction.map((func, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: currentRole.color }}
                />
                <span className="text-lg text-gray-200">{func}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Stack */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🔧</span>
            Infrastructure Tools Required
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentRole.techStack.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-3 rounded-lg border"
                style={{
                  borderColor: `${currentRole.color}40`,
                  background: `${currentRole.color}10`
                }}
              >
                <span className="text-base font-mono">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Fee Structure */}
        <div
          className="p-6 rounded-xl border-2 mb-8"
          style={{
            borderColor: currentRole.color,
            background: `linear-gradient(135deg, ${currentRole.color}20, transparent)`
          }}
        >
          <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
            <span>💰</span>
            Service Fee Structure
          </h4>
          <p className="text-lg">
            <span className="font-semibold" style={{ color: currentRole.color }}>
              {currentRole.serviceFeeStructure}
            </span>
          </p>
        </div>

        {/* SLA Requirements */}
        <div
          className="p-6 rounded-xl border-2"
          style={{
            borderColor: `${currentRole.color}80`,
            background: `linear-gradient(135deg, ${currentRole.color}15, transparent)`
          }}
        >
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>⚖️</span>
            Service Level Agreement (SLA)
          </h4>
          <ul className="space-y-2">
            {currentRole.slaRequirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#C6FF00] mt-1">✓</span>
                <span className="text-gray-200">{req}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
            <p className="text-sm text-yellow-200">
              <span className="font-semibold">⚠️ Performance Bond:</span> Your security deposit ensures service quality. Operators who maintain SLA requirements keep their bond. Poor performers face slashing (bond reduction).
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          💡 <span className="font-semibold">Pro Tip:</span> Your node can perform all three service roles simultaneously, receiving fees from multiple service streams.
        </p>
      </div>
    </div>
  );
}
