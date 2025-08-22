"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products"); // API route থেকে ডেটা আনবে
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 mt-2">
                  {product.description.slice(0, 100)}...
                </p>
                <p className="mt-3 font-bold text-lg">${product.price}</p>
                <Link
                  href={`/products/${product._id}`}
                  className="btn btn-primary mt-4 w-full inline-block text-center"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
