'use client'

import Image from 'next/image'

interface ClickableImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
}

export default function ClickableImage({ src, alt, className, sizes }: ClickableImageProps) {
  const handleClick = () => {
    window.open(src, '_blank')
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      onClick={handleClick}
    />
  )
}