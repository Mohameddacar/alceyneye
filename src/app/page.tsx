import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight, ShoppingCart, Star } from 'lucide-react';
import { products } from '@/data/products';

export default function Home() {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] py-32 bg-[#edf2f8] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-man.jpg" 
            alt="Woman wearing stylish glasses" 
            fill
            className="object-cover object-right lg:object-center opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-[var(--color-brand-purple)] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Premium Eyewear</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[var(--color-brand-dark)] leading-[1.1] mb-6">
              SEE THE <br/><span className="text-[var(--color-brand-purple)]">DIFFERENCE.</span><br/>WEAR YOUR STYLE.
            </h1>
            <p className="text-lg text-gray-700 mb-10 max-w-lg leading-relaxed font-medium">
              Modern eyewear designed for confidence, comfort and everyday elegance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/collections" 
                className="bg-brand-gradient text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                Explore Collection
                <ArrowRight size={20} />
              </Link>
              <button className="bg-white text-[var(--color-brand-purple)] px-8 py-4 rounded-full font-bold border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all flex items-center gap-2">
                <Play fill="currentColor" size={20} />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--color-brand-dark)] mb-3">Best Selling Glasses</h2>
              <p className="text-gray-600 text-lg">Selected for quality, comfort and timeless style.</p>
            </div>
            <Link href="/collections" className="hidden md:flex text-[var(--color-brand-purple)] font-bold items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((item) => (
              <Link href={`/collections/${item.id}`} key={item.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100 block">
                <div className="relative h-48 w-full mb-6 mix-blend-multiply group-hover:scale-105 transition-transform duration-500">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-brand-dark)] text-xl mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.type}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div>
                      <span className="font-extrabold text-2xl text-[var(--color-brand-dark)] block mb-1">${item.price}</span>
                      <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
                        <Star className="text-yellow-400 fill-yellow-400" size={16} />
                        {item.rating} ({item.reviews})
                      </div>
                    </div>
                    <button className="bg-white text-[var(--color-brand-purple)] w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-gray-200 hover:bg-brand-gradient hover:text-white transition-colors">
                      <ShoppingCart size={22} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature / Collections Teaser */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-dark)] mb-6">Discover Your Perfect Frame</h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">From classic designs to modern trends, find the eyewear that fits your unique personality and lifestyle.</p>
           <Link 
              href="/collections" 
              className="inline-flex bg-brand-gradient text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all items-center gap-2 text-lg"
            >
              Shop All Collections
            </Link>
        </div>
      </section>
    </div>
  );
}
