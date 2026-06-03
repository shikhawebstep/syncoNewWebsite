import React from 'react'
import { useState } from "react";
const countries = [
    {
        code: "GB",
        name: "United Kingdom",
        dialCode: "+44",
        flag: "/assets/ukFlag.png",
    },
    {
        code: "US",
        name: "United States",
        dialCode: "+1",
        flag: "/assets/ukFlag.png",
    },
    {
        code: "IN",
        name: "India",
        dialCode: "+91",
        flag: "/assets/ukFlag.png",
    },
];
const EnquireToday = () => {
    const link = "sharelink.com/get/sff323fg";
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // UK default
    const [phone, setPhone] = useState("");
    return (
        <section className="py-[50px] ">
            <div className="container">

                <div className='max-w-[900px] m-auto text-[#042C89] text-center'>
                    <p className='text-[20px] leading-[30px] text-[#042C89] font-semibold px-[6%]'>To thank you for your continued faith in us, Samba Soccer Schools now has a loyalty points scheme. We’re offering you points for every time you use a service with us that can be redeemed against various rewards - such as Samba Soccer clothing, balls, etc, along with other services.
                    </p>
                    <p className='text-[20px] leading-[30px] text-[#042C89] font-semibold px-[6%] py-8'>
                        We understand that the last few years haven’t been easy for anybody, which is why we’re so happy to give a little back to our loyal customers who have helped us grow into the successful business that we are today.
                    </p>


                </div>
                <div className='mx-auto  text-center'>
                    <div className='mx-auto w-full mb-10 '>
                        <img src="/assets/LoyaltyImg.png" className='w-full mx-auto' alt="" />
                    </div>
                    <h4 className="text-3xl lg:text-4xl recline  font-bold text-blue-900 recline">
                        How does the loyalty scheme work?
                    </h4>
                    <p className='text-[20px] leading-[30px] text-[#5F5F6D] font-normal px-[11%] pt-10 py-4'>
                        The loyalty scheme couldn’t be any easier. We’ll give you points every time you use one of our services, which could be as simple as filling out a survey or as big as booking a birthday party for your child with us.
                    </p>
                     <p className='text-[20px] leading-[30px] text-[#5F5F6D] font-normal px-[11%] py-4'>These points are accumulated over time and then redeemed against our products or services. Basically, continue using Samba Soccer Schools just as you always have done, and you’ll see some handsome rewards stacking up in no time. It’s just our way of saying thank you.  </p>
                      <p className='text-[20px] leading-[30px] text-[#5F5F6D] font-normal px-[11%] py-4'>You can easily keep track of your loyal points account through your individual Parent Connect log-in, which will keep you up-to-date on how many points you’ve accumulated, what rewards are available to you right now, and what lies just a little further down the road with a few more points.   </p>
                </div>

            </div>
        </section>
    )
}

export default EnquireToday
