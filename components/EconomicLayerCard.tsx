interface EconomicLayerCardProps {
  title: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
  uiElement: string;
}

export default function EconomicLayerCard({ title, icon, description, features, color, uiElement }: EconomicLayerCardProps) {
  return (
    <div className={`bg-gradient-to-br from-${color}/20 to-transparent border-2 border-${color}/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,255,0,0.4)]`}>
      {/* Icon & Title */}
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
      
      {/* Features */}
      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`w-2 h-2 rounded-full bg-${color} mt-2 flex-shrink-0`}></div>
            <p className="text-gray-200">{feature}</p>
          </div>
        ))}
      </div>
      
      {/* UI Element Badge */}
      <div className={`bg-${color}/20 border border-${color}/50 rounded-lg p-3 text-center`}>
        <div className="text-sm text-gray-400">Brand/UX Element</div>
        <div className={`text-lg font-bold text-${color}`}>{uiElement}</div>
      </div>
    </div>
  );
}
