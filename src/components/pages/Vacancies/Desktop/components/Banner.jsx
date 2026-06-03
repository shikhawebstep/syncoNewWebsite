import React, { useState } from "react";
import bannerImg from "/assets/CoachDesktopBanner.png";
import { div } from "framer-motion/client";

const Banner = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo((prev) => !prev); // Toggle video on/off
    };

    return (
        <section
            className="relative py-[100px] min-h-[900px] flex items-center justify-center cursor-pointer"
            style={{
                backgroundImage: showVideo ? "none" : `url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
            }}
            onClick={handleClick}
        >
            {!showVideo && (
                <>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                    {/* Play button and text */}
                    <div className="z-20 flex flex-col items-center">
                        <div
                            className="flex items-center justify-center rounded-full border-20 border-white"
                            style={{ width: 200, height: 200 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                width="120"
                                height="120"
                                className="ml-1 rounded-2xl"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <div className="mt-0 text-white text-[70px] font-black leading-none tracking-[3px] select-none">
                            VIDEO
                        </div>

                    </div>
                </>
            )}

            {showVideo && (
                <>
                    <div className="absolute top-10 right-10 z-30">
                        <button
                            className="bg-white text-black px-4 py-2 rounded-lg font-bold"
                        >
                            Click to Close
                        </button>
                    </div>
                    <iframe
                        width="100%"
                        height="900px"
                        src="https://www.youtube.com/embed/4SWoppmEn1M?si=8MB38Sn7W_mgBGj8&autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="z-20"
                    />
              </>
            )}

        </section>
    );
};

export default Banner;
