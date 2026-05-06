'use client';

export default function ProgressFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[rgba(11,11,11,0.9)] backdrop-blur-md border-t border-[#C6FF00]/30">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Progress Section - 40% */}
            <div className="flex-[0.4] space-y-2">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-sm text-gray-400">Genesis Raise Status</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[#C6FF00]">$0</span>
                  <span className="text-sm text-gray-400 ml-1">/ $15M</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-900 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#4B21FF] via-[#C6FF00] to-[#00F0FF] rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(198,255,0,0.6)]"
                  style={{ width: '0%' }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                  0% Funded
                </div>
              </div>
            </div>

            {/* Stats Section - 60% */}
            <div className="flex-[0.6] grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00F0FF]">0</div>
                <div className="text-xs text-gray-400">Fans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C6FF00]">0</div>
                <div className="text-xs text-gray-400">Promoters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4B21FF]">0</div>
                <div className="text-xs text-gray-400">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C6FF00]">45 days</div>
                <div className="text-xs text-gray-400">Left</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="px-4 py-3 space-y-3">
          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-gray-400">Progress</span>
              <div>
                <span className="text-lg font-bold text-[#C6FF00]">$0</span>
                <span className="text-xs text-gray-400 ml-1">/ $15M</span>
              </div>
            </div>
            
            <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#4B21FF] via-[#C6FF00] to-[#00F0FF] rounded-full transition-all duration-1000"
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <div className="text-lg font-bold text-[#00F0FF]">0</div>
              <div className="text-[10px] text-gray-400">Fans</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#C6FF00]">0</div>
              <div className="text-[10px] text-gray-400">Promoters</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#4B21FF]">0</div>
              <div className="text-[10px] text-gray-400">Brands</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#C6FF00]">45d</div>
              <div className="text-[10px] text-gray-400">Left</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
