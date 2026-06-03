import { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    postcode: "",
    childName: "",
    age: "",
    dateOfParty: "",
    package: "gold",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-2xl shadowBox p-8 space-y-5"
    >
      {/* First Name */}
      <div>
        <label className="text-[#101014] text-[16px]">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Surname */}
      <div>
        <label className="text-[#101014] text-[16px]">Surname</label>
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-[#101014] text-[16px]">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-[#101014] text-[16px]">Telephone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Telephone Number"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Postcode */}
      <div>
        <label className="text-[#101014] text-[16px]">Postcode</label>
        <input
          type="text"
          name="postcode"
          placeholder="Postcode"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Child Name */}
      <div>
        <label className="text-[#101014] text-[16px]">Name of child</label>
        <input
          type="text"
          name="childName"
          placeholder="Name of child"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Age */}
      <div>
        <label className="text-[#101014] text-[16px]">Age of child</label>
        <input
          type="number"
          name="age"
          placeholder="Age of child"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Date of Party */}
      <div>
        <label className="text-[#101014] text-[16px]">Date of party</label>
        <input
          type="text"
          name="dateOfParty"
          placeholder="dd/mm/yyyy"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Package */}
      <div>
        <label className="text-[#101014] text-[16px] block mb-2">
          Which package are you interested in?
        </label>
        <div className="flex gap-6">
          {["gold", "silver"].map((pkg) => (
            <label key={pkg} className="flex items-center gap-2">
              <input
                type="radio"
                name="package"
                value={pkg}
                defaultChecked={pkg === "gold"}
                onChange={handleChange}
                className="accent-green-500"
              />
              {pkg.charAt(0).toUpperCase() + pkg.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-[#101014] text-[16px]">Message</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg border border-[#D0D5DD] px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#0DD180] hover:bg-green-600 text-white font-bold py-3 text-[18px] rounded-full transition"
      >
        Send
      </button>
    </form>
  );
};

export default EnquiryForm;