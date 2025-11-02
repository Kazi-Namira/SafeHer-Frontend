import React from "react";

const HeroSection = ({ onSOSClick }) => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        SafeHer <span className="text-purple-600">Bangladesh</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Women's Safety & Economic Empowerment Ecosystem - Because safety without
        opportunity is survival, not thriving.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button
          onClick={onSOSClick}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors animate-pulse"
        >
          🚨 Emergency SOS
        </button>
        <button
          onClick={() =>
            document
              .getElementById("safety")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Explore Safety Features
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-red-600">70%</div>
          <div className="text-gray-600 text-sm mt-1">Women Faced Violence</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-orange-600">84%</div>
          <div className="text-gray-600 text-sm mt-1">Workplace Harassment</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-blue-600">5.9%</div>
          <div className="text-gray-600 text-sm mt-1">Female Unemployment</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-green-600">22.3%</div>
          <div className="text-gray-600 text-sm mt-1">
            Women with Bank Accounts
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
