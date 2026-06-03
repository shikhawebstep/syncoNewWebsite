import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const featuredBlog = {
    img: "/assets/img-blog-1.png",
    title: "How to Plan Football Sessions for Children?",
    desc: "Planning a football session for kids can seem daunting but it doesn't have to be. The following article will provide a...",
  };

  const blogs = [
    {
      img: "/assets/img-blog-2.png",
      title: "Football Skills to Practice in the Playground",
      desc: "Every kid loves pulling off fancy tricks and skills and there's no better place to try these out than on the playgroun...",
    },
    {
      img: "/assets/img-blog-3.png",
      title: "5 Ways The SSS Skills Tutorial App Can Improve Your Child's Football Skills",
      desc: "The Samba Soccer Skills Tutorial App is our home for weekly skills and tutorials. The SSS app...",
    },
    {
      img: "/assets/img-blog-4.png",
      title: "Six ways to manipulate the ball with a left foot or you know",
      desc: "Everyone loves scoring goals and there's no position that is focussed more on scoring goals than a striker. However, t...",
    },
    {
      img: "/assets/img-blog-5.png",
      title: "5 Important Attributes the Best Strikers Need",
      desc: "Everyone loves scoring goals and there's no position that is focussed more on scoring goals than a striker. However, t...",
    },
  ];

  return (
    <section className="blog-section py-10 md:py-12 lg:py-16">
      <div className="container">
        {/* Heading */}
        <div className="text-center md:max-w-[686px] m-auto px-4 sm:px-0">
          <h3 className="blue-text text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
            Check out our <span className="text-[#0DD180] relative">blogs</span>
          </h3>
          <p className="font-medium md:text-[#797A88] text-[#042C89] text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] py-3 md:py-4">
            Our weekly blog brings you everything you need to know about
            children's football training in London, as well as tips and in-depth
            footballing breakdowns that can help your child reach the next level.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 m-auto max-w-[1280px]">
          {/* Featured Blog */}
          <div className="left-img">
            <div className="inner-box">
              <img
                src={featuredBlog.img}
                alt={featuredBlog.title}
                className="w-full h-auto rounded-xl"
              />
              <h4 className="recline mobilepoppins font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] py-3 md:py-4">
                {featuredBlog.title}
              </h4>
              <p className="text-[#5F5F6D] text-[13px] sm:text-[14px] md:text-[15px]">
                {featuredBlog.desc}
              </p>
                <button className="bg-[#042C89] block md:block text-white text-[11px] sm:text-[12px] md:text-[14px] mt-2 md:hidden block rounded-full poppins py-1.5 px-4">
                    Read More
                  </button>
            </div>
          </div>

          {/* Other Blogs */}
          <div className="right-box space-y-4 md:space-y-6">
            {blogs.map((blog, index) => (
              <div
                className="bolg-box md:flex flex-row items-start sm:items-center gap-3 md:gap-4"
                key={index}
              >
                <div className="flex-shrink-0">
                  <img
                    className=" sm:w-[130px] md:w-[180px] lg:w-[230px] h-auto rounded-lg"
                    src={blog.img}
                    alt={blog.title}
                  />
                </div>
                <div className="flex-1 min-w-0 mt-4 md:mt-0">
                  <h6 className="text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] blue-text poppins font-semibold leading-[28px]">
                    {blog.title}
                  </h6>
                  <p className="text-[13px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#5F5F6D] pt-1 md:pt-4">
                    {blog.desc}
                  </p>
                  <button className="bg-[#042C89] text-white text-[13px] sm:text-[14px] md:text-[14px] mt-2 md:hidden block rounded-full poppins py-1.5 px-4">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
         
        </div>

        {/* Button */}
        <div className="text-center flex justify-center mt-8 md:mt-12 lg:mt-15">
          <button
            onClick={() => navigate("/blogs")}
            className="bg-[#042C89] recline hidden md:block text-white px-5 md:px-6 py-2.5 md:py-3 capitalize rounded-3xl text-[14px] md:text-[16px] shadow-md"
          >
            Check out our blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;