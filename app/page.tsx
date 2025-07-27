import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section with background image and cosmic effects */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-pulse-slow" 
            style={{ 
              transform: 'translateY(-25%)', 
              height: '133.33%',
              animation: 'cosmic-glow 8s ease-in-out infinite alternate'
            }}
          >
            <Image
              src="/photos/melotte_15_sho.jpg"
              alt="Heart Nebula background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Animated cosmic overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-red-900/20 via-transparent to-cyan-900/20 animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Twinkling stars effect */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero content with cosmic animations */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 drop-shadow-2xl animate-fade-in-up bg-gradient-to-r from-amber-200 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
            Welcome to My Universe
          </h1>
          <p className="text-2xl md:text-3xl mb-10 max-w-4xl mx-auto drop-shadow-lg animate-fade-in-up leading-relaxed text-gray-200" style={{ animationDelay: '0.5s' }}>
            Capturing the infinite beauty of deep space through precision astrophotography and scientific research
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Link 
              href="/astrophotography" 
              className="group bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white px-10 py-5 rounded-xl transition-all duration-300 text-xl font-medium backdrop-blur-sm shadow-2xl hover:shadow-amber-500/30 hover:scale-105 border border-amber-500/30"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Gallery
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link 
              href="/about" 
              className="group border-2 border-gray-300/60 hover:bg-gray-300/10 hover:border-gray-300/80 text-white px-10 py-5 rounded-xl transition-all duration-300 text-xl font-medium backdrop-blur-sm shadow-2xl hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                About
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main content section with cosmic theme */}
      <div className="bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Professional Astrophotography & Research
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover precision deep space imaging, technical analysis, and scientific exploration 
              of celestial objects through advanced astrophotography techniques.
            </p>
          </div>

          <section className="grid md:grid-cols-3 gap-12">
            <div className="group text-center p-8 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-2xl border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="text-6xl mb-6">🌌</div>
              <h2 className="text-3xl font-bold mb-4 text-amber-300">Astrophotography</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                High-resolution deep space imaging featuring emission nebulae, supernova remnants, 
                and galactic structures captured with professional-grade equipment and processing.
              </p>
              <Link 
                href="/astrophotography" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                View Gallery
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-6xl mb-6">📡</div>
              <h2 className="text-3xl font-bold mb-4 text-cyan-300">Scientific Blog</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Technical articles exploring image processing mathematics, astronomical data analysis, 
                and computational methods in astrophotography with full LaTeX equation support.
              </p>
              <Link 
                href="/blog" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                Read Articles
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-2xl border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
              <div className="text-6xl mb-6">✍️</div>
              <h2 className="text-3xl font-bold mb-4 text-violet-300">Creative Writing</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Original short stories exploring science fiction themes, cosmic wonder, 
                and the intersection of human experience with the infinite expanse of space.
              </p>
              <Link 
                href="/writing" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-700 to-violet-600 hover:from-violet-600 hover:to-violet-500 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                Read Stories
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}