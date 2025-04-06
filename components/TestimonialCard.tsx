import React from 'react';

interface TestimonialCardProps {
  clientName: string;
  testimonial: string;
  clientPhoto?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ clientName, testimonial, clientPhoto }) => {
  return (
    <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center space-y-4">
      {clientPhoto && (
        <img
          src={clientPhoto}
          alt={clientName}
          className="w-20 h-20 rounded-full object-cover"
        />
      )}
      <p className="text-gray-700 text-base">{testimonial}</p>
      <h3 className="text-lg font-semibold text-gray-900">{clientName}</h3>
    </div>
  );
};

export default TestimonialCard;