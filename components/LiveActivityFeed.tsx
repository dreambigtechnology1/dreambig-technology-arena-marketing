'use client';

import { useEffect, useState } from 'react';

interface Activity {
  id: string;
  type: 'vote' | 'ticket' | 'rank';
  address: string;
  amount?: number;
  artist?: string;
  timestamp: Date;
  rank?: number;
}

const MOCK_ACTIVITIES: Activity[] = [
  { id: '1', type: 'vote', address: '0x4f2a...b3c1', amount: 50000, timestamp: new Date(Date.now() - 2 * 60000) },
  { id: '2', type: 'ticket', address: '0x7e9f...1c2d', amount: 500, timestamp: new Date(Date.now() - 5 * 60000) },
  { id: '3', type: 'vote', address: '0x2a5d...8e4f', amount: 25000, timestamp: new Date(Date.now() - 8 * 60000) },
  { id: '4', type: 'rank', address: '0x9b3c...4d5e', rank: 12, timestamp: new Date(Date.now() - 12 * 60000) },
  { id: '5', type: 'vote', address: '0x1f8a...2b9c', amount: 15000, timestamp: new Date(Date.now() - 15 * 60000) },
];

export default function LiveActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>(MOCK_ACTIVITIES);
  
  useEffect(() => {
    // Simulate new activities every 10 seconds
    const interval = setInterval(() => {
      const newActivity: Activity = {
        id: Date.now().toString(),
        type: ['vote', 'ticket', 'rank'][Math.floor(Math.random() * 3)] as 'vote' | 'ticket' | 'rank',
        address: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
        amount: Math.floor(Math.random() * 100000) + 100,
        timestamp: new Date(),
        rank: Math.floor(Math.random() * 100) + 1,
      };
      
      setActivities(prev => [newActivity, ...prev].slice(0, 10));
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const formatAmount = (amount: number) => {
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount}`;
  };
  
  const getTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((Date.now() - timestamp.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };
  
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'vote': return '💰';
      case 'ticket': return '🎟️';
      case 'rank': return '🏆';
      default: return '⚡';
    }
  };
  
  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case 'vote':
        return (
          <>
            <span className="font-mono text-[#C6FF00]">{activity.address}</span>
            {' '}contributed{' '}
            <span className="font-bold text-[#C6FF00]">{formatAmount(activity.amount!)}</span>
            {' '}to Genesis Event
          </>
        );
      case 'ticket':
        return (
          <>
            <span className="font-mono text-[#00F0FF]">{activity.address}</span>
            {' '}secured{' '}
            <span className="font-bold text-[#00F0FF]">{Math.floor(activity.amount! / 50)}</span>
            {' '}venue tickets
          </>
        );
      case 'rank':
        return (
          <>
            <span className="font-mono text-[#4B21FF]">{activity.address}</span>
            {' '}is now{' '}
            <span className="font-bold text-[#4B21FF]">#{activity.rank}</span>
            {' '}on leaderboard!
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#C6FF00] to-[#00F0FF] bg-clip-text text-transparent">
          ⚡ LIVE ACTIVITY
        </h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Live</span>
        </div>
      </div>
      
      {/* Activity Feed */}
      <div className="bg-[#0B0B0B] border border-gray-700 rounded-xl p-4 space-y-3 max-h-[500px] overflow-y-auto">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg border border-gray-800 hover:border-[#C6FF00]/30 transition-all animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-2xl">{getActivityIcon(activity.type)}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-300">
                {getActivityText(activity)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {getTimeAgo(activity.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#0B0B0B] border border-[#C6FF00]/30 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-[#C6FF00]">3,247</div>
          <div className="text-xs text-gray-400">Total Contributors</div>
        </div>
        <div className="bg-[#0B0B0B] border border-[#00F0FF]/30 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-[#00F0FF]">47,293</div>
          <div className="text-xs text-gray-400">Tickets Sold</div>
        </div>
        <div className="bg-[#0B0B0B] border border-[#4B21FF]/30 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-[#4B21FF]">$3.2M</div>
          <div className="text-xs text-gray-400">Raised (21%)</div>
        </div>
      </div>
    </section>
  );
}
