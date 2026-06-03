import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const POSTCODES = [
    "SW1A 1AA",
    "SW1A 2AA",
    "EC1A 1BB",
    "E1 6AN",
    "W3 7HD",
    "SE1 8SD",
    "NW1 6RJ",
];

export default function PostcodeSelect({ onSelect }) {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    const filtered = POSTCODES.filter((p) =>
        p.toLowerCase().includes(query.toLowerCase())
    );

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className="relative w-full md:min-w-[320px]">
            <div className="md:flex hidden flex-col gap-3  md:flex-row md:items-center">
                {/* Manual postcode input */}
                <input
                    type="text"
                    placeholder="Enter your post code"
                    className="w-fit rounded-full border border-[#E1E2E6] bg-white px-5 py-3 text-sm placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <span className="text-center text-sm text-gray-500 md:px-2">
                    Or
                </span>

                {/* Select postcode */}
                <div className="relative w-full min-w-80">
                    <input
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setOpen(true);
                        }}
                        onFocus={() => setOpen(true)}
                        placeholder="Select a Venue"
                        className="w-full rounded-full border border-[#E1E2E6] bg-white px-5 py-3 pr-10 text-sm placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <ChevronDown
                        size={22}
                        className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transition ${open ? "rotate-180" : ""
                            }`}
                    />

                    {open && filtered.length > 0 && (
                        <ul className="absolute z-40 mt-2 max-h-48 w-full overflow-auto rounded-lg border border-[#E1E2E6] bg-white p-2 shadow">
                            {filtered.map((postcode) => (
                                <li
                                    key={postcode}
                                    onClick={() => {
                                        setQuery(postcode);
                                        setOpen(false);
                                        onSelect?.(postcode);
                                    }}
                                    className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
                                >
                                    {postcode}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button className="rounded-full bg-[#0DD180] px-6 py-3 text-[18px] font-semibold text-white">
                    Search
                </button>
            </div>
     <div className="md:hidden w-full max-w-md mx-auto">
  {/* White pill container */}
  <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col gap-3">
    
    {/* Inputs row */}
    <div className="flex gap-3">
      {/* Postcode */}
      <input
        type="text"
        placeholder="Post code"
        className="w-1/3 rounded-full border border-[#E1E2E6] bg-white px-5 py-3 text-sm placeholder:text-[#9A9AA5] focus:outline-none"
      />

      {/* Venue select */}
      <div className="relative w-2/3">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Or Select a Venue"
          className="w-full rounded-full border border-[#E1E2E6] bg-white px-5 py-3 pr-10 text-sm placeholder:text-[#9A9AA5] focus:outline-none"
        />

        <ChevronDown
          size={20}
          className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition ${
            open ? "rotate-180" : ""
          }`}
        />

        {open && filtered.length > 0 && (
          <ul className="absolute z-40 mt-2 w-full max-h-48 overflow-auto rounded-xl border border-[#E1E2E6] bg-white shadow">
            {filtered.map((postcode) => (
              <li
                key={postcode}
                onClick={() => {
                  setQuery(postcode);
                  setOpen(false);
                  onSelect?.(postcode);
                }}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
              >
                {postcode}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

    {/* Search button */}
    <button className="w-full rounded-full bg-[#0DD180] py-3 text-[16px] font-semibold text-white">
      Search
    </button>
  </div>
</div>

        </div>
    );
}
