'use client';

import { useState } from 'react';

interface ContributionModalProps {
  onClose: () => void;
}

export default function ContributionModal({ onClose }: ContributionModalProps) {
  const [contributionAmount, setContributionAmount] = useState(0.05);
  
  const formatUSD = (eth: number) => {
    return `$${(eth * 1000).toFixed(0)}`; // Assuming $1000/ETH
  };
  
  const handleContribute = () => {
    // TODO: Integrate with Web3 to call contribute()
    console.log(`Contributing ${contributionAmount} ETH to Genesis Event`);
    alert(`Contribution submitted! ${contributionAmount} ETH`);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0B0B0B] border-2 border-[#C6FF00] rounded-2xl p-8 max-w-lg w-full shadow-[0_0_50px_rgba(198,255,0,0.5)]">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl font-bold text-[#C6FF00]">Contribute to Genesis</h3>
            <p className="text-gray-400 text-sm mt-1">Help launch the metaverse's first stadium</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>
        
        {/* Venue Preview */}
        <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-6 mb-6 flex items-center justify-center">
          <span className="text-8xl">🏟️</span>
        </div>
        
        {/* Contribution Amount Slider */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <label className="text-gray-300 font-semibold">Contribution Amount</label>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#C6FF00]">{contributionAmount.toFixed(3)} ETH</div>
              <div className="text-sm text-gray-400">{formatUSD(contributionAmount)}</div>
            </div>
          </div>
          
          <input
            type="range"
            min="0.01"
            max="10"
            step="0.01"
            value={contributionAmount}
            onChange={(e) => setContributionAmount(parseFloat(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C6FF00]"
          />
          
          <div className="flex justify-between text-xs text-gray-500">
            <span>0.01 ETH</span>
            <span>10 ETH</span>
          </div>
          
          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {[0.05, 0.1, 0.5, 1].map((amount) => (
              <button
                key={amount}
                onClick={() => setContributionAmount(amount)}
                className={`py-2 rounded-lg font-semibold transition-all ${
                  contributionAmount === amount
                    ? 'bg-[#C6FF00] text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {amount} ETH
              </button>
            ))}
          </div>
        </div>
        
        {/* Benefits */}
        <div className="bg-black/50 rounded-lg p-4 mb-6 space-y-2 text-sm">
          <div className="flex items-center text-green-400">
            <span className="mr-2">✓</span>
            <span>Counts toward $15M Genesis goal</span>
          </div>
          <div className="flex items-center text-green-400">
            <span className="mr-2">✓</span>
            <span>Unlocks exclusive venue access</span>
          </div>
          <div className="flex items-center text-green-400">
            <span className="mr-2">✓</span>
            <span>Increases your Whale Ranking</span>
          </div>
          <div className="flex items-center text-green-400">
            <span className="mr-2">✓</span>
            <span>Genesis Event commemorative NFT</span>
          </div>
          <div className="flex items-center text-yellow-400">
            <span className="mr-2">⚡</span>
            <span>Potential rank boost: #47 → #32</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleContribute}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-[#4B21FF] to-[#C6FF00] rounded-lg font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(198,255,0,0.4)]"
          >
            Confirm Contribution
          </button>
        </div>
        
        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          All contributions are held in escrow and count toward the Genesis Event goal. 
          Refunds available only if $15M goal is not met by deadline.
        </p>
      </div>
    </div>
  );
}
