import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Summer Research Internship",
      company: "Centre for Nanoelectronics and VLSI Design, VIT Chennai",
      period: "05/2024–09/2024",
      desc: "Developed single-core 32-bit RISC-V processor with AMO support for ASIC. Learned Verilog HDL, RTL design, logic synthesis, DFT, and ASIC layout."
    },
    {
      title: "Student Intern",
      company: "Siemens, Chennai",
      period: "07/2024",
      desc: "Explored HVAC and fire safety systems. Learned PLC programming and AutoCAD layouts."
    },
    {
      title: "Top 500 Ericsson Edge Academia Program",
      company: "Ericsson",
      period: "11/2024–04/2025",
      desc: "Industry-led training on 5G, AI, Cloud, Automation, and Telecom."
    }
  ];

  return (
    <section id="experience" className="max-w-5xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold mb-6 text-pink-400 border-b-2 border-purple-500 w-fit pb-1">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
            <p className="text-gray-300">{exp.company} | {exp.period}</p>
            <p className="text-gray-300 mt-2">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
