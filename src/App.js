import React from "react";
import { motion } from "framer-motion";

function App() {
  const projects = [
    {
      title: "ASIC Implementation of a 32-bit RISC-V Processor - AMO",
      desc: `Designed a single-core, 32-bit RISC-V processor with custom support for Atomic Memory Operations as part of ASIC implementation, ensuring execution within a single clock cycle. Utilized Cadence Genus and Intel Quartus. Gained hands-on experience in Computer Architecture, Verilog HDL, Pipelining, and Instruction set extensions.`,
      link: "#",
    },
    {
      title: "Design and Optimization of Memory Subsystems for AI accelerators",
      desc: `Designed SRAM/STT-MRAM cells in Cadence Virtuoso, achieving 97.7% lower leakage power with STT-MRAM. Analyzed speed-power tradeoffs for energy-efficient hybrid memory architectures.`,
      link: "#",
    },
    {
      title: "Gesture - Voice Integrated Toy",
      desc: `Prototype for Smart India Hackathon 2024, an interactive educative toy for 4-6 year olds. Incorporates gesture, voice recognition and a reward system using ESP-NOW and MPU6050. Currently enhancing features.`,
      link: "#",
    },
    {
      title: "Rapid Response Game Circuit",
      desc: `Circuit for quiz systems using JK flip-flops, timers and seven segment displays to quickly identify first responders.`,
      link: "#",
    },
    {
      title: "RFID Access Control System",
      desc: `Simulation and hardware prototyping of access control system leveraging RFID and 8051 microcontroller.`,
      link: "#",
    },
    {
      title: "RIS-assisted V2I Communication Simulation",
      desc: `Designed and simulated RIS-based Vehicle-to-Infrastructure system to enhance signal strength and reliability. Analyzed path loss, SNR, and capacity improvements using MATLAB.`,
      link: "#",
    },
    {
      title: "IoT-based Landslide Detection System",
      desc: `Real-time landslide alert system integrating tilt, vibration, and rainfall sensors. Long-range wireless data transmission using LoRa with dynamic threshold-based alerting.`,
      link: "#",
    },
    {
      title: "Circularly Polarized Microstrip Patch Antenna Design",
      desc: `Designed a circularly polarized microstrip patch antenna in ANSYS HFSS.`,
      link: "#",
    },
  ];

  const skills = {
    "Programming & DBMS": [
      "Python",
      "C",
      "C++",
      "R",
      "Assembly Language",
      "Verilog",
      "Java",
      "MySQL",
    ],
    "Hardware & Prototyping": [
      "FPGA Design",
      "PCB Design",
      "Circuit Design",
      "Sensor Integration",
      "Soldering",
      "Real-time Debugging",
    ],
    "EDA Tools": [
      "LTSpice",
      "Keil uVision",
      "MATLAB",
      "Proteus",
      "Cadence Virtuoso",
      "Cadence Genus",
      "ModelSim",
      "Ansys HFSS",
      "Intel Quartus",
      "KiCad",
      "Arm Studio",
      "ROS2 Iron",
    ],
    "Communication Protocols": [
      "UART",
      "SPI",
      "I2C",
      "ZigBee",
      "Bluetooth",
      "LoRa",
      "nRF",
      "Wi-Fi",
      "ESPNOW",
    ],
    "Networking & Simulation": ["Cisco Packet Tracer", "Wireshark", "Netsim"],
    "OS Environments": ["Windows OS", "Ubuntu Linux", "Bash"],
  };

  const languages = [
    "English (IELTS-C1)",
    "Tamil",
    "Telugu",
    "Hindi",
    "German (A1)",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* HEADER */}
      <header className="text-center py-12 bg-gradient-to-r from-blue-500 via-purple-700 to-pink-500">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Swathi Raja
        </motion.h1>
        <p className="text-lg mt-2">
          Electronics & Communication Engineering | VLSI | Embedded Systems | AI
        </p>
      </header>

      {/* ABOUT ME */}
      <section className="max-w-4xl mx-auto my-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Final-year Electronics & Communication Engineering undergraduate,
          passionate about Embedded Systems and Processor Design.
          Curious, self-driven, and highly adaptable under pressure. Skilled in
          problem-solving, teamwork, communication, and project management.
          Open to roles in analysis, product management, and software
          development, with a strong drive to learn and adapt rapidly to new
          challenges.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="max-w-4xl mx-auto my-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Education</h2>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 my-4">
          <h3 className="text-xl font-bold text-blue-400">
            BTech Electronics & Communication Engineering
          </h3>
          <p>VIT Chennai | 2022–Present | GPA: 8.92/10</p>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 my-4">
          <h3 className="text-xl font-bold text-blue-400">12th PCM</h3>
          <p>Boaz Public School, CBSE | 2022 | 93%</p>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 my-4">
          <h3 className="text-xl font-bold text-blue-400">10th</h3>
          <p>Boaz Public School, CBSE | 2020 | 94.2%</p>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-4xl mx-auto my-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-500">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Meritorious Award - Overall School 2nd Position | Boaz Public School",
            "Finalist in V-Guard Big Idea Tech Design 2025",
            "Finalist in SAP 24 National Hackathon",
            "Finalist in International Rover Challenge 2025",
          ].map((ach, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 my-2 hover:shadow-[0_0_20px_rgba(255,0,255,0.7)] hover:scale-105 transition-all duration-300"
            >
              <p className="text-l font-bold text-pink-200">{ach}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto my-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-pink-500">Skills</h2>
        {Object.keys(skills).map((category, idx) => (
          <div key={idx} className="my-4">
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills[category].map((skill, id) => (
                <span
                  key={id}
                  className="bg-purple-900 text-white px-3 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto my-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Experience</h2>
        {[
          {
            org: "Summer Research Internship — Centre for Nanoelectronics and VLSI Design, VIT Chennai",
            period: "05/2024–09/2024",
            desc: `Developed single-core 32-bit RISC-V processor with AMO support for ASIC.
Self-taught Verilog HDL and Computer Architecture.
Gained experience in RTL design, logic synthesis, DFT, and ASIC layout.`,
          },
          {
            org: "Student Intern — Siemens, Chennai",
            period: "07/2024",
            desc: `Explored HVAC and fire safety systems.
Learned PLC programming and AutoCAD layouts.
Gained insights into Siemens' engineering and operational functions.`,
          },
          {
            org: "Top 500 Ericsson Edge Academia Program — Ericsson",
            period: "11/2024–04/2025",
            desc: `Industry-led training on 5G, AI, Cloud, Automation, and Telecom.`,
          },
          {
            org: "Project Intern — CSIR CEERI, Chennai",
            period: "05/2025–06/2025",
            desc: `Assisted in R&D projects and technology innovation.
Contributed to Smart Water Distribution System development using Zigbee, NRF modules.
Attended national-level conferences and volunteered in technical events.`,
          },
        ].map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-black-800 rounded-2xl shadow-lg p-6 my-4 hover:shadow-[0_0_20px_rgba(0,255,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-blue-400">{exp.org}</h3>
            <p className="text-purple-300 mb-2">{exp.period}</p>
            <p className="text-gray-300 whitespace-pre-line">{exp.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto my-12 px-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-pink-400 hover:shadow-[0_0_20px_rgba(255,0,255,0.7)] hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4 whitespace-pre-line">{p.desc}</p>
              
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES & SOCIETIES */}
      <section className="max-w-5xl mx-auto my-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Activities & Societies</h2>
        {[
          {
            title: "Rover Science Lead — Technocrats Robotics, VIT Chennai",
            period: "04/2023–08/2025",
            desc: `Finalist in IRC'25 and ARC'24 International Rover Competitions.
Responsible for science missions, analyzing biological samples, and presenting to judges.
Organized and volunteered STEM events.`,
          },
          {
            title: "Management Member — Linux Club, VIT Chennai",
            period: "02/2024–04/2025",
            desc: "Organized and promoted events. Designed posters and helped secure sponsorships.",
          },
          {
            title: "Industry Personnel — SENSEibles, VIT Chennai",
            period: "09/2023–04/2025",
            desc: "Managed university lab for industry visitors. Educated participants on global sustainability challenges.",
          },
          {
            title: "Management Member — SEDS Antariksh, VIT Chennai",
            period: "01/2024–04/2025",
            desc: "Promoted events and participated in event management.",
          },
        ].map((act, idx) => (
          <motion.div
            key={idx}
            className="bg-black-800 rounded-2xl shadow-lg p-6 my-4 hover:shadow-[0_0_20px_rgba(0,255,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-blue-400">{act.title}</h3>
            <p className="text-purple-300 mb-2">{act.period}</p>
            <p className="text-gray-300 whitespace-pre-line">{act.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* VOLUNTEERING */}
      <section className="max-w-5xl mx-auto my-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Volunteering</h2>
        {[
          "School and Outreach Member — VITeach VIT Chennai ",
          "Campus Ambassador — Tryst'24, IIT Delhi",
          "Volunteer — NSS VIT Chennai ",
          "Student Volunteer — TechnoVIT'23",
          "Fundraising Volunteer — Swiss Emmaus Leprosy Relief Work India- 2015",
          "Student Volunteer — Youth Red Cross Club",
        ].map((vol, idx) => (
          <motion.div
            key={idx}
            className="bg-black-800 rounded-2xl shadow-lg p-6 my-2 hover:shadow-[0_0_20px_rgba(255,255,0,0.7)] hover:scale-105 transition-all duration-300"
          >
            <p className="text-l font-bold text-white-100">{vol}</p>
          </motion.div>
        ))}
      </section>

      {/* LANGUAGES KNOWN */}
      <section className="max-w-5xl mx-auto my-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Languages Known</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((lang, idx) => (
            <span
              key={idx}
              className="bg-purple-600 text-white px-3 py-1 rounded-full font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Swathi Raja
      </footer>
    </div>
  );
}

export default App;
