'use client';

export default function SocialFeaturesGrid() {
  const socialFeatures = [
    {
      title: 'The Global Mixer',
      icon: '🌐',
      description: 'Connect your Instagram, TikTok, and X directly to your avatar. Your profile is your brand; meet people in the crowd and swap socials with a single click.',
      color: 'cyan',
      features: [
        'One-click social media integration',
        'Digital business card sharing',
        'Real-time profile syncing'
      ]
    },
    {
      title: 'Indirect Dating',
      icon: '💫',
      description: 'Meet like-minded fans in themed "Party Zones." Use the InTown Pin Symbol to see who is nearby and share your digital "Business Card."',
      color: 'cyan',
      features: [
        'Themed party zones',
        'Proximity-based discovery',
        'Interest-based matching'
      ]
    },
    {
      title: 'Celebrity Access',
      icon: '⭐',
      description: 'Use your Reputation Score to enter restricted zones where you can rub shoulders with "Whales" and the stars of the show.',
      color: 'purple',
      features: [
        'VIP zone access',
        'Whale networking hubs',
        'Exclusive meet & greets'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {socialFeatures.map((feature, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${
            feature.color === 'cyan'
              ? 'from-[#00F0FF]/10 to-transparent border-[#00F0FF]/50'
              : 'from-[#4B21FF]/10 to-transparent border-[#4B21FF]/50'
          } border-2 rounded-xl p-6 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]`}
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className={`text-2xl font-bold mb-3 ${
            feature.color === 'cyan' ? 'text-[#00F0FF]' : 'text-[#4B21FF]'
          }`}>
            {feature.title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            {feature.description}
          </p>
          <ul className="space-y-2">
            {feature.features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                <span className={feature.color === 'cyan' ? 'text-[#00F0FF]' : 'text-[#4B21FF]'}>
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
