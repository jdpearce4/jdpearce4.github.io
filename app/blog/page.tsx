import Link from 'next/link'
import { getBlogPosts } from '@/lib/content'

export default function Blog() {
  const posts = getBlogPosts()

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
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">Scientific Blog</h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Technical articles on astrophotography, astronomy, and computational methods
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-gray-300 mb-8 text-xl">
                Technical articles coming soon. Advanced content on astrophotography methods and astronomical data analysis.
              </p>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-700/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">Upcoming Articles</h3>
                <ul className="text-left space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                    <span>Deep Space Image Processing Techniques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full"></span>
                    <span>Building an Astrophotography Setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full"></span>
                    <span>Understanding Celestial Mechanics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                    <span>The Mathematics Behind Star Formation</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {posts.map((post, index) => (
                <article key={post.slug} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <time className="text-cyan-400">{new Date(post.date).toLocaleDateString()}</time>
                    {post.tags.length > 0 && (
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group"
                  >
                    Read Article
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