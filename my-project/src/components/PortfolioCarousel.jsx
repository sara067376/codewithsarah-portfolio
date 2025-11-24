import React, { useState } from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle auto-slide on hover
  React.useEffect(() => {
    if (hovering) {
      const interval = setInterval(nextSlide, 1500); // change slide every 1.5s
      return () => clearInterval(interval);
    }
  }, [hovering]);

  return (
    <div className="relative max-w-5xl mx-auto mt-10">
      {/* Image with hover effect */}
      <div
        className="overflow-hidden rounded-2xl shadow-xl cursor-pointer"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <img
          src={images[currentIndex]}
          alt={`Portfolio ${currentIndex + 1}`}
          className="w-full h-[500px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
