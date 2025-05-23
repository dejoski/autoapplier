"use client";

import React from 'react';

// Placeholder category data
const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Electronics',
    href: '/category/electronics',
  },
  {
    id: 'apparel',
    name: 'Apparel',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Apparel',
    href: '/category/apparel',
  },
  {
    id: 'home-goods',
    name: 'Home Goods',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Home+Goods',
    href: '/category/home-goods',
  },
];

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  href: string;
}

export const ProductCategoriesSection = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our wide range of product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {categories.map((category: Category) => (
            <a
              key={category.id}
              href={category.href}
              className="relative block overflow-hidden bg-gray-100 border border-gray-200 rounded-lg group aspect-w-16 aspect-h-9"
            >
              <img
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={category.imageUrl}
                alt={category.name}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h3 className="text-2xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};