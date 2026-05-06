'use client';

export default function MediaValueCalculator() {
  return (
    <div className="bg-gradient-to-r from-[#4B21FF]/20 to-[#C6FF00]/20 border-2 border-[#C6FF00] rounded-2xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Projected <span className="text-[#C6FF00]">Media Value</span> (CPM)
        </h2>
        <p className="text-xl text-gray-300">
          Verified delivery metrics with zero ad fraud
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Media Efficiency */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Media Efficiency Metrics</h3>
          
            <div className="bg-black/50 rounded-lg p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Verified Impressions</span>
                <span className="text-2xl font-bold text-[#C6FF00]">187.5M</span>
              </div>
              <div className="text-xs text-gray-500">250 million capacity × 75% engagement rate (verified)</div>
            
            <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
              <span className="text-gray-400">CPM (Cost Per 1000)</span>
              <span className="text-2xl font-bold text-[#00F0FF]">$26.67</span>
            </div>
            <div className="text-xs text-gray-500">$5M ÷ 187,500 impressions</div>
            
            <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
              <span className="text-gray-400">vs Super Bowl CPM</span>
              <span className="text-2xl font-bold text-gray-400">$88.89</span>
            </div>
            <div className="text-xs text-gray-500">$8M ÷ 90,000 impressions</div>
            
            <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
              <span className="text-gray-400">Fraud Rate</span>
              <span className="text-2xl font-bold text-[#C6FF00]">0%</span>
            </div>
            <div className="text-xs text-gray-500">vs 30% industry average (bot inflation)</div>
            
              <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
                <span className="text-gray-400">Delivery Guarantee</span>
                <span className="text-2xl font-bold text-[#4B21FF]">99.9%</span>
              </div>
              <div className="text-xs text-gray-500">Distributed network ensures uptime</div>
            
            <div className="bg-[#C6FF00]/20 border border-[#C6FF00]/50 rounded-lg p-4 mt-4">
              <div className="text-sm text-gray-400 mb-1">Cost Efficiency</div>
              <div className="text-3xl font-bold text-[#C6FF00]">70% Better</div>
              <div className="text-xs text-gray-500 mt-1">than Super Bowl advertising</div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Commerce Conversion */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Commerce Conversion Value</h3>
          
          <div className="space-y-4">
            <div className="bg-black/50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🛍️</div>
                <div>
                  <div className="font-bold text-white mb-1">Avatar Commerce Revenue</div>
                  <div className="text-sm text-gray-400 mb-2">
                    Potential $12.5M from 0.1% conversion on branded wearables
                  </div>
                  <div className="text-[#C6FF00] font-bold">+250% ROI beyond impressions</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🍔</div>
                <div>
                  <div className="font-bold text-white mb-1">Physical Delivery Integration</div>
                  <div className="text-sm text-gray-400 mb-2">
                    DoorDash/Uber Eats kiosk transactions with seamless payment processing
                  </div>
                  <div className="text-[#00F0FF] font-bold">Direct revenue from in-venue orders</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🔄</div>
                <div>
                  <div className="font-bold text-white mb-1">Perpetual Royalty Rights</div>
                  <div className="text-sm text-gray-400 mb-2">
                    5% ongoing royalties on secondary wearable sales
                  </div>
                  <div className="text-[#4B21FF] font-bold">Passive income stream for years</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="font-bold text-white mb-1">Network Effect Amplification</div>
                  <div className="text-sm text-gray-400 mb-2">
                    Each fan becomes a walking billboard wearing your branded items
                  </div>
                  <div className="text-[#C6FF00] font-bold">Organic reach beyond paid placement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
