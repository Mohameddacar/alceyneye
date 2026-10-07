import Image from 'next/image';
import { Glasses, Activity, ShieldPlus, Siren, Baby, Users, Store, Wrench, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Glasses size={40} />,
      title: 'Baaritaanka Aragga & Qorista Muraayadaha',
      desc: 'Comprehensive visual acuity testing and precise prescription of corrective lenses for optimal sight and comfort.',
    },
    {
      icon: <Activity size={40} />,
      title: 'Baaritaanka Cadaadiska & Gudaha Isha (Glaucoma)',
      desc: 'Advanced diagnostic screening for eye pressure and internal eye structures to detect and manage conditions like glaucoma.',
    },
    {
      icon: <ShieldPlus size={40} />,
      title: 'Daweynta Caabuqyada & Xasaasiyadda Indhaha',
      desc: 'Expert medical care for eye infections, inflammations, and allergic reactions to restore comfort and health.',
    },
    {
      icon: <Siren size={40} />,
      title: 'Adeegyada Gargaarka Degdegga ah',
      desc: 'Immediate attention and removal of foreign objects or treatment for sudden eye injuries and acute conditions.',
    },
    {
      icon: <Baby size={40} />,
      title: 'Daryeelka & Baaritaannada Gaarka ah ee Carruurta',
      desc: 'Specialized, gentle eye examinations and care tailored specifically for children\'s developing vision.',
    },
    {
      icon: <Users size={40} />,
      title: 'La-talinta Bukaanada u Baahan Qalliinka',
      desc: 'Professional guidance, counseling, and trusted referrals for patients requiring advanced surgical interventions.',
    },
    {
      icon: <Store size={40} />,
      title: 'Iibinta Ookiyaalaha (Optical Shop)',
      desc: 'A premium selection of designer frames, sunglasses, and high-quality lenses to suit every style and need.',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Farsamada Ookiyaalaha (Optical Workshop)',
      desc: 'In-house technical services for precise lens cutting, frame repairs, and custom adjustments by skilled technicians.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-[var(--color-brand-purple)] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Clinical & Retail Services</span>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[var(--color-brand-dark)] mb-6">
            Comprehensive Care <br/> For Your Vision.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From thorough clinical examinations to finding the perfect aesthetic fit, we offer end-to-end optical services under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((srv, idx) => (
              <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all">
                <div className="text-[var(--color-brand-red)] flex-shrink-0 mt-2">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-brand-dark)] mb-3">{srv.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[var(--color-brand-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-8">Why Choose Alcayn?</h2>
            <ul className="space-y-6">
              {[
                'State-of-the-art diagnostic technology.',
                'Hundreds of premium designer frames in stock.',
                'Fast turnaround time on custom prescriptions.',
                'Dedicated support and aftercare.'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-gray-300">
                  <CheckCircle2 className="text-[var(--color-brand-red)]" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Link href="/contact" className="inline-flex bg-brand-gradient text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all items-center gap-2">
                Book an Appointment
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
             <Image src="/hero-man.jpg" alt="Eye examination" fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>
    </div>
  );
}
