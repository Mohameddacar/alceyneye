"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ShoppingCart, Star } from 'lucide-react';
import { products } from '@/data/products';

export default function Collections() {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Men', 'Women', 'Sunglasses', 'Premium', 'New Arrivals'];
  
  const filteredProducts = products.filter(product => product.category.includes(activeTab));

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-2">Home / Collections</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-brand-dark)] mb-4">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore our wide range of eyewear collections for every personality.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 mb-10 hide-scrollbar">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm ${
                activeTab === tab 
                  ? 'bg-[var(--color-brand-dark)] text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <Link href={`/collections/${item.id}`} key={item.id} className="bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col">
              <div className="relative h-56 w-full mb-6 mix-blend-multiply group-hover:scale-105 transition-transform duration-500">
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-[var(--color-brand-dark)] text-xl mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.type}</p>
                <div className="flex justify-between items-end mt-auto pt-4 border-t border-gray-50">
                  <div>
                    <span className="font-extrabold text-2xl text-[var(--color-brand-dark)] block mb-1">${item.price}</span>
                    <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      {item.rating} ({item.reviews})
                    </div>
                  </div>
                  <div className="bg-gray-50 text-[var(--color-brand-purple)] w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:bg-brand-gradient group-hover:text-white transition-all transform group-hover:rotate-12">
                    <ArrowRight size={22} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400">No products found in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
