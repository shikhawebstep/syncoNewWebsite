import { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    postcode: "",
    childName: "",
    age: "",
    package: "",
    days: "",
    notes: "",
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
        className="w-full  bg-white rounded-2xl shadowBox p-8 space-y-5"
      >
        {/* Parent Name */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">Parent Full Name</label>
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
          <label className="text-[#101014] poppins text-[16px] font-regular">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">Telephone Number</label>
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
          <label className="text-[#101014] poppins text-[16px] font-regular">London Postcode</label>
          <input
            type="text"
            name="postcode"
            placeholder="London Postcode"
            onChange={handleChange}
            className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Child Name */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">Child Full Name</label>
          <input
            type="text"
            name="childName"
            placeholder="Child Full Name"
            onChange={handleChange}
            className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Age */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">Age of child</label>
          <input
            type="number"
            name="age"
            placeholder="Age of child"
            onChange={handleChange}
            className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Package */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            Which package are you interested in?
          </label>
          <select
            name="package"
            onChange={handleChange}
            className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Choose package</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
          </select>
        </div>

        {/* Days */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular block mb-2">
            Select which day(s) you are available for lessons
          </label>
          <div className="flex gap-6 text-[#101014] poppins text-[16px]">   {["Sat", "Sun", "Mon-Fri"].map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="days"
                  value={day}
                  onChange={handleChange}
                  className="accent-green-500"
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">Notes</label>
          <textarea
            name="notes"
            rows="4"
            placeholder="Enter any supporting notes..."
            onChange={handleChange}
            className="w-full mt-1 rounded-lg border border-[#D0D5DD] px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400"
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

export default EnquiryForm;
