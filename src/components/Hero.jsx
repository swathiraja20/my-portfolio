import React from "react";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-black">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 mb-4">
        Swathi Raja
      </h1>
      <p className="text-xl text-blue-200">
        ECE Undergraduate | Embedded Systems | Processor Design | AI
      </p>
    </section>
  );
}
