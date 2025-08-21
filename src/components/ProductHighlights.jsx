import Image from "next/image";

const highlightProducts = [
  {
    id: 1,
    name: "Smartphone X",
    description: "Latest model with powerful features.",
    price: 699,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Noise cancelling with crystal sound.",
    price: 199,
    image: "https://images.unsplash.com/photo-1585386959984-a415522fae1f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    description: "Track health & fitness all day.",
    price: 299,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Gaming Laptop",
    description: "High performance for gaming & work.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1587202372775-23eab6f0b4fa?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable with deep bass sound.",
    price: 149,
    image: "https://images.unsplash.com/photo-1606813902538-8577db5c1cd3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "4K TV",
    description: "Ultra HD smart television.",
    price: 899,
    image: "https://images.unsplash.com/photo-1617196037995-3dbd0b6a1d86?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "DSLR Camera",
    description: "Capture your moments in HD.",
    price: 599,
    image: "https://images.unsplash.com/photo-1519183071298-a2962cc16ef4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Home Coffee Maker",
    description: "Brew fresh coffee anytime.",
    price: 129,
    image: "https://images.unsplash.com/photo-1571792868931-6d59a77930b1?auto=format&fit=crop&w=400&q=80",
  },
];


export default function ProductHighlights() {
  return (
    <section className="max-w-[1536px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlightProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-purple-600">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="font-bold mt-2">${product.price}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
