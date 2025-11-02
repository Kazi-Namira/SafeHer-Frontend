import React from "react";

const JobCard = ({ title, type, salary, description, color }) => {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-shadow`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p
            className={`font-semibold ${
              type.includes("Remote") ? "text-purple-600" : "text-blue-600"
            }`}
          >
            {type}
          </p>
        </div>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Verified
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900">{salary}</span>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
