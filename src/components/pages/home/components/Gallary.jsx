import React from "react";
import Follow from "./Follow";

const Gallary = () => {
  const galleryImages = [
    "/assets/gallary1.png",
    "/assets/gallary2.png",
    "/assets/gallary3.png",
    "/assets/gallary4.png",
    "/assets/gallary5.png",
    "/assets/gallary6.png",
  ];

  return (
    <section className="gallery grey-bg py-10 md:py-12 lg:py-16">
      <div className="container">
        <div className="m-auto md:max-w-[1038px]">
          {/* Heading */}
          <div className="text-center px-4 sm:px-0">
            <h3 className="blue-text text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
              Image Gallery
            </h3>
            <p className="text-[#797A88] font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] py-2 md:py-3">
              Our classes are all about fun, flicks & tricks - some of which we
              manage to catch on camera! Check out{" "}
              <br className="md:block hidden" /> the latest images from our
              training session across London.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 my-6 md:my-8 lg:my-10">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="w-full aspect-square overflow-hidden rounded-lg "
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <Follow />
        </div>
      </div>
    </section>
  );
};

export default Gallary;