'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: '/astrophotography', label: 'Gallery' },
  ]

  // Function to check if current path matches or starts with the link path
  const isActivePath = (linkHref: string) => {
    if (linkHref === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(linkHref)
  }

  // Function to get dynamic subtitle based on current page
  const getSubtitle = () => {
    return 'Astrophotographer'
  }

  return (
    <nav className="border-b border-gray-700/30 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white group">
            <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-cyan-300 group-hover:to-violet-300 transition-all duration-300">
              James Douglas Pearce
            </span>
            {getSubtitle() && (
              <div className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300 transition-colors">
                {getSubtitle()}
              </div>
            )}
          </Link>
          
          <div className="flex space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  isActivePath(link.href) 
                    ? 'text-white bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-violet-500/20 border border-amber-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {link.label}
                {isActivePath(link.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-violet-500/10 rounded-lg animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}