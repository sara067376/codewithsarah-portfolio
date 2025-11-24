import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import saraImg from "../assets/SARA!.jfif"; // <-- Your image here

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 sm:py-28 flex justify-center px-4 md:px-0 bg-[#F7F7F7] dark:bg-[#1A1A1A]"
    >
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16 max-w-[1100px]">
        {/* LEFT — Text Section */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="text-[#3B82F6] text-lg font-semibold tracking-wide">
            Hi, I’m
          </p>

          <h1 className="text-4xl sm:text-5xl font-black text-[#222222] dark:text-white leading-tight">
            Sara Saleem
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#717171] dark:text-[#E0E0E0]">
            Software Engineer – MERN / Full Stack Developer
          </h2>

          <p className="mt-4 max-w-xl text-[#444444] dark:text-[#d4d4d4] text-base sm:text-lg leading-relaxed">
            A passionate Software Engineer with strong foundations in
            programming, MERN Stack development, and modern web technologies. I
            create responsive, user-centered and high-quality digital solutions.
          </p>

          {/* Contact Info */}
          <div className="mt-4 text-sm sm:text-base text-[#555555] dark:text-slate-300 space-y-1">
            <p>
              <strong>Email:</strong> sara2004saleem@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +92 311 5082244
            </p>
            <p>
              <strong>Location:</strong> Rawalpindi, Pakistan
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center md:justify-start mt-6">
            <a
              href="/Sara_Saleem_CV.pdf"
              download
              className="h-12 px-5 bg-[#3B82F6] text-white rounded-xl font-bold flex items-center gap-2 shadow-md hover:opacity-90 transition"
            >
              <FaDownload />
              Download CV
            </a>

            <Link
              to="/projects"
              className="h-12 px-5 bg-white dark:bg-[#333333] border border-[#EBEBEB] dark:border-[#3B82F6] rounded-xl font-bold text-[#222222] dark:text-white flex items-center shadow-sm hover:bg-[#F7F7F7] transition"
            >
              View My Work
            </Link>
          </div>
        </div>

        {/* RIGHT — Profile Image */}
        <div
          className="
    w-64 h-64
    sm:w-80 sm:h-80
    rounded-full 
    shadow-[0_10px_25px_rgba(0,0,0,0.15)]
    border-4 border-[#3B82F6]
    ring-4 ring-[#3B82F633]
  "
          style={{
            backgroundImage: `url(${saraImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
}
