"use client";

import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Info & CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 text-sm mb-2 font-medium">Home / Contact</p>
            <span className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Get In Touch</span>
            <h1 className="text-5xl font-extrabold text-[var(--color-brand-dark)] mb-6">Visit Alcayn</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We're here to help you find the perfect eyewear. Visit our store or contact us — our team is ready to assist you.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-dark)] text-lg">Makkah Almukarramah Ave,</h4>
                  <p className="text-gray-600">Mogadishu, Somalia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-dark)] text-lg">+252 61 2224212</h4>
                  <p className="text-gray-600">+252 61 5570356</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-dark)] text-lg">info@alceyneye.com</h4>
                  <p className="text-gray-600">info@alcayn.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+252612224212" className="bg-gradient-to-r bg-brand-gradient text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all text-center">
                Call Now
              </a>
              <a href="https://wa.me/252612224212" target="_blank" rel="noreferrer" className="bg-white text-blue-600 border border-blue-100 px-8 py-3.5 rounded-full font-bold shadow-sm hover:bg-blue-50 transition-all text-center">
                WhatsApp
              </a>
              <button className="bg-white text-[var(--color-brand-dark)] border border-gray-200 px-8 py-3.5 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all text-center">
                Get Directions
              </button>
            </div>
          </div>

          {/* Contact Image / Store Image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/store.jpg" alt="Alcayn Optical Center Store" fill className="object-cover" />
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <h2 className="text-3xl font-extrabold text-[var(--color-brand-dark)] mb-8 text-center">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-brand-purple)] focus:border-[var(--color-brand-purple)] outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-brand-purple)] focus:border-[var(--color-brand-purple)] outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-brand-purple)] focus:border-[var(--color-brand-purple)] outline-none transition-all" placeholder="+252 61..." />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input required type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-brand-purple)] focus:border-[var(--color-brand-purple)] outline-none transition-all" placeholder="How can we help?" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-brand-purple)] focus:border-[var(--color-brand-purple)] outline-none transition-all resize-none" placeholder="Type your message here..."></textarea>
            </div>
            
            <div className="text-center">
              <button disabled={status === 'sending'} type="submit" className="bg-gradient-to-r bg-brand-gradient text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-70 text-lg w-full md:w-auto">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status === 'success' && <p className="text-green-600 text-center font-medium mt-4">Thank you! Your message has been sent.</p>}
            {status === 'error' && <p className="text-red-600 text-center font-medium mt-4">Something went wrong. Please try again later.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
