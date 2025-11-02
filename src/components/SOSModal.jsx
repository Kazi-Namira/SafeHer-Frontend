import React from "react";
import { AlertTriangle, Check } from "lucide-react";

const SOSModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fadeIn">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            EMERGENCY SOS
          </h3>
          <p className="text-gray-600 mb-6">
            Help is on the way! Emergency contacts and authorities have been
            notified.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span>Location Shared</span>
              <Check className="text-green-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span>Audio Recording</span>
              <Check className="text-green-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span>Emergency Services</span>
              <Check className="text-green-600" />
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              onClick={() => window.open("tel:999")}
            >
              Call 999
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSModal;
