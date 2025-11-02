import React from "react";
import { Users, Scale, Heart } from "lucide-react";

const CommunitySection = () => {
  const features = [
    {
      icon: Users,
      title: "Guardian Angels",
      description:
        "Verified companions who can accompany you during risky travel. Earn money while helping other women stay safe.",
      buttonText: "Find a Guardian",
      color: "bg-pink-100 text-pink-600",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: Scale,
      title: "Legal Aid Directory",
      description:
        "Connect with lawyers specializing in women's cases. Get free consultations and know your rights.",
      buttonText: "Find Legal Help",
      color: "bg-orange-100 text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
    {
      icon: Heart,
      title: "Support Network",
      description:
        "Connect with other women in your area. Form travel buddy groups and share experiences safely.",
      buttonText: "Join Community",
      color: "bg-purple-100 text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <section id="community" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Community Support Network
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button
                className={`w-full ${feature.buttonColor} text-white py-3 rounded-lg font-semibold transition-colors`}
              >
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
