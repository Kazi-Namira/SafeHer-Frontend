import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SafeHer Bangladesh</h3>
            <p className="text-gray-400">
              Women's Safety & Economic Empowerment Ecosystem
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#safety"
                  className="hover:text-white transition-colors"
                >
                  Safety Features
                </a>
              </li>
              <li>
                <a
                  href="#marketplace"
                  className="hover:text-white transition-colors"
                >
                  Job Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#learning"
                  className="hover:text-white transition-colors"
                >
                  Learning Hub
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Emergency</h4>
            <ul className="space-y-2 text-gray-400">
              <li>National Emergency: 999</li>
              <li>Women & Children: 109</li>
              <li>Police: 100</li>
              <li>Ambulance: 199</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: help@safeher.org</li>
              <li>Phone: +880 XXXX-XXXXXX</li>
              <li>Address: Chittagong, Bangladesh</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SafeHer Bangladesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
