'use client';

export default function OperationalEfficiencyGrid() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The <span className="text-[#C6FF00]">Promoter Advantage</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A scannable breakdown of why this protocol is the ultimate tool for event professionals
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[#00F0FF]/20 via-[#C6FF00]/20 to-[#4B21FF]/20 border-2 border-[#C6FF00]/50">
              <th className="px-8 py-6 text-left text-2xl font-bold text-[#00F0FF]">Zero Overhead</th>
              <th className="px-8 py-6 text-left text-2xl font-bold text-[#C6FF00]">Unthrottled Scale</th>
              <th className="px-8 py-6 text-left text-2xl font-bold text-[#4B21FF]">Auditable Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 border-gray-800">
              <td className="px-8 py-8 align-top bg-[#00F0FF]/5">
                <p className="text-gray-300 leading-relaxed text-lg">
                  No physical security or permits. Access is blockchain-verified.
                </p>
              </td>
              <td className="px-8 py-8 align-top bg-[#C6FF00]/5">
                <p className="text-gray-300 leading-relaxed text-lg">
                  <span className="text-[#C6FF00] font-bold">250 Million seat capacity</span>. Larger than any physical stadium on Earth.
                </p>
              </td>
              <td className="px-8 py-8 align-top bg-[#4B21FF]/5">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Every manifest and asset identity is cryptographically auditable.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-6">
        <div className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-2 border-[#00F0FF]/50 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-[#00F0FF] mb-4">Zero Overhead</h3>
          <p className="text-gray-300 leading-relaxed">
            No physical security or permits. Access is blockchain-verified.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#C6FF00]/10 to-transparent border-2 border-[#C6FF00]/50 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-[#C6FF00] mb-4">Unthrottled Scale</h3>
          <p className="text-gray-300 leading-relaxed">
            <span className="text-[#C6FF00] font-bold">250 Million seat capacity</span>. Larger than any physical stadium on Earth.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#4B21FF]/10 to-transparent border-2 border-[#4B21FF]/50 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-[#4B21FF] mb-4">Auditable Delivery</h3>
          <p className="text-gray-300 leading-relaxed">
            Every manifest and asset identity is cryptographically auditable.
          </p>
        </div>
      </div>
    </div>
  );
}
