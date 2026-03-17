'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

// 6 product photos in public/images/
const PHOTOS = [
  { src: '/images/product-1.jpg', caption: 'LED film on glass — off state' },
  { src: '/images/product-2.jpg', caption: 'Crystal LED modules close-up' },
  { src: '/images/product-3.jpg', caption: 'Film flexibility and curvature' },
  { src: '/images/product-4.jpg', caption: 'Active display on glass surface' },
  { src: '/images/product-5.jpg', caption: 'Module structure detail' },
  { src: '/images/product-6.jpg', caption: 'Transparency — see-through quality' },
]

export default function PhotoGallery() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref as any} className="bg-ink py-20 overflow-hidden">
      <div className="px-8 lg:px-16 mb-10 reveal">
        <p className="text-[11px] tracking-[0.18em] uppercase text-accent mb-3">
          The Technology
        </p>
        <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-white">
          Crystal LED Film — up close.
        </h2>
      </div>

      {/* Mosaic grid — responsive layout based on photo count */}
      <div
        className={`px-8 lg:px-16 grid gap-2 reveal ${
          PHOTOS.length <= 4
            ? 'grid-cols-2 md:grid-cols-4'
            : PHOTOS.length <= 6
            ? 'grid-cols-2 md:grid-cols-3'
            : 'grid-cols-2 md:grid-cols-4'
        }`}
      >
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className={`relative overflow-hidden group ${
              // Make first photo span 2 columns on larger screens for visual weight
              i === 0 && PHOTOS.length >= 4 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Caption on hover */}
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-300 flex items-end p-4">
              <span className="text-white/0 group-hover:text-white/90 text-xs uppercase tracking-wider transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {photo.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
