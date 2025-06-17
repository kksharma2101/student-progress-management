"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Student Progress
        </Link>

        <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

        <div
          className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <Link href="/students" className="block mt-2 md:mt-0 hover:underline">
            All Students
          </Link>
          <Link
            href="/students/new"
            className="block mt-2 md:mt-0 hover:underline"
          >
            Add Student
          </Link>
        </div>
      </div>
    </nav>
  );
}
