import { useState } from "react";
import { useToast, Toast } from "../../../Common/Toast";

const ChildEnquiryForm = () => {
  const { toasts, addToast, removeToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    childDob: "",
    medicalInformation: "",
    parentFullName: "",
    email: "",
    phoneNumber: "",
    postcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.childName.trim()) newErrors.childName = "Child name is required";
    if (!formData.childAge) newErrors.childAge = "Child age is required";
    if (!formData.childDob) newErrors.childDob = "Child date of birth is required";
    if (!formData.medicalInformation.trim()) newErrors.medicalInformation = "Medical information is required";
    if (!formData.parentFullName.trim()) newErrors.parentFullName = "Parent full name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Must be at least 10 digits";
    }
    
    if (!formData.postcode.trim()) newErrors.postcode = "Postcode is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        ...formData,
        childAge: Number(formData.childAge),
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const response = await fetch("https://api.grabbite.com/api/open/club-enquiry/create", requestOptions);
      const result = await response.json();

      if (response.ok) {
        addToast("Enquiry sent successfully!", "success");
        setFormData({
          childName: "",
          childAge: "",
          childDob: "",
          medicalInformation: "",
          parentFullName: "",
          email: "",
          phoneNumber: "",
          postcode: "",
        });
        setErrors({});
      } else {
        addToast(result.message || "Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      console.error(error);
      addToast("Failed to send enquiry. Please check your connection.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-2xl shadowBox p-8 space-y-5"
    >
      <Toast toasts={toasts} removeToast={removeToast} />
      
      {/* Child Name */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Child Name <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="text"
          name="childName"
          value={formData.childName}
          placeholder="Child Name"
          onChange={handleChange}
          className={`w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 ${errors.childName ? 'border border-red-500 focus:ring-red-200' : 'focus:ring-green-400'}`}
        />
        {errors.childName && <span className="text-red-500 text-xs mt-1 block">{errors.childName}</span>}
      </div>

      {/* Age */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Age of child <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="number"
          name="childAge"
          value={formData.childAge}
          placeholder="Age of child"
          onChange={handleChange}
          className={`w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 ${errors.childAge ? 'border border-red-500 focus:ring-red-200' : 'focus:ring-green-400'}`}
        />
        {errors.childAge && <span className="text-red-500 text-xs mt-1 block">{errors.childAge}</span>}
      </div>

      {/* DOB */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Child Date of Birth <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="date"
          name="childDob"
          value={formData.childDob}
          onChange={handleChange}
          className={`w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 ${errors.childDob ? 'border border-red-500 focus:ring-red-200' : 'focus:ring-green-400'}`}
        />
        {errors.childDob && <span className="text-red-500 text-xs mt-1 block">{errors.childDob}</span>}
      </div>

      {/* Medical Info */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Medical Information <span className="text-red-500 ml-0.5">*</span>
        </label>
        <textarea
          name="medicalInformation"
          value={formData.medicalInformation}
          placeholder="Medical Information"
          rows="3"
          onChange={handleChange}
          className={`w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none resize-none focus:ring-2 ${errors.medicalInformation ? 'border border-red-500 focus:ring-red-200' : 'focus:ring-green-400'}`}
        />
        {errors.medicalInformation && <span className="text-red-500 text-xs mt-1 block">{errors.medicalInformation}</span>}
      </div>

      {/* Parent Name */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Parent Full Name <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="text"
          name="parentFullName"
          value={formData.parentFullName}
          placeholder="Parent Full Name"
          onChange={handleChange}
          className={`w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 ${errors.parentFullName ? 'border border-red-500 focus:ring-red-200' : 'focus:ring-green-400'}`}
        />
        {errors.parentFullName && <span className="text-red-500 text-xs mt-1 block">{errors.parentFullName}</span>}
      </div>

      {/* Email */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Email <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          className={`w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 ${errors.email ? 'border border-red-500 focus:ring-red-200' : 'focus:ring-green-400'}`}
        />
        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
      </div>

      {/* Phone */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Telephone Number <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Telephone Number"
          onChange={handleChange}
          className={`w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 ${errors.phoneNumber ? 'border border-red-500 focus:ring-red-200' : 'focus:ring-green-400'}`}
        />
        {errors.phoneNumber && <span className="text-red-500 text-xs mt-1 block">{errors.phoneNumber}</span>}
      </div>

      {/* Postcode */}
      <div>
        <label className="text-[#101014] poppins text-[16px]">
          Postcode <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          placeholder="Postcode"
          onChange={handleChange}
          className={`w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 ${errors.postcode ? 'border border-red-500 focus:ring-red-200' : 'focus:ring-green-400'}`}
        />
        {errors.postcode && <span className="text-red-500 text-xs mt-1 block">{errors.postcode}</span>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0DD180] hover:bg-green-600 text-white font-bold poppins py-3 text-[18px] rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ChildEnquiryForm;