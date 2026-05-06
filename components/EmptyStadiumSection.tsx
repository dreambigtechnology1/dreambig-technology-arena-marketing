'use client';

export default function EmptyStadiumSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-br from-[#4B21FF]/20 to-transparent border-2 border-[#4B21FF] rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            The <span className="text-[#C6FF00]">Empty Stadium</span> Model
          </h2>
          
          <div className="text-lg text-gray-300 space-y-4 mb-8">
            <p>
              A physical stadium is built for 100,000 seats. It sits empty 300 days a year. 
              But on <span className="text-[#C6FF00] font-bold">Game Day</span>, that capacity 
              is the most valuable asset in the city.
            </p>
            
            <p>
              We have built the first <span className="text-[#4B21FF] font-bold">Digital Stadium</span> with 
              <span className="text-[#C6FF00] font-bold"> 250 million seats</span>. We aren't a social network 
              with 200 million daily users. We are <span className="text-[#00F0FF] font-bold">High-Performance Infrastructure</span> for 
              the world's largest events.
            </p>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 rounded-xl p-6 border border-[#C6FF00]/30">
              <h4 className="text-xl font-bold text-[#C6FF00] mb-4">How Artists Fill The Stadium</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#C6FF00] text-xl">→</span>
                  <span>Artist with 150 million combined followers announces Genesis Event</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6FF00] text-xl">→</span>
                  <span>Traditional streaming can only capture 0.01% of that audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6FF00] text-xl">→</span>
                  <span>Our 250 million capacity allows artist to monetize <strong>100% of their global reach</strong> in one synchronized event</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/50 rounded-xl p-6 border border-[#4B21FF]/30">
              <h4 className="text-xl font-bold text-[#4B21FF] mb-4">Our Infrastructure Guarantee</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#4B21FF] text-xl">✓</span>
                  <span><strong>High-Speed Infrastructure:</strong> Low-latency at massive scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B21FF] text-xl">✓</span>
                  <span><strong>Seamless Checkout:</strong> Zero-friction conversion for fans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B21FF] text-xl">✓</span>
                  <span><strong>Distributed Network:</strong> 64,203+ nodes ensure reliability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
