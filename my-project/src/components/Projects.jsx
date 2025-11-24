import React from "react";
import PortfolioCarousel from "./PortfolioCarousel"; // Import your carousel component

// Import project images
import projectpic1 from "../assets/projectpic1.jpg";
import projectpic2 from "../assets/projectpic2.jpg";
import projectpic3 from "../assets/projectpic3.jpg";
import projectpic4 from "../assets/projectpic4.png";

export default function Projects() {
  const webProjects = [
    {
      title: "SkyTrack AI – Job & Visa Recommendation Platform",
      desc: "A full-stack AI-powered platform that recommends foreign jobs and visa eligibility for Pakistani users with real-time filtering and AI-based predictions.",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      link: "https://sky-track-ai-wln2.vercel.app/",
      duration: "8 Months",
      status: "Completed",
      image: projectpic1,
    },
    {
      title: "Binance Clone Landing Page",
      desc: "A highly responsive and modern landing page inspired by Binance with smooth UI, animations and component-based design.",
      tech: "React.js, HTML, CSS, JavaScript",
      link: "https://mybinanceclone.netlify.app/pages/landingpage",
      duration: "2 Months",
      status: "Completed",
      image: projectpic2,
    },
    {
      title: "Mercedes Maybach Landing Page",
      desc: "Luxury-themed landing page with premium UI, Tailwind CSS styling, and smooth transitions showcasing the Maybach brand.",
      tech: "React.js, TailwindCSS",
      link: "https://mercedesmaybach.netlify.app/",
      duration: "2 Months",
      status: "Completed",
      image: projectpic3,
    },
    {
      title: "Digit Recognition App (AI Model Integration)",
      desc: "AI-based digit prediction system using Deep Learning (CNN) trained in TensorFlow and deployed with Streamlit UI.",
      tech: "Python, Keras, TensorFlow, Streamlit",
      link: "https://github.com/sara067376/Digit-Recognition-App",
      duration: "15 Days",
      status: "Completed",
      image: projectpic4,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Web Apps Category */}
        <h2 className="text-3xl font-bold  text-center text-blue-500 dark:text-blue-400">
          Web Apps + AI, ML Projects
        </h2>
        <p className="italic text-blue-500 text-center mb-12">
          Artificial Intelligence + Machine Learning
        </p>
        <div className="flex flex-col gap-10">
          {webProjects.map((p, i) => (
            <div
              key={i}
              className="flex flex-col xl:flex-row gap-6 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="w-full xl:w-2/5 h-60 xl:h-72 rounded-xl overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-4 xl:py-2">
                <p className="text-blue-500 text-sm font-medium uppercase tracking-wide">
                  Featured Project
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {p.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <p>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      Tech:
                    </span>{" "}
                    {p.tech}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      Duration:
                    </span>{" "}
                    {p.duration}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      Status:
                    </span>{" "}
                    {p.status}
                  </p>
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 rounded-lg bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition-all duration-300 w-max text-center 
             mx-auto xl:mx-0"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Canva / Design Category */}
        <h2 className="text-3xl font-bold mt-20 mb-12 text-center text-blue-500 dark:text-blue-400">
          Canva / Design Projects
        </h2>
        <PortfolioCarousel />
      </div>
    </section>
  );
}
