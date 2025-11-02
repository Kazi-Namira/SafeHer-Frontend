import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              SafeHer <span className="text-purple-600">Bangladesh</span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("safety")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Safety
            </button>
            <button
              onClick={() => scrollToSection("marketplace")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Jobs
            </button>
            <button
              onClick={() => scrollToSection("learning")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Learning
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Community
            </button>
          </nav>

          <button className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Get Started
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeIn">
            <button
              onClick={() => scrollToSection("safety")}
              className="block w-full text-left py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            >
              Safety
            </button>
            <button
              onClick={() => scrollToSection("marketplace")}
              className="block w-full text-left py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            >
              Jobs
            </button>
            <button
              onClick={() => scrollToSection("learning")}
              className="block w-full text-left py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            >
              Learning
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="block w-full text-left py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            >
              Community
            </button>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors mt-4">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
