;

export default function FranchiseForm() {
  return (
    <div className="p-10">
      <form className="space-y-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#101014]  poppins mb-1">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            className="w-full px-3 py-2  rounded-md bg-[#F6F6F7] placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        {/* Surname */}
        <div>
          <label htmlFor="surname" className="block text-sm font-medium text-[#101014]  poppins mb-1">
            Surname
          </label>
          <input
            id="surname"
            name="surname"
            type="text"
            placeholder="Surname"
            className="w-full px-3 py-2  rounded-md bg-[#F6F6F7] placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#101014]  poppins mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2  rounded-md bg-[#F6F6F7] placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        {/* Telephone Number */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-[#101014]  poppins mb-1">
            Telephone Number
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="Telephone Number"
            className="w-full px-3 py-2  rounded-md bg-[#F6F6F7] placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        {/* Desired Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-[#101014]  poppins mb-1">
            Desired location of the franchise
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Desired location of the franchise"
            className="w-full px-3 py-2  rounded-md bg-[#F6F6F7] placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        {/* Liquid Capital */}
        <div>
          <label htmlFor="capital" className="block text-sm font-medium text-[#101014]  poppins mb-1">
            How much liquid capital do you have available?
          </label>
          <input
            id="capital"
            name="capital"
            type="text"
            placeholder="How much liquid capital do you have available?"
            className="w-full px-3 py-2  rounded-md bg-[#F6F6F7] placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        {/* How did you hear */}
        <div>
          <label htmlFor="hearAbout" className="block text-sm font-medium text-[#101014]  poppins mb-1">
            How did you hear about our franchise opportunity?
          </label>
          <input
            id="hearAbout"
            name="hearAbout"
            type="text"
            placeholder="How did you hear about our franchise opportunity?"
            className="w-full px-3 py-2  rounded-md bg-[#F6F6F7] placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#101014]  poppins mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#0DD180] hover:bg-green-600 text-white font-bold rounded-full text-[18px] poppins focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Send
        </button>
      </form>
    </div>
  );
}
