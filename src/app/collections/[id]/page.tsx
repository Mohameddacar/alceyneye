import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShoppingCart, Star, Check, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/collections" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-brand-purple)] font-medium mb-10 transition-colors">
          <ArrowLeft size={20} />
          Back to Collections
        </Link>
        
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="relative w-full h-[400px] lg:h-[500px] bg-gray-50 rounded-3xl p-8 flex items-center justify-center border border-gray-100 mix-blend-multiply">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain p-8 hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`relative h-24 bg-gray-50 rounded-2xl border ${i === 1 ? 'border-[var(--color-brand-purple)]' : 'border-gray-100 hover:border-gray-300'} cursor-pointer transition-colors p-2`}>
                  <Image src={product.image} alt={`${product.name} view ${i}`} fill className="object-contain p-2 mix-blend-multiply" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[var(--color-brand-purple)] font-bold tracking-[0.1em] text-sm uppercase bg-blue-50 px-3 py-1 rounded-full">{product.type}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-brand-dark)] mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-extrabold text-[var(--color-brand-dark)]">${product.price}</span>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-1 text-gray-600 font-medium">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Features List */}
            <div className="mb-10">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Actions */}
            <div className="mt-auto space-y-4">
              <button className="w-full bg-brand-gradient text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                <ShoppingCart size={24} />
                Add to Cart
              </button>
              <button className="w-full bg-white text-[var(--color-brand-dark)] border-2 border-gray-200 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                Virtual Try-On
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
