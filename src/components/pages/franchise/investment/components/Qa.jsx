

const Qa = () => {

    const faqData = [
        {
            title: "What are the service management costs involved?",
            description:
                "Our service management rate is 10%. Keeping these costs as low as possible is vital for economic growth. We want you to grow and thrive without feeling like you have a boot on your neck.",
        },
        {
            title: "How much do I need as an operating ",
            title2: "budget to start with? ",
            description:
                "While there are enormous differences around the country regarding costs, we recommend a £2,000 to £3,000 monthly operating budget. This allows you to maintain the same high standards that Samba Soccer Schools has come to represent.",
        },
        {
            title: "How can I raise the investment needed?",
            description:
                "We’re often asked about investment raising, and you can be sure we’ll work with you as much as we can to make it happen. Although most people have some savings and can readily invest, others may borrow from friends and family to avoid interest rates from banks.\n\nAlternatively, we can help you secure the initial investment through the government start-up scheme, which is paid back over 1–5 years — allowing your business to become profitable, while you repay the grant in the same period.",
        },
    ];

    return (
        <section className="md:pb-16 py-8 pt-[180px] md:pt-50">
            <div className="container mx-auto md:px-4">
                <div className="w-full flex justify-center md:py-10 md:px-4">
                    <div className="relative max-w-[890px] w-full bg-white rounded-2xl shadowBox md:p-10 p-6 pt-10">

                        <div className="absolute w-full md:-top-55 -top-50 left-1/2 -translate-x-1/2">
                            <div className="md:max-w-[300px] max-w-[270px] m-auto"><img src="/assets/qa.png" alt="" /></div>

                        </div>

                        <div className="space-y-10 text-center mt-0 px-3 md:px-0">
                            {faqData.map((item, index) => (
                                <div key={index}>
                                    <h4 className="text-emerald-500 pxImp24 extra-small leading-[40px] recline green-text text-lg md:text-2xl font-semibold pb-3">
                                        {item.title}<br/>{item?.title2}
                                    </h4>

                                    <p className="text-[#5F5F6D] md:text-[15px] text-[14px] font-medium leading-relaxed whitespace-pre-line text-sm md:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qa
