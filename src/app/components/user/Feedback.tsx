"use client";

import { useState, FormEvent } from "react";
import Sideheading from "./Sideheading";

const Feedback = () => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setRating(0);
    setFeedback("");
    setName("");
  };

  return (
    <div className="w-full bg-zinc-900 min-h-screen py-20 max-sm:py-10">
      <div className="max-w-screen-xl mx-auto px-8">
        <Sideheading title="Share" highlight="Your Experience" />

        <div className="bg-zinc-800 rounded-xl p-8 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-700 rounded-lg p-3 text-zinc-100 focus:outline-none placeholder:text-zinc-400 max-sm:text-sm"
                required
                placeholder="Enter Your Name..."
                autoComplete="off"
              />
            </div>

            <div className="w-full bg-zinc-700 rounded-lg p-3 flex items-center gap-4 max-sm:flex-col">
              <span className="text-zinc-400 max-sm:text-sm">
                Rate Your Experience:
              </span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-3xl focus:outline-none max-sm:text-sm"
                  >
                    <i
                      className={`ri-star-fill ${
                        rating >= star ? "text-yellow-400" : "text-zinc-400"
                      }`}
                    ></i>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <textarea
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full bg-zinc-700 rounded-lg p-3 text-zinc-100 h-32 resize-none focus:outline-none placeholder:text-zinc-400 max-sm:text-sm"
                required
                placeholder="Enter Your Feedback..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#27E0B3] text-zinc-900 py-3 rounded-lg font-bold hover:bg-[#1fa88a] transition-colors duration-300 max-sm:text-sm max-sm:py-2"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
