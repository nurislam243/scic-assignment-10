"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductHighlights() {
  const [highlightProducts, setHighlightProducts] = useState([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const res = await fetch("/api/products/highlights");
        const data = await res.json();
        setHighlightProducts(data);
      } catch (error) {
        console.error("Failed to fetch highlights:", error);
      }
    };
    fetchHighlights();
  }, []);

  return (
    <section className="max-w-[1536px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlightProducts.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-md rounded-xl overflow-hidden"
          >
            <figure>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-start"> {/* Left align here */}
              <h3 className="card-title text-primary">{product.name}</h3>
              <p className="text-gray-600 line-clamp-2">{product.description}</p>
              <p className="font-bold mt-2">${product.price}</p>
              <div className="card-actions mt-4">
                <Link href={`/products/${product._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}
