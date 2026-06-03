import React, { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const CustomPostcodeInput = ({
  postcodeQuery, setPostcodeQuery, postcodeSuggestions,
  postcodeOpen, setPostcodeOpen, postcodeLoading,
  onSelect, inputClassName, wrapClassName,
  label, required = true
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setPostcodeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setPostcodeOpen]);

  const handleSelect = (pc) => {
    setPostcodeQuery(pc);
    setPostcodeOpen(false);
    onSelect?.(pc);
  };

  return (
    <div ref={wrapperRef} className={`relative ${wrapClassName || "w-full"}`}>
      <input
        type="text"
        value={postcodeQuery}
        onChange={(e) => setPostcodeQuery(e.target.value)}
        onFocus={() => postcodeSuggestions.length > 0 && setPostcodeOpen(true)}
        placeholder="Enter your post code"
        className={inputClassName || "w-full px-4 py-3 rounded-md border border-gray-200 shadow text-[#5F5F6D] placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180]"}
      />
      {postcodeLoading && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs animate-pulse">…</span>
      )}
      {postcodeOpen && postcodeSuggestions.length > 0 && (
        <ul className="absolute z-50 mt-2 max-h-48 w-full overflow-auto rounded-xl border border-[#E1E2E6] bg-white shadow p-1">
          {postcodeSuggestions.map((pc) => (
            <li
              key={pc}
              onClick={() => handleSelect(pc)}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-50 rounded-lg font-medium text-[#34353B] tracking-wide"
            >
              {pc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const CustomVenueInput = ({
  venueQuery, setVenueQuery, venues,
  venueOpen, setVenueOpen, venueLoading,
  onSelect, inputClassName, wrapClassName,
  label, required = true
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setVenueOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setVenueOpen]);

  const handleSelect = (v) => {
    setVenueQuery(v.name);
    setVenueOpen(false);
    onSelect?.(v);
  };

  const filteredVenues = venues.filter(
    (v) =>
      v.name.toLowerCase().includes(venueQuery.toLowerCase()) ||
      (v.area && v.area.toLowerCase().includes(venueQuery.toLowerCase()))
  );

  return (
    <div ref={wrapperRef} className={`relative ${wrapClassName || "w-full"}`}>

      <input
        type="text"
        value={venueQuery}
        onChange={(e) => { setVenueQuery(e.target.value); setVenueOpen(true); }}
        onFocus={() => setVenueOpen(true)}
        placeholder="Or select a Venue"
        className={inputClassName || "w-full px-4 py-3 rounded-md border border-gray-200 shadow place text-[#5F5F6D] placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180] pr-10"}
      />
      <ChevronDown
        size={22}
        className={`pointer-events-none absolute right-4 top-5.5 -translate-y-1/2 transition text-gray-400 ${venueOpen ? "rotate-180" : ""}`}
      />
      {venueOpen && (
        <ul className="absolute z-9999 mt-2 max-h-48 w-full overflow-auto rounded-xl border border-[#E1E2E6] bg-white shadow p-1">
          {venueLoading ? (
            <li className="px-4 py-2 text-sm text-gray-400">Loading venues…</li>
          ) : filteredVenues.length === 0 ? (
            <li className="px-4 py-2 text-sm text-gray-400">No venues found.</li>
          ) : (
            filteredVenues.map((v, i) => (
              <li
                key={i}
                onClick={() => handleSelect(v)}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-50 rounded-lg text-left"
              >
                <span className="font-semibold text-[#042C89]">{v.name}</span>
                {v.area && (
                  <span className="text-xs text-gray-400 ml-1">— {v.area}</span>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
