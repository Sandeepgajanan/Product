"use client";

import { useState, FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "@/app/constants";
import Link from "next/link";

interface OrderFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  quantity: number;
}

const OrderForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const product = products.find((p) => p.id === Number(productId));

  const [formData, setFormData] = useState<OrderFormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
  });

  const totalAmount = (product?.price || 0) * formData.quantity;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      quantity: 1,
    });
    router.push("/account");
  };

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center text-zinc-100">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link
            href="/user/products"
            className="bg-[#27E0B3] text-zinc-900 px-6 py-2 rounded-lg font-bold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-8 max-sm:py-12 max-sm:px-4">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8">
        <div className="bg-zinc-800 p-6 rounded-lg space-y-4">
          <div className="relative w-full h-80 bg-zinc-700 rounded-lg overflow-hidden mb-4 max-sm:h-40">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-zinc-100 mb-2">
            {product.name}
          </h2>
          <p className="text-zinc-400 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-[#27E0B3]">
              ₹{product.price} x {formData.quantity} = ₹
              {product.price * formData.quantity}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800 p-6 rounded-lg space-y-4"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            autoComplete="on"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            autoComplete="on"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            autoComplete="on"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
            required
            pattern="[0-9]*"
            maxLength={10}
            minLength={10}
          />
          <textarea
            placeholder="Delivery Address"
            name="address"
            autoComplete="on"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none h-24 resize-none"
            required
          />
          <div className="flex items-center gap-4">
           
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: Number(e.target.value) })
              }
              className="w-20 bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
              min="1"
              required
            />
          </div>

          <div className="border-t border-zinc-700 pt-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-100">Total Amount:</span>
              <span className="text-2xl font-bold text-[#27E0B3]">
                ₹{totalAmount.toFixed(2)}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#27E0B3] text-zinc-900 py-3 rounded font-bold hover:bg-[#1fa88a] transition-colors"
            >
              Place Order (Cash on Delivery)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
