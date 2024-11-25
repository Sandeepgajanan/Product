"use client";

import Navbar from "@/app/components/user/Navbar";
import Footer from "@/app/components/user/Footer";
import Products from "@/app/components/user/Products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen w-full bg-zinc-900">
      <Navbar />
      <Products />
      <Footer />
    </main>
  );
}
