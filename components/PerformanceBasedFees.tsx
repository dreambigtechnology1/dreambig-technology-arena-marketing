'use client';

export default function PerformanceBasedFees() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Performance-Based <span className="text-[#C6FF00]">Service Fees</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          You pay for verified infrastructure delivery—not marketing promises
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#0B0B0B] border-2 border-[#4B21FF]/50 rounded-xl p-6 hover:border-[#4B21FF] transition-colors">
          <div className="text-5xl mb-4 text-center">📊</div>
          <h4 className="text-xl font-bold text-white mb-3 text-center">Verified Delivery</h4>
          <p className="text-gray-300 text-sm">
            Sponsors pay for <span className="text-[#C6FF00] font-bold">PoT-Verified Impressions</span>—you 
            only pay for the infrastructure labor the nodes actually perform.
          </p>
        </div>
        
        <div className="bg-[#0B0B0B] border-2 border-[#00F0FF]/50 rounded-xl p-6 hover:border-[#00F0FF] transition-colors">
          <div className="text-5xl mb-4 text-center">🔍</div>
          <h4 className="text-xl font-bold text-white mb-3 text-center">Real-Time Auditing</h4>
          <p className="text-gray-300 text-sm">
            All reach is tracked via a <span className="text-[#00F0FF] font-bold">GitOps-driven audit trail</span>, 
            providing transparency Facebook or TV networks cannot match.
          </p>
        </div>
        
        <div className="bg-[#0B0B0B] border-2 border-[#C6FF00]/50 rounded-xl p-6 hover:border-[#C6FF00] transition-colors">
          <div className="text-5xl mb-4 text-center">📦</div>
          <h4 className="text-xl font-bold text-white mb-3 text-center">Scalable Tiers</h4>
          <p className="text-gray-300 text-sm">
            We are selling the <span className="text-[#C6FF00] font-bold">Available Inventory</span> of 250 million slots. 
            You are early-access partners in the Genesis Event deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
