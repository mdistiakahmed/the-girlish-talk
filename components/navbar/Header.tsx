import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-pink-500 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <Link href={`/`} className="text-3xl font-bold">
          The Girlish Talk
        </Link>
      </div>
    </header>
  );
};

export default Header;
