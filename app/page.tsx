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
          <h1 className="text-display md:text-hero heading-display mb-8 drop-shadow-2xl animate-fade-in-up text-gradient-cosmic">
            Welcome to My Universe
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto drop-shadow-lg animate-fade-in-up leading-relaxed text-neutral-200 font-light" style={{ animationDelay: '0.5s' }}>
            Capturing the infinite beauty of deep space through precision astrophotography and scientific research
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Link 
              href="/astrophotography" 
              className="btn-primary text-lg px-8 py-4 rounded-2xl backdrop-blur-sm shadow-cosmic hover:scale-105 transform transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Gallery
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link 
              href="/about" 
              className="btn-secondary text-lg px-8 py-4 rounded-2xl backdrop-blur-sm shadow-medium hover:scale-105 transform transition-all duration-300 border border-neutral-300/30"
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
      <div className="bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white section-spacing">
        <div className="content-container">
          <div className="text-center mb-20">
            <h2 className="text-5xl heading-display mb-6 text-gradient-cosmic">
              Professional Astrophotography & Research
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              Discover precision deep space imaging, technical analysis, and scientific exploration 
              of celestial objects through advanced astrophotography techniques.
            </p>
          </div>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="card-hover text-center p-8 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-500/20 hover:border-amber-400/40">
              <div className="text-6xl mb-6">🌌</div>
              <h3 className="text-3xl heading-primary mb-4 text-amber-300">Astrophotography</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light">
                High-resolution deep space imaging featuring emission nebulae, supernova remnants, 
                and galactic structures captured with professional-grade equipment and processing.
              </p>
              <Link 
                href="/astrophotography" 
                className="btn-primary group"
              >
                View Gallery
                <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
              </Link>
            </div>
            
            <div className="card-hover text-center p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/20 hover:border-cyan-400/40">
              <div className="text-6xl mb-6">📡</div>
              <h3 className="text-3xl heading-primary mb-4 text-cyan-300">Scientific Blog</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light">
                Technical articles exploring image processing mathematics, astronomical data analysis, 
                and computational methods in astrophotography with full LaTeX equation support.
              </p>
              <Link 
                href="/blog" 
                className="btn-primary group"
              >
                Read Articles
                <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
              </Link>
            </div>
            
            <div className="card-hover text-center p-8 bg-gradient-to-br from-violet-900/20 to-purple-900/20 border-violet-500/20 hover:border-violet-400/40">
              <div className="text-6xl mb-6">✍️</div>
              <h3 className="text-3xl heading-primary mb-4 text-violet-300">Creative Writing</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light">
                Original short stories exploring science fiction themes, cosmic wonder, 
                and the intersection of human experience with the infinite expanse of space.
              </p>
              <Link 
                href="/writing" 
                className="btn-primary group"
              >
                Read Stories
                <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}