import Btn from "./Btn";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}
const Product = ({ product }: { product: ProductProps }) => {
  return (
    <div className="bg-zinc-800 flex flex-col items-start justify-between rounded-xl p-6 group max-sm:p-4">
      <div className="relative w-full h-48 bg-zinc-700 rounded-lg overflow-hidden mb-4 max-sm:h-32">
        <img src={product.image} alt={product.name} className="object-cover" />
      </div>

      <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-[#27E0B3] transition-colors max-sm:text-base">
        {product.name}
      </h3>
      <p className="text-zinc-400 text-sm mb-4  max-sm:text-xs">
        {product.description}
      </p>

      <div className="flex items-center justify-between  w-full">
        <span className="text-[#27E0B3] font-bold text-xl max-sm:text-base font-['Nunito']">
          ₹{product.price}
        </span>
        <Btn href={`/placeorder?id=${product.id}`} text="Order Now" />
      </div>
    </div>
  );
};

export default Product;
