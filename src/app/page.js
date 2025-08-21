import ProductHighlights from "@/components/ProductHighlights";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="h-[70vh] flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-20 text-center">
       <div className="">
          <h1 className="text-5xl font-bold mb-4">Welcome to Shopnex</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Your one-stop platform for all your shopping needs. 
            Discover products, compare prices, and shop smarter with Shopnex.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary btn-lg">
              Explore Products
            </button>
            <button className="btn btn-outline btn-lg">
              Learn More
            </button>
          </div>
       </div>
      </section>


      {/* Product Highlights Section */}
      <ProductHighlights></ProductHighlights>
    </div>
  );
}
