import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const email = "sara2004saleemofficial@gmail.com";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <footer className="w-full bg-[#F7F7F7] dark:bg-[#111111] py-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 px-4">

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-2xl">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sara-saleem-5b0a22395"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1E1E1E] shadow-md 
                       hover:shadow-[0_0_15px_#3B82F6AA] hover:scale-110 transition-all duration-300 text-[#3B82F6]"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sara067376"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1E1E1E] shadow-md 
                       hover:shadow-[0_0_15px_#ffffff55] hover:scale-110 transition-all duration-300 text-[#222222] dark:text-white"
          >
            <FaGithub />
          </a>

          {/* Gmail */}
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#1E1E1E] shadow-md 
                       hover:shadow-[0_0_15px_#EA4335AA] hover:scale-110 transition-all duration-300 text-red-500"
          >
            <SiGmail />
          </a>
        </div>

        {/* FOOTER TEXT */}
        <div className="text-center space-y-1">
          <p className="text-sm text-[#555555] dark:text-gray-300 tracking-wide">
            © {new Date().getFullYear()} <span className="font-semibold">Sara Saleem</span>
          </p>
          <p className="text-xs text-[#777777] dark:text-gray-400">
            All Rights Reserved • Portfolio of a Full Stack / MERN Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
