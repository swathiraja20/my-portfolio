import React from "react";

export default function Navbar() {
  const links = ["Home", "About", "Education", "Experience", "Skills", "Certifications", "Projects", "Activities", "Volunteering"];
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md text-white flex justify-between items-center px-8 py-4 z-50">
      <h1 className="font-bold text-xl text-blue-400">Swathi Raja</h1>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="hover:text-pink-400 transition-colors">{link}</a>
          </li>
        ))}
        <li>
          <a href="/SwathiRaja_Resume.pdf" target="_blank" className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600 transition-colors">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
