'use client';

export default function PerformancePipeline() {
  const stages = [
    {
      number: 1,
      title: 'Intake',
      description: 'Rapid distribution of access passes with real-time inventory tracking',
      icon: '⚡',
      color: '#00F0FF'
    },
    {
      number: 2,
      title: 'Validation',
      description: 'Every pass is secured via a NFT event ticket to eliminate fraud',
      icon: '✅',
      color: '#C6FF00'
    },
    {
      number: 3,
      title: 'Fulfillment',
      description: 'High-fidelity 3D delivery via the InTown Metaverse Desktop App',
      icon: '🎮',
      color: '#4B21FF'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The Performance <span className="text-[#C6FF00]">Pipeline</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A three-stage automated workflow designed to keep the event running with <span className="text-[#C6FF00] font-bold">100% integrity</span>
        </p>
      </div>

      {/* Desktop Flow */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F0FF] via-[#C6FF00] to-[#4B21FF] transform -translate-y-1/2 z-0"></div>
          
          {/* Stages */}
          <div className="relative z-10 grid grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Number Circle */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-6 border-4"
                  style={{ 
                    backgroundColor: stage.color,
                    borderColor: stage.color,
                    boxShadow: `0 0 30px ${stage.color}80`
                  }}
                >
                  {stage.number}
                </div>
                
                {/* Stage Card */}
                <div 
                  className="bg-[#0B0B0B] border-2 rounded-xl p-6 w-full text-center hover:scale-105 transition-transform"
                  style={{ borderColor: `${stage.color}50` }}
                >
                  <div className="text-5xl mb-4">{stage.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{stage.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Vertical Flow */}
      <div className="md:hidden space-y-6">
        {stages.map((stage, index) => (
          <div key={index}>
            <div 
              className="bg-[#0B0B0B] border-2 rounded-xl p-6"
              style={{ borderColor: `${stage.color}50` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 flex-shrink-0"
                  style={{ 
                    backgroundColor: stage.color,
                    borderColor: stage.color
                  }}
                >
                  {stage.number}
                </div>
                <div className="text-5xl">{stage.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{stage.title}</h3>
              <p className="text-gray-300 leading-relaxed">{stage.description}</p>
            </div>
            
            {index < stages.length - 1 && (
              <div className="flex justify-center py-4">
                <div 
                  className="text-4xl"
                  style={{ color: stages[index + 1].color }}
                >
                  ↓
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
