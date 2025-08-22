"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Adding Product...",
      didOpen: () => Swal.showLoading(),
      allowOutsideClick: false,
    });

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });


      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Product added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        setForm({ name: "", description: "", price: "", image: "" });
        setTimeout(() => router.push("/products"), 1500);
      } else {
        const data = await res.text();
        Swal.fire({ icon: "error", title: "Error", text: data });
      }
    } catch (err) {
      Swal.fire({ icon: "error", title: "Error", text: err.message });
    }
  };

  if (status === "loading") return <p className="text-center mt-10">Checking authentication...</p>;
  if (status === "unauthenticated") return null;

  return (
    <div className="px-3 @min-[370px]:px-4 @min-[600px]:px-7 @min-[800px]:px-9 @min-[1200px]:px-10 @min-[1580px]:px-0">
      <div className="max-w-lg mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
