import React from "react";

const SambaDifferent = () => {
  const sambaItems = [
    {
      img: "/assets/img-brazilian-methodology.png",
      title: "Brazilian Methodology",
      desc: "At Samba Soccer Schools, we play football with style, the way it was supposed to be played – the Brazilian way. We believe coaching should focus on mastering close ball control and technique while teaching children to play with flair, freedom, and huge smiles on their faces.",
    },
    {
      img: "/assets/img-samba-music-2.png",
      title: "Samba Music",
      desc: "All of our classes come complete with a bouncing samba soundtrack. It's a lot of fun, but also, research has shown that footballers perform significantly better as a team when listening to the same piece of music. It also promotes a sense of rhythm in children's skills.",
    },
    {
      img: "/assets/img-skills-ball-1.png",
      title: "Skills Ball",
      desc: "Ever wondered why Brazilians have such exquisite touch? Children in Brazil often play with smaller balls than we're used to here, which encourages better close control. At Samba Soccer Schools, we do the same to help your children learn the same kind of skills as Pele, Ronaldo, and Neymar.",
    },
  ];

  return (
    <section className="different-sec py-10 md:py-12 lg:py-16">
      <div className="container">
        <div className="text-center px-4 sm:px-0">
          <h3 className="blue-text text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px]">
            What makes Samba Soccer
            <span className="block text-[#0DD180] relative permanent-marker text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px]">
              different
            </span>
          </h3>
          <p className="text-[#797A88] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] pt-5 md:pt-8 lg:pt-10">
            There are hundreds of soccer schools and football academies out{" "}
            <br className="md:block hidden" />
            there, so what makes us so special?
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-9 md:gap-10 lg:gap-11 mt-8 md:mt-10 md:max-w-[1040px] m-auto px-4 sm:px-0">
          {sambaItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="img-sec diffrentimages mb-2 flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto w-[140px] sm:w-[180px] md:w-[210px] lg:w-[238px] h-auto"
                />
              </div>
              <h6 className="blue-text my-3 md:pt-3 pb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] font-semibold">
                {item.title}
              </h6>
              <p className="mt-0 text-[12px] sm:text-[13px] md:text-[14px] text-[#797A88] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SambaDifferent;