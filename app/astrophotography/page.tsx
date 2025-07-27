import Image from 'next/image'
import Link from 'next/link'
import GalleryImage from '@/components/GalleryImage'

export default function Astrophotography() {
  const photos = [
    {
      id: 'melotte-15-sho',
      title: 'Heart Nebula (IC 1805) - SHO',
      description: 'Emission nebula in Cassiopeia captured with narrowband SHO technique',
      thumbnail: '/photos/thumbnails/melotte_15_sho_thumb.jpg',
      image: '/photos/melotte_15_sho.jpg',
      dimensions: '6000x4000',
      exposure: '331 x 5min (Ha/OIII/SII), 19hr total'
    },
    {
      id: 'lagoon-sho',
      title: 'Lagoon Nebula (M8) - SHO',
      description: 'Spectacular emission nebula in Sagittarius with SHO narrowband processing',
      thumbnail: '/photos/thumbnails/lagoon_sho_thumb.jpeg',
      image: '/photos/lagoon_sho.jpeg',
      dimensions: '6000x4000',
      exposure: '58 x 3min (Ha/OIII/SII), 2.9hr total'
    },
    {
      id: 'andromeda-lrgb-ha',
      title: 'Andromeda Galaxy (M31) - LRGB+Ha',
      description: 'Our nearest major galactic neighbor captured with LRGB and hydrogen-alpha enhancement',
      thumbnail: '/photos/thumbnails/andromeda_thumb.jpg',
      image: '/photos/andromeda.jpg',
      dimensions: '6000x4000',
      exposure: '20 x 3min LRGB + 60 x 5min Ha'
    },
    {
      id: 'crescent-hoo',
      title: 'Crescent Nebula (NGC 6888) - HOO',
      description: 'Wolf-Rayet stellar wind bubble in Cygnus captured with Ha and OIII filters',
      thumbnail: '/photos/thumbnails/crescent_hoo_thumb.png',
      image: '/photos/crescent_hoo.png',
      dimensions: '6000x4000',
      exposure: '220 x 5min (Ha/OIII), 18hr total'
    },
    {
      id: 'crab-rgb',
      title: 'Crab Nebula (M1) - RGB',
      description: 'Supernova remnant in Taurus captured with QuadBand filter',
      thumbnail: '/photos/thumbnails/crab_rgb_thumb.jpg',
      image: '/photos/crab_rgb.jpg',
      dimensions: '2334x2060',
      exposure: 'QuadBand filtered RGB'
    },
    {
      id: 'gamma-cygni-sho',
      title: 'Gamma Cygni Nebula - SHO',
      description: 'Emission nebula complex around Gamma Cygni with 135mm lens',
      thumbnail: '/photos/thumbnails/Gamma_cygni_sho_thumb.jpg',
      image: '/photos/Gamma_cygni_sho.jpg',
      dimensions: '6248x4176',
      exposure: 'SHO narrowband with 135mm lens'
    },
    {
      id: 'rho-ophiuchi-rgb',
      title: 'Rho Ophiuchi Cloud Complex - RGB',
      description: 'Colorful star-forming region in Ophiuchus constellation',
      thumbnail: '/photos/thumbnails/rho_oophuich_rgb_thumb.jpg',
      image: '/photos/rho_oophuich_rgb.jpg',
      dimensions: '5843x7183',
      exposure: 'RGB broadband imaging'
    },
    {
      id: 'horsehead-ha',
      title: 'Horsehead Nebula - H-alpha',
      description: 'Iconic dark nebula in Orion captured in hydrogen-alpha',
      thumbnail: '/photos/thumbnails/horse_head_ha_thumb.jpg',
      image: '/photos/horse_head_ha.jpg',
      dimensions: '3825x6170',
      exposure: 'Hydrogen-alpha narrowband'
    },
    {
      id: 'rosette-rgb',
      title: 'Rosette Nebula - RGB',
      description: 'Skull-shaped emission nebula in Monoceros with QuadBand filter',
      thumbnail: '/photos/thumbnails/rosette_rgb_thumb.jpg',
      image: '/photos/rosette_rgb.jpg',
      dimensions: '4102x2792',
      exposure: '270 x 5min, 22.5hr total'
    },
    {
      id: 'veil-sho',
      title: 'Veil Nebula - SHO',
      description: 'Large supernova remnant in Cygnus captured in SHO palette',
      thumbnail: '/photos/thumbnails/veil_sho_thumb.png',
      image: '/photos/veil_sho.png',
      dimensions: '12275x8274',
      exposure: '400 x 5min, 33.3hr total'
    },
    {
      id: 'elephant-trunk-sho',
      title: 'Elephant Trunk Nebula - SHO',
      description: 'Dark globule in IC 1396 emission nebula in Cepheus',
      thumbnail: '/photos/thumbnails/elephat_trunk_sho_thumb.png',
      image: '/photos/elephat_trunk_sho.png',
      dimensions: '3912x4200',
      exposure: '150 x 5min, 12.5hr total'
    },
    {
      id: 'north-american-sho',
      title: 'North America Nebula - SHO',
      description: 'Large emission nebula in Cygnus resembling North America',
      thumbnail: '/photos/thumbnails/north_american_sho_thumb.png',
      image: '/photos/north_american_sho.png',
      dimensions: '10945x8209',
      exposure: '150 x 5min, 12.5hr total'
    },
    {
      id: 'bubble-sho',
      title: 'Bubble Nebula (NGC 7635) - SHO',
      description: 'Stellar wind bubble in Cassiopeia with 29 hours of integration',
      thumbnail: '/photos/thumbnails/bubble_sho_thumb.jpg',
      image: '/photos/bubble_sho.jpg',
      dimensions: '6000x4000',
      exposure: '350 x 5min, 29hr total (cropped & drizzled 3x)'
    },
    {
      id: 'california-sho',
      title: 'California Nebula - Narrowband',
      description: 'Large emission nebula in Perseus with HSO processing',
      thumbnail: '/photos/thumbnails/california_sho_thumb.jpg',
      image: '/photos/california_sho.jpg',
      dimensions: '5925x3365',
      exposure: '400 x 5min, 33.3hr total'
    },
    {
      id: 'iris-rgb',
      title: 'Iris Nebula (NGC 7023) - RGB',
      description: 'Blue reflection nebula in Cepheus with QuadBand filter',
      thumbnail: '/photos/thumbnails/iris_rgb_thumb.jpg',
      image: '/photos/iris_rgb.jpg',
      dimensions: '3948x2648',
      exposure: 'QuadBand filtered RGB'
    },
    {
      id: 'ghost-cassiopeia',
      title: 'Ghost of Cassiopeia - Ha+RGB',
      description: 'Emission nebula IC 63 near Gamma Cassiopeiae',
      thumbnail: '/photos/thumbnails/ghost_cassiopeia_rgb_thumb.jpg',
      image: '/photos/ghost_cassiopeia_rgb.jpg',
      dimensions: '1670x2376',
      exposure: '100 x 5min, 8.3hr total'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Space background with stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-blue-900/15 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-900/10 via-transparent to-cyan-900/10 animate-pulse" style={{ animationDelay: '5s', animationDuration: '15s' }}></div>
      </div>

      {/* Cosmic header */}
      <div className="relative py-20 z-10">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-fade-in-up">
              Deep Space Gallery
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Professional astrophotography showcasing emission nebulae, supernova remnants, 
              <br className="hidden md:block" />
              and galactic structures in high-resolution detail
            </p>
          </div>

        </div>
      </div>

      {/* Main gallery */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Link 
              key={photo.id} 
              href={`/astrophotography/${photo.id}`}
              className="group block animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1 + 0.9}s` }}
            >
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl shadow-2xl overflow-hidden hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105 border border-gray-700/30 hover:border-amber-500/30 backdrop-blur-md">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <GalleryImage
                    thumbnail={photo.thumbnail}
                    image={photo.image}
                    alt={photo.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Cosmic glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors duration-300">
                    {photo.title}
                  </h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {photo.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-amber-400 font-medium">{photo.dimensions}</span>
                    <span className="text-violet-400 font-medium">{photo.exposure}</span>
                  </div>
                  
                  {/* Cosmic accent */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-violet-400 rounded-full animate-pulse"></span>
                    Deep Space Capture
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Cosmic about section */}
      <div className="mt-16 mx-4 relative z-10">
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            🌟 Capturing the Infinite
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <p className="mb-4 leading-relaxed">
                Each cosmic masterpiece emerges from specialized astrophotography equipment designed for 
                long-exposure deep space imaging. The pristine 6K resolution unveils intricate stellar 
                structures, glowing nebular regions, and majestic galactic spirals spanning thousands of light-years.
              </p>
              <p className="leading-relaxed">
                From the Heart Nebula's 19-hour integration to the Veil's 33-hour marathon, every photon 
                captured tells the story of stellar birth, death, and the eternal cosmic dance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></span>
                <span>Narrowband SHO & HOO techniques</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                <span>LRGB+Ha hybrid processing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></span>
                <span>Drizzle integration for maximum detail</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full"></span>
                <span>Bortle 2-7 capture locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}