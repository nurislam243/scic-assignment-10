// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 px-3 @min-[370px]:px-4 @min-[600px]:px-7 @min-[px-9]: @min-[1200px]:px-10 @min-[1580px]:px-0">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">ShopNex</h3>
          <p className="text-gray-200">
            ShopNex is your one-stop online store for tech gadgets, electronics, and accessories. Discover top products at amazing prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: support@shopnex.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Tech Street, Silicon Valley</p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-gray-300">
              Facebook
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Twitter
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-purple-500 pt-4 text-center text-gray-300">
        &copy; {new Date().getFullYear()} ShopNex. All rights reserved.
      </div>
    </footer>
  );
}
