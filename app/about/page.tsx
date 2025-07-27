export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">
      {/* Cosmic header */}
      <div className="relative overflow-hidden py-20">
        {/* Twinkling stars background */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-8 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-fade-in-up">
              About Me
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Research Scientist • Astrophotographer • Writer
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 md:p-12 border border-gray-700/30 backdrop-blur-md">
              <div className="text-gray-300 leading-relaxed space-y-6 text-lg">
                <p>
                  I'm <span className="text-cyan-400 font-semibold">James Douglas Pearce</span>, a research scientist with a passion for exploring the intersection of science and art. My journey began with a PhD in Physics, where I studied experimental high-energy particle physics working on the ATLAS experiment at CERN—one of the most ambitious scientific endeavors in human history.
                </p>
                <p>
                  After completing my doctorate, I spent the past decade living and working in the Bay Area, immersing myself in the rapidly evolving world of machine learning and artificial intelligence at various tech companies. This experience taught me how to translate complex scientific concepts into practical applications that can impact millions of lives.
                </p>
                <p>
                  Currently, I work at the <span className="text-amber-400 font-semibold">Chan Zuckerberg Initiative</span>, where I focus on the exciting frontier of AI × Biology—applying artificial intelligence to advance our understanding of biological systems and accelerate scientific discovery. Before this role, I contributed to Amazon's Alexa, helping to make AI more accessible and intuitive for everyday users.
                </p>
                <p>
                  Beyond my professional work, I'm deeply passionate about <span className="text-violet-400 font-semibold">astrophotography</span> and <span className="text-violet-400 font-semibold">creative writing</span>. These hobbies allow me to explore the cosmos through both technical precision and imaginative storytelling. My astrophotography captures the universe's hidden beauty in high-resolution detail, while my science fiction writing weaves together the scientific and philosophical ideas that fascinate me.
                </p>
                <p>
                  At heart, I believe in combining science with art—whether that's revealing the elegant mathematics underlying cosmic structures or crafting stories that explore humanity's place in the universe. When I write, I try to incorporate the wonder and complexity of the scientific concepts I encounter in my research.
                </p>
                <p>
                  I share my life in the Bay Area with my brilliant wife <span className="text-cyan-400 font-semibold">Debbie</span> and our French Bulldog <span className="text-amber-400 font-semibold">Babadook</span>, who serves as both inspiration and occasional distraction during late-night imaging sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Explore My Work
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Discover my astrophotography, read my science fiction stories, or learn about my technical insights at the intersection of AI and science.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a 
                href="/astrophotography" 
                className="group bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center gap-2"
              >
                Gallery
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="/writing" 
                className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center gap-2"
              >
                Stories
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="/blog" 
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center gap-2"
              >
                Articles
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}