"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navItems } from "@/app/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isMenuOpen) {
      setScrollPosition(window.scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen, scrollPosition]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="bg-zinc-800  w-full font-['Nunito'] text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-5 h-16">
        <div className="flex items-center">
          <Link
            href="/user"
            className="text-xl font-bold flex items-center gap-2"
          >
            <i className="ri-store-line text-2xl"></i>
            <span>BrandName</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-16 max-sm:hidden">
          {navItems.map((item) => (
            <Link key={item.to} href={item.to} className="font-bold text-lg">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 max-sm:hidden">
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-white font-bold  text-lg">
              Create Account
            </Link>
          </div>
          <Link href="/user/account">
            <div className="w-8 h-8 rounded-full bg-[#27E0B3] flex items-center justify-center hover:bg-[#1fa88a] transition-colors">
              <span className="text-sm font-bold text-zinc-900">S</span>
            </div>
          </Link>
        </div>

        <div className="hidden max-sm:block">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-zinc-100 hover:text-[#27E0B3] focus:outline-none transition-all duration-300"
          >
            <i
              className={`${
                isMenuOpen ? "ri-close-line rotate-180" : "ri-menu-line"
              } text-3xl transition-transform duration-300`}
            ></i>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-16 left-0 w-full bg-zinc-800/95 backdrop-blur-md h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 border-t border-zinc-700 ${
          isMenuOpen ? "flex" : "hidden"
        } z-[999] transition-all duration-300`}
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            href={item.to}
            onClick={() => setIsMenuOpen(false)}
            className="text-zinc-100 text-xl font-bold hover:text-[#27E0B3] transition-colors transform hover:scale-110"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/auth/login"
          className="text-zinc-100 text-xl font-bold hover:text-[#27E0B3] transition-colors transform hover:scale-110"
          onClick={() => setIsMenuOpen(false)}
        >
          Account
        </Link>

        <Link
          href="/user/account"
          className="text-zinc-100 text-xl font-bold hover:text-[#27E0B3] transition-colors transform hover:scale-110"
          onClick={() => setIsMenuOpen(false)}
        >
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
