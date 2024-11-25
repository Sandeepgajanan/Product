"use client";
import { useState, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Sideheading from "@/app/components/user/Sideheading";
import { products } from "@/app/constants";

function EditProductForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("id");
  const product = products.find((p) => p.id === Number(productId));

  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [description, setDescription] = useState(product?.description || "");
  const [image, setImage] = useState(product?.image || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push('/admin/products');
  };

  if (!product) return <div className="ml-64 max-sm:ml-0 p-8 max-sm:p-4">Product not found</div>;

  return (
    <div className="bg-zinc-800 ml-64 max-sm:ml-0 w-[calc(100%-16rem)] max-sm:w-full min-h-screen p-8 max-sm:p-4">
      <div className="max-w-3xl mx-auto">
        <Sideheading title="Edit" highlight="Product" />

        <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-lg border border-zinc-700 p-6 max-sm:p-4 mt-6 space-y-6 max-sm:space-y-4">
          <div>
            <label className="block text-zinc-400 mb-2 max-sm:text-sm">Product Name</label>
            <input
              type="text"
              name="name"
              autoComplete="on"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 text-zinc-100 max-sm:text-sm max-sm:py-2"
              required
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-2 max-sm:text-sm">Price (₹)</label>
            <input
              type="number"
              name="price"
              autoComplete="on"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 text-zinc-100 max-sm:text-sm max-sm:py-2"
              required
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-2 max-sm:text-sm">Description</label>
            <textarea
              value={description}
              name="description"
              autoComplete="on"
              onChange={e => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 text-zinc-100 max-sm:text-sm max-sm:py-2"
              required
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-2 max-sm:text-sm">Image URL</label>
            <input
              type="url"
              name="image"
              value={image}
              onChange={e => setImage(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 text-zinc-100 max-sm:text-sm max-sm:py-2"
              required
            />
          </div>

          <div className="flex justify-end gap-4 max-sm:flex-col">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 rounded-lg bg-zinc-700 text-zinc-100 hover:bg-zinc-600 max-sm:text-sm max-sm:order-2"
            >
              Go back
            </button>
            <button
              type="submit" 
              className="px-6 py-2 rounded-lg bg-[#27E0B3] text-zinc-900 font-medium hover:bg-[#20c49d] max-sm:text-sm max-sm:order-1"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function EditProduct() {
  return (
    <Suspense fallback={<div className="ml-64 max-sm:ml-0 p-8 max-sm:p-4">Loading...</div>}>
      <EditProductForm />
    </Suspense>
  );
}