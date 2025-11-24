import React from "react";
import { MdEmail } from "react-icons/md";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const email = "sara2004saleem@gmail.com";
  const phone = "+923115082244";
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, "")}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section className="mt-10 py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition duration-500">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-200 dark:border-gray-700 transition duration-500">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Contact Me
        </h1>

        {/* CONTACT BOXES */}
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-6 p-5 rounded-xl shadow-md hover:shadow-lg transition bg-blue-100 dark:bg-gray-700">
            <MdEmail className="text-blue-700 dark:text-blue-400 text-4xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Email</p>
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  text-xs sm:text-2xl hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-6 p-5 rounded-xl shadow-md hover:shadow-lg transition bg-blue-100 dark:bg-gray-700">
            <FiPhone className="text-blue-700 dark:text-blue-400 text-4xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Phone</p>
              <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
                {phone}
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-6 p-5 rounded-xl shadow-md hover:shadow-lg transition bg-green-100 dark:bg-gray-700">
            <FaWhatsapp className="text-green-700 dark:text-green-400 text-4xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">WhatsApp</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-6 p-5 rounded-xl shadow-md hover:shadow-lg transition bg-gray-100 dark:bg-gray-700">
            <FiMapPin className="text-red-600 dark:text-red-400 text-4xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Address</p>
              <p className="text-gray-700 dark:text-gray-300">
                NE-1651/A Rawalpindi, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
