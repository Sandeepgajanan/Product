import Link from "next/link";
import { sidebarItems } from "@/app/constants";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-zinc-800 rounded-lg md:hidden"
      >
        <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-2xl text-zinc-100`}></i>
      </button>

      <div className={`w-64 h-screen bg-zinc-900 p-3 fixed transition-all duration-300 border-r border-zinc-600 max-sm:w-screen 
        ${isOpen ? 'left-0' : '-left-[100%]'} md:left-0 top-0 z-40`}>
        <div className="flex items-center gap-3 my-8 px-2">
          <i className="ri-store-line text-2xl text-[#27E0B3]"></i>
          <h1 className="text-xl font-bold text-zinc-100 tracking-wide">Admin Panel</h1>
        </div>

        <nav>
          {sidebarItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200"
            >
              <i className={`${item.icon} text-xl`}></i>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;