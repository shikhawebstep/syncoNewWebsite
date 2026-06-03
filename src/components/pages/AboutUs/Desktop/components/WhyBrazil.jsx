import React from "react";
import bannerImg from "/assets/whyBrazilBg.png";
import bannerImgMobile from "/assets/whyBrazilMobile.png";

const WhyBrazil = () => {
    return (
        <>
        <img className="hidden relative z-9999 md:block" src="/assets/whyBrazilBg.png" alt="" />
        <section
             className="
              relative 2xl:-mt-[100px] pt-[240px] md:pt-0 lg:-mt-[90px] z-1 flex items-end bg-no-repeat bg-top bg-[#fff]
               pb-[50px]
               
              bg-[url('/assets/whyBrazilMobile.png')]
              lg:bg-[url('')]
              bg-contain
            "
        >
            <div className="container mx-auto">
                {/* Heading */}
                <div>
                    <h2 className="text-left items-center flex gap-6 text-[#0DD180] text-[43px] md:text-[56px] font-normal permanent-marker mb-12">
                        Why Brazil<img src="/assets/img-icon-brazil-flag.svg" alt="Brazil Flag" />

                    </h2>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white text-[17px]  leading-relaxed">

                        {/* Left Column */}
                        <div className="space-y-8">
                            <p className="font-light text-[15px] text-[#797A88] leading-8">
                                There’s a reason everybody wants to watch Brazil play. The English may have plenty of heart, the Germans might be tactically solid, and the Argentinians know how to get the job done, but nobody plays like the Brazilians.                         </p>

                            <p className="font-light text-[15px] text-[#797A88] leading-8 ">
                                As a child, Nilio was obsessed with Ronaldinho, a Brazilian player nicknamed ‘the magician’ who could do things with a football that left you scratching your head in amazement. Ronaldinho was not only an astonishingly successful footballer, he played with a dazzling style that anybody who ever saw him will never forget - and an enormous smile on his face while doing it all.                        </p>

                            <img src="/assets/img-what-is-brazilian-football.png" className="w-11/12 m-auto mt-10" alt="" />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            <p className="font-light text-[15px] text-[#797A88]  leading-8 ">
                                Nilio chose to base his football coaching and business principles around the Brazilian way of playing because it instils joy and encourages children to think and play more creatively. Children don’t want to be constrained by excess tactics and safe football. They want to play like Ronaldinho.                        </p>

                            <img src="/assets/img-what-is-brazilian-football-for-kids.png" className="w-11/12 m-auto mt-10 md:block hidden" alt="" />

                        </div>
                    </div>
                </div>
                <div className="mt-10 max-w-[1240px] m-auto">
                    <h2 className="text-left items-center md:flex gap-6 text-[#00A6E3] text-[48px] md:text-[56px] font-normal permanent-marker mb-12">
                        Style of play<img src="/assets/football.png" alt="Brazil Flag" />
                    </h2>
                    <span className="text-[#797A88] block text-[22px] recline font-bold italic mt-2 md:mt-0">“Football is happiness. It's a dance. It's a true party,” - Pelé.</span>
                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white text-[17px] mt-10 leading-relaxed">

                        {/* Left Column */}
                        <div className="space-y-8">
                            <p className="font-light text-[15px] text-[#797A88] leading-8">
                                Iconic Brazilian footballer, Pelé, knew all about Ginga football and the rhythm it has its roots in. Ginga translates literally as ‘to sway’, and anybody who ever saw Ronaldinho swaying majestically into the penalty area will know exactly what we mean.                            </p>

                            <p className="font-light text-[15px] text-[#797A88] leading-8 ">
                                Ginga is all about creativity and having fun with the ball at your feet. At Samba Soccer Schools, those two principles are at the core of everything we do. We're not doing something wrong if children don’t love playing football.                              </p>
                            <p className="font-light text-[15px] text-[#797A88] leading-8 ">
                                Whether your child is completely new to football or has been playing for years and just wants to experience a change of style, our coaches provide a Brazilian toolbox of core skills and 1v1 tricks that they can use to create space and dance around defenders.
                            </p>


                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            <p className="font-light text-[15px] text-[#797A88] leading-8 ">
                                Our syllabus contains more than 1000 ways to move a football, from the basic ones taught on Day 1 to the complicated Ronaldinho-eqse tricks that take years to fully perfect. We’ll equip your child with everything needed to feel confident on the ball in tight spaces and help them make split-second decisions under pressure with and without the ball.                                                      </p>
                            <p className="font-light text-[15px] text-[#797A88] leading-8 ">
                                When you put it all together, your child emerges playing entertaining, unpredictable, attack-minded football that will wow everybody watching - but above all, they’ll have a great time while doing it.
                            </p>

                        </div>
                      <img src="/assets/img-what-is-brazilian-football-for-kids.png" className="w-11/12 m-auto  block md:hidden" alt="" />

                    </div>
                </div>
            </div>


        </section>
        
        </>
    );
};

export default WhyBrazil;
