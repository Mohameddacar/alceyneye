import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Collections() {
  const collections = [
    { id: 1, name: 'Men Collection', desc: 'Modern. Professional. Confident.', image: '/hero.jpg' },
    { id: 2, name: 'Women Collection', desc: 'Elegant. Stylish. Contemporary.', image: '/hero.jpg' },
    { id: 3, name: 'Sunglasses Collection', desc: 'Classic. Luxury. Everyday.', image: '/glasses.jpg' },
    { id: 4, name: 'Premium Collection', desc: 'Distinctive. Modern. Refined.', image: '/glasses.jpg' },
  ];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-2">Home / Collections</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-brand-dark)] mb-4">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore our wide range of eyewear collections for every personality.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 mb-10 hide-scrollbar">
          {['All', 'Men', 'Women', 'Sunglasses', 'Premium', 'New Arrivals'].map((tab, idx) => (
            <button 
              key={tab} 
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold transition-colors ${
                idx === 0 ? 'bg-[#f1f5f9] text-[var(--color-brand-dark)]' : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col) => (
            <div key={col.id} className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
              <Image 
                src={col.image} 
                alt={col.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-2">{col.name}</h3>
                  <p className="text-gray-200 text-lg">{col.desc}</p>
                </div>
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center transform group-hover:-rotate-45 transition-transform text-[var(--color-brand-dark)]">
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
