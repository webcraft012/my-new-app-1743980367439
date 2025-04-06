import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  onBookNow?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  price,
  imageUrl,
  onBookNow,
}) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-lg font-bold mb-4">{price}</p>
        </div>
        {onBookNow && (
          <Button onClick={onBookNow} className="w-full md:w-auto">
            Book Now
          </Button>
        )}
      </div>
    </div>
  );
};