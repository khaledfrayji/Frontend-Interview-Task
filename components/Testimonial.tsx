'use client'

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    image: 'family3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Manager',
    image: 'family2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    position: 'Product Designer',
    image: 'family1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, position, image, text } = testimonials[current];

  return (
    <div className="flex flex-col items-center p-6 w-full  shadow-md">
      <div className="flex space-x-4 mb-4">
        {testimonials.map((testimonial, index) => (
          <img
            key={testimonial.id}
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-20 h-20  object-cover border-4 ${index === current ? 'border-orange-400' : 'border-transparent'}`}
          />
        ))}
      </div>
      <p className="text-center text-gray-700 mb-2">{text}</p>
      <h3 className="text-center text-lg font-semibold">{name}</h3>
      <p className="text-center text-sm text-gray-500">{position}</p>
      <div className="text-center mt-4 text-sm text-gray-500">
        {current + 1} / {testimonials.length}
      </div>
    </div>
  );
};

export default Testimonial;
