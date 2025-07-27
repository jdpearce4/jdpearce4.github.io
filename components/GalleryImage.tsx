'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImageProps {
  thumbnail: string
  image: string
  alt: string
  className?: string
  sizes?: string
}

export default function GalleryImage({ thumbnail, image, alt, className, sizes }: GalleryImageProps) {
  const [imageSrc, setImageSrc] = useState(thumbnail || image)

  const handleError = () => {
    // Fallback to full image if thumbnail fails to load
    if (imageSrc === thumbnail) {
      setImageSrc(image)
    }
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      onError={handleError}
    />
  )
}