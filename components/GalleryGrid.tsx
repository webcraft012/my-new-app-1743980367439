import React from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

interface GalleryImage {
  url: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="relative w-full h-64">
            <Image
              src={image.url}
              alt={image.caption || `Gallery image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {image.caption && (
            <div className="p-2 text-sm text-center text-gray-700 dark:text-gray-300">
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </Masonry>
  );
}

export default GalleryGrid;