export default function TechnicalRequirementsTable() {
  const requirements = [
    {
      tier: 'Starter Node',
      icon: '🌱',
      color: 'from-green-500/20 to-transparent border-green-500/30',
      specs: {
        cpu: '4 cores @ 2.5GHz',
        ram: '8 GB',
        storage: '100 GB SSD',
        bandwidth: '100 Mbps',
        uptime: '95%+'
      },
      capacity: '100-500 users',
      estimatedRevenue: '$2,000 - $8,000/month',
      recommended: 'Home server or VPS'
    },
    {
      tier: 'Professional Node',
      icon: '⚡',
      color: 'from-[#00F0FF]/20 to-transparent border-[#00F0FF]/30',
      specs: {
        cpu: '8 cores @ 3.0GHz',
        ram: '32 GB',
        storage: '500 GB NVMe',
        bandwidth: '1 Gbps',
        uptime: '99%+'
      },
      capacity: '500-2,000 users',
      estimatedRevenue: '$15,000 - $50,000/month',
      recommended: 'Dedicated server or cloud instance'
    },
    {
      tier: 'Enterprise Node',
      icon: '🚀',
      color: 'from-[#C6FF00]/20 to-transparent border-[#C6FF00]/30',
      specs: {
        cpu: '16+ cores @ 3.5GHz',
        ram: '64+ GB',
        storage: '1+ TB NVMe',
        bandwidth: '10 Gbps',
        uptime: '99.9%+'
      },
      capacity: '2,000-10,000 users',
      estimatedRevenue: '$50,000 - $200,000+/month',
      recommended: 'Data center or enterprise cloud'
    }
  ];

  const softwareRequirements = [
    { name: 'Operating System', requirement: 'Ubuntu 22.04 LTS or later (recommended)' },
    { name: 'Node.js', requirement: 'v18.0.0 or later' },
    { name: 'Docker', requirement: 'v24.0 or later' },
    { name: 'Network', requirement: 'Static IP address, open ports 443, 8080, 9000' },
    { name: 'SSL Certificate', requirement: 'Valid SSL/TLS certificate (Let\'s Encrypt supported)' },
    { name: 'Monitoring', requirement: 'Prometheus + Grafana (provided in setup)' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black/50 to-transparent" id="requirements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Requirements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the node tier that matches your infrastructure capacity. Scale up anytime to increase earnings.
          </p>
        </div>

        {/* Hardware Requirements Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {requirements.map((req, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 bg-gradient-to-br ${req.color}`}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{req.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{req.tier}</h3>
                <p className="text-sm text-gray-400">{req.recommended}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 rounded-lg bg-black/30">
                  <span className="text-sm text-gray-400">CPU</span>
                  <span className="text-sm font-semibold">{req.specs.cpu}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-black/30">
                  <span className="text-sm text-gray-400">RAM</span>
                  <span className="text-sm font-semibold">{req.specs.ram}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-black/30">
                  <span className="text-sm text-gray-400">Storage</span>
                  <span className="text-sm font-semibold">{req.specs.storage}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-black/30">
                  <span className="text-sm text-gray-400">Bandwidth</span>
                  <span className="text-sm font-semibold">{req.specs.bandwidth}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-black/30">
                  <span className="text-sm text-gray-400">Uptime</span>
                  <span className="text-sm font-semibold">{req.specs.uptime}</span>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="text-sm text-gray-400">Capacity</div>
                <div className="text-lg font-bold">{req.capacity}</div>
                <div className="text-sm text-gray-400 mt-3">Estimated Revenue</div>
                <div className="text-xl font-bold text-[#C6FF00]">{req.estimatedRevenue}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Software Requirements */}
        <div className="p-8 rounded-2xl border-2 border-[#4B21FF]/30 bg-gradient-to-br from-[#4B21FF]/10 to-transparent">
          <h3 className="text-3xl font-bold mb-6 text-center">Software Requirements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softwareRequirements.map((req, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-black/30 border border-gray-700"
              >
                <div className="text-sm font-semibold text-[#00F0FF] mb-2">{req.name}</div>
                <div className="text-sm text-gray-300">{req.requirement}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#C6FF00]/20 to-transparent border border-[#C6FF00]/30">
            <p className="text-sm text-gray-300">
              💡 <span className="font-semibold">Good News:</span> Our automated setup wizard handles all software installation and configuration. You just need to provide the hardware.
            </p>
          </div>
        </div>

        {/* Network Requirements */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border-2 border-[#00F0FF]/30 bg-gradient-to-br from-[#00F0FF]/10 to-transparent">
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="text-xl font-bold mb-2">Network Connectivity</h4>
            <p className="text-sm text-gray-300">
              Static IP address required. IPv6 support recommended. Low latency (&lt;50ms to major hubs).
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#4B21FF]/30 bg-gradient-to-br from-[#4B21FF]/10 to-transparent">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="text-xl font-bold mb-2">Security</h4>
            <p className="text-sm text-gray-300">
              Firewall configured, DDoS protection recommended, automatic security updates enabled.
            </p>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#C6FF00]/30 bg-gradient-to-br from-[#C6FF00]/10 to-transparent">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="text-xl font-bold mb-2">Monitoring</h4>
            <p className="text-sm text-gray-300">
              Real-time performance monitoring, automated alerts, health check endpoints.
            </p>
          </div>
        </div>

        {/* Cost Estimate */}
        <div className="mt-12 p-8 rounded-2xl border-2 border-[#C6FF00] bg-gradient-to-br from-[#C6FF00]/20 via-[#4B21FF]/10 to-transparent">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Infrastructure Cost Estimate</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Typical monthly costs for hosting infrastructure (before revenue):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-black/30">
                <div className="text-sm text-gray-400 mb-1">Starter Node</div>
                <div className="text-2xl font-bold text-green-400">$50 - $200/mo</div>
                <div className="text-xs text-gray-500 mt-1">VPS or home server</div>
              </div>
              <div className="p-4 rounded-lg bg-black/30">
                <div className="text-sm text-gray-400 mb-1">Professional Node</div>
                <div className="text-2xl font-bold text-[#00F0FF]">$300 - $800/mo</div>
                <div className="text-xs text-gray-500 mt-1">Dedicated server</div>
              </div>
              <div className="p-4 rounded-lg bg-black/30">
                <div className="text-sm text-gray-400 mb-1">Enterprise Node</div>
                <div className="text-2xl font-bold text-[#C6FF00]">$1,000 - $3,000/mo</div>
                <div className="text-xs text-gray-500 mt-1">Data center grade</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              💰 ROI typically achieved within first event. Service fees far exceed infrastructure costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
