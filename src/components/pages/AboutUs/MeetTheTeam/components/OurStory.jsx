import React from "react";
import bgImage from "/assets/OurStory.png"; // background

const OurStorySection = () => {
  return (
    <>
  <img src="/assets/Vector2.png" alt='' className="block relative gggggg md:hidden"/>

    
    <section className="bg-cover gggggg vectormain bg-top  md:pt-[180px]  pb-[90px]  relative" 
     style={{ backgroundImage: `url(${bgImage})` }} >
        
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <img src="/assets/Founder.png" className="mx-auto mb-5" alt="" />
        <h2 className="text-center text-[#0DD180] text-[38px] md:text-[56px] font-bold recline mb-12">
          A Word from our Founder...
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-1 px-10 gap-12 text-white text-[17px] mt-10 leading-relaxed">

          {/* Left Column */}
          <div className="space-y-8 text-center relative">
            <p className="font-light text-[#FDFDFF] leading-8">
              Hey everybody,            </p>

            <p className="font-light text-[#FDFDFF] relative-8 ">
              I’m Nilio Bagga. Together with the help of my friends and family, I started Samba Soccer Schools back in 2009. Today, I serve as the company’s Managing Director, whilst a close-knit team of qualified coaches takes care of the football side of things - though I still like jumping in for a game now and again when I can!
            </p>

            <p className="font-light text-[#FDFDFF] leading-8 ">
              Having played semi-professionally in an overly structured and mechanical setting, I know how easily it can drain the life out of the beautiful game. Playing as a child, there was little room for personal expression, flair, and excitement. Everything had to be done by the book.
            </p>
            <p className="font-light text-[#FDFDFF] leading-8 ">I hated this style of football, so my friends and I began playing more and more at school or on the streets. With some music on in the background and our best friends around us, we suddenly felt free and happy playing football. </p>
            <p className="font-light text-[#FDFDFF] leading-8 ">It was a feeling that remained with me even as I became an adult. Why can’t we have football classes that combine excitement, flair, and tricks that leave your jaw on the floor, with confidence building, structure, and a detailed development syllabus?   </p>
            <p className="font-light text-[#FDFDFF] leading-8 ">This idea eventually served as the inspiration for Samba Soccer Schools. The aim was to take that same feel-good samba energy and introduce it to kids in a fun and friendly environment. I wanted to promote enjoyment whilst instilling confidence in young players so that they could express their natural happiness through football.</p>
            <p className="font-light text-[#FDFDFF] leading-8 ">With that concept in mind, I earned my coaching badges, got my degree from the London School of Economics, and established Samba Soccer Schools.</p>
            <p className="font-light text-[#FDFDFF] leading-8 ">Since then, we have helped thousands of children develop and showcase their skills, make new friends, expand social skills, and build confidence on and off the pitch - all while having an incredible time. </p>
            <p className="font-light text-[#FDFDFF] leading-8 ">We are proud of the work we’ve done so far and the families we've supported on our journey - but we’re just getting started. The next generation of budding football stars is already emerging, and we’re determined to keep improving so children under our tutelage can continue to realise their dreams and play football with huge smiles.    </p>
            <p className="font-light text-[#FDFDFF] leading-8 ">This isn’t just my vision. Every Samba Soccer Schools team member is committed to the project and truly enjoys what they do. Samba Soccer Schools was born from my love of Brazilian football and culture, and that continues to be the cornerstone of everything we do today. </p>
            <p className="font-light text-[#FDFDFF] leading-8 ">We’ve worked hard for years to develop this concept into the successful and rapidly expanding business that it is. If your child has expressed an interest in football, or you’re tired of seeing them come home dejected from traditional football class, we would love to offer a free session so you can get a feel for what we’re all about.</p>
            <p className="font-light text-[#FDFDFF] leading-8 ">Thank you for visiting our website, and we hope to see you soon!</p>
            <img
              src="/assets/foundersignature.png"
              className="mx-auto pt-5 "
              alt=""
            />
            <p className="f text-[#FDFDFF] leading-8 mb-0  "><strong>Nilio Bagga</strong></p>
            <p className="font-light text-[#FDFDFF] leading-8 ">Founder and Managing Director</p>


          </div>

        </div>

      </div>
      






    </section>
    
    </>
  );
};

export default OurStorySection;
