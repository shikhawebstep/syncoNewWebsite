import React, { useState } from "react";
import bannerImg from "/assets/howWork.png";
import { useToast, Toast } from "../../Common/Toast";

const SocialImages = [
    '/assets/Facebook.png',
    '/assets/LinkendIn.png',
    '/assets/Twitter.png',
    '/assets/Instagram.png',
    '/assets/YouTube.png',
];



const ContactUsMain = () => {
    const { toasts, addToast, removeToast } = useToast();

    const [formData, setFormData] = useState({
        name: '',
        phone: '+44',
        email: '',
        notes: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters.';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telephone is required.';
        } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Enter a valid phone number.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Enter a valid email address.';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            addToast('Please fix the errors before submitting.', 'warning');
            return;
        }

        setLoading(true);
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                notes: formData.notes,
            });

            const response = await fetch("https://api.grabbite.com/api/open/contact-us/create", {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            });

            const result = await response.json();

            if (!response.ok) {
                let errorMsg = result.message || "Something went wrong. Please try again later.";
                if (result.error && typeof result.error === 'object') {
                    const firstKey = Object.keys(result.error)[0];
                    errorMsg = result.error[firstKey];
                }
                addToast(errorMsg, 'error');
                return;
            }

            addToast('Your message has been sent successfully! 🎉', 'success');
            setFormData({ name: '', phone: '', email: '', notes: '' });
            setErrors({});
        } catch (error) {
            console.error(error);
            addToast('Something went wrong. Please try again later.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const inputClass = (field) =>
        `w-full bg-[#F4F6F8] rounded-lg px-4 py-3 outline-none border transition
        ${errors[field] ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-[#0DD180]'}`;

    return (
        <>
            <Toast toasts={toasts} removeToast={removeToast} />

            <section className="md:pb-[100px] pb-15 -mt-[100px] z-9999 relative relative min-h-[900px] ">
                <div className="container   mx-auto max-w-[1200px]  md:pb-[80px] pb-15 ">
                    <div className="md:flex justify-center gap-10 items-stretch">

                        {/* LEFT CARD */}
                        <div
                            className="md:w-[45%] rounded-3xl shadow-lg md:p-10 p-6 flex flex-col justify-center"
                            style={{ backgroundImage: `url(${bannerImg})` }}
                        >
                            <div className="bg-white md:p-10 p-5 rounded-3xl">
                                <div className="space-y-8">
                                    <div className="gap-4">
                                        <img src="/assets/marker-02.png" className="w-8 h-8 mb-3 md:w-11 md:h-11" alt="" />
                                        <p className="text-[#042C89] font-semibold text-[13px] md:text-sm leading-relaxed">
                                            Samba Soccer Schools, 65–69 Shelton Street,<br className="md:block hidden" />
                                            Covent Garden, London WC2H 9HE
                                        </p>
                                    </div>
                                    <div className="gap-4">
                                        <img src="/assets/mail-03.png" className="w-8 h-8 mb-3 md:w-11 md:h-11" alt="" />
                                        <p className="text-[#042C89] font-semibold break text-[13px] md:text-sm leading-relaxed">
                                            admin@sambasoccerschools.com
                                        </p>
                                    </div>
                                    <div className="gap-4">
                                        <img src="/assets/globe-01.png" className="w-8 h-8 mb-3 md:w-11 md:h-11" alt="" />
                                        <p className="text-[#042C89] font-semibold text-[13px] md:text-sm leading-relaxed">
                                            020 7205 2723
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-10">
                                    {SocialImages.map((src, index) => (
                                        <div key={index} className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
                                            <img src={src} alt="social icon" className="w-12 h-12 object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="md:w-[55%] md:mt-0 mt-20 bg-white rounded-3xl shadow-lg md:p-10 p-5">
                            <form className="space-y-6" onSubmit={handleSubmit} noValidate>

                                {/* Name */}
                                <div>
                                    <label className="block text-[14px] font-medium mb-2">Name<span className="text-red-500 ml-0.5">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className={inputClass('name')}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-[14px] font-medium mb-2">Telephone<span className="text-red-500 ml-0.5">*</span></label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Telephone"
                                        className={inputClass('phone')}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[14px] font-medium mb-2">Email Address<span className="text-red-500 ml-0.5">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className={inputClass('email')}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-[14px] font-medium mb-2">Message:</label>
                                    <textarea
                                        rows={5}
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        placeholder="Enter a message..."
                                        className="w-full bg-[#F4F6F8] rounded-lg px-4 py-3 outline-none resize-none border border-transparent focus:border-[#0DD180] transition"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#0DD180] text-[18px] text-white font-semibold py-3 rounded-full hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send'}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                {/* Map */}
                <div className="md:block hidden container border-3 border-[#d8e0e7]  bg-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9214479842963!2d-0.1263806230158534!3d51.514657110172664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fbe6a0df269%3A0xe23fee65e70ca18a!2sSamba%20Soccer%20Schools%20London!5e0!3m2!1sen!2sin!4v1776841150597!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="w-full h-[350px] md:h-[400px]"
                    />
                </div>
                <div className="mblock md:hidden bg-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9214479842963!2d-0.1263806230158534!3d51.514657110172664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fbe6a0df269%3A0xe23fee65e70ca18a!2sSamba%20Soccer%20Schools%20London!5e0!3m2!1sen!2sin!4v1776841150597!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="w-full h-[350px] md:h-[400px]"
                    />                </div>

            </section>
        </>
    );
};

export default ContactUsMain;