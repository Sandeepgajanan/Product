"use client";
import { useState } from "react";
import Sideheading from "../user/Sideheading";

export default function SeeOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "Rahul Kumar", 
      orderDate: "2024-01-15",
      status: "Pending",
      total: 450,
      items: [
        {
          name: "Masala Chips",
          quantity: 3,
          price: 150
        }
      ]
    },
    {
      id: 2,
      customerName: "Priya Singh",
      orderDate: "2024-01-16", 
      status: "Delivered",
      total: 600,
      items: [
        {
          name: "Mixed Namkeen",
          quantity: 4,
          price: 150
        }
      ]
    },
    {
      id: 3,
      customerName: "Amit Patel",
      orderDate: "2024-01-16",
      status: "Pending", 
      total: 500,
      items: [
        {
          name: "Chocolate Cookies",
          quantity: 5,
          price: 100
        }
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const toggleOrderStatus = (orderId: number) => {
    setOrders(orders.map(order => {
      if (order.id === orderId) {
        const newStatus = order.status === "Pending" ? "Delivered" : "Pending";
        return {...order, status: newStatus};
      }
      return order;
    }));
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-zinc-800 ml-64 max-sm:ml-0 w-[calc(100%-16rem)] max-sm:w-full min-h-screen p-8 max-sm:p-4">
      <div className="max-w-6xl mx-auto">
        
          <Sideheading title="All" highlight="Orders" />
          
          <div className="flex gap-4 items-center mb-4 max-sm:flex-col">
    
              <input
                type="text"
                placeholder="Search by customer or product..."
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 max-sm:py-2 bg-zinc-700 rounded-lg border border-zinc-600 text-zinc-100 focus:outline-none max-sm:text-sm"
              />
         
            <select 
              value={statusFilter}
              name="filter"
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-2 bg-zinc-700 text-zinc-100 text-sm rounded-lg border border-zinc-600 focus:outline-none max-sm:w-full"
            >
              <option value="all">Default</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded max-sm:overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800 border-b border-zinc-700">
                <tr>
                  {["Order ID", "Customer", "Date", "Status", "Total", "Items", "Actions"].map((header) => (
                    <th key={header} className="px-6 max-sm:px-3 py-4 max-sm:py-2 text-[#27E0B3] font-medium text-left max-sm:text-sm whitespace-nowrap">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-zinc-700 hover:bg-zinc-800/50 transition-all duration-200">
                    <td className="px-6 max-sm:px-3 py-4 max-sm:py-2 text-zinc-100 max-sm:text-sm">#{order.id}</td>
                    <td className="px-6 max-sm:px-3 py-4 max-sm:py-2 text-zinc-100 font-medium max-sm:text-sm whitespace-nowrap">{order.customerName}</td>
                    <td className="px-6 max-sm:px-3 py-4 max-sm:py-2 text-zinc-100 max-sm:text-sm whitespace-nowrap">{order.orderDate}</td>
                    <td className="px-6 max-sm:px-3 py-4 max-sm:py-2">
                      <span className={`px-3 py-1.5 rounded-full text-sm max-sm:text-xs font-medium ${
                        order.status === "Delivered" 
                          ? "bg-green-500/20 text-green-500"
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 max-sm:px-3 py-4 max-sm:py-2 text-zinc-100 font-medium max-sm:text-sm">₹{order.total}</td>
                    <td className="px-6 max-sm:px-3 py-4 max-sm:py-2">
                      {order.items.map((item, i) => (
                        <div key={i} className="text-zinc-100 font-medium max-sm:text-sm whitespace-nowrap">
                          {item.quantity}x {item.name}
                        </div>
                      ))}
                    </td>
                    <td className="px-6 max-sm:px-3 py-4 max-sm:py-2">
                      <button 
                        onClick={() => toggleOrderStatus(order.id)}
                        className="p-2.5 max-sm:p-2 rounded-full transition-all duration-200 text-lg max-sm:text-base text-zinc-100"
                        title={order.status === "Delivered" ? "Mark as Pending" : "Mark as Delivered"}
                      >
                        <i className={`text-lg max-sm:text-base ${
                          order.status === "Delivered" 
                            ? "ri-refresh-line"
                            : "ri-check-line"
                        }`}></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        
      </div>
    </div>
  );
}
