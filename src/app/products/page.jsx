"use client";
import Image from "next/image";
import { useState } from "react";

const productsData = [
  { id: 1, name: "Smartphone X", description: "A high-end smartphone with stunning display and fast performance.", price: 899, image: "https://picsum.photos/id/1011/400/250" },
  { id: 2, name: "Laptop Pro", description: "Lightweight laptop with powerful processor for professionals.", price: 1299, image: "https://picsum.photos/id/1012/400/250" },
  { id: 3, name: "Wireless Headphones", description: "Noise-cancelling headphones with long battery life.", price: 199, image: "https://picsum.photos/id/1013/400/250" },
  { id: 4, name: "Smartwatch 5", description: "Stay connected and track your health with this modern smartwatch.", price: 299, image: "https://picsum.photos/id/1015/400/250" },
  { id: 5, name: "4K TV", description: "Crystal-clear 4K resolution with vibrant colors and HDR support.", price: 599, image: "https://picsum.photos/id/1016/400/250" },
  { id: 6, name: "Bluetooth Speaker", description: "Portable speaker with deep bass and waterproof design.", price: 99, image: "https://picsum.photos/id/1018/400/250" },
  {
    id: 7,
    name: "Wireless Bluetooth Headphones",
    description: "High fidelity sound with active noise cancellation and 30-hour battery life.",
    price: 149,
    image: "https://picsum.photos/id/100/400/250"
  },
  {
    id: 8,
    name: "4K Ultra HD Smart TV",
    description: "55-inch LED display with HDR10+ and integrated streaming apps.",
    price: 799,
    image: "https://picsum.photos/id/101/400/250"
  },
  {
    id: 9,
    name: "Ergonomic Office Chair",
    description: "Adjustable lumbar support with breathable mesh and swivel base.",
    price: 199,
    image: "https://picsum.photos/id/102/400/250"
  },
  {
    id: 10,
    name: "Modern Table Lamp",
    description: "Stylish brass base with dimmable LED and touch-control.",
    price: 59,
    image: "https://picsum.photos/id/103/400/250"
  },
  {
    id: 11,
    name: "Action Camera 4K",
    description: "Waterproof adventure camera with 4K recording and Wi-Fi selfie remote.",
    price: 249,
    image: "https://picsum.photos/id/104/400/250"
  },
  {
    id: 12,
    name: "Smart Fitness Watch",
    description: "Heart rate monitor, sleep tracking, GPS, and 7-day battery life.",
    price: 179,
    image: "https://picsum.photos/id/105/400/250"
  },
  {
    id: 13,
    name: "Portable Espresso Machine",
    description: "Compact hand-held machine for coffee on the go—no electricity needed.",
    price: 129,
    image: "https://picsum.photos/id/106/400/250"
  },
  {
    id: 14,
    name: "Noise-Cancelling Earbuds",
    description: "True wireless earbuds with premium sound and fast charging case.",
    price: 99,
    image: "https://picsum.photos/id/107/400/250"
  },
];


export default function ProductsPage() {
  const [products] = useState(productsData);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="mt-3 font-bold text-lg">${product.price}</p>
              <button className="btn btn-primary mt-4 w-full">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
