import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amina H.',
      role: 'Verified Customer',
      rating: 5,
      text: 'Great selection of glasses and very helpful service. I found exactly the frame I was looking for!',
      image: '/hero-man.jpg' // Using hero as placeholder for avatar
    },
    {
      name: 'Mohamed A.',
      role: 'Verified Customer',
      rating: 5,
      text: 'Beautiful designs and excellent customer service. Highly recommended!',
      image: '/hero-man.jpg'
    },
    {
      name: 'Fatima S.',
      role: 'Verified Customer',
      rating: 5,
      text: 'Premium quality glasses and modern styles. I always find new arrivals here.',
      image: '/hero-man.jpg'
    }
  ];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <p className="text-gray-500 text-sm mb-2 font-medium">Home / Testimonials</p>
          <span className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Customer Feedback</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-brand-dark)] mb-4">Trusted by Our Customers.</h1>
          <p className="text-xl text-gray-600">
            Real experiences from people who love our eyewear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 flex-grow font-medium leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-dark)]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel indicators dummy */}
        <div className="flex justify-center mt-12 gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--color-brand-dark)]"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
