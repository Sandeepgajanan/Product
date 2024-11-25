"use client";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div className="w-full bg-zinc-900 pt-28 h-screen max-sm:pt-16 max-sm:h-fit">
      <div className="max-w-screen-xl mx-auto  flex items-center justify-between px-8 max-sm:flex-col">
        <div className="w-1/2 space-y-4 max-sm:w-full max-sm:text-center">
          <h1 className="text-6xl font-bold text-zinc-100 leading-tight max-sm:text-4xl">
            Delicious & Healthy
            <span className="text-[#27E0B3]"> Packed Foods</span>
            <br />
            For Your Daily Life
          </h1>

          <p className="text-zinc-400 text-lg w-4/5 max-sm:w-full max-sm:text-sm">
            Discover our premium selection of carefully packed, nutritious foods
            that make healthy eating convenient and delicious. From wholesome
            snacks to complete meals.
          </p>
          <div className="max-sm:w-full max-sm:flex max-sm:justify-center">
            <Btn href="/products" text="Explore" />
          </div>
        </div>

        <div className="w-1/2 relative max-sm:hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#27E0B3] rounded-full opacity-20 blur-3xl"></div>

          <div className="absolute top-20 left-0 bg-zinc-800 p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <i className="ri-heart-fill text-red-500 text-2xl"></i>
              <div>
                <p className="text-zinc-100 font-bold">Healthy Choice</p>
                <p className="text-zinc-400 text-sm">100% Natural</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 right-20 bg-zinc-800 p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <i className="ri-shield-check-fill text-[#27E0B3] text-2xl"></i>
              <div>
                <p className="text-zinc-100 font-bold">Quality Assured</p>
                <p className="text-zinc-400 text-sm">Premium Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
