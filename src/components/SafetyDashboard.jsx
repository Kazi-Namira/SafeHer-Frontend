import React from "react";
import { MapPin, Shield, AlertCircle } from "lucide-react";
import SafetyMap from "./SafetyMap";

const SafetyDashboard = () => {
  return (
    <section id="safety" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Real-Time Safety Protection
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Safety Map */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-4">Live Safety Heatmap</h3>
          <SafetyMap />
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Safe</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm">Caution</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm">High Risk</span>
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h4 className="text-xl font-bold mb-4">Safety Tools</h4>
            <div className="space-y-4">
              <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 p-4 rounded-lg text-left flex items-center transition-colors">
                <span className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5" />
                </span>
                Safe Route Navigator
              </button>
              <button className="w-full bg-green-100 hover:bg-green-200 text-green-700 p-4 rounded-lg text-left flex items-center transition-colors">
                <span className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5" />
                </span>
                Safe Zones Directory
              </button>
              <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 p-4 rounded-lg text-left flex items-center transition-colors">
                <span className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center mr-3">
                  <AlertCircle className="w-5 h-5" />
                </span>
                Report Incident
              </button>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4 text-red-800">
              Emergency Contacts
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => window.open("tel:999")}
                className="w-full bg-white hover:bg-red-100 text-red-700 p-3 rounded-lg flex items-center justify-between transition-colors"
              >
                <span>National Emergency</span>
                <span className="font-bold">999</span>
              </button>
              <button
                onClick={() => window.open("tel:109")}
                className="w-full bg-white hover:bg-red-100 text-red-700 p-3 rounded-lg flex items-center justify-between transition-colors"
              >
                <span>Women & Children</span>
                <span className="font-bold">109</span>
              </button>
              <button
                onClick={() => window.open("tel:100")}
                className="w-full bg-white hover:bg-red-100 text-red-700 p-3 rounded-lg flex items-center justify-between transition-colors"
              >
                <span>Police Headquarters</span>
                <span className="font-bold">100</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyDashboard;
