import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Masonry from 'react-masonry-css';
import { Input } from '@/components/ui/input';

type GalleryImage = {
  src: string;
  width: number;
  height: number;
  caption?: string;
  style?: string;
  service?: string;
};

const images: GalleryImage[] = [
  {
    src: '/images/gallery1.jpg',
    width: 4,
    height: 3,
    caption: 'Elegant Updo',
    style: 'updo',
    service: 'hair',
  },
  {
    src: '/images/gallery2.jpg',
    width: 3,
    height: 4,
    caption: 'Classic Manicure',
    style: 'classic',
    service: 'nails',
  },
  {
    src: '/images/gallery3.jpg',
    width: 4,
    height: 3,
    caption: 'Modern Haircut',
    style: 'modern',
    service: 'hair',
  },
  {
    src: '/images/gallery4.jpg',
    width: 3,
    height: 4,
    caption: 'Bridal Makeup',
    style: 'bridal',
    service: 'makeup',
  },
  // Add more images as needed
];

const uniqueStyles = Array.from(new Set(images.map((img) => img.style).filter(Boolean)));
const uniqueServices = Array.from(new Set(images.map((img) => img.service).filter(Boolean)));

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('');

  const filteredImages = images.filter((img) => {
    if (!filter) return true;
    return img.style === filter || img.service === filter;
  });

  const photos = filteredImages.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Gallery</h1>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          onClick={() => setFilter('')}
          className={`px-4 py-2 rounded border ${
            filter === '' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          All
        </button>
        {uniqueStyles.map((style) => (
          <button
            key={style}
            onClick={() => setFilter(style!)}
            className={`px-4 py-2 rounded border ${
              filter === style ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {style.charAt(0).toUpperCase() + style.slice(1)}
          </button>
        ))}
        {uniqueServices.map((service) => (
          <button
            key={service}
            onClick={() => setFilter(service!)}
            className={`px-4 py-2 rounded border ${
              filter === service ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {service.charAt(0).toUpperCase() + service.slice(1)}
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {filteredImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow">
            <img
              src={img.src}
              alt={img.caption || 'Gallery image'}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            {img.caption && (
              <div className="p-2 text-center text-sm text-gray-700">{img.caption}</div>
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
}