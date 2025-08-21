"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = productsData.find((p) => p.id === parseInt(id));
  const router = useRouter();

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <button onClick={() => router.push("/products")} className="btn btn-primary mt-4">
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
