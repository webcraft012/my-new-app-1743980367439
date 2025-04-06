import React from 'react';

interface MapEmbedProps {
  /** Either a full Google Maps embed URL or coordinates */
  embedUrl?: string;
  latitude?: number;
  longitude?: number;
  /** Optional zoom level */
  zoom?: number;
  /** Optional title for iframe accessibility */
  title?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  embedUrl,
  latitude,
  longitude,
  zoom = 14,
  title = 'Google Map',
}) => {
  let src = '';

  if (embedUrl) {
    src = embedUrl;
  } else if (latitude !== undefined && longitude !== undefined) {
    src = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
  } else {
    console.error('MapEmbed requires either embedUrl or latitude and longitude props.');
    return null;
  }

  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
      <iframe
        src={src}
        title={title}
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;