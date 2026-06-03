
const Prospectus = () => {
    return (
        <section className=" bg-cover bg-top  py-[50px] text-white flex items-center relative overflow-hidden"
            style={{ backgroundImage: `url('/assets/Prospectus.png')` }}>
            <div className="container mx-auto px-4 text-white">
                <div className="max-w-[605px]">

                    <h4 className="extra-small recline text-white">The Prospectus</h4>
                    <p >Ready to learn more? Download our prospectus, which covers everything you need to know if you’re considering starting a franchise with Samba Soccer Schools.</p>
                    <button className="poppins mt-4 bg-[#FFDE14] text-[16px] text-[#042C89] font-bold rounded-full p-4 py-2.5">Donwload prospectus</button>

                </div>
            </div>
        </section>
    )
}

export default Prospectus
