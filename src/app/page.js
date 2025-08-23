import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <Hero></Hero>

      {/* Product Highlights Section */}
      <ProductHighlights></ProductHighlights>
    </div>
  );
}
