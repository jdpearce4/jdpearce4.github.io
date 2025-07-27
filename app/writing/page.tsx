import Link from 'next/link'
import { getWritingPieces } from '@/lib/content'

export default function Writing() {
  const pieces = getWritingPieces()

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
        
        <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent animate-fade-in-up">Creative Writing</h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Original short stories exploring science fiction, cosmic wonder, and human experience
            </p>
          </div>

          {pieces.length === 0 ? (
            <div className="text-center py-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-gray-300 mb-8 text-xl">
                Original short stories coming soon. Exploring themes of space exploration, cosmic mysteries, and the human condition.
              </p>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-700/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-violet-300">Upcoming Stories</h3>
                <ul className="text-left space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></span>
                    <span>"The Last Observatory" - A tale of humanity's final stargazer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></span>
                    <span>"Signals in the Dark" - First contact through deep space imaging</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></span>
                    <span>"The Nebula Photographer" - When art meets cosmic discovery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></span>
                    <span>"Twenty-Seven Hours" - A night that changed everything</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {pieces.map((piece, index) => (
                <article key={piece.slug} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300">
                  <Link href={`/writing/${piece.slug}`} className="group">
                    <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-violet-300 transition-colors">
                      {piece.title}
                    </h2>
                  </Link>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="bg-violet-900/30 text-violet-300 px-3 py-1 rounded-full border border-violet-500/20">
                      {piece.type}
                    </span>
                    <time className="text-violet-400">{new Date(piece.date).toLocaleDateString()}</time>
                    {piece.tags.length > 0 && (
                      <div className="flex gap-2">
                        {piece.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-gray-700/30 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {piece.excerpt}
                  </p>
                  
                  <Link 
                    href={`/writing/${piece.slug}`}
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium group"
                  >
                    Read Story
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}