
const FranchiseIncome = () => {
    const incomeData = {
        title: {
            green: "How much",
            blue: "can I make through a Samba Soccer Schools franchise?",
        },
        intro:
            "A question we always get. Before we look at some numbers, we need to emphasise that no business is guaranteed success, even with the backing of a proven company like Samba Soccer Schools. Establishing and building a successful franchise takes plenty of hard work and doesn’t happen overnight – we’re just providing you with all the necessary tools and knowledge. What you make of it is up to you.",
        cards: [
            {
                text: "Assumptions (50% gross margin (direct costs) / 50% net profit (indirect costs). In year 2, the net profit margin should be 30%.",
                highlight: true,
            },
            {
                text: "Year 1: 8 classes / 4 venues with 120 students at a revenue of £62k (gross income of £31k) – net income of £15,500.",
            },
            {
                text: "Year 2: 16 classes / 6 venues with 480 students at a revenue of £247k (gross income of £123,811) – net income of £86,667.",
            },
            {
                text: "As you might imagine, things can really scale up from there, and we’re seeing that already with our most successful franchises.",
            },
        ],
    };

    return (
        <section className="w-full income grey-bg py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <div className="max-w-[610px]  m-auto">
                    <h4 className="extra-small md:text-4xl font-bold mb-6">
                        <span className="green-text">{incomeData.title.green} </span>
                        <span className="light-blue-text recline">{incomeData.title.blue}</span>
                    </h4>

                </div>

                <div className="max-w-[875px] -tracking-[0.2px]  m-auto mt-4">
                    <p className="font15 font-medium mx-auto text-[#5F5F6D] text-sm md:text-base leading-[28px] mb-10">
                        {incomeData.intro}
                    </p>
                </div>


                <div className="bg-white rounded-3xl shadow-xl border-t-6 border-[#0DD180] overflow-hidden">
                    {incomeData.cards.map((item, index) => (
                        <div
                            key={index}
                            className={`md:px-8 px-4 py-6 text-center text-[#3E3E47] text-[14px] font-medium ${index % 2 === 0 ? "bg-[#E1E2E6]" : "bg-[#FDFDFF]"
                                }`}
                        >
                            {item.text}
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default FranchiseIncome;
