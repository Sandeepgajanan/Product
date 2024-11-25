"use client";
import { testimonials } from "@/app/constants";
import Sideheading from "@/app/components/user/Sideheading";
import { useState } from "react";

export default function FeedbackPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTestimonials = testimonials.filter(testimonial => 
    testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-zinc-800 ml-64 max-sm:ml-0 w-[calc(100%-16rem)] max-sm:w-full min-h-screen p-8 max-sm:p-4">
      <div className="max-w-6xl mx-auto">
        <Sideheading title="Customer" highlight="Feedback" />

        <div className="mb-4">
          <input
            type="text"
            name="search"
            placeholder="Search by customer name or feedback..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 max-sm:py-1.5 max-sm:text-sm focus:outline-none"
          />
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-700 max-sm:overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-800 border-b border-zinc-700">
              <tr>
                {["Customer", "Rating", "Feedback"].map((header) => (
                  <th key={header} className="px-6 max-sm:px-3 py-4 max-sm:py-2 text-[#27E0B3] font-medium text-left max-sm:text-sm whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-700">
              {filteredTestimonials.map((testimonial) => (
                <tr 
                  key={testimonial.id}
                  className="hover:bg-zinc-800/50 transition-all duration-200"
                >
                  <td className="px-6 max-sm:px-3 py-4 max-sm:py-2">
                    <span className="text-zinc-100 font-medium max-sm:text-sm">{testimonial.name}</span>
                  </td>
                  <td className="px-6 max-sm:px-3 py-4 max-sm:py-2">
                    <div className="flex items-center gap-1">
                      <span className="text-zinc-100 font-medium max-sm:text-sm">{testimonial.rating}</span>
                      <span className="text-zinc-400 max-sm:text-sm">/5</span>
                    </div>
                  </td>
                  <td className="px-6 max-sm:px-3 py-4 max-sm:py-2">
                    <p className="text-zinc-100 max-sm:text-sm">{testimonial.message}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}