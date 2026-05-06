'use client';

export default function SetupWizard() {
  const steps = [
    {
      number: 1,
      icon: '📦',
      title: 'Install Node Software',
      description: 'Download and configure the InTown Node package',
      details: [
        'Download InTown Node package',
        'Run automated installer',
        'Configure environment variables',
        'Test connectivity'
      ],
      code: `curl -fsSL https://get.intownmetaverse.com | bash
intown-node init
intown-node test`,
      color: '#4B21FF'
    },
    {
      number: 2,
      icon: '🔒',
      title: 'Post Performance Bond',
      description: 'Submit security deposit to guarantee service quality',
      details: [
        'Acquire minimum 1,000 ITMV tokens',
        'Bond via smart contract',
        'Lock for minimum 30 days',
        'Build reputation score'
      ],
      info: 'Performance bond ensures service quality. Operators maintaining SLA keep their bond; poor performers face slashing.',
      color: '#00F0FF'
    },
    {
      number: 3,
      icon: '⚙️',
      title: 'Deploy & Sync',
      description: 'Automated sync and blockchain synchronization',
      details: [
        'Automated sync pulls latest venue manifest',
        'Node syncs with global CDN',
        'Validates blockchain state',
        'Joins active node pool'
      ],
      info: 'Push-based automation with image digests for security',
      color: '#C6FF00'
    },
    {
      number: 4,
      icon: '🚀',
      title: 'Start Serving the Venue',
      description: 'Begin service operations and fulfilling responsibilities',
      details: [
        'Node begins serving traffic',
        'PoT receipts accumulate',
        'Service fees auto-compound',
        'Dashboard tracks performance'
      ],
      info: 'Real-time service dashboard with uptime and task completion tracking',
      color: '#4B21FF'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Setup Wizard
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Get your node up and running in 4 simple steps. From installation to earning, we'll guide you through the entire process.
        </p>
      </div>

      {/* Desktop - Horizontal Flow */}
      <div className="hidden lg:block mb-16">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#4B21FF] via-[#00F0FF] via-[#C6FF00] to-[#4B21FF]" />
          
          {/* Steps */}
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div
                  className="w-32 h-32 mx-auto rounded-full border-4 flex items-center justify-center text-5xl mb-6 relative z-10 bg-black"
                  style={{ borderColor: step.color }}
                >
                  {step.icon}
                </div>
                
                {/* Step Content */}
                <div
                  className="p-6 rounded-xl border-2"
                  style={{
                    borderColor: `${step.color}40`,
                    background: `linear-gradient(135deg, ${step.color}10, transparent)`
                  }}
                >
                  <div className="text-center mb-4">
                    <div
                      className="text-sm font-bold mb-2"
                      style={{ color: step.color }}
                    >
                      STEP {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                  
                  <ul className="space-y-2 text-sm">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {step.code && (
                    <div className="mt-4 p-3 rounded-lg bg-black/50 border border-gray-700">
                      <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap">
                        {step.code}
                      </pre>
                    </div>
                  )}
                  
                  {step.info && (
                    <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
                      <p className="text-xs text-gray-400">
                        💡 {step.info}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet - Vertical Flow */}
      <div className="lg:hidden space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-16 top-32 bottom-0 w-1 -mb-8"
                style={{
                  background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`
                }}
              />
            )}
            
            <div className="flex gap-6">
              {/* Step Number Circle */}
              <div
                className="w-32 h-32 flex-shrink-0 rounded-full border-4 flex items-center justify-center text-5xl relative z-10 bg-black"
                style={{ borderColor: step.color }}
              >
                {step.icon}
              </div>
              
              {/* Step Content */}
              <div className="flex-1">
                <div
                  className="p-6 rounded-xl border-2 h-full"
                  style={{
                    borderColor: `${step.color}40`,
                    background: `linear-gradient(135deg, ${step.color}10, transparent)`
                  }}
                >
                  <div className="mb-4">
                    <div
                      className="text-sm font-bold mb-2"
                      style={{ color: step.color }}
                    >
                      STEP {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {step.code && (
                    <div className="mb-4 p-3 rounded-lg bg-black/50 border border-gray-700">
                      <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap">
                        {step.code}
                      </pre>
                    </div>
                  )}
                  
                  {step.info && (
                    <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
                      <p className="text-sm text-gray-400">
                        💡 {step.info}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="p-8 rounded-2xl border-2 border-[#C6FF00] bg-gradient-to-br from-[#C6FF00]/20 via-[#4B21FF]/10 to-transparent">
          <h3 className="text-2xl font-bold mb-4">Ready to Deploy Your Infrastructure Stack?</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the infrastructure providers powering the future of live events. Provide critical services and receive compensation for verified delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] hover:scale-105 transition-transform"
            >
              Deploy Infrastructure Stack
            </a>
            <a
              href="/economy"
              className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#C6FF00] hover:bg-[#C6FF00]/10 transition-colors"
            >
              View Full Economy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
