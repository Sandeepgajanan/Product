import { useState, FormEvent } from "react";
import Sideheading from "@/app/components/user/Sideheading";
import { useRouter } from "next/navigation";

export default function ProductForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: null as File | null,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({
      name: "",
      price: "",
      description: "",
      image: null,
    });
    router.push("/admin/viewproduct");
  };

  return (
    <div className="bg-zinc-800 ml-64 max-sm:ml-0 w-[calc(100%-16rem)] max-sm:w-full min-h-screen p-5">
      <Sideheading title="Add" highlight="Products" />
      
      <form onSubmit={handleSubmit} className="w-full max-w-6xl mx-auto flex flex-col gap-4 max-sm:p-4">
      
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none max-sm:text-sm"
              required
            />

         
            <input
              type="number"
              min={0}
              placeholder="Enter Price"
              name="price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none max-sm:text-sm"
              required
            />
      

    
            <textarea
              placeholder="Enter product description"
              name="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none h-32 resize-none max-sm:text-sm max-sm:h-24"
              required
            />
        


            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
              className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#27E0B3] file:text-zinc-900 file:font-medium hover:file:bg-[#1fa88a] max-sm:text-sm"
              required
            />
       
          <div className="flex justify-center gap-4 max-sm:flex-col">
            <button
              type="submit"
              className="bg-[#27E0B3] text-zinc-900 px-8 py-3 rounded-lg font-bold hover:bg-[#1fa88a] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#27E0B3] shadow-lg max-sm:text-sm max-sm:py-2.5"
            >
              Add Product
            </button>
            <button
              type="reset"
              className="bg-zinc-700 text-zinc-100 px-8 py-3 rounded-lg font-bold hover:bg-zinc-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-zinc-700 shadow-lg max-sm:text-sm max-sm:py-2.5"
            >
              Reset
            </button>
          </div>
      </form>
    </div>
  );
}