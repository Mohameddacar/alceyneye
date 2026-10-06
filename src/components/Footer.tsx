import Link from 'next/link';
import { MapPin, Phone, Mail, Eye } from 'lucide-react';

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-[var(--color-brand-purple)]">
                <Eye size={32} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-[var(--color-brand-dark)] tracking-wider">ALCAYN</span>
                <span className="text-[9px] text-gray-500 tracking-widest font-semibold uppercase">Optical Center</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              Providing premium eye care and stylish eyewear for the whole family. See the difference, wear your style.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/alcayneye" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#1877F2] hover:shadow-md transition-all">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#E4405F] hover:shadow-md transition-all">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#1DA1F2] hover:shadow-md transition-all">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Collections', 'Eye Services', 'Testimonials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-[var(--color-brand-purple)] transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Collections</h4>
            <ul className="space-y-3">
              {['Men Glasses', 'Women Glasses', 'Kids Glasses', 'Sunglasses', 'Premium Frames'].map((link) => (
                <li key={link}>
                  <Link href="/collections" className="text-gray-600 hover:text-[var(--color-brand-purple)] transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin size={20} className="text-[var(--color-brand-purple)] flex-shrink-0 mt-0.5" />
                <span>Makkah Almukarramah Ave,<br />Mogadishu, Somalia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={20} className="text-[var(--color-brand-purple)] flex-shrink-0" />
                <div className="flex flex-col">
                  <span>+252 61 2224212</span>
                  <span>+252 61 5570356</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail size={20} className="text-[var(--color-brand-purple)] flex-shrink-0" />
                <span>info@alceyneye.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Alcayn Optical Center. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[var(--color-brand-purple)]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-brand-purple)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
