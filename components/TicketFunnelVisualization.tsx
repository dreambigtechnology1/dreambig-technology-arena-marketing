'use client';

export default function TicketFunnelVisualization() {
  const steps = [
    {
      number: 1,
      title: 'High-Velocity Intake',
      description: 'The tool for managing massive traffic without crashing—your web interface for rapid access pass distribution',
      icon: '🌐',
      color: '#00F0FF',
      details: [
        'Optimized for high-volume traffic',
        'Social media integration',
        'Global payment methods',
        'Real-time inventory management'
      ]
    },
    {
      number: 2,
      title: 'Integrity Validation',
      description: 'NFT event tickets are the security mechanism for your job—ensuring every access pass is authentic',
      icon: '✅',
      color: '#C6FF00',
      details: [
        'Blockchain verification',
        'NFT-based access passes',
        'Anti-fraud protection',
        'Instant validation'
      ]
    },
    {
      number: 3,
      title: 'Immersive Service Fulfillment',
      description: 'This is where you deliver the actual product—the event experience via the Electron App',
      icon: '🎮',
      color: '#4B21FF',
      details: [
        'Native performance',
        'P2P connectivity',
        'Full 3D experience',
        'Cross-platform support'
      ]
    }
  ];
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The <span className="text-[#C6FF00]">Operational Pipeline</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          To successfully manage <span className="text-[#C6FF00] font-bold">$1.9B in economic activity</span>, 
          orchestrators use this three-stage service delivery pipeline
        </p>
      </div>
      
      {/* Desktop Flow Visualization */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F0FF] via-[#C6FF00] to-[#4B21FF] transform -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="relative z-10 grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Step Number Circle */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-6 border-4 shadow-lg"
                  style={{ 
                    backgroundColor: step.color,
                    borderColor: step.color,
                    boxShadow: `0 0 30px ${step.color}80`
                  }}
                >
                  {step.number}
                </div>
                
                {/* Step Card */}
                <div 
                  className="bg-[#0B0B0B] border-2 rounded-xl p-6 w-full hover:scale-105 transition-transform"
                  style={{ borderColor: `${step.color}50` }}
                >
                  <div className="text-5xl text-center mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-white text-center mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: step.color }}
                        ></div>
                        <span className="text-sm text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Vertical Flow */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Card */}
            <div 
              className="bg-[#0B0B0B] border-2 rounded-xl p-6"
              style={{ borderColor: `${step.color}50` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 flex-shrink-0"
                  style={{ 
                    backgroundColor: step.color,
                    borderColor: step.color,
                    boxShadow: `0 0 20px ${step.color}80`
                  }}
                >
                  {step.number}
                </div>
                <div className="text-5xl">{step.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
              
              <div className="space-y-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: step.color }}
                    ></div>
                    <span className="text-sm text-gray-400">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Arrow Connector (except for last item) */}
            {index < steps.length - 1 && (
              <div className="flex justify-center py-4">
                <div 
                  className="text-4xl"
                  style={{ color: steps[index + 1].color }}
                >
                  ↓
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Success Metrics */}
      <div className="bg-gradient-to-r from-[#00F0FF]/10 via-[#C6FF00]/10 to-[#4B21FF]/10 border-2 border-[#C6FF00]/50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white text-center mb-6">
          Pipeline <span className="text-[#C6FF00]">Performance Metrics</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <div className="text-3xl font-bold text-[#00F0FF] mb-2">95%</div>
            <div className="text-sm text-gray-400">Fulfillment Rate</div>
            <p className="text-xs text-gray-500 mt-2">Intake to Validation</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-3xl font-bold text-[#C6FF00] mb-2">&lt;2s</div>
            <div className="text-sm text-gray-400">Processing Speed</div>
            <p className="text-xs text-gray-500 mt-2">Validation to delivery</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-bold text-[#4B21FF] mb-2">100%</div>
            <div className="text-sm text-gray-400">Security Rate</div>
            <p className="text-xs text-gray-500 mt-2">Blockchain integrity</p>
          </div>
        </div>
      </div>
      
      {/* Technical Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0B0B0B] border-2 border-[#00F0FF]/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-3xl">🔧</div>
            <h4 className="text-xl font-bold text-white">Technical Stack</h4>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="text-[#00F0FF]">•</span>
              <span><strong>Web:</strong> Next.js for SEO & performance</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#C6FF00]">•</span>
              <span><strong>Protocol:</strong> ERC-721 NFT tickets</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#4B21FF]">•</span>
              <span><strong>App:</strong> Electron + WebRTC P2P</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#0B0B0B] border-2 border-[#C6FF00]/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-3xl">💡</div>
            <h4 className="text-xl font-bold text-white">Orchestrator Benefits</h4>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="text-[#00F0FF]">•</span>
              <span>Track every transaction in real-time</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#C6FF00]">•</span>
              <span>Zero fraud or counterfeits</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#4B21FF]">•</span>
              <span>Seamless service delivery</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
