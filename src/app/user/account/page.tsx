"use client";

import Navbar from "@/app/components/user/Navbar";
import Footer from "@/app/components/user/Footer";
import Account from "@/app/components/user/Account";
export default function AccountPage() {
  return (
    <main className="min-h-screen w-full bg-zinc-900">
      <Navbar />
      <Account />
      <Footer />
    </main>
  );
}
