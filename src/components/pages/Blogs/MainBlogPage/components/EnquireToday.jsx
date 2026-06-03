import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const blogs = [
    {
        id: 1,
        image: "/assets/img-blog-sm-1.png",
        title: "How to Plan Football Sessions for Children?",
        description:
            "Planning a football session for kids can seem daunting but it doesn’t have to be. The following article will provide a...",
    },
    {
        id: 2,
        image: "/assets/img-blog-sm-2.png",
        title:
            "Football Skills to Practice in the Playground",
        description:
            "Every kid loves pulling off fancy tricks and skills and there’s no better place to try these out than on the playgroun...",
    },
    {
        id: 3,
        image: "/assets/img-blog-sm-3.png",
        title: "5 Ways The SSS Skills Tutorial App Can Improve Your Child’s Football Skills",
        description:
            "The Samba Soccer Skills Tutorial App is our home for weekly skills and tutorials. The SSS app...",
    },
    {
        id: 4,
        image: "/assets/img-blog-sm-4.png",
        title: "5 Important Attributes the Best Strikers Need",
        description:
            "Everyone loves scoring goals and there’s no position that is focussed more on scoring goals than a striker. However, t...",
    },
    {
        id: 5,
        image: "/assets/img-blog-sm-1.png",
        title: "How to Plan Football Sessions for Children?",
        description:
            "Planning a football session for kids can seem daunting but it doesn’t have to be. The following article will provide a...",
    },
    {
        id: 6,
        image: "/assets/img-blog-sm-2.png",
        title:
            "Football Skills to Practice in the Playground",
        description:
            "Every kid loves pulling off fancy tricks and skills and there’s no better place to try these out than on the playgroun...",
    },
    {
        id: 7,
        image: "/assets/img-blog-sm-3.png",
        title: "5 Ways The SSS Skills Tutorial App Can Improve Your Child’s Football Skills",
        description:
            "The Samba Soccer Skills Tutorial App is our home for weekly skills and tutorials. The SSS app...",
    },
    {
        id: 8,
        image: "/assets/img-blog-sm-4.png",
        title: "5 Important Attributes the Best Strikers Need",
        description:
            "Everyone loves scoring goals and there’s no position that is focussed more on scoring goals than a striker. However, t...",
    },
    {
        id: 9,
        image: "/assets/img-blog-sm-1.png",
        title: "How to Plan Football Sessions for Children?",
        description:
            "Planning a football session for kids can seem daunting but it doesn’t have to be. The following article will provide a...",
    },
    {
        id: 10,
        image: "/assets/img-blog-sm-2.png",
        title:
            "Football Skills to Practice in the Playground",
        description:
            "Every kid loves pulling off fancy tricks and skills and there’s no better place to try these out than on the playgroun...",
    },
    {
        id: 11,
        image: "/assets/img-blog-sm-3.png",
        title: "5 Ways The SSS Skills Tutorial App Can Improve Your Child’s Football Skills",
        description:
            "The Samba Soccer Skills Tutorial App is our home for weekly skills and tutorials. The SSS app...",
    },
    {
        id: 12,
        image: "/assets/img-blog-sm-4.png",
        title: "5 Important Attributes the Best Strikers Need",
        description:
            "Everyone loves scoring goals and there’s no position that is focussed more on scoring goals than a striker. However, t...",
    },
];
const BLOGS_PER_PAGE = 4;

const EnquireToday = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    const currentBlogs = blogs.slice(
        startIndex,
        startIndex + BLOGS_PER_PAGE
    );
    return (
        <section className="py-16">
            <div className="container">
                <h2 className="text-[28px] font-semibold text-[#282829] mb-10">
                    All blog posts
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {currentBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-[#FDFDFF]   flex flex-col overflow-hidden"
                        >
                            {/* Image */}
                            <div className="max-h-[500px] w-full overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 px-0 py-6">
                                <p className="text-[16px] text-[#5F5F6D] mb-4">Alan Whitten • Jul 17</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-[22px]  font-bold text-[#042C89] leading-snug mb-3">
                                        {blog.title}
                                    </span>
                                    <img src="/assets/redicrectRight.png" alt="" />
                                </div>
                                <p className="text-[16px] text-[#87838D] leading-relaxed mb-6">
                                    {blog.description}
                                </p>

                                {/* Button pinned to bottom */}
                                <div className="mt-auto flex gap-2 items-center">
                                    <button className="bg-[#FFDE1433] text-[#042C89] text-[14px] rounded-full px-4 py-1  font-medium">
                                        Parents
                                    </button>
                                    <button className="bg-[#0DD18033] text-[#042C89] text-[14px] rounded-full px-4 py-1  font-medium">
                                        Services
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center mt-10 border-t border-[#EAECF0] pt-10 justify-between gap-4">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className={`text-[14px] ${currentPage === 1
                            ? "text-[#C3C4CC] cursor-not-allowed"
                            : "text-[#042C89]"
                            }`}
                    >
                       
                       <FontAwesomeIcon icon={faArrowLeft} />  Previous
                    </button>
                    <div>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                            (page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-8 h-8 rounded-lg text-[14px] poppins font-medium ${currentPage === page
                                        ? "bg-[#0DD180] text-white"
                                        : "text-[#042C89]"
                                        }`}
                                >
                                    {page}
                                </button>
                            )
                        )}
                    </div>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className={`text-[14px] ${currentPage === totalPages
                            ? "text-[#C3C4CC] cursor-not-allowed"
                            : "text-[#042C89]"
                            }`}
                    >
                        Next  <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                {/* Next */}



            </div>
        </section>
    );
};

export default EnquireToday;
