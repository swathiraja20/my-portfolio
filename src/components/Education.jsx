import React from "react";

export default function Education() {
  const education = [
    { title: "BTech Electronics & Communication", institution: "VIT Chennai", period: "2022–Present", gpa: "8.92/10" },
    { title: "12th PCM", institution: "Boaz Public School, CBSE", period: "2022", gpa: "93%" },
    { title: "10th", institution: "Boaz Public School, CBSE", period: "2020", gpa: "94.2%" }
  ];

  return (
    <section id="education" className="max-w-5xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold mb-6 text-purple-400 border-b-2 border-pink-500 w-fit pb-1">Education</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-900 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-blue-400">{edu.title}</h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-gray-300">{edu.period}</p>
            <p className="text-gray-300">{edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
