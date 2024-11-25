"use client";
import Sideheading from "./Sideheading";
import Product from "./Product";
import { products } from "@/app/constants";

const Products = () => {
  return (
    <div className="w-full bg-zinc-900 min-h-screen py-20 max-sm:py-10 max-sm:h-fit">
      <div className="max-w-screen-xl mx-auto px-8">
        <Sideheading title="Featured" highlight="Products" />

        <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
