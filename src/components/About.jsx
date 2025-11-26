import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-bold mb-6 text-pink-400 border-b-2 border-blue-500 w-fit pb-1">About Me</h2>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-3">
        <p className="text-gray-300 text-lg">
          Final-year Electronics & Communication Engineering undergraduate, passionate about Embedded Systems and Processor Design. Curious, self-driven, and highly adaptable under pressure. Skilled in problem-solving, teamwork, communication, and project management.
        </p>
        <p className="text-gray-300 text-lg">
          Open to roles in analysis, product management, and software development, with a strong drive to learn and adapt rapidly to new challenges.
        </p>
      </div>
    </section>
  );
}
