'use client';

import Link from 'next/link';
import { socialLinks, quickLinks } from '@/app/constants';

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 border-t border-zinc-800 py-5 max-sm:py-4 font-['Nunito']">
      <div className="max-w-screen-xl mx-auto px-8 max-sm:px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 max-sm:gap-8">
          <div>
            <h2 className="text-2xl max-sm:text-xl font-bold text-zinc-100 mb-6 max-sm:mb-4">Brand Name</h2>
            <div className="flex gap-4 max-sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 max-sm:w-9 max-sm:h-9 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-[#27E0B3] hover:text-zinc-900 transition-all duration-300"
                >
                  <i className={`${social.icon} text-xl max-sm:text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl max-sm:text-lg font-bold text-zinc-100 mb-6 max-sm:mb-4">Quick Links</h3>
            <ul className="space-y-3 max-sm:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-zinc-400 hover:text-[#27E0B3] transition-colors flex items-center gap-2 max-sm:text-sm"
                  >
                    <i className="ri-arrow-right-s-line"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl max-sm:text-lg font-bold text-zinc-100 mb-6 max-sm:mb-4">Contact Us</h3>
            <div className="space-y-4 max-sm:space-y-3">
              <p className="text-zinc-400 flex items-center gap-3 hover:text-[#27E0B3] transition-colors cursor-pointer max-sm:text-sm">
                <i className="ri-map-pin-line text-xl max-sm:text-lg"></i>
                <span>123 Food Street, Foodie City</span>
              </p>
              <a
                href="tel:+911234567890"
                className="text-zinc-400 flex items-center gap-3 hover:text-[#27E0B3] transition-colors group max-sm:text-sm"
              >
                <i className="ri-phone-line text-xl max-sm:text-lg"></i>
                <span>+91 1234567890</span>
              </a>
              <a
                href="mailto:info@foodiehub.com"
                className="text-zinc-400 flex items-center gap-3 hover:text-[#27E0B3] transition-colors group max-sm:text-sm"
              >
                <i className="ri-mail-line text-xl max-sm:text-lg"></i>
                <span>info@foodiehub.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 max-sm:mt-8 pt-8 max-sm:pt-6 text-center">
          <p className="text-zinc-400 max-sm:text-sm">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
