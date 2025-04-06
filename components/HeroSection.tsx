import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  backgroundMediaUrl: string;
  salonName: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  isVideo?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundMediaUrl,
  salonName,
  tagline,
  ctaText,
  ctaLink,
  isVideo = false,
}) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {isVideo ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundMediaUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={backgroundMediaUrl}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">{salonName}</h1>
        <p className="text-white text-lg md:text-2xl mb-6">{tagline}</p>
        <Button asChild>
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;