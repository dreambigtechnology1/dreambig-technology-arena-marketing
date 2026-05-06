'use client';

import { useState } from 'react';

export default function SetupWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: 'System Check',
      icon: '🔍',
      description: 'Verify your server meets minimum requirements',
      commands: [
        { label: 'Check OS', command: 'lsb_release -a' },
        { label: 'Check Node.js', command: 'node --version' },
        { label: 'Check Docker', command: 'docker --version' },
        { label: 'Check Available RAM', command: 'free -h' },
        { label: 'Check Disk Space', command: 'df -h' }
      ]
    },
    {
      number: 2,
      title: 'Install Dependencies',
      icon: '📦',
      description: 'Install required software packages',
      commands: [
        { label: 'Update System', command: 'sudo apt update && sudo apt upgrade -y' },
        { label: 'Install Node.js', command: 'curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt install -y nodejs' },
        { label: 'Install Docker', command: 'curl -fsSL https://get.docker.com | sh' },
        { label: 'Install Docker Compose', command: 'sudo apt install docker-compose -y' }
      ]
    },
    {
      number: 3,
      title: 'Download Node Software',
      icon: '⬇️',
      description: 'Clone the InTown node repository',
      commands: [
        { label: 'Clone Repository', command: 'git clone https://github.com/intown-metaverse/node.git' },
        { label: 'Enter Directory', command: 'cd node' },
        { label: 'Install Dependencies', command: 'npm install' }
      ]
    },
    {
      number: 4,
      title: 'Configure Node',
      icon: '⚙️',
      description: 'Set up your node configuration',
      commands: [
        { label: 'Copy Config Template', command: 'cp .env.example .env' },
        { label: 'Edit Configuration', command: 'nano .env' }
      ],
      configFields: [
        { name: 'NODE_WALLET_ADDRESS', description: 'Your Ethereum wallet address for receiving payments' },
        { name: 'NODE_PRIVATE_KEY', description: 'Private key for signing PoT receipts (keep secure!)' },
        { name: 'NODE_PUBLIC_IP', description: 'Your server\'s public IP address' },
        { name: 'NODE_DOMAIN', description: 'Your domain name (optional, for SSL)' },
        { name: 'NODE_SERVICES', description: 'Services to run: sfu,gps,atm (comma-separated)' }
      ]
    },
    {
      number: 5,
      title: 'SSL Certificate',
      icon: '🔒',
      description: 'Set up HTTPS with Let\'s Encrypt',
      commands: [
        { label: 'Install Certbot', command: 'sudo apt install certbot -y' },
        { label: 'Get Certificate', command: 'sudo certbot certonly --standalone -d your-domain.com' },
        { label: 'Auto-Renewal', command: 'sudo certbot renew --dry-run' }
      ]
    },
    {
      number: 6,
      title: 'Start Node',
      icon: '🚀',
      description: 'Launch your node and verify it\'s running',
      commands: [
        { label: 'Start Services', command: 'docker-compose up -d' },
        { label: 'Check Status', command: 'docker-compose ps' },
        { label: 'View Logs', command: 'docker-compose logs -f' },
        { label: 'Test Health', command: 'curl http://localhost:8080/health' }
      ]
    },
    {
      number: 7,
      title: 'Register Node',
      icon: '📝',
      description: 'Register your node on the InTown network',
      commands: [
        { label: 'Register Node', command: 'npm run register-node' },
        { label: 'Verify Registration', command: 'npm run check-status' }
      ]
    },
    {
      number: 8,
      title: 'Monitoring Setup',
      icon: '📊',
      description: 'Set up monitoring and alerts',
      commands: [
        { label: 'Start Monitoring', command: 'docker-compose -f docker-compose.monitoring.yml up -d' },
        { label: 'Access Grafana', command: 'open http://localhost:3000' }
      ],
      info: 'Default credentials: admin/admin (change immediately)'
    }
  ];

  const currentStepData = steps[currentStep - 1];

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-black/50" id="setup">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Setup Wizard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these steps to get your node up and running. Estimated time: 30-45 minutes.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex flex-col items-center cursor-pointer transition-all ${
                  step.number === currentStep
                    ? 'scale-110'
                    : step.number < currentStep
                    ? 'opacity-60'
                    : 'opacity-40'
                }`}
                onClick={() => setCurrentStep(step.number)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2 ${
                    step.number === currentStep
                      ? 'bg-gradient-to-r from-[#4B21FF] to-[#00F0FF]'
                      : step.number < currentStep
                      ? 'bg-green-500'
                      : 'bg-gray-700'
                  }`}
                >
                  {step.number < currentStep ? '✓' : step.icon}
                </div>
                <div className="text-xs text-center hidden md:block">{step.title}</div>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Step Content */}
        <div className="p-8 rounded-2xl border-2 border-[#00F0FF]/30 bg-gradient-to-br from-[#00F0FF]/10 to-transparent">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">{currentStepData.icon}</div>
            <div>
              <h3 className="text-3xl font-bold">
                Step {currentStepData.number}: {currentStepData.title}
              </h3>
              <p className="text-gray-300 mt-2">{currentStepData.description}</p>
            </div>
          </div>

          {/* Commands */}
          {currentStepData.commands && (
            <div className="space-y-4 mb-6">
              {currentStepData.commands.map((cmd, index) => (
                <div key={index} className="p-4 rounded-lg bg-black/50 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-[#C6FF00]">{cmd.label}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(cmd.command)}
                      className="px-3 py-1 text-xs rounded bg-[#4B21FF] hover:bg-[#4B21FF]/80 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <code className="text-sm text-gray-300 font-mono">{cmd.command}</code>
                </div>
              ))}
            </div>
          )}

          {/* Config Fields */}
          {currentStepData.configFields && (
            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-bold mb-4">Configuration Fields:</h4>
              {currentStepData.configFields.map((field, index) => (
                <div key={index} className="p-4 rounded-lg bg-black/50 border border-gray-700">
                  <div className="font-semibold text-[#00F0FF] mb-1">{field.name}</div>
                  <div className="text-sm text-gray-300">{field.description}</div>
                </div>
              ))}
            </div>
          )}

          {/* Additional Info */}
          {currentStepData.info && (
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
              <p className="text-sm text-yellow-200">
                ⚠️ <span className="font-semibold">Important:</span> {currentStepData.info}
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-xl font-bold ${
                currentStep === 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600 transition-colors'
              }`}
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
              disabled={currentStep === steps.length}
              className={`px-6 py-3 rounded-xl font-bold ${
                currentStep === steps.length
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-[#4B21FF] to-[#00F0FF] hover:scale-105 transition-transform'
              }`}
            >
              {currentStep === steps.length ? '✓ Complete' : 'Next →'}
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border-2 border-[#4B21FF]/30 bg-gradient-to-br from-[#4B21FF]/10 to-transparent">
            <div className="text-4xl mb-3">📚</div>
            <h4 className="text-xl font-bold mb-2">Documentation</h4>
            <p className="text-sm text-gray-300 mb-4">
              Detailed guides and troubleshooting tips.
            </p>
            <a
              href="https://docs.intownmetaverse.com/node-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF] hover:underline text-sm"
            >
              View Docs →
            </a>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#00F0FF]/30 bg-gradient-to-br from-[#00F0FF]/10 to-transparent">
            <div className="text-4xl mb-3">💬</div>
            <h4 className="text-xl font-bold mb-2">Discord Support</h4>
            <p className="text-sm text-gray-300 mb-4">
              Get help from the community and core team.
            </p>
            <a
              href="https://discord.gg/intownmetaverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF] hover:underline text-sm"
            >
              Join Discord →
            </a>
          </div>

          <div className="p-6 rounded-xl border-2 border-[#C6FF00]/30 bg-gradient-to-br from-[#C6FF00]/10 to-transparent">
            <div className="text-4xl mb-3">🎥</div>
            <h4 className="text-xl font-bold mb-2">Video Tutorial</h4>
            <p className="text-sm text-gray-300 mb-4">
              Watch a complete walkthrough of the setup process.
            </p>
            <a
              href="https://youtube.com/intownmetaverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF] hover:underline text-sm"
            >
              Watch Video →
            </a>
          </div>
        </div>

        {/* One-Click Setup Option */}
        <div className="mt-12 p-8 rounded-2xl border-2 border-[#C6FF00] bg-gradient-to-br from-[#C6FF00]/20 via-[#4B21FF]/10 to-transparent">
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-3xl font-bold mb-4">Prefer Automated Setup?</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Use our one-click installer script that handles all steps automatically. Perfect for experienced server administrators.
            </p>
            <div className="p-4 rounded-lg bg-black/50 border border-gray-700 max-w-2xl mx-auto mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-[#C6FF00]">One-Click Install</span>
                <button
                  onClick={() => navigator.clipboard.writeText('curl -fsSL https://install.intownmetaverse.com | bash')}
                  className="px-3 py-1 text-xs rounded bg-[#4B21FF] hover:bg-[#4B21FF]/80 transition-colors"
                >
                  Copy
                </button>
              </div>
              <code className="text-sm text-gray-300 font-mono">
                curl -fsSL https://install.intownmetaverse.com | bash
              </code>
            </div>
            <p className="text-sm text-gray-400">
              ⚠️ Review the script before running: <a href="https://install.intownmetaverse.com" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">View Source</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
