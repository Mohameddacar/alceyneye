import Image from 'next/image';
import { Eye, Shield, Heart, Award } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Eye size={32} />, title: 'Vision Focus', desc: 'Dedicated to perfect clarity and long-term eye health.' },
    { icon: <Shield size={32} />, title: 'Quality Guaranteed', desc: 'Premium materials that endure the test of time.' },
    { icon: <Heart size={32} />, title: 'Customer First', desc: 'Personalized care tailored to your unique lifestyle.' },
    { icon: <Award size={32} />, title: 'Expert Team', desc: 'Certified optometrists and experienced stylists.' },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[var(--color-brand-purple)] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">About Us</span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[var(--color-brand-dark)] mb-6">
            Seeing the world <br />
            <span className="text-brand-gradient bg-clip-text text-transparent">clearly since 2010.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alcayn Optical Center is Mogadishu’s premier destination for luxury eyewear and comprehensive clinical eye care. We blend medical expertise with high-end fashion.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/store.jpg" alt="Inside Alcayn Optical Center" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--color-brand-dark)] mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded on the bustling Makkah Almukarramah Ave, Alcayn started with a simple mission: to provide the people of Somalia with access to world-class vision care without compromising on style.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the years, we have grown from a small boutique clinic to a trusted optical hub. We source our frames globally, ensuring that every pair of glasses on our shelves meets rigorous standards of durability, comfort, and aesthetic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[var(--color-brand-dark)] mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide our everyday work and commitment to you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-[var(--color-brand-purple)] group-hover:bg-brand-gradient group-hover:text-white transition-all mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-brand-dark)] mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Closing CTA */}
      <section className="py-24 bg-brand-gradient text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-6">Ready to find your perfect look?</h2>
          <p className="text-xl text-white/80 mb-10">Our specialists are here to guide you through our extensive collection.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-brand-purple)] px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all text-lg">
            Visit Our Store
          </a>
        </div>
      </section>
    </div>
  );
}
