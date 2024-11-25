"use client";

import Navbar from "@/app/components/user/Navbar";
import Footer from "@/app/components/user/Footer";
import Orders from "@/app/components/user/Orders";

export default function MyOrdersPage() {
  return (
    <main className="min-h-screen w-full bg-zinc-900">
      <Navbar />
      <Orders />
      <Footer />
    </main>
  );
}
