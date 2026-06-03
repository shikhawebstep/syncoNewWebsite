import React from "react";

const CaseStudy = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">

                {/* Heading */}
                <div className="text-center md:mb-14 mb-4">
                    <h2 className="md:text-[64px] leading-[1.1] text-[42px] recline">
                        <span className=" text-[#0DD180] permanent-marker">
                            Case Study
                        </span> <br className="md:hidden block" />
                        <span className="text-[#00A6E3]"> SSS Essex</span>
                    </h2>
                </div>

                {/* Row 1 */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center md:mb-20 mb-10">
                    {/* Text */}
                    <div>
                        <p className="text-[#5F5F6D] text-[14px] mb-6 leading-[24px]">
                            Need an example? Look no further than our SSS franchise in Essex, which opened just recently. Raz approached us in 2022 to franchise with us, and it’s safe to say it’s been a roaring success ever since. Here’s his experience in his own words.
                        </p>

                        <p className="text-[#5F5F6D] text-[14px] mb-6 leading-[24px]">
                            My journey with Samba Soccer Schools started in a crazy, but amazing way. One day I signed my son up to a free trial at Samba Soccer Schools in Clayhall. I wanted my son to gain some better football experience as he’d previously joined up with another football school which he didn’t enjoy - and I’ve always been a massive fan of the Brazil national team. We went and wow did he enjoy it.                         </p>


                        <p className="text-[#5F5F6D] text-[14px] mb-5 leading-[24px]">
                            Afterwards, he came back and said ‘dad you should try and do something like this. You’re good with kids and you love teaching football.’ My first reaction was a firm no, but after some more convincing, I made contact and eventually had a meeting with the founder Nilio and we just hit it off. Before I knew it, I was signing up and buying a franchise in Essex.
                        </p>


                    </div>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/assets/img-faq-6.png"
                            alt="SSS Essex"
                            className="relative rounded-[28px] w-full object-cover"
                        />
                    </div>
                </div>

                {/* Row 2 */}

                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-10 md:mb-0 mb-10 items-center">
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <img
                            src="/assets/img-faq-1.png"
                            alt="Coach training"
                            className="relative rounded-[28px] w-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-2 md:text-right">


                        <p className="text-[#5F5F6D] text-[14px] mb-6 leading-[24px]">
                            At first it wasn’t easy, but after a while I got the hang of it and then the magic started. Every time I was in a class I felt like a different person and seeing the kids really take to me and enjoying the classes was the best feeling in the world. I love being a part of this and I can honestly say it’s the best thing I’ve ever done. To go from a sales background to becoming a franchise owner and a coach is just an amazing feeling.
                        </p>

                        <p className="text-[#5F5F6D] text-[14px] mb-6 leading-[24px]">
                            My classes started in January and I was able to grow the business from a 0 client base to 140 plus students in the space of a year. Certainly not easy and took a lot of work on my part, but I had a lot of assistance from Nilio and his team. Truly, they've been amazing and have really cared and helped with every step and assisted in making decisions, advising and constant communication. Ethan has been a real gentleman and the most passionate guy I have ever seen in his job and truly loves what he does.
                        </p>

                        <p className="text-[#5F5F6D] text-[14px] leading-[24px]">
                            Before all of this I was earning a decent figure which allowed me to live a very comfortable life.  But I didn’t have time for my family and was working too much, always thinking of earning more and more. Being a salesman can turn you into a machine where all you think of is money. I knew I needed a change because it was affecting my family life but when your comfortable you’re always reluctant.
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                    {/* Text */}
                    <div>
                        <p className="text-[#5F5F6D] text-[14px] mb-6 leading-[24px]">
                            I decided to do this for the right reasons because I wanted to do better for my family and to help the kids in my local community whose parents do not have time to take them to play football. I wanted to assist those families and make a change for them in the same way I have done for my son. I am very proud to be involved in this and I can honestly say I wouldn’t change this for the world.
                        </p>

                        <p className="text-[#5F5F6D] text-[14px] mb-6 leading-[24px]">
                            If all of that sounds good to you, then let’s make it happen. Franchising with Samba Soccer Schools is your ticket to jumping to the head of the business world queue by using our renowned, proven system and methodology to jump-start your own football coaching school and avoid all these needless early headaches.                       </p>


                        <p className="text-[#5F5F6D] text-[14px] mb-5 leading-[24px]">
                            Fill in the form below to signal your interest, and we’ll have someone in touch within 48 hours to talk you through the process and answer any questions you might have.
                        </p>


                    </div>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/assets/img-faq-7.png"
                            alt="SSS Essex"
                            className="relative rounded-[28px] w-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CaseStudy;
