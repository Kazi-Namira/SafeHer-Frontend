import React from "react";
import { Monitor, Briefcase, Globe, Scale } from "lucide-react";

const LearningHub = () => {
  const courses = [
    {
      icon: Monitor,
      title: "Digital Skills",
      description: "Learn essential computer and internet skills",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Briefcase,
      title: "Freelancing",
      description: "Start your freelance career with confidence",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Globe,
      title: "English Language",
      description: "Improve English for better job opportunities",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Scale,
      title: "Legal Rights",
      description: "Know your rights and legal protections",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <section id="learning" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Micro-Learning Hub
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div
              className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
            >
              <course.icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningHub;
