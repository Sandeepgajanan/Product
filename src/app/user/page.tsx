'use client'
import Navbar from "@/app/components/user/Navbar";
import Hero from "@/app/components/user/Hero";
import Category from "@/app/components/user/Category";
import Products from "@/app/components/user/Products";
import Testimonial from "@/app/components/user/Testimonial";
import Footer from "@/app/components/user/Footer";
import Feedback from "@/app/components/user/Feedback";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-zinc-900">
      <Navbar />
      <Hero />
      <Category />
      <Products />
      <Testimonial />
      <Feedback />
      <Footer />
    </main>
  );
}
