"use client";
import Dashboard from "../components/admin/Dashboard";
import SeeOrders from "../components/admin/SeeOrders";
import Users from "../components/admin/Users";
import Feedback from "../components/admin/Feedback";
import Sidebar from "../components/admin/Sidebar";

export default function AdminPage() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
      <SeeOrders />
      <Users />
      <Feedback />
    </div>
  );
}
