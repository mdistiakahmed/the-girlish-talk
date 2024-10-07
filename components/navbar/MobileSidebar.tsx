"use client";
import { category } from "@/utils/constants";
import Link from "next/link";
import React, { useState } from "react";

const MobileSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-pink-500 w-64 h-full shadow-lg p-6 absolute top-0 left-0">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none text-white hover:text-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {category.map((c: any, index: any) => (
                <Link
                  href={`/${c.toLowerCase()}`}
                  className="hover:text-pink-500"
                  key={index}
                >
                  {c}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSidebar;
