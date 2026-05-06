'use client';

export default function NetworkHealthBadges() {
  return (
    <div className="bg-gradient-to-br from-[#4B21FF]/20 to-[#00F0FF]/20 border-2 border-[#4B21FF] rounded-2xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#4B21FF]">InTown Brand Toolkit</span>
        </h2>
        <p className="text-xl text-gray-300">
          Enterprise-grade infrastructure for $15M+ tier sponsors
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Network Health */}
        <div className="bg-black/50 border-2 border-[#4B21FF]/50 rounded-xl p-6 hover:border-[#4B21FF] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#4B21FF]/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold text-white">Network Health</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Active Relay Nodes</span>
              <span className="text-[#4B21FF] font-bold">64,203</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Uptime SLA</span>
              <span className="text-[#C6FF00] font-bold">99.9%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Redundancy</span>
              <span className="text-[#00F0FF] font-bold">Multi-Node</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Your brand never buffers. Distributed node architecture ensures zero downtime for 250M concurrent users.
          </p>
        </div>

        {/* Binary Optimization */}
        <div className="bg-black/50 border-2 border-[#00F0FF]/50 rounded-xl p-6 hover:border-[#00F0FF] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white">Binary Optimization</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Protobuf Compression</span>
              <span className="text-[#00F0FF] font-bold">Enabled</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">3D Boutique Load</span>
              <span className="text-[#C6FF00] font-bold">&lt;500ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Concurrent Users</span>
              <span className="text-[#4B21FF] font-bold">250M</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            High-fidelity 3D assets load instantly. No performance degradation even at peak capacity.
          </p>
        </div>

        {/* Account Abstraction */}
        <div className="bg-black/50 border-2 border-[#C6FF00]/50 rounded-xl p-6 hover:border-[#C6FF00] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#C6FF00]/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔐</span>
            </div>
            <h3 className="text-xl font-bold text-white">Account Abstraction</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Standard</span>
              <span className="text-[#C6FF00] font-bold">ERC-4337</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Wallet Setup</span>
              <span className="text-[#00F0FF] font-bold">One-Click</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Gas Fees</span>
              <span className="text-[#4B21FF] font-bold">Sponsored</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Fans buy your branded items with one click. No complex wallet hurdles to kill conversion rates.
          </p>
        </div>
      </div>

      {/* Technical Guarantees */}
      <div className="mt-8 bg-gradient-to-r from-[#4B21FF]/10 to-[#C6FF00]/10 border border-[#4B21FF]/30 rounded-xl p-6">
        <h4 className="text-lg font-bold text-white mb-4 text-center">Technical Guarantees</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#C6FF00]">✓</span>
            <span className="text-gray-300">Gasless transactions via relay network</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#C6FF00]">✓</span>
            <span className="text-gray-300">10x higher conversion vs traditional Web3</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#C6FF00]">✓</span>
            <span className="text-gray-300">Real-time analytics dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#C6FF00]">✓</span>
            <span className="text-gray-300">Automated content delivery network</span>
          </div>
        </div>
      </div>
    </div>
  );
}
