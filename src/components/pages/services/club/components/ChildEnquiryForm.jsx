import { useState } from "react";

const ChildEnquiryForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    dob: "",
    medicalInfo: "",
    parentName: "",
    email: "",
    phone: "",
    postcode: "",
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
      {/* Child Name */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Child Name
        </label>
        <input
          type="text"
          name="childName"
          placeholder="Child Name"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Age */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Age of child
        </label>
        <input
          type="number"
          name="age"
          placeholder="Age of child"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* DOB */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Child Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Medical Info */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Medical Information
        </label>
        <textarea
          name="medicalInfo"
          placeholder="Medical Information"
          rows="3"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Parent Name */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Parent Full Name
        </label>
        <input
          type="text"
          name="parentName"
          placeholder="Parent Full Name"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Email
        </label>
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
        <label className="text-[#101014] poppins text-[16px]">
          Telephone Number
        </label>
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
        <label className="text-[#101014] poppins text-[16px]">
          Postcode
        </label>
        <input
          type="text"
          name="postcode"
          placeholder="Postcode"
          onChange={handleChange}
          className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#0DD180] hover:bg-green-600 text-white font-bold poppins py-3 text-[18px] rounded-full transition"
      >
        Send
      </button>
    </form>
  );
};

export default ChildEnquiryForm;