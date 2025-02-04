"use client";
const Footer = () => {
    return (
    <footer className="bg-gray-300 text-black text-center p-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;