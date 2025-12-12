import React from "react";
import { MdEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const email = "sara2004saleemofficial@gmail.com";
  const gmailLink = `mailto:${email}`;
  const github = "https://github.com/sara067376";
  const linkedin = "https://www.linkedin.com/in/sara-saleem-5b0a22395";

  return (
    <section className="mt-10 py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition duration-500">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-200 dark:border-gray-700 transition duration-500">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Contact Me
        </h1>

        {/* CONTACT INFO BOXES */}
        <div className="space-y-6">
          <div className="relative flex items-center gap-6 p-5 rounded-xl shadow-md hover:shadow-lg transition bg-blue-100 dark:bg-gray-700">
            <MdEmail className="text-blue-700 dark:text-blue-400 text-4xl flex-shrink-0" />

            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                Email
              </p>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-lg text-blue-600  hover:underline z-10 relative"
              >
                {email}
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-6 p-5 rounded-xl shadow-md hover:shadow-lg transition bg-gray-100 dark:bg-gray-700">
            <FaGithub className="text-gray-900 dark:text-white text-4xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                GitHub
              </p>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-lg text-gray-700 dark:text-gray-300 hover:underline"
              >
                {github}
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-6 p-5 rounded-xl shadow-md hover:shadow-lg transition bg-blue-50 dark:bg-gray-700">
            <FaLinkedin className="text-blue-700 dark:text-blue-400 text-4xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                LinkedIn
              </p>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-lg text-blue-600 hover:underline"
              >
                {linkedin}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-6 p-5 rounded-xl shadow-md hover:shadow-lg transition bg-gray-100 dark:bg-gray-700">
            <FiMapPin className="text-red-600 dark:text-red-400 text-4xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                Location
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
