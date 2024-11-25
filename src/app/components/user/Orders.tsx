import { orders } from "@/app/constants";
import Btn from "./Btn";

const Orders = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 max-sm:py-12 max-sm:px-4">
      {!orders.length && (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <i className="ri-shopping-bag-line text-6xl text-zinc-700"></i>
          <h3 className="text-2xl font-bold text-zinc-100">No Orders Found</h3>
          <p className="text-zinc-400 text-center max-w-md">
            Looks like you haven't placed any orders yet. Start shopping to see
            your orders here!
          </p>
          <Btn href="/products" text="Explore" />
        </div>
      )}

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-zinc-800 rounded-lg p-6 max-sm:p-4">
            <div className="flex justify-between items-center border-b border-zinc-700 pb-4 mb-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div>
                <p className="text-zinc-100 font-semibold">Order #{order.id}</p>
                <p className="text-zinc-400 text-sm">{order.date}</p>
              </div>
              <div className="flex items-center gap-4 max-sm:w-full max-sm:justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-500/20 text-green-500"
                      : "bg-yellow-500/20 text-yellow-500"
                  }`}
                >
                  {order.status}
                </span>
                <p className="text-zinc-100 font-semibold">₹{order.total}</p>
              </div>
            </div>

            <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-lg">
                  {order.item.quantity}x
                </span>
                <div>
                  <p className="text-zinc-100 text-lg">{order.item.name}</p>
                  <p className="text-zinc-400">₹{order.item.price} each</p>
                </div>
              </div>
              <div className="text-right max-sm:w-full">
                <p className="text-zinc-100 font-semibold">Total</p>
                <p className="text-purple-500">₹{order.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
