import React from "react";
import JobCard from "./JobCard";

const GigMarketplace = () => {
  const jobs = [
    {
      title: "Graphic Designer",
      type: "Remote • Full-time",
      salary: "৳25,000/mo",
      description:
        "Create social media graphics and marketing materials for women-led businesses.",
      color: "from-purple-50 to-pink-50 border-purple-200",
    },
    {
      title: "Data Entry Specialist",
      type: "Remote • Part-time",
      salary: "৳15,000/mo",
      description:
        "Remote data entry work with flexible hours. Perfect for students and homemakers.",
      color: "from-blue-50 to-cyan-50 border-blue-200",
    },
    {
      title: "Content Writer",
      type: "Remote • Contract",
      salary: "৳20,000/mo",
      description:
        "Write articles and blog posts about women's empowerment and safety topics.",
      color: "from-green-50 to-emerald-50 border-green-200",
    },
  ];

  return (
    <section id="marketplace" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Women-Only Gig Marketplace
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

        {/* Blockchain Verification */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Blockchain-Verified Skills
          </h3>
          <p className="text-purple-100 mb-6">
            Your skills are securely verified on the blockchain. Employers can
            trust your credentials instantly.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Verify Your Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default GigMarketplace;
