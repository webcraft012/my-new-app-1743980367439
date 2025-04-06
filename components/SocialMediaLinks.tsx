import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

interface SocialMediaLinksProps {
  instagramUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
}

const iconClasses =
  'w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors duration-200';

export function SocialMediaLinks({
  instagramUrl,
  facebookUrl,
  twitterUrl,
  linkedinUrl,
  youtubeUrl,
}: SocialMediaLinksProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {instagramUrl && (
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <Instagram className={iconClasses} />
        </a>
      )}
      {facebookUrl && (
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <Facebook className={iconClasses} />
        </a>
      )}
      {twitterUrl && (
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <Twitter className={iconClasses} />
        </a>
      )}
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Linkedin className={iconClasses} />
        </a>
      )}
      {youtubeUrl && (
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <Youtube className={iconClasses} />
        </a>
      )}
    </div>
  );
}

export default SocialMediaLinks;