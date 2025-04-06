import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  imageUrl?: string;
};

type ServiceCategory = {
  id: string;
  name: string;
  services: Service[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: 'hair',
    name: 'Hair',
    services: [
      {
        id: 'haircut',
        name: 'Haircut',
        description: 'Professional haircut tailored to your style.',
        price: '$30',
        duration: '30 mins',
        imageUrl: '/images/haircut.jpg',
      },
      {
        id: 'coloring',
        name: 'Hair Coloring',
        description: 'Full hair coloring with premium products.',
        price: '$80',
        duration: '90 mins',
      },
    ],
  },
  {
    id: 'nails',
    name: 'Nails',
    services: [
      {
        id: 'manicure',
        name: 'Manicure',
        description: 'Classic manicure with polish.',
        price: '$25',
        duration: '30 mins',
        imageUrl: '/images/manicure.jpg',
      },
      {
        id: 'pedicure',
        name: 'Pedicure',
        description: 'Relaxing pedicure treatment.',
        price: '$35',
        duration: '45 mins',
      },
    ],
  },
  {
    id: 'massage',
    name: 'Massage',
    services: [
      {
        id: 'swedish',
        name: 'Swedish Massage',
        description: 'Relaxing full-body Swedish massage.',
        price: '$60',
        duration: '60 mins',
      },
      {
        id: 'deep-tissue',
        name: 'Deep Tissue Massage',
        description: 'Intensive massage targeting deep muscle layers.',
        price: '$75',
        duration: '60 mins',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <Tabs defaultValue={serviceCategories[0].id} className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-6">
          {serviceCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="m-1">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {serviceCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  className="border rounded-lg p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  {service.imageUrl && (
                    <div className="mb-4 relative w-full h-48">
                      <Image
                        src={service.imageUrl}
                        alt={service.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  )}
                  <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                  <Link href="/booking" className="mt-auto">
                    <Button className="w-full">Book Appointment</Button>
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}