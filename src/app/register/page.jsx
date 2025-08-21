"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      alert("User registered successfully!");
      router.push("/login"); // redirect to login page
    } else {
      const data = await res.text();
      alert("Registration failed: " + data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Register for <span className="text-primary">ShopNex</span>
          </h1>

          <form onSubmit={handleRegister} className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-primary btn-block mt-2">
              Register
            </button>
          </form>

          <p className="mt-6 text-gray-500 text-sm">
            Already have an account? <a href="/login" className="text-primary">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
