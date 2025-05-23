"use client";

import React from 'react';

// Placeholder testimonial data
const testimonials = [
  {
    id: '1',
    quote: "This is the best e-commerce platform I've ever used! The products are high quality and the customer service is excellent.",
    author: 'Jane Doe',
    location: 'New York, NY',
    avatarUrl: 'https://via.placeholder.com/100x100.png?text=JD',
  },
  {
    id: '2',
    quote: 'I love the variety of products available. Shipping was fast and the items arrived in perfect condition. Highly recommend!',
    author: 'John Smith',
    location: 'San Francisco, CA',
    avatarUrl: 'https://via.placeholder.com/100x100.png?text=JS',
  },
  {
    id: '3',
    quote: "Amazing experience from start to finish. The website is easy to navigate and the checkout process was a breeze. Five stars!",
    author: 'Alice Brown',
    location: 'Chicago, IL',
    avatarUrl: 'https://via.placeholder.com/100x100.png?text=AB',
  },
];

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  avatarUrl: string;
}

export const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from satisfied shoppers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 sm:mt-16">
          {testimonials.map((testimonial: Testimonial) => (
            <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start">
                <img
                  className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                  src={testimonial.avatarUrl}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <blockquote className="mt-6 text-gray-700">
                <p>"{testimonial.quote}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};