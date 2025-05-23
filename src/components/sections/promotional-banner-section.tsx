"use client";

import React from 'react';

export const PromotionalBannerSection = () => {
  return (
    <section className="bg-indigo-600">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Big Summer Sale!</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Get up to 50% off on selected items. Don't miss out on amazing deals.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};