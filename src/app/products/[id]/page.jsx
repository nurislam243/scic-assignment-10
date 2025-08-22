"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          setProduct(null);
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <button
          onClick={() => router.push("/products")}
          className="btn btn-primary mt-4"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <button onClick={() => router.back()} className="btn btn-secondary mb-6">
        ← Back
      </button>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden lg:flex lg:gap-6 p-6">
        <div className="lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-3xl font-semibold mb-6">${product.price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
