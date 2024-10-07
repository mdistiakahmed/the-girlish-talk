import Link from "next/link";
import React from "react";
import MobileSidebar from "./MobileSidebar";
import { category } from "@/utils/constants";

const Header = () => {
  return (
    <header className="bg-pink-500 text-white shadow-md py-4 sticky top-0 z-50 md:px-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href={`/`} className="text-2xl font-bold text-white">
          The Girlish Talk
        </Link>

        <nav className="hidden md:flex space-x-6">
          {category.map((c: any, index: any) => (
            <Link
              href={`/category/women-fashion`}
              className="hover:text-pink-200"
              key={index}
            >
              {c}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <MobileSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
