"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    router.push("/auth/login");
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-zinc-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-zinc-100 mb-6 text-center">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            autoComplete="on"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            placeholder="Phone Number"
            autoComplete="on"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#27E0B3] text-zinc-900 py-2 rounded font-bold hover:bg-[#1fa88a] transition-colors"
          >
            Register
          </button>
        </form>

        <p className="text-zinc-400 text-center mt-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#27E0B3] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
