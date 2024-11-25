"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sideheading from "../user/Sideheading";
import { products as initialProducts } from "@/app/constants";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ViewProduct() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (productId: number) => {
    setProducts(products.filter((product: Product) => product.id !== productId));
  };

  const handleEdit = (productId: number) => {
    router.push(`/admin/editproduct?id=${productId}`);
  };

  return (
    <div className="bg-zinc-800 ml-64 max-sm:ml-0 w-[calc(100%-16rem)] max-sm:w-full min-h-screen p-8 max-sm:p-4">
      <div className="max-w-6xl mx-auto">
        <Sideheading title="Manage" highlight="Products" />

        <div className="mb-6">
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-700 rounded-lg border border-zinc-600 text-zinc-100 focus:outline-none max-sm:text-sm"
          />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-8 max-sm:p-4 text-center">
            <i className="ri-shopping-bag-line text-5xl max-sm:text-4xl text-[#27E0B3] mb-4"></i>
            <h3 className="text-zinc-100 text-xl max-sm:text-lg font-bold mb-2">No Products Found</h3>
            <p className="text-zinc-400 max-sm:text-sm">Start adding products to manage them here.</p>
          </div>
        ) : (
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800 border-b border-zinc-700">
                <tr>
                  {["Image", "Product Name", "Price", "Description", "Actions"].map((header) => (
                    <th key={header} className="px-6 max-sm:px-3 py-4 text-[#27E0B3] font-medium text-left max-sm:text-sm">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                {filteredProducts.map((product: Product) => (
                  <tr 
                    key={product.id}
                    className="hover:bg-zinc-800/50 transition-all duration-200"
                  >
                    <td className="px-6 max-sm:px-3 py-4">
                      <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-lg overflow-hidden bg-zinc-800">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 max-sm:px-3 py-4">
                      <span className="text-zinc-100 font-medium max-sm:text-sm">{product.name}</span>
                    </td>
                    <td className="px-6 max-sm:px-3 py-4">
                      <span className="text-[#27E0B3] font-bold max-sm:text-sm">₹{product.price}</span>
                    </td>
                    <td className="px-6 max-sm:px-3 py-4">
                      <p className="text-zinc-400 max-sm:text-sm max-sm:line-clamp-2">{product.description}</p>
                    </td>
                    <td className="px-6 max-sm:px-3 py-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEdit(product.id)}
                          className="p-2 max-sm:p-1.5 rounded-lg bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 transition-colors"
                          title="Edit Product"
                        >
                          <i className="ri-edit-line max-sm:text-sm"></i>
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 max-sm:p-1.5 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors"
                          title="Delete Product"
                        >
                          <i className="ri-delete-bin-line max-sm:text-sm"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
