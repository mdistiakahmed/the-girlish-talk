import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} The Girlish Talk. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
