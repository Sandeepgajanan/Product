"use client";
import Sideheading from "./Sideheading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/app/constants";

const Testimonial = () => {
  return (
    <div className="w-full bg-zinc-900 py-20 max-sm:py-10">
      <div className="max-w-screen-xl mx-auto px-8">
        <Sideheading title="Words From" highlight="Our Customers" />
        <div className="text-zinc-400 text-sm text-center mb-4 animate-pulse  max-sm:hidden">
          <i className="ri-arrow-left-line"></i> Use arrow keys to navigate{" "}
          <i className="ri-arrow-right-line"></i>
        </div>
        <div className="text-zinc-400 text-sm text-center mb-4 animate-pulse  md:hidden">
          <i className="ri-arrow-left-line"></i>Swipe left to see more
          <i className="ri-arrow-right-line"></i>
        </div>
        <div className="overflow-x-auto" id="testimonial-container">
          <div className="flex gap-8 flex-nowrap p-4 ">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
