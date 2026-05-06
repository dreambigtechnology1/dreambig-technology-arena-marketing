'use client';

export default function TechnicalRequirementsTable() {
  const requirements = {
    hardware: [
      { component: 'CPU', minimum: '4 cores @ 2.5GHz', recommended: '8 cores @ 3.0GHz', enterprise: '16+ cores @ 3.5GHz' },
      { component: 'RAM', minimum: '8 GB', recommended: '16 GB', enterprise: '32+ GB' },
      { component: 'Storage', minimum: '100 GB SSD', recommended: '250 GB NVMe', enterprise: '500+ GB NVMe' },
      { component: 'Bandwidth', minimum: '100 Mbps', recommended: '500 Mbps', enterprise: '1+ Gbps' },
      { component: 'Uptime', minimum: '95%', recommended: '99%', enterprise: '99.9%' }
    ],
    software: [
      { component: 'OS', requirement: 'Linux (Ubuntu 22.04+), macOS, Windows Server' },
      { component: 'Node.js', requirement: 'v18+ LTS' },
      { component: 'Docker', requirement: 'Optional but recommended' },
      { component: 'Git', requirement: 'For automated sync' }
    ],
    network: [
      { component: 'Public IP', requirement: 'Required (or port forwarding)' },
      { component: 'Open Ports', requirement: '9090 (WebRTC), 9091 (HTTP)' },
      { component: 'Firewall', requirement: 'Allow inbound/outbound on specified ports' },
      { component: 'NAT', requirement: 'Full cone or symmetric NAT supported' }
    ]
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'minimum':
        return '#C6FF00';
      case 'recommended':
        return '#00F0FF';
      case 'enterprise':
        return '#4B21FF';
      default:
        return '#C6FF00';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="requirements">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical Requirements
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ensure your infrastructure meets these specifications for optimal performance and earnings.
        </p>
      </div>

      {/* Hardware Requirements */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>💻</span>
          Hardware Requirements
        </h3>
        
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border-2 border-[#4B21FF]/30">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#4B21FF]/20 to-transparent">
                <th className="px-6 py-4 text-left font-semibold">Component</th>
                <th className="px-6 py-4 text-left font-semibold">
                  <span className="text-[#C6FF00]">Minimum</span>
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  <span className="text-[#00F0FF]">Recommended</span>
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  <span className="text-[#4B21FF]">Enterprise</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {requirements.hardware.map((req, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-700 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold">{req.component}</td>
                  <td className="px-6 py-4 text-gray-300">{req.minimum}</td>
                  <td className="px-6 py-4 text-gray-300">{req.recommended}</td>
                  <td className="px-6 py-4 text-gray-300">{req.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {requirements.hardware.map((req, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-2 border-[#4B21FF]/30 bg-gradient-to-r from-[#4B21FF]/10 to-transparent"
            >
              <div className="font-semibold text-lg mb-3">{req.component}</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#C6FF00]">Minimum:</span>
                  <span className="text-gray-300">{req.minimum}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00F0FF]">Recommended:</span>
                  <span className="text-gray-300">{req.recommended}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B21FF]">Enterprise:</span>
                  <span className="text-gray-300">{req.enterprise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Software Requirements */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>⚙️</span>
          Software Requirements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requirements.software.map((req, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-2 border-[#00F0FF]/30 bg-gradient-to-r from-[#00F0FF]/10 to-transparent"
            >
              <div className="font-semibold text-lg mb-2">{req.component}</div>
              <div className="text-gray-300">{req.requirement}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Requirements */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>🌐</span>
          Network Requirements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requirements.network.map((req, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-2 border-[#C6FF00]/30 bg-gradient-to-r from-[#C6FF00]/10 to-transparent"
            >
              <div className="font-semibold text-lg mb-2">{req.component}</div>
              <div className="text-gray-300">{req.requirement}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Binary Optimization Callout */}
      <div className="p-8 rounded-2xl border-2 border-[#4B21FF] bg-gradient-to-br from-[#4B21FF]/20 via-[#00F0FF]/10 to-transparent">
        <div className="flex items-start gap-4">
          <div className="text-5xl">⚡</div>
          <div>
            <h4 className="text-2xl font-bold mb-3">80% Bandwidth Reduction with NAF Binary</h4>
            <p className="text-lg text-gray-300 mb-4">
              Our custom NAF Protobuf Adapter converts standard JSON traffic to compact binary, reducing bandwidth requirements by 80%. This means you can host with consumer-grade hardware instead of enterprise infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                <div className="text-sm text-gray-400 mb-1">Standard JSON Packet</div>
                <div className="text-xl font-bold text-red-400">~2KB per update</div>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="text-sm text-gray-400 mb-1">Protobuf Binary Packet</div>
                <div className="text-xl font-bold text-green-400">~400 bytes per update</div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#C6FF00]/10 border border-[#C6FF00]/30">
              <code className="text-sm font-mono text-[#C6FF00]">
                npm install @intown/naf-protobuf-adapter
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
