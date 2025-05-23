"use client";

import React from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
}

// Placeholder product data - replace with actual data fetching and types
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Stylish Smartwatch',
    price: '$299.99',
    imageUrl: 'https://picsum.photos/seed/smartwatch/400/300',
    description: 'Stay connected and track your fitness with this sleek smartwatch.'
  },
  {
    id: '2',
    name: 'Wireless Noise-Cancelling Headphones',
    price: '$199.99',
    imageUrl: 'https://picsum.photos/seed/headphones/400/300',
    description: 'Immerse yourself in sound with these comfortable headphones.'
  },
  {
    id: '3',
    name: 'Ultra HD 4K Action Camera',
    price: '$249.50',
    imageUrl: 'https://picsum.photos/seed/actioncam/400/300',
    description: 'Capture your adventures in stunning 4K resolution.'
  },
  {
    id: '4',
    name: 'Portable Bluetooth Speaker',
    price: '$79.00',
    imageUrl: 'https://picsum.photos/seed/speaker/400/300',
    description: 'Take your music anywhere with this compact and powerful speaker.'
  },
];

export const FeaturedProductsSection = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out our handpicked selection of top-quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden bg-white border border-gray-200 rounded-lg group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            >
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src={product.imageUrl}
                  alt={product.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  <a href="#" title="">
                    {product.name}
                    <span className="absolute inset-0" aria-hidden="true"></span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <p className="mt-4 text-xl font-bold text-gray-900">{product.price}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <a
            href="#"
            title="View All Products"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};