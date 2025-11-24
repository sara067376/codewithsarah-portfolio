import React from "react";

const About = () => {
  const experiences = [
    {
      title: "Lecturer + Lab Instructor",
      organization: "Bahria Foundation College, Rawalpindi – Pakistan",
      duration: "2025 – Present",
      description: "Teaching IT subjects, conducting lab sessions, mentoring students in software projects.",
    },
    {
      title: "MERN Stack Developer",
      organization: "OSSO.ai, Rawalpindi – Pakistan",
      duration: "2023 – 2024",
      description: "Developed web apps using React.js, Node.js, Express.js, MongoDB, Tailwind CSS. Worked on live projects like Binance Clone, Mercedes Maybach, and SkyTrack AI.",
    },
    {
      title: "Lecturer (Computer Science)",
      organization: "Govt. Post Graduate College Viqar-un-Nisa, Rawalpindi – Pakistan",
      duration: "2021 – 2023",
      description: "Taught Computer Science subjects to BS and Intermediate students, prepared labs and assignments.",
    }
  ];

  const certifications = [
    {
      title: "JavaScript Full Stack Development (React + Node.js)",
      issuer: "NAVTTC, Pakistan",
      duration: "Mar 2025 – Jun 2025"
    },
    {
      title: "The Nuts and Bolts of Machine Learning",
      issuer: "Google – Coursera",
      duration: "3 Months"
    },
    {
      title: "Graphic Designing with Canva",
      issuer: "Skill Zeera, Pakistan",
      duration: "1 Month"
    },
    {
      title: "Tafseer ul Quran",
      issuer: "Al Noor Quran Academy, Rawalpindi – Pakistan",
      duration: "4 Years"
    }
  ];

  const projects = [
    {
      name: "SkyTrack AI – Job & Visa Recommendation Platform",
      tech: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
      duration: "8 Months",
      status: "Completed",
      link: "https://sky-track-ai-wln2.vercel.app/"
    },
    {
      name: "Binance Clone Landing Page",
      tech: "React.js, HTML, CSS, JavaScript",
      duration: "2 Months",
      status: "Completed",
      link: "https://mybinanceclone.netlify.app/pages/landingpage"
    },
    {
      name: "Mercedes Maybach Landing Page",
      tech: "React.js, TailwindCSS",
      duration: "2 Months",
      status: "Completed",
      link: "https://mybinanceclone.netlify.app/pages/landingpage"
    },
    {
      name: "Digit Recognition App (AI Model Integration)",
      tech: "Python, Keras, TensorFlow, Streamlit",
      duration: "15 Days",
      status: "Completed",
      link: "https://github.com/sara067376/Digit-Recognition-App"
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h1 className="mt-6 text-4xl font-bold text-blue-500 mb-10 text-center dark:text-blue-400">About Me</h1>
        
        {/* Personal Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 transition-colors duration-500">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I am <strong>Sara Saleem</strong>, a passionate and detail-oriented Full Stack Developer and Software Engineer from Rawalpindi, Pakistan. 
            With hands-on expertise in <strong>React.js, Node.js, Express.js, MongoDB, TailwindCSS</strong> and programming languages like <strong>C++ and Python</strong>, I build responsive and user-friendly applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I have a strong academic foundation with a <strong>BS in IT</strong> from University of Punjab and professional experience as a Lecturer and MERN Stack Developer. I enjoy solving real-world problems through innovative software solutions.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            My career vision is to continuously grow as a software developer, work on impactful projects, and deliver reliable, efficient, and modern web applications.
          </p>
        </div>

        {/* Experience Cards */}
        <h2 className="text-3xl font-semibold text-blue-500 mb-6 dark:text-blue-400">Professional Experience</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.organization}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Cards */}
        <h2 className="text-3xl font-semibold text-blue-500 mb-6 dark:text-blue-400">Certifications & Courses</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Duration: {cert.duration}</p>
            </div>
          ))}
        </div>

        {/* Projects Cards */}
        <h2 className="text-3xl font-semibold text-blue-500 mb-6 dark:text-blue-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{proj.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">Tech: {proj.tech}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Duration: {proj.duration} | Status: {proj.status}</p>
              {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline mt-2 block">View Project</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
