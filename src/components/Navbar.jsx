"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/product", label: "Mahsulotlar" },
    { href: "/", label: "Foydalanuvchilar" },
  ];

  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800 shadow-2xl py-4 px-4 sm:px-8 md:px-16 mb-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wider hover:opacity-90 transition"
        >
          Brand<span className="text-indigo-500">.</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg lg:text-xl font-semibold text-white hover:bg-indigo-500 px-5 lg:px-6 py-2.5 lg:py-3 rounded-2xl shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition"
          aria-label="Menyuni ochish/yopish"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out max-w-7xl mx-auto ${
          isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-3 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-white hover:bg-indigo-500 px-6 py-3 rounded-2xl shadow-lg shadow-indigo-500/30 transition-all duration-200 text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
