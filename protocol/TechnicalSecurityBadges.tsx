export default function TechnicalSecurityBadges() {
  const features = [
    {
      icon: '🔐',
      title: 'Account Abstraction',
      subtitle: 'ERC-4337',
      description: 'One-click social logins. No confusing popups. Fully decentralized.',
      color: '[#4B21FF]'
    },
    {
      icon: '⚡',
      title: 'Binary Data Protocols',
      subtitle: 'Protobuf',
      description: 'Custom binary adapters ensure standard servers can host millions of users.',
      color: '[#00F0FF]'
    },
    {
      icon: '👥',
      title: 'Community Moderation',
      subtitle: 'Stake-Weighted',
      description: 'The "Human Layer" protects venue reputation and token investment.',
      color: '[#C6FF00]'
    },
    {
      icon: '🛡️',
      title: 'Economic Security',
      subtitle: 'Multi Billion Dollar Economy',
      description: 'Performance guarantees backed by the largest metaverse economy.',
      color: '[#4B21FF]'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index}
          className={`bg-gradient-to-br from-${feature.color}/20 to-transparent border-2 border-${feature.color}/50 rounded-xl p-6 hover:scale-105 transition-all duration-300`}
        >
          <div className="text-5xl mb-4 text-center">{feature.icon}</div>
          <h4 className={`text-xl font-bold text-${feature.color} mb-1 text-center`}>
            {feature.title}
          </h4>
          <div className="text-sm text-gray-400 mb-3 text-center font-mono">
            {feature.subtitle}
          </div>
          <p className="text-gray-300 text-sm text-center leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
