import React from "react";
// Import your images for projects/UI, assuming they are in ../assets folder
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
// ... continue importing up to p50

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "Git & GitHub", level: 85 },
    { name: "Python", level: 75 },
    { name: "Canva Graphic Designing", level: 90 },
    { name: "Machine Learning", level: 70 },
  ];

  const projectImages = [p1, p2 /* , ... up to p50 */];

  return (
    <section className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 transition-colors duration-500">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Skills & Proficiency
        </h1>

        {/* Skills with proficiency bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between mb-1 font-semibold text-gray-700 dark:text-gray-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal scrollable project cards */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-12 mb-6 text-center">
          Projects & Designs
        </h2>
        <div className="flex overflow-x-scroll gap-4 py-4 scrollbar-thin scrollbar-thumb-blue-500 dark:scrollbar-thumb-blue-400 scrollbar-track-gray-200 dark:scrollbar-track-gray-700">
          {projectImages.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-blue-500 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-3 font-semibold text-center text-gray-800 dark:text-gray-200">
                Project {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
