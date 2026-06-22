import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ClickableImage from '@/components/ClickableImage'

const photoData: Record<string, {
  title: string
  description: string
  longDescription: string
  image: string
  dimensions: string
  exposure: string
  equipment: string
  date: string
  location: string
  technical: string[]
}> = {
  'melotte-15-sho': {
    title: 'Heart Nebula (IC 1805) - SHO',
    description: 'Emission nebula in Cassiopeia captured with narrowband SHO technique',
    longDescription: `The Heart Nebula (IC 1805) is located approximately 7,500 light years away from Earth in the Perseus Arm of the Galaxy in the constellation Cassiopeia. This emission nebula showcases glowing ionized hydrogen gas and darker dust lanes, creating its distinctive heart-like shape.

The nebula's intense red output and morphology are driven by radiation from a small group of stars near its center. This open cluster, known as Collinder 26 or Melotte 15, contains several bright stars nearly 50 times the mass of our Sun, along with many dimmer stars that are only a fraction of the Sun's mass.

This image was captured using the SHO (Sulfur-Hydrogen-Oxygen) narrowband technique, which reveals the rich blue and orange colors from ionized oxygen and sulfur gases. The narrowband approach allows for detailed imaging even from light-polluted locations by filtering out most artificial light sources while capturing the specific wavelengths emitted by these ionized gases.

The Heart Nebula spans almost 2 degrees in the sky, covering an area four times the diameter of the full moon. Its shape is sculpted by powerful stellar winds from the hot, massive stars at its core, creating the intricate structures and cavities visible in this image.`,
    image: '/photos/melotte_15_sho.jpg',
    dimensions: '6000x4000 (2x drizzle upscaled)',
    exposure: '331 subexposures: 122 Ha + 111 OIII + 98 SII, 300s each',
    equipment: 'Redcat71 refractor (350mm) with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'Captured over approximately one month',
    location: 'Backyard location, Bortle 7 light pollution zone',
    technical: [
      'Total integration time: ~19 hours across Ha, OIII, and SII filters',
      'ZWO 7nm narrowband filters (Ha, SII, OIII) with 5-position filter wheel',
      'Every sub-exposure dithered by 10 pixels for improved noise reduction',
      'Drizzle integration at 2x scale for enhanced resolution',
      'Guided using ZWO 30mm mini guide scope with ASI290MM mini camera',
      'Controlled via ZWO ASIAir Plus with Electronic Auto Focuser'
    ]
  },
  'soul-sho': {
    title: 'Soul Nebula (IC 1848) - SHO',
    description: 'Emission nebula in Cassiopeia, companion to the Heart Nebula, in SHO narrowband',
    longDescription: `The Soul Nebula (IC 1848), also cataloged as Sharpless 2-199 and Westerhout 5, is a large emission nebula located approximately 6,500 light-years away in the constellation Cassiopeia. It sits right beside its famous companion, the Heart Nebula (IC 1805), and together the pair are often referred to as the "Heart and Soul."

The nebula is a vast star-forming region energized by the radiation and stellar winds of a young open cluster of massive stars embedded within it. These hot, luminous stars carve out cavities and sculpt the surrounding hydrogen gas into towering pillars and dense globules, several of which are visible silhouetted against the glowing background.

This image was captured using the SHO (Sulfur-Hydrogen-Oxygen) narrowband technique, mapping the emission from ionized sulfur, hydrogen, and oxygen to the red, green, and blue channels respectively. The resulting palette - popularized by the Hubble Space Telescope - separates the different ionized gases by color, revealing the intricate structure of the nebula's shock fronts, dust lanes, and ionization boundaries even from light-polluted skies.

Spanning roughly 2 degrees across the sky, the Soul Nebula is an active stellar nursery where new stars continue to form within its dense clouds of gas and dust.`,
    image: '/photos/soul_nebula_sho_crop.jpg',
    dimensions: '2811x1330',
    exposure: 'SHO narrowband (Ha/OIII/SII)',
    equipment: 'Redcat71 refractor (350mm) with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'Backyard capture',
    location: 'Backyard location',
    technical: [
      'ZWO 7nm narrowband filters: Ha, OIII, and SII',
      'SHO color mapping for emission line contrast',
      'Cropped composition framing the Soul Nebula complex',
      'Guided using ZWO 30mm mini guide scope with ASI290MM mini camera',
      'Controlled via ZWO ASIAir Plus with Electronic Auto Focuser',
      'Processed in PixInsight'
    ]
  },
  'lagoon-sho': {
    title: 'Lagoon Nebula (M8) - SHO',
    description: 'Spectacular emission nebula in Sagittarius with SHO narrowband processing',
    longDescription: `The Lagoon Nebula (Messier 8) is one of the most spectacular emission nebulae visible from Earth, located approximately 4,100 light-years away in the constellation Sagittarius. This stellar nursery spans about 110 light-years across and is one of the few star-forming regions visible to the naked eye from mid-northern latitudes.

The nebula is characterized by its distinctive dark lane that appears to divide the nebula in two, giving it its "lagoon" appearance. This dark lane is composed of dense dust that absorbs the light from the glowing gas behind it. The bright regions are primarily hydrogen gas ionized by the intense ultraviolet radiation from young, hot stars within the nebula.

This SHO (Sulfur-Hydrogen-Oxygen) narrowband image reveals the complex structure of ionized gases throughout the nebula. The technique captures emission lines from hydrogen-alpha (656nm), sulfur-II (672nm), and oxygen-III (501nm), which are then mapped to create the distinctive color palette that reveals different physical processes occurring within the nebula.

The Lagoon Nebula is an active star-forming region, containing several Bok globules - small, dense clouds of dust and gas that may eventually collapse to form new stars. The nebula also contains the young open star cluster NGC 6530, whose hot, massive stars illuminate and shape the surrounding gas clouds through their stellar winds and radiation.`,
    image: '/photos/lagoon_sho.jpeg',
    dimensions: '6000x4000',
    exposure: '58 subexposures each: Ha, SII, OIII × 180s',
    equipment: 'Redcat71 refractor (350mm) with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'Single night capture',
    location: 'Henry W. Coe State Park, California (Dark Sky Site)',
    technical: [
      'Total integration time: ~2.9 hours across three narrowband filters',
      'ZWO 7nm narrowband filters: Ha, SII, OIII with 5-position filter wheel',
      'No calibration frames used - lights only acquisition',
      'Guided using ZWO 30mm mini guide scope with ASI290MM mini camera',
      'Controlled via ZWO ASIAir Plus with Electronic Auto Focuser',
      'Advanced processing workflow with multiple noise reduction passes'
    ]
  },
  'andromeda-lrgb-ha': {
    title: 'Andromeda Galaxy (M31) - LRGB+Ha',
    description: 'Our nearest major galactic neighbor captured with LRGB and hydrogen-alpha enhancement',
    longDescription: `The Andromeda Galaxy (Messier 31) is the nearest major galaxy to our own Milky Way, located approximately 2.537 million light-years from Earth. This magnificent spiral galaxy contains roughly one trillion stars and spans about 220,000 light-years across, making it the largest galaxy in our Local Group.

This image combines traditional LRGB (Luminance, Red, Green, Blue) broadband imaging with hydrogen-alpha narrowband data to reveal both the galaxy's stellar populations and its active star-forming regions. The LRGB data captures the overall structure and color of the galaxy, while the Ha enhancement highlights the emission nebulae within Andromeda's spiral arms where new stars are being born.

What makes this image particularly striking is the level of detail captured in the galaxy's spiral arms and dust lanes. The bright central bulge contains primarily older, redder stars, while the spiral arms show active star formation regions appearing as blue knots and reddish emission nebulae. The companion galaxies M32 and M110 are also visible in this field, showcasing the complex gravitational interactions within our Local Group.

The combination of pristine dark skies at Topaz Lake (Bortle 2) and the addition of hydrogen-alpha data reveals the intricate network of star-forming regions throughout Andromeda's disk, providing a preview of what our own galaxy might look like from a similar distance.`,
    image: '/photos/andromeda.jpg',
    dimensions: '6000x4000',
    exposure: 'LRGB: 20×180s each channel, Ha: 60×300s',
    equipment: 'Redcat71 refractor (350mm) with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'August 26th (LRGB) + Ha data from backyard session',
    location: 'Topaz Lake, Nevada campsite (Bortle 2) + backyard (Ha)',
    technical: [
      'Total integration time: 7 hours (4 hours LRGB + 5 hours Ha)',
      'ZWO 7nm filters: Ha, L, R, G, B with 5-position filter wheel',
      'No calibration frames used - lights only acquisition',
      'Each sub-exposure dithered by 2 pixels for improved noise reduction',
      'Guided using ZWO 30mm mini guide scope with ASI290MM mini camera',
      'Ha data integrated into red channel using range selection masks',
      'Advanced LRGB+Ha workflow with separate processing of stellar and nebular components'
    ]
  },
  'crescent-hoo': {
    title: 'Crescent Nebula (NGC 6888) - HOO',
    description: 'Wolf-Rayet stellar wind bubble in Cygnus captured with Ha and OIII filters',
    longDescription: `The Crescent Nebula (NGC 6888) is a spectacular example of a Wolf-Rayet nebula, formed by the intense stellar winds from the central Wolf-Rayet star WR 136 (HD 192163). Located approximately 5,000 light-years away in the constellation Cygnus, this emission nebula showcases one of the most dramatic phases of stellar evolution.

The nebula's distinctive crescent shape is the result of a collision between two different stellar winds from the same star. The fast-moving stellar wind from the current Wolf-Rayet phase (traveling at speeds up to 1,700 km/s) collides with and energizes the slower-moving wind that was ejected when the star was in its red giant phase approximately 250,000 to 400,000 years ago. This collision creates the characteristic shock-heated bubble structure we see today.

This HOO (Hydrogen-alpha and Oxygen-III) bicolor image reveals the complex filamentary structure throughout the nebula. The Ha emission (mapped to red/orange) primarily traces the dense shock fronts where the stellar winds collide, while the OIII emission (mapped to blue/cyan) highlights regions of highly ionized oxygen created by the intense ultraviolet radiation from the central Wolf-Rayet star.

Wolf-Rayet stars like WR 136 are among the most massive and luminous stars known, representing a brief but spectacular phase in the evolution of very massive stars (>25 solar masses) as they approach the end of their lives. The nebula spans approximately 25 light-years across and continues to expand at speeds of several tens of kilometers per second.`,
    image: '/photos/crescent_hoo.png',
    dimensions: '6000x4000 (drizzle integrated)',
    exposure: '122 Ha + 98 OIII subexposures × 300s each',
    equipment: 'Redcat71 refractor (350mm) with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'Captured over two nights with exceptional seeing and transparency',
    location: 'Backyard location, Bortle 7 light pollution zone',
    technical: [
      'Total integration time: ~18 hours across Ha and OIII filters',
      'ZWO 7nm narrowband filters: Ha and OIII with 5-position filter wheel',
      'Every third sub-exposure dithered by 2 pixels for improved sampling',
      'Drizzle integration for enhanced resolution and detail',
      'Guided using ZWO 30mm mini guide scope with ASI290MM mini camera',
      'Controlled via ZWO ASIAir Plus with Electronic Auto Focuser',
      'HOO bicolor processing optimized for Wolf-Rayet nebula structure'
    ]
  },
  'bubble-sho': {
    title: 'Bubble Nebula (NGC 7635) - SHO',
    description: 'Stellar wind bubble in Cassiopeia with 29 hours of integration',
    longDescription: `NGC 7635, also known as the Bubble Nebula, Sharpless 162, or Caldwell 11, is an HII region emission nebula in the constellation Cassiopeia. It lies close to the direction of the open cluster Messier 52. The "bubble" is created by the stellar wind from a massive hot, 8.7 magnitude young central star, SAO 20575.

The nebula is near a giant molecular cloud which contains the expansion of the bubble nebula while itself being excited by the hot central star, causing it to glow. It was discovered in 1787 by William Herschel.

This project was an experiment to push the limits of the Redcat 71 + ASI2600MM combination on a very small target. The Bubble Nebula is typically imaged with focal lengths of 1000mm or more, but this image demonstrates what's possible with careful processing techniques including dithering, drizzling, and extensive integration time.

The final image is cropped and drizzled 3X to enhance resolution, with a total of 29 hours of sub-exposures captured over about a week. The excellent guiding conditions (RMS consistently between 0.15-0.35 arcseconds) were crucial for the success of this challenging target with the relatively short 350mm focal length.`,
    image: '/photos/bubble_sho.jpg',
    dimensions: '6000x4000 (cropped and drizzled 3x)',
    exposure: 'Ha: 113×300s, OIII: 160×300s, SII: 77×300s',
    equipment: 'Redcat71 refractor (350mm) with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'Captured over approximately one week',
    location: 'Backyard location with exceptional seeing conditions',
    technical: [
      'Total integration time: 29 hours across three narrowband filters',
      'No calibration frames used - lights only acquisition',
      'Each sub-exposure dithered max 10 pixels in RA only',
      'Exceptional guiding: RMS consistently 0.15-0.35 arcseconds',
      'Drizzle integration at 3x scale for enhanced resolution',
      'Advanced SHO processing workflow with Topaz DeNoise AI finishing'
    ]
  },
  'veil-sho': {
    title: 'Veil Nebula - SHO',
    description: 'Large supernova remnant in Cygnus captured in SHO palette',
    longDescription: `The Veil Nebula is a large supernova remnant in the constellation Cygnus, formed from the explosive death of a massive star approximately 8,000 years ago. This enormous shock wave structure spans about 3 degrees across the sky - roughly six times the diameter of the full moon.

The nebula consists of multiple sections, including the Eastern Veil (NGC 6992), Western Veil (NGC 6960), and Pickering's Triangle. This wide-field image captures the entire complex, showcasing the intricate filamentary structures created by the expanding shock wave as it interacts with the surrounding interstellar medium.

This SHO (Sulfur-Hydrogen-Oxygen) image reveals the complex physics occurring within the remnant. Different emission lines trace various physical processes: hydrogen-alpha shows the primary shock fronts, oxygen-III highlights the hottest regions, and sulfur-II traces intermediate temperature zones. The resulting color palette creates a stunning visual representation of this cosmic catastrophe.`,
    image: '/photos/veil_sho.png',
    dimensions: '12275x8274',
    exposure: '400 subexposures × 300s each',
    equipment: 'William Optics Redcat 71 with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'June 6, 2022',
    location: 'Backyard location during 38.92% moon phase',
    technical: [
      'Total integration time: 33 hours 20 minutes',
      'ZWO 7nm narrowband filters: Ha, OIII, and SII',
      'SHO color mapping for enhanced contrast and detail',
      'Wide-field capture showing entire Veil complex',
      'Advanced processing in PixInsight',
      'Captured during partial moon phase conditions'
    ]
  },
  'crab-rgb': {
    title: 'Crab Nebula (M1) - RGB',
    description: 'Supernova remnant in Taurus captured with QuadBand filter',
    longDescription: `The Crab Nebula (M1) is a supernova remnant located in the constellation Taurus. It is the result of a supernova explosion that was observed by Chinese astronomers in 1054 AD. At the center of the nebula lies a pulsar - a rapidly rotating neutron star that spins 30 times per second.

This RGB image was captured using a QuadBand filter, which combines multiple emission lines into broadband-like channels, allowing for efficient capture of both continuum and emission line data in a single exposure series.`,
    image: '/photos/crab_rgb.jpg',
    dimensions: '2334x2060',
    exposure: 'QuadBand filtered RGB',
    equipment: 'Celestron EdgeHD 8" with ZWO ASI294MC camera on iOptron CEM70 mount',
    date: 'Backyard capture',
    location: 'Backyard location',
    technical: [
      'Altair QuadBand 2" filter for efficient emission line capture',
      'EdgeHD 8" telescope providing high resolution',
      'ZWO ASIAIR Plus for automated acquisition',
      'Processed in PixInsight'
    ]
  },
  'gamma-cygni-sho': {
    title: 'Gamma Cygni Nebula - SHO',
    description: 'Emission nebula complex around Gamma Cygni with 135mm lens',
    longDescription: `The Gamma Cygni region is a complex of emission nebulae surrounding the bright star Gamma Cygni in the constellation Cygnus. This wide-field view captures the intricate network of hydrogen and sulfur emission regions that populate this area of the Milky Way.

Captured with a 135mm f/2.0 lens, this image showcases the advantage of wide-field astrophotography for revealing large-scale nebular structures that would be too extensive for longer focal length telescopes.`,
    image: '/photos/Gamma_cygni_sho.jpg',
    dimensions: '6248x4176',
    exposure: 'SHO narrowband with 135mm lens',
    equipment: 'Rokinon 135mm f/2.0 ED UMC with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'Backyard capture',
    location: 'Backyard location',
    technical: [
      'Wide-field 135mm lens for large nebula complex',
      'ZWO 7nm Ha, OIII, and SII filters',
      'SHO color mapping for emission line contrast',
      'ZWO ASIAIR Plus automated control'
    ]
  },
  'rho-ophiuchi-rgb': {
    title: 'Rho Ophiuchi Cloud Complex - RGB',
    description: 'Colorful star-forming region in Ophiuchus constellation',
    longDescription: `The Rho Ophiuchi cloud complex is one of the closest star-forming regions to Earth, located approximately 400 light-years away. This region is renowned for its spectacular colors, ranging from blue reflection nebulae to red emission regions and dark dust lanes.

The complex showcases multiple types of nebulae in a single field: blue reflection nebulae where starlight scatters off dust particles, red emission nebulae where hydrogen gas glows, and dark nebulae where dense dust clouds block background starlight. The variety of colors in this region makes it one of the most photographed areas of the night sky.

This image was captured from the pristine dark skies just outside Joshua Tree National Park, taking advantage of the exceptional Bortle 2 conditions to reveal the subtle colors and intricate details throughout this magnificent nebula complex. The two-day imaging session allowed for careful acquisition of both the bright reflection regions and the fainter emission areas.

This is a mosaic composed of two separate fields that were combined during post-processing using advanced gradient combination techniques. The mosaic approach allowed for capturing the full extent of the Rho Ophiuchi complex while maintaining high resolution detail throughout the frame, something that would be challenging with a single wide-field exposure.`,
    image: '/photos/rho_oophuich_rgb.jpg',
    dimensions: '5843x7183',
    exposure: 'Multi-night RGB capture over 2 days',
    equipment: 'Redcat71 refractor (350mm) with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'Two-day imaging session',
    location: 'Just outside Joshua Tree National Park, California (Bortle 2 dark skies)',
    technical: [
      'Two-panel mosaic combined using gradient combination techniques',
      'Captured in exceptional Bortle 2 dark sky conditions',
      'RGB broadband filters for natural color representation',
      'ZWO 5-position 2" filter wheel for efficient filter changes',
      'Guided using ZWO 30mm mini guide scope with ASI290MM mini camera',
      'ZWO ASIAIR Plus for automated acquisition and control',
      'ZWO EAF + DeepSky Daddy kit for precise focusing',
      'Advanced mosaic processing for seamless field combination',
      'Travel astrophotography setup optimized for portability'
    ]
  },
  'horsehead-ha': {
    title: 'Horsehead Nebula - H-alpha',
    description: 'Iconic dark nebula in Orion captured in hydrogen-alpha',
    longDescription: `The Horsehead Nebula (Barnard 33) is one of the most recognizable dark nebulae in the night sky. Located in the constellation Orion, this dark cloud of dust silhouettes against the bright emission nebula IC 434 behind it.

This hydrogen-alpha image reveals the nebula in its classic monochromatic presentation, highlighting the contrast between the dark dust cloud and the glowing hydrogen gas. The Ha filter isolates the 656.3nm emission line, providing excellent contrast and revealing fine structural details in both the dark nebula and surrounding emission regions.`,
    image: '/photos/horse_head_ha.jpg',
    dimensions: '3825x6170',
    exposure: 'Hydrogen-alpha narrowband',
    equipment: 'William Optics Redcat 71 with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'Backyard capture',
    location: 'Backyard location',
    technical: [
      'ZWO 7nm hydrogen-alpha filter for emission line isolation',
      'Narrowband technique for enhanced contrast',
      'ZWO ASIAIR Plus automated acquisition',
      'Processed in PixInsight'
    ]
  },
  'rosette-rgb': {
    title: 'Rosette Nebula - RGB',
    description: 'Skull-shaped emission nebula in Monoceros with QuadBand filter',
    longDescription: `The Rosette Nebula (NGC 2237) is a large emission nebula in the constellation Monoceros. The nebula's distinctive circular shape with a central cavity gives it a skull-like appearance, earning it the nickname "Skull Nebula."

The central cavity was carved out by stellar winds from the hot O-type stars in the central cluster NGC 2244. These massive stars ionize the surrounding hydrogen gas, causing it to glow in the characteristic red color of hydrogen-alpha emission.`,
    image: '/photos/rosette_rgb.jpg',
    dimensions: '4102x2792',
    exposure: '270 subexposures × 300s, 22.5 hours total',
    equipment: 'Celestron EdgeHD 8" with ZWO ASI294MC camera on iOptron CEM70 mount',
    date: 'January 25, 2023',
    location: 'Backyard location during 18.19% moon phase',
    technical: [
      'Total integration time: 22.5 hours',
      'Altair QuadBand 2" filter for emission line enhancement',
      'EdgeHD 8" telescope for high resolution detail',
      'ZWO ASIAIR Plus automated control',
      'Processed in PixInsight'
    ]
  },
  'elephant-trunk-sho': {
    title: 'Elephant Trunk Nebula - SHO',
    description: 'Dark globule in IC 1396 emission nebula in Cepheus',
    longDescription: `The Elephant Trunk Nebula is a concentration of interstellar gas and dust within the larger IC 1396 emission nebula complex in the constellation Cepheus. The "trunk" is a dark globule - a dense cloud of gas and dust that appears dark against the bright emission nebula behind it.

These structures are stellar nurseries where new stars may eventually form as the dense material gravitationally collapses. The bright rim of the globule is illuminated and ionized by nearby hot stars, creating the characteristic glow seen in this SHO image.`,
    image: '/photos/elephat_trunk_sho.png',
    dimensions: '3912x4200',
    exposure: '150 subexposures × 300s, 12.5 hours total',
    equipment: 'William Optics Redcat 71 with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'August 10, 2022',
    location: 'Backyard location during 96.35% moon phase',
    technical: [
      'Total integration time: 12.5 hours',
      'ZWO 7nm Ha, OIII, and SII filters',
      'SHO color mapping for enhanced contrast',
      'ZWO ASIAIR Plus automated control',
      'Captured during nearly full moon'
    ]
  },
  'north-american-sho': {
    title: 'North America Nebula - SHO',
    description: 'Large emission nebula in Cygnus resembling North America',
    longDescription: `The North America Nebula (NGC 7000) is a large emission nebula in the constellation Cygnus that bears a striking resemblance to the continent of North America. Located approximately 2,000 light-years from Earth, this nebula spans about 4 times the diameter of the full moon.

The nebula's distinctive shape is created by a large dust cloud that blocks part of the nebula from our view, creating the "Atlantic Ocean" and "Gulf of Mexico" dark regions. The bright emission comes from hydrogen gas ionized by nearby hot stars.`,
    image: '/photos/north_american_sho.png',
    dimensions: '10945x8209',
    exposure: '150 subexposures × 300s, 12.5 hours total',
    equipment: 'William Optics Redcat 71 with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'August 22, 2022',
    location: 'Backyard location during 20.44% moon phase',
    technical: [
      'Total integration time: 12.5 hours',
      'ZWO 7nm Ha, OIII, and SII filters',
      'SHO color mapping for emission line contrast',
      'Wide-field capture showing full nebula extent',
      'ZWO ASIAIR Plus automated control'
    ]
  },
  'california-sho': {
    title: 'California Nebula - Narrowband',
    description: 'Large emission nebula in Perseus with HSO processing',
    longDescription: `The California Nebula (NGC 1499) is a large emission nebula in the constellation Perseus, named for its resemblance to the outline of California. This nebula spans about 2.5 degrees across the sky and is illuminated primarily by the nearby hot star Xi Persei.

The nebula is best observed in hydrogen-alpha light, where its characteristic shape and internal structure become readily apparent. This narrowband image reveals the intricate filamentary details throughout the nebula's extent.`,
    image: '/photos/california_sho.jpg',
    dimensions: '5925x3365',
    exposure: '400 subexposures × 300s, 33.3 hours total',
    equipment: 'William Optics Redcat 71 with ZWO ASI2600MM Pro (equipment inferred)',
    date: 'November 1, 2022',
    location: 'Backyard location during 52.54% moon phase',
    technical: [
      'Total integration time: 33 hours 20 minutes',
      'Narrowband HSO processing technique',
      'Wide-field capture of entire nebula',
      'Extensive integration for faint detail recovery'
    ]
  },
  'iris-rgb': {
    title: 'Iris Nebula (NGC 7023) - RGB',
    description: 'Blue reflection nebula in Cepheus with QuadBand filter',
    longDescription: `The Iris Nebula (NGC 7023) is a bright reflection nebula in the constellation Cepheus. Unlike emission nebulae that glow from ionized gas, reflection nebulae shine by reflecting and scattering light from nearby stars. The characteristic blue color comes from the preferential scattering of blue light by dust particles.

The central star illuminating the nebula is surrounded by a complex structure of dust lanes and reflection regions, creating the flower-like appearance that gives the nebula its name.`,
    image: '/photos/iris_rgb.jpg',
    dimensions: '3948x2648',
    exposure: 'QuadBand filtered RGB',
    equipment: 'Celestron EdgeHD 8" with ZWO ASI294MC camera on iOptron CEM70 mount',
    date: 'Backyard capture',
    location: 'Backyard location',
    technical: [
      'Altair QuadBand 2" filter for efficient capture',
      'EdgeHD 8" telescope for detailed resolution',
      'ZWO ASIAIR Plus automated control',
      'RGB processing emphasizing blue reflection'
    ]
  },
  'ghost-cassiopeia': {
    title: 'Ghost of Cassiopeia - Ha+RGB',
    description: 'Emission nebula IC 63 near Gamma Cassiopeiae',
    longDescription: `IC 63, known as the Ghost of Cassiopeia, is both an emission and reflection nebula located near the bright star Gamma Cassiopeiae. The nebula is illuminated and ionized by the intense radiation from this nearby hot star, creating a ghostly appearance against the darker background.

The nebula shows both blue reflection regions where starlight scatters off dust, and red emission regions where hydrogen gas glows under the star's intense ultraviolet radiation. This combination creates the ethereal, ghost-like appearance that gives the nebula its popular name.`,
    image: '/photos/ghost_cassiopeia_rgb.jpg',
    dimensions: '1670x2376',
    exposure: '100 subexposures × 300s, 8.3 hours total',
    equipment: 'William Optics Redcat 71 with ZWO ASI2600MM Pro camera on Advanced VX mount',
    date: 'August 17, 2022',
    location: 'Backyard location during 66.68% moon phase',
    technical: [
      'Total integration time: 8 hours 20 minutes',
      'Ha+RGB hybrid processing technique',
      'ZWO 7nm Ha and OIII filters',
      'ZWO ASIAIR Plus automated control',
      'EAA-based acquisition approach'
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(photoData).map((slug) => ({ slug }))
}

export default async function PhotoDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const photo = photoData[slug]
  
  if (!photo) {
    notFound()
  }

  // Parse dimensions to calculate aspect ratio
  const getDimensionsAspectRatio = (dimensions: string) => {
    const match = dimensions.match(/(\d+)x(\d+)/)
    if (match) {
      const width = parseInt(match[1])
      const height = parseInt(match[2])
      const ratio = width / height
      
      // Return appropriate Tailwind aspect ratio class
      if (ratio >= 1.6) return 'aspect-[16/10]'      // Wide images
      if (ratio >= 1.4) return 'aspect-[3/2]'        // Standard landscape
      if (ratio >= 1.2) return 'aspect-[4/3]'        // Square-ish landscape
      if (ratio >= 0.9) return 'aspect-square'       // Square
      if (ratio >= 0.7) return 'aspect-[3/4]'        // Portrait
      return 'aspect-[2/3]'                          // Tall portrait
    }
    return 'aspect-[4/3]' // Default fallback
  }

  const aspectRatio = getDimensionsAspectRatio(photo.dimensions)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Space background with stars */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-900/10 via-transparent to-cyan-900/10 animate-pulse" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header with back button */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/astrophotography" 
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg border border-amber-500/20"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Gallery
          </Link>
        </div>

        {/* Title above image */}
        <div className="container mx-auto px-4 mb-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {photo.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              {photo.description}
            </p>
          </div>
        </div>

        {/* Hero image section */}
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-5xl mx-auto">
            <div className={`${aspectRatio} relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-gray-700/30 hover:border-amber-500/50 transition-all duration-500 group mb-6`}>
              <ClickableImage
                src={photo.image}
                alt={photo.title}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              {/* Cosmic glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-amber-400 font-medium mb-2">Click to explore in full resolution</p>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-violet-400 rounded-full animate-pulse"></span>
                <span className="text-gray-400 text-sm">Deep Space Capture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact technical panels */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 border border-gray-700/30 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-3 text-amber-300">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                <p><span className="text-amber-400 font-medium">Resolution:</span> {photo.dimensions}</p>
                <p><span className="text-amber-400 font-medium">Integration:</span> {photo.exposure}</p>
                <p><span className="text-amber-400 font-medium">Captured:</span> {photo.date}</p>
                <p><span className="text-cyan-400 font-medium">Equipment:</span> {photo.equipment}</p>
                <p><span className="text-cyan-400 font-medium">Location:</span> {photo.location}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-xl p-5 border border-violet-500/20 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-3 text-violet-300">
                Processing Workflow
              </h2>
              <div className="space-y-1 text-sm text-gray-300 max-h-32 overflow-y-auto">
                {photo.technical.map((note, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scientific context */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 md:p-8 border border-gray-700/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Scientific Context
              </h2>
              <div className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed">
                {photo.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-base md:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}