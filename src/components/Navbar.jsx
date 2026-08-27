import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800 shadow-2xl py-6 px-8 md:px-16 mb-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl md:text-4xl font-extrabold text-white tracking-wider hover:opacity-90 transition"
        >
          Brand<span className="text-indigo-500">.</span>
        </Link>

        <div className="flex items-center space-x-8 md:space-x-12">
          <Link
            href="/product"
            className="text-lg md:text-xl font-semibold text-white  hover:bg-indigo-500 px-6 py-3 rounded-2xl shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all duration-200"
          >
            Mahsulotlar
          </Link>
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-white  hover:bg-indigo-500 px-6 py-3 rounded-2xl shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all duration-200"
          >
            foydalanuvchilar
          </Link>
        </div>
      </div>
    </nav>
  );
}
