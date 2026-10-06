"use client";
import Link from 'next/link';
import { Menu, X, Eye } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="text-[var(--color-brand-purple)]">
              <Eye size={40} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-[var(--color-brand-dark)] tracking-wider">ALCAYN</span>
              <span className="text-[10px] text-gray-500 tracking-widest font-semibold uppercase">Optical Center</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-[var(--color-brand-red)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/collections"
              className="bg-brand-gradient text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all text-sm flex items-center gap-2"
            >
              View Collection
              <span>→</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-brand-red)] hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/collections"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-3 py-2 text-center rounded-full bg-brand-gradient text-white font-medium"
            >
              View Collection →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
