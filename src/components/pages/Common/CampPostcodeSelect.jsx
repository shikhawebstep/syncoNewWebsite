import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useSearchForm } from "../../../hooks/useSearchForm";
import { Toast } from "./Toast";

export default function CampPostcodeSelect() {
  const searchFormProps = useSearchForm();
  const { 
    postcodeQuery, setPostcodeQuery, 
    postcodeSuggestions, 
    postcodeOpen, setPostcodeOpen, postcodeLoading,
    venueQuery, setVenueQuery, 
    venueOpen, setVenueOpen, 
    venues, venueLoading,
    handleSearch,
    toasts, removeToast
  } = searchFormProps;

  const wrapperRef = useRef(null);

  // ── Close on outside click ──
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setPostcodeOpen(false);
        setVenueOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setPostcodeOpen, setVenueOpen]);

  const filteredVenues = venues.filter(
    (v) =>
      v.name.toLowerCase().includes(venueQuery.toLowerCase()) ||
      v.area.toLowerCase().includes(venueQuery.toLowerCase())
  );

  const handlePostcodeSelect = (postcode) => {
    setPostcodeQuery(postcode);
    setPostcodeOpen(false);
  };

  const handleVenueSelect = (venue) => {
    setVenueQuery(venue.name);
    setVenueOpen(false);
  };

  // ── Reusable postcode input ──
  const PostcodeInput = ({ inputClass = "", wrapClass = "" }) => (
    <div className={`relative ${wrapClass}`}>
      <label className="block text-xs font-medium text-gray-700 mb-1 ml-4 md:hidden">Postcode<span className="text-red-500 ml-0.5">*</span></label>
      <input
        type="text"
        value={postcodeQuery}
        onChange={(e) => setPostcodeQuery(e.target.value)}
        onFocus={() => postcodeSuggestions.length > 0 && setPostcodeOpen(true)}
        placeholder="Enter your post code"
        className={`w-full rounded-full border border-[#E1E2E6] bg-white px-5 py-3 text-sm placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180] ${inputClass}`}
      />
      {postcodeLoading && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs animate-pulse">
          …
        </span>
      )}
      {postcodeOpen && postcodeSuggestions.length > 0 && (
        <ul className="absolute z-50 mt-2 max-h-48 w-full overflow-auto rounded-xl border border-[#E1E2E6] bg-white shadow p-1">
          {postcodeSuggestions.map((pc) => (
            <li
              key={pc}
              onClick={() => handlePostcodeSelect(pc)}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-50 rounded-lg font-medium text-[#34353B] tracking-wide text-left"
            >
              {pc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // ── Reusable venue input ──
  const VenueInput = ({ inputClass = "", wrapClass = "" }) => (
    <div className={`relative ${wrapClass}`}>
      <label className="block text-xs font-medium text-gray-700 mb-1 ml-4 md:hidden">Venue<span className="text-red-500 ml-0.5">*</span></label>
      <input
        value={venueQuery}
        onChange={(e) => { setVenueQuery(e.target.value); setVenueOpen(true); }}
        onFocus={() => setVenueOpen(true)}
        placeholder="Select a Venue"
        className={`w-full rounded-full border border-[#E1E2E6] bg-white px-5 py-3 pr-10 text-sm placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-[#0DD180] ${inputClass}`}
      />
      <ChevronDown
        size={22}
        className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transition ${venueOpen ? "rotate-180" : ""}`}
      />
      {venueOpen && (
        <ul className="absolute z-40 mt-2 max-h-48 w-full overflow-auto rounded-xl border border-[#E1E2E6] bg-white shadow p-1">
          {venueLoading ? (
            <li className="px-4 py-2 text-sm text-gray-400">Loading venues…</li>
          ) : filteredVenues.length === 0 ? (
            <li className="px-4 py-2 text-sm text-gray-400">No venues found.</li>
          ) : (
            filteredVenues.map((v, i) => (
              <li
                key={i}
                onClick={() => handleVenueSelect(v)}
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

  return (
    <div ref={wrapperRef} className="relative w-full md:min-w-[320px]">
      <Toast toasts={toasts} removeToast={removeToast} />

      {/* ── DESKTOP ── */}
      <div className="md:flex hidden gap-2 items-center">
        <PostcodeInput wrapClass="w-fit min-w-[200px]" />
        <VenueInput wrapClass="w-full min-w-80" />
        <button 
          onClick={handleSearch}
          className="rounded-full bg-[#0DD180] px-6 py-2 text-[18px] font-semibold text-white whitespace-nowrap"
        >
          Search
        </button>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col gap-3">
          <div className="flex gap-3">
            <PostcodeInput
              wrapClass="w-1/3"
              inputClass="placeholder:text-[#9A9AA5]"
            />
            <VenueInput
              wrapClass="w-2/3"
              inputClass="placeholder:text-[#9A9AA5]"
            />
          </div>
          <button 
            onClick={handleSearch}
            className="w-full rounded-full bg-[#0DD180] py-3 text-[16px] font-semibold text-white"
          >
            Search
          </button>
        </div>
      </div>

    </div>
  );
}