import React from "react";
import bannerImg from "/assets/img-blog-post-cover.png";
import bannerImgMobile from "/assets/img-blog-post-cover-mobile.png";

const Banner = () => {
  return (
    <section
      className="relative  bg-bottom md:py-[100px] py-[200px] lg:min-h-[700px]"

    >
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-[16px] text-[#797A88] mb-2">Posted 30 January 2021, 04:00 am</p>
          <h1 className="text-3xl lg:text-[56px] text-[40px] recline  font-bold text-[#042C89] recline">
            How to Plan Football Sessions for Children?
          </h1>
          <p className='text-[18px] leading-[30px] text-[#4B4B56] font-medium md:px-[18%] pt-5 py-4'>
            Planning a football session for kids can seem daunting but it doesn’t have to be. The following article will provide a simple framework to help you plan a fun and engaging football session in no time.
          </p>
          <div className="bg-[#FFDE14] mt-10 md:py-35 bg-cover items-center md:bg-[url('/assets/img-blog-post-cover.png')] bg-[url('/assets/img-blog-post-cover-mobile.png')] "
            >
            <div className="flex justify-start min-h-[300px] text-start pl-25">
              {/* <div>
                <h1 className="text-3xl lg:text-[58px] recline  font-bold text-[#042C89] recline">
                  How to Plan <br /><span className="permanent-marker text-[#00A6E3]">Football Sessions</span> <br />for Children?
                </h1>
                <div className="mt-10">
                  <button className="bg-[#042C89] text-white  rounded-full  poppins py-2 px-6">Read More</button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      <div className="max-w-4xl my-20 mx-auto px-4 md:px-0">
  {/* Warm Up Section */}
  <section className="mb-16 space-y-5">
    <h2 className="text-[36px] recline md:text-[36px] font-semibold text-[#042C89] pb-4">
      Warm Up
    </h2>

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-4">
      Any good football session starts with a thorough warm-up. This isn’t anyone’s
      favourite part of football training but it is vital to avoid unnecessary injuries.
    </p>

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-6">
      Some stretching is a good starting point to make sure muscles are ready before
      any more vigorous exercise. Alongside this, light jogging is a good idea to
      loosen up.
    </p>

    {/* Image */}
    <img
      src="/assets/img-blog-article-1.png"
      alt="Warm up"
      className="w-full rounded-2xl py-6 object-cover"
    />

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-6">
      This doesn’t have to be as boring as it sounds, though. This can be incorporated into games to keep kids engaged in what they’re doing. A ball can also be incorporated into exercises like the rondo to make warming up that bit more interesting.

    </p>
  </section>

   <section className="mb-16 space-y-5">
    <h2 className="text-[36px] recline md:text-[36px] font-semibold text-[#042C89] pb-4">
      Drills
    </h2>

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-4">
     The main part of a football session will be made up from various drills. You’ll want a wide variety of drills focussing on different aspects of the game to keep children focused and interested.
    </p>

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-6">
      Try to incorporate a mixture of passing, dribbling, positioning, shooting, tackling, and endurance where possible.
    </p>

    {/* Image */}
    <img
      src="/assets/img-blog-article-2.png"
      alt="Warm up"
      className="w-full rounded-2xl py-6 object-cover"
    />

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-6">
Like warm-ups, drills don’t have to be boring and can be based on kids’ favourite games like stuck in the mud and bulldog. If you’re running regular football sessions, make sure to vary which drills you’re doing each week to keep things fresh.    </p>
  </section>
   <section className="mb-16 space-y-5">
    <h2 className="text-[36px] recline md:text-[36px] font-semibold text-[#042C89] pb-4">
     Match Situation
    </h2>

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-4">
    It’s a good idea to end most sessions with some form of match situation. Kids love playing competitive matches and this gives them something to look forward to each time.
    </p>

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-6">
      This can be anything from 3v3 to 7v7, attack vs defence, or even a mini 1v1 tournament. Again, it’s worth mixing this up each week but there is no need to go overboard. Making sure the teams are different or awarding extra points for team goals is enough to keep things new and fun. 
    </p>

    {/* Image */}
    <img
      src="/assets/img-blog-article-3.png"
      alt="Warm up"
      className="w-full rounded-2xl py-6 object-cover"
    />

  
  </section>
     <section className="mb-16 space-y-5">
    <h2 className="text-[36px] recline md:text-[36px] font-semibold text-[#042C89] pb-4">
    Awards
    </h2>

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-4">
Man of the match awards are a great way to incentivize kids but they don’t have to be reserved exclusively for match days. If you have a group of kids, consider handing out regular awards for effort and commitment.    </p>

    <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-6">
These awards don’t necessarily have to go to the best player, instead, reward those who try the hardest. This encourages children to put in as much effort as possible and will help you get the most out of your football sessions.    </p>

    {/* Image */}
    <img
      src="/assets/img-blog-article-4.png"
      alt="Warm up"
      className="w-full rounded-2xl py-6 object-cover"
    />

   <p className="text-[16px] text-[#3E3E47] leading-relaxed mb-6">
    If this all sounds like too much work, why not leave it to us? At Samba Soccer Schools we specialise in teaching football the Brazilian way! For more information, click here.
   </p>

  </section>
</div>



      </div>

    </section>
  );
};

export default Banner;
