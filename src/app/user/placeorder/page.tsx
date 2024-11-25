'use client';

import Navbar from '@/app/components/user/Navbar';
import Footer from '@/app/components/user/Footer';
import OrderForm from '@/app/components/user/OrderForm';

export default function PlaceOrderPage() {
  return (
    <main className="min-h-screen w-full bg-zinc-900">
      <Navbar />
      <OrderForm />
      <Footer />
    </main>
  );
}