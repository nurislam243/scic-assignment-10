"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-purple-700 dark:text-cyan-400">
          MyShop
        </Link>

        {/* Links */}
        <div className="flex space-x-6 font-medium">
          <Link href="/" className="hover:text-purple-600 dark:hover:text-cyan-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-purple-600 dark:hover:text-cyan-300">
            Products
          </Link>
          <Link href="/login" className="hover:text-purple-600 dark:hover:text-cyan-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
