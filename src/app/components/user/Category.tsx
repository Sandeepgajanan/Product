"use client";

import Link from "next/link";
import Sideheading from "./Sideheading";
import { categories } from "@/app/constants";

const Category = () => {
  return (
    <div className="w-full bg-zinc-900 py-5 max-sm:py-10">
      <div className="max-w-screen-xl mx-auto px-8">
        <Sideheading title="Our" highlight="Categories" />

        <div className="flex flex-wrap items-center justify-center gap-20 max-sm:gap-4">
          {categories.map((category) => (
            <Link href="/user/products" key={category.id}>
              <div className="flex flex-col items-center group">
                <div
                  className={`${category.color} w-24 h-24 rounded-full flex items-center justify-center cursor-pointer border-4 border-zinc-800 max-sm:w-16 max-sm:h-16`}
                >
                  <i
                    className={`${category.icon} text-4xl text-white group-hover:rotate-12 transition-transform duration-300 max-sm:text-2xl`}
                  ></i>
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mt-3 text-center max-sm:text-sm">
                  {category.name}
                </h3>
                <div className="flex items-center gap-1 text-zinc-400 group-hover:text-[#27E0B3] transition-colors">
                  <span className="text-sm max-sm:text-xs">Explore</span>
                  <i className="ri-arrow-right-line text-sm group-hover:translate-x-1 transition-transform max-sm:text-xs"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
