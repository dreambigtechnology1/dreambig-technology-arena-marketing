'use client';

export default function ArtistFunnelExplainer() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent via-[#C6FF00]/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-[#C6FF00]">Artist Funnel</span>: How The Stadium Fills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our infrastructure is designed to capture the <span className="text-[#C6FF00] font-bold">Overflow Demand</span> from 
            major artists' existing social media followings
          </p>
        </div>

        {/* The Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border-2 border-[#4B21FF] rounded-xl p-6 h-full">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[#4B21FF] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  1
                </div>
                <h4 className="text-xl font-bold text-white">Artist Announces</h4>
              </div>
              <p className="text-gray-300 text-sm text-center">
                Headliner with <span className="text-[#C6FF00] font-bold">150 million combined followers</span> announces 
                Genesis Event at DreamBIG Technology Arena
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#C6FF00] text-3xl z-10">
              →
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#00F0FF]/20 to-transparent border-2 border-[#00F0FF] rounded-xl p-6 h-full">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[#00F0FF] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3 text-black">
                  2
                </div>
                <h4 className="text-xl font-bold text-white">Social Amplification</h4>
              </div>
              <p className="text-gray-300 text-sm text-center">
                Fans share across TikTok, Instagram, Twitter. 
                <span className="text-[#00F0FF] font-bold"> Viral moment</span> reaches 500M+ impressions
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#C6FF00] text-3xl z-10">
              →
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#C6FF00]/20 to-transparent border-2 border-[#C6FF00] rounded-xl p-6 h-full">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[#C6FF00] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3 text-black">
                  3
                </div>
                <h4 className="text-xl font-bold text-white">Infrastructure Captures</h4>
              </div>
              <p className="text-gray-300 text-sm text-center">
                Traditional venues: <span className="text-red-400">0.01% capacity</span><br/>
                DreamBIG Technology Arena: <span className="text-[#C6FF00] font-bold">100% of global reach</span>
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#C6FF00] text-3xl z-10">
              →
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-br from-purple-500/20 to-transparent border-2 border-purple-500 rounded-xl p-6 h-full">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                4
              </div>
              <h4 className="text-xl font-bold text-white">Your Brand Wins</h4>
            </div>
            <p className="text-gray-300 text-sm text-center">
              <span className="text-[#C6FF00] font-bold">250 million verified impressions</span> with 
              cryptographic proof of delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
