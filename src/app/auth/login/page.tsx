"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = { email, password };
    if (formData.email === "admin@example.com" && formData.password === "3") {
      router.push("/admin/dashboard");
    } else {
      router.push("/user");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-zinc-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-zinc-100 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            autoComplete="on"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-700 text-zinc-100 rounded px-4 py-2 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#27E0B3] text-zinc-900 py-2 rounded font-bold hover:bg-[#1fa88a] transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-zinc-400 text-center mt-4">
          Don't have an account?{" "}
          <Link
            href="/auth/register"
            className="text-[#27E0B3] hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
