import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWritingPiece, getWritingPieces } from '@/lib/content'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import LatexRenderer from '@/components/LatexRenderer'
// PDF will open directly in browser

export function generateStaticParams() {
  const pieces = getWritingPieces()
  return pieces.map((piece) => ({ slug: piece.slug }))
}

export default async function WritingPiece({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const piece = getWritingPiece(slug)
  
  if (!piece) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Space background with stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
        {/* Nebula-like gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/15 via-transparent to-purple-900/15 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/10 via-transparent to-cyan-900/10 animate-pulse" style={{ animationDelay: '5s', animationDuration: '15s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <Link 
            href="/writing" 
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8 transition-colors group backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg border border-violet-500/20"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Creative Writing
          </Link>

          <article className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 md:p-12 border border-gray-700/30 backdrop-blur-md">
            <header className="mb-8">
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                  piece.format === 'pdf' 
                    ? 'bg-red-900/30 text-red-300 border-red-500/20'
                    : piece.format === 'latex' 
                    ? 'bg-amber-900/30 text-amber-300 border-amber-500/20'
                    : 'bg-violet-900/30 text-violet-300 border-violet-500/20'
                }`}>
                  {piece.type}
                </span>
                {piece.format === 'latex' && (
                  <span className="ml-2 px-2 py-1 rounded text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    LaTeX
                  </span>
                )}
                {piece.format === 'pdf' && (
                  <span className="ml-2 px-2 py-1 rounded text-xs bg-red-500/20 text-red-400 border border-red-500/30">
                    PDF
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                {piece.title}
              </h1>
              
              <div className="flex items-center gap-4 text-gray-400 mb-6">
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
            </header>

            {piece.format === 'pdf' ? (
              <div className="text-center py-12">
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20 backdrop-blur-sm">
                  <div className="text-6xl mb-6">📄</div>
                  <h3 className="text-2xl font-bold mb-4 text-red-300">PDF Document</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    This story is available as a formatted PDF document.
                  </p>
                  <a 
                    href={piece.pdfPath!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium text-lg"
                  >
                    📖 Read PDF
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <p className="text-sm text-gray-400 mt-4">
                    Opens in a new tab for the best reading experience
                  </p>
                </div>
              </div>
            ) : piece.format === 'latex' ? (
              <LatexRenderer content={piece.content} className="text-gray-200" />
            ) : (
              <MarkdownRenderer content={piece.content} />
            )}
          </article>
        </div>
      </div>
    </div>
  )
}