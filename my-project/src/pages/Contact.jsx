import React from "react";

const Contact = () => {
  const email = "sara2004saleem@gmail.com";
  const phone = "+923020055735";
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, "")}`; // WhatsApp link
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl p-10 transition-colors duration-500">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Contact Me
        </h1>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <p className="flex items-center gap-2">
            <span className="font-semibold">Email:</span>
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {email}
            </a>
          </p>

          <p className="flex items-center gap-2">
            <span className="font-semibold">Phone:</span>
            <a
              href={`tel:${phone}`}
              className="text-blue-500 hover:underline"
            >
              {phone}
            </a>
          </p>

          <p className="flex items-center gap-2">
            <span className="font-semibold">WhatsApp:</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </p>

          <p className="flex items-start gap-2">
            <span className="font-semibold">Address:</span>
            <span>
              NE-1651/A, Street no 17 third floor, Mohallah Chah Sultan,
              New Amar Pura Road, Rawalpindi, Pakistan
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
