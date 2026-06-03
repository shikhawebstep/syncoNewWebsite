import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Clock, ChevronDown, X, ChevronLeft, ChevronRight, MapPin, Loader2
} from "lucide-react";

const PAGE_SIZE = 5;

const DEFAULT_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669532!2d-0.26640339995072626!3d51.528739805038576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1766649812397!5m2!1sen!2sin";

// ── Helpers ──────────────────────────────────────────────────────────────────
function fmtDate(d) {
  return new Date(d).toLocaleDateString("en-GB", {
    weekday: "short", day: "numeric", month: "short", year: "numeric",
  });
}

// ── Fetch camps from real API ─────────────────────────────────────────────────
async function fetchCamps() {
  const response = await fetch("https://api.grabbite.com/api/open/find-a-camp", {
    method: "GET",
    redirect: "follow",
  });
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON from API");
  }
}

// ── Subscription Modal ───────────────────────────────────────────────────────
function SubscriptionModal({ paymentGroups, onClose }) {
  const [students, setStudents] = useState(1);
  const allPlans = paymentGroups.flatMap((g) =>
    (g.holidayPaymentPlans ?? []).map((p) => ({ ...p, groupName: g.name }))
  );
  const filtered = allPlans.filter((p) => p.students === students);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(4,44,137,0.18)", backdropFilter: "blur(2px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-7 pt-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-extrabold text-gray-900">Subscription Plans</h2>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-7 py-6">
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-1 rounded-2xl gap-1" style={{ background: "#F0F3FF" }}>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setStudents(n)}
                  className="px-6 py-2 rounded-xl text-sm font-bold transition-all"
                  style={
                    students === n
                      ? { background: "#042C89", color: "#fff", boxShadow: "0 2px 8px rgba(4,44,137,0.3)" }
                      : { color: "#8892A4" }
                  }
                >
                  {n} Student{n > 1 ? "s" : ""}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-10 text-sm">
              No plans available for {students} student{students > 1 ? "s" : ""}.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow"
                >
                  <div>
                    <p className="font-bold text-gray-900 text-[12px]">{plan.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{plan.groupName}</p>
                  </div>
                  <div className="pb-3 border-b border-gray-100">
                    <span className="text-3xl font-extrabold text-gray-900">£{plan.price}</span>
                    <span className="text-sm text-gray-400 ml-1">/ {plan.interval}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 flex-1">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "#E8FBF0", color: "#1DB954" }}>✓</span>
                      {plan.duration} {plan.interval}(s) duration
                    </li>
                    {plan.joiningFee && (
                      <li className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "#E8FBF0", color: "#1DB954" }}>✓</span>
                        £{plan.joiningFee} joining fee
                      </li>
                    )}
                  </ul>
                  <button
                    className="w-full py-2.5 rounded-xl text-sm font-bold text-white mt-1 hover:opacity-90 transition-opacity"
                    style={{ background: "#042C89" }}
                  >
                    {plan.joiningFee ? `Enrol · £${plan.joiningFee} Fee` : "Enrol Now"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Info Popover ─────────────────────────────────────────────────────────────
function InfoPopover({ title, text, onClose }) {
  return (
    <div className="absolute right-0 top-10 z-50 w-72 rounded-2xl border border-gray-100 bg-white shadow-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-bold text-sm mb-1" style={{ color: "#FF5C40" }}>{title}</p>
          <p className="text-xs text-[#34353B] leading-relaxed">{text}</p>
        </div>
        <button onClick={onClose} className="text-gray-300 hover:text-[#34353B] flex-shrink-0 mt-0.5">
          <X size={13} />
        </button>
      </div>
    </div>
  );
}

// ── Venue Card ───────────────────────────────────────────────────────────────
function VenueCard({ venue, onShowMap }) {
  const navigate = useNavigate();
  const [popover, setPopover] = useState(null);
  const [showSubscription, setShowSub] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopover(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (name) => setPopover((p) => (p === name ? null : name));

  const camp = venue.holidayCamps?.[0];
  const dates = venue.holidayCampDates?.[0];
  const price = venue.paymentGroups?.[0]?.holidayPaymentPlans?.[0]?.price ?? null;

  return (
    <>
      {showSubscription && (
        <SubscriptionModal
          paymentGroups={venue.paymentGroups}
          onClose={() => setShowSub(false)}
        />
      )}

      <div className="rounded-[30px] bg-white border border-[#E2E1E5] mainpage md:p-4 p-2 mb-4 overflow-visible">
        {/* Blue header */}
        <div className="flex items-center justify-between md:px-5 px-3.5 py-3.5 rounded-[22px]" style={{ background: "#042C89" }}>
          <div className="flex items-start gap-2 text-white min-w-0">
            <img src="/assets/location-02.png" alt="location" className="flex-shrink-0 w-6" />
            <span className="font-medium md:text-[16px] text-[14px] leading-snug">
              {venue.venueName}, {venue.address}
            </span>
          </div>

          <div className="md:flex hidden items-center gap-3 flex-shrink-0 ml-4" ref={popoverRef}>
            {/* Subscription */}
            <button
              onClick={() => setShowSub(true)}
              title="Subscription Plans"
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#042C89] text-lg font-extrabold hover:bg-white/20 hover:text-white transition-colors"
              style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}
            >
              £
            </button>

            {/* ✅ Map button — scrolls to map and updates location */}
            <button
              title="View on map"
              onClick={() =>
                onShowMap(venue.latitude, venue.longitude, venue.address || venue.area)
              }
              className="w-7 h-7 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <img src="/assets/map.png" alt="map" className="flex-shrink-0 w-full" />
            </button>

            {/* Congestion */}

            {/* Congestion */}
            {venue?.isCongested === true && (
              <div className="relative">
                <button
                  onClick={() => toggle("congestion")}
                  title="Congestion info"
                  className="w-7 h-7 rounded-full flex items-center text-lg font-black justify-center bg-white text-[#042C89] hover:bg-white/20 hover:text-white transition-colors"
                >
                  C
                </button>

                {popover === "congestion" && (
                  <InfoPopover
                    title="Congestion Information"
                    text="This venue has no parking facilities available. Paid road parking is available."
                    onClose={() => setPopover(null)}
                  />
                )}
              </div>
            )}

            {/* Parking */}
            {venue?.hasParking === true && (
              <div className="relative">
                <button
                  onClick={() => toggle("parking")}
                  title="Parking info"
                  className="w-7 h-7 rounded-full text-lg font-black flex items-center justify-center bg-white text-[#042C89] hover:bg-white/20 hover:text-white transition-colors"
                >
                  P
                </button>

                {popover === "parking" && (
                  <InfoPopover
                    title="Parking Information"
                    text={venue.parkingNote || "No parking info available."}
                    onClose={() => setPopover(null)}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col bg-[#F6F6F7] md:rounded-[30px] rounded-[22px] mt-4 md:p-2.5 p-3 md:flex-row overflow-auto items-center">
          {/* Left – camp info */}
          <div
            className="md:w-[320px] flex-shrink-0 md:p-3 p-1 py-3 w-full justify-center flex flex-col border-b md:border-b-0 md:border-r border-[#E2E1E5]"
            style={{ borderColor: "#EBEBED" }}
          >
            <p className="font-extrabold text-gray-900 md:text-[12px] leading-snug">
              {camp?.name ?? "Camp"}
              {" "}
              <span className="font-normal text-[#282829] text-xs italic">
                ({venue.distanceMiles?.toFixed(1)} miles)
              </span>
            </p>
            {dates && (
              <div className="flex items-start gap-1.5 font-normal mt-3 text-[12px] text-[#282829]">
                <img src="/assets/Icon2.png" alt="date" className="flex-shrink-0 w-3.5 mt-0.5" />
                <span className="leading-relaxed text-[#282829]">
                  {fmtDate(dates.startDate)} – {fmtDate(dates.endDate)}
                  <span className="font-semibold"> ({dates.totalDays} days)</span>
                </span>
              </div>
            )}
            <div className="flex items-center gap-3 mt-2.5 flex-wrap">
              <span className="flex items-center gap-1 text-[12px] text-[#282829]">
                <img src="/assets/facility.png" alt="facility" className="flex-shrink-0 w-3.5 me-1 mt-0.5" />
                {venue.facility}
              </span>
              {venue.classes?.[0]?.time && (
                <span className="flex items-center gap-1 text-[12px] text-[#282829]">
                  <Clock size={16} style={{ color: "#042C89" }} />
                  {venue.classes[0].time}
                </span>
              )}
            </div>
          </div>

          {/* Middle – price */}
          <div
            className="md:w-[200px] w-full flex-shrink-0 md:p-3 py-3 p-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#E2E1E5]"
            style={{ borderColor: "#EBEBED" }}
          >
            <div className="flex md:block gap-3 items-end">
              <p className="md:text-[11px] text-[13px] font-bold tracking-normal text-[#34353B] md:mb-1.5">Price</p>
              {price ? (
                <div className="flex gap-1.5 items-end">
                  <p className="text-xl font-extrabold leading-[20px] text-[#042C89]">£{price}</p>
                  <p className="text-[12px] text-[#34353B] md:mt-0.5">per child</p>
                </div>
              ) : (
                <p className="text-sm text-gray-400">—</p>
              )}
            </div>
            <p className="text-[10px] font-normal text-[#797A88] mt-2">(Sibling discount available)</p>
          </div>

          {/* Right – classes */}
          <div className="flex-1 md:p-5 py-3 pe-0 divide-y md:pe-0" style={{ borderColor: "#EBEBED" }}>
            {venue.classes.length === 0 ? (
              <p className="text-sm text-gray-400 py-2">No classes available.</p>
            ) : (
              venue.classes.map((cls, indx) => {
                const full = cls.capacity === 0;
                return (
                  <div
                    key={cls.classId}
                    className="flex flex-wrap items-center justify-between gap-3 md:py-3 py-4 border-[#eee] first:pt-0 last:pb-0"
                  >
                    <div className="flex md:w-[40%] w-[60%] gap-10 items-center justify-between">
                      <p className="font-bold md:text-[15px] text-[13px] w-6/12 text-[#282829]">
                        Group {indx + 1}
                      </p>
                      <p className="md:text-[14px] text-[12px] capitalize text-[#384455] w-6/12 mt-0.5 md:flex font-medium items-center gap-1">
                        {`${cls?.className || ""}${cls?.level ? ` (${cls.level})` : ""}`}
                      </p>
                    </div>

                    <div className="md:w-[25%] w-[35%] flex justify-end">
                      <span
                        className="text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap"
                        style={
                          full
                            ? { background: "#FFF1EF", color: "#FF5C40" }
                            : { background: "#EDFAF3", color: "#14A057" }
                        }
                      >
                        {full ? "Fully booked" : `+${cls.capacity} spaces`}
                      </span>
                    </div>

                    <div className="md:w-[25%] w-full md:pe-2 md:flex justify-end">
                      {full ? (
                        <button
                          onClick={() => navigate(`/find-a-camp/waiting-list?classId=${cls.classId}`)}
                          className="px-4 md:py-2 py-3 w-full rounded-lg text-xs font-bold transition-colors whitespace-nowrap"
                          style={{ background: "#E1E8FF", color: "#042C89" }}
                        >
                          Add to Waiting List
                        </button>
                      ) : (
                        <button
                          onClick={() => navigate(`/find-a-camp/book-camp?classId=${cls.classId}`)}
                          className="px-3 md:py-2 py-3 w-full md:w-auto rounded-lg tracking-wider text-xs font-bold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
                          style={{ background: "#042C89" }}
                        >
                          Book Holiday Camp
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ── Pagination ────────────────────────────────────────────────────────────────
function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;

  const items = [];
  for (let p = 1; p <= total; p++) {
    if (p <= 2 || p >= total - 1 || Math.abs(p - current) <= 1) items.push(p);
    else if (items[items.length - 1] !== "...") items.push("...");
  }

  return (
    <div className="flex items-center justify-center gap-1.5 py-8">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#34353B] hover:text-gray-800 disabled:opacity-30 transition-colors"
      >
        <ChevronLeft size={15} /> Previous
      </button>

      {items.map((item, i) =>
        item === "..." ? (
          <span key={`e${i}`} className="px-2 text-gray-400 text-sm">…</span>
        ) : (
          <button
            key={item}
            onClick={() => onChange(item)}
            className="w-9 h-9 rounded-xl text-sm font-bold transition-all"
            style={
              item === current
                ? { background: "#042C89", color: "#fff", boxShadow: "0 2px 8px rgba(4,44,137,0.25)" }
                : { color: "#666" }
            }
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#34353B] hover:text-gray-800 disabled:opacity-30 transition-colors"
      >
        Next <ChevronRight size={15} />
      </button>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function BookHolidayCamp() {
  const [searchParams] = useSearchParams();
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [postcode, setPostcode] = useState(searchParams.get("postcode") || "");
  const [venueQuery, setVenueQuery] = useState(searchParams.get("venue") || "");
  const [showVenueDrop, setShowVenueDrop] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDayDrop, setShowDayDrop] = useState(false);
  const [page, setPage] = useState(1);
  const [holidayCampDates, setHolidayCampDates] = useState([]);
  // ✅ Map state
  const mapRef = useRef(null);
  const [mapUrl, setMapUrl] = useState(DEFAULT_MAP_URL);
  console.log('holidayCampDates', holidayCampDates)

  const venueDropRef = useRef(null);
  const dayDropRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (venueDropRef.current && !venueDropRef.current.contains(event.target)) {
        setShowVenueDrop(false);
      }
      if (dayDropRef.current && !dayDropRef.current.contains(event.target)) {
        setShowDayDrop(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const loadCamps = useCallback(() => {
    setLoading(true);
    setError(null);

    fetchCamps()
      .then((data) => {
        const list = Array.isArray(data)
          ? data
          : (data?.data ?? data?.venues ?? data?.results ?? []);

        setAllData(list);

        const uniqueDates = [];
        const seen = new Set();
        list.forEach((venue) => {
          venue.holidayCampDates?.forEach((date) => {
            const key = `${date.startDate}|${date.endDate}`;
            if (!seen.has(key)) {
              seen.add(key);
              uniqueDates.push({ ...date, filterKey: key });
            }
          });
        });

        setHolidayCampDates(uniqueDates);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => { loadCamps(); }, [loadCamps]);
  useEffect(() => { setPage(1); }, [postcode, venueQuery, selectedDay]);

  const filtered = allData.filter((v) => {
    const q = venueQuery.toLowerCase();
    const matchVenue = !q || v.venueName?.toLowerCase().includes(q) || v.area?.toLowerCase().includes(q);
    const matchPostcode = !postcode || v.address?.toLowerCase().includes(postcode.toLowerCase());
    const matchDay = !selectedDay || v.holidayCampDates?.some(d => `${d.startDate}|${d.endDate}` === selectedDay);
    return matchVenue && matchPostcode && matchDay;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePageChange = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ Show map at venue location
  const handleShowMap = (lat, lng, address) => {
    if (lat && lng) {
      setMapUrl(`https://www.google.com/maps?q=${lat},${lng}&output=embed`);
    } else if (address) {
      setMapUrl(`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`);
    }
    mapRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: "#F4F5F9" }}>

      {/* Header */}
      <div className="relative">
        <div className="lg:max-w-[1240px] flex-wrap pt-12 mainpage mx-auto px-3 pb-4 flex flex-col md:flex-row items-center justify-center lg:justify-between gap-4">
          <h4 style={{ color: "#00A6E3" }} className="text-2xl font-extrabold tracking-tight whitespace-nowrap">
            Book A <br className="block md:hidden" /> Holiday Camp
          </h4>

          <div className="flex items-center campBox md:bg-none bg-[#F6F6F7] md:p-0 p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] md:shadow-none rounded-[25px] md:rounded-[0px] flex-wrap gap-2 w-full md:w-auto">
            {/* Postcode */}
            <div className="flex w-[30%] items-center bg-white border border-gray-200 rounded-[30px] px-3 py-2.5 gap-2 flex-1 md:w-48">
              <input
                className="rounded-[30px] hidden md:block ps-3 text-sm outline-none bg-[#FFFFFF] w-full placeholder-[#5F5F6D]"
                placeholder="Enter your post code"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
              <input
                className="rounded-[30px] block md:hidden ps-3 text-sm outline-none bg-[#FFFFFF] w-full placeholder-[#5F5F6D]"
                placeholder="post code"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>

            {/* Venue dropdown */}
            <div className="relative flex-1 w-[67%] md:w-52" ref={venueDropRef}>
              <button
                onClick={() => setShowVenueDrop((v) => !v)}
                className="flex items-center justify-between w-full bg-white border border-gray-200 rounded-[30px] px-3 py-2.5 text-sm text-[#34353B] gap-2"
              >
                <span className="truncate text-[#5F5F6D]">{venueQuery || "Or select a Venue"}</span>
                <ChevronDown size={14} className={`flex-shrink-0 transition-transform text-black ${showVenueDrop ? "rotate-180" : ""}`} />
              </button>
              {showVenueDrop && (
                <div className="absolute top-12 md:left-0 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                  <div className="p-2 border-b border-gray-100">
                    <input
                      autoFocus
                      className="w-full px-3 py-2 text-sm rounded-xl bg-gray-50 outline-none placeholder-[#5F5F6D]"
                      placeholder="Search venues…"
                      value={venueQuery}
                      onChange={(e) => setVenueQuery(e.target.value)}
                    />
                  </div>
                  <ul className="max-h-56 overflow-y-auto">
                    <li
                      className="px-4 py-2.5 text-sm text-[#34353B] hover:bg-gray-50 cursor-pointer"
                      onClick={() => { setVenueQuery(""); setShowVenueDrop(false); }}
                    >
                      All Venues
                    </li>
                    {allData
                      .filter((v) => v.venueName?.toLowerCase().includes(venueQuery.toLowerCase()))
                      .map((v) => (
                        <li
                          key={v.venueId}
                          className="px-4 py-2.5 cursor-pointer hover:bg-gray-50"
                          onClick={() => { setVenueQuery(v.venueName); setShowVenueDrop(false); }}
                        >
                          <p className="text-sm font-bold" style={{ color: "#042C89" }}>{v.venueName}</p>
                          <p className="text-xs text-gray-400">{v.area}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              className="px-6 py-2.5 w-full md:w-max rounded-[50px] text-sm font-bold text-white flex-shrink-0 hover:opacity-90 transition-opacity tracking-wider"
              style={{ background: "#00C96B" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-3 py-6 pt-3">

        {/* ✅ Map with ref */}
        <div ref={mapRef} className="rounded-3xl overflow-hidden border-[6px] border-white shadow-md mb-6 h-[300px] md:h-auto">
          <div className="relative" style={{ paddingBottom: "26%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={mapUrl}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex md:items-center justify-between mb-4">
          <div className="md:flex items-center gap-2">
            <p className="font-semibold text-[#34353B] text-[13px] lg:text-[18px]">List of Venues</p>
            {!loading && (
              <span className="text-[14px] text-start font-semibold md:px-2.5 py-0.5 rounded-full" style={{ color: "#9E9FAA" }}>
                +{filtered.length} results
              </span>
            )}
          </div>

          <div className="relative" ref={dayDropRef}>
            <button
              onClick={() => setShowDayDrop((v) => !v)}
              className="flex items-center gap-2 text-[14px] text-[#34353B] rounded-2xl px-4 md:py-2 hover:shadow-md"
            >
              {selectedDay === null ? "Search By Dates" : selectedDay.split("|").map(d => fmtDate(d)).join(" - ")}
              <ChevronDown size={14} className={`transition-transform ${showDayDrop ? "rotate-180" : ""}`} />
            </button>
            {showDayDrop && (
              <div className="absolute w-[220px]  right-0 top-11  min-w-44 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 py-2">
                <button
                  onClick={() => {
                    setSelectedDay(null);
                    setShowDayDrop(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  style={selectedDay === null ? { color: "#042C89", fontWeight: 700 } : {}}
                >
                  All Dates
                </button>
                {holidayCampDates.map((d) => (
                  <button
                    key={d.filterKey}
                    onClick={() => {
                      setSelectedDay(d.filterKey);
                      setShowDayDrop(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    style={selectedDay === d.filterKey ? { color: "#042C89", fontWeight: 700 } : {}}
                  >
                    {fmtDate(d.startDate)} - {fmtDate(d.endDate)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active filter chips */}
        {(postcode || venueQuery || selectedDay) && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {postcode && (
              <span className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E1E8FF", color: "#042C89" }}>
                Postcode: {postcode}
                <button onClick={() => setPostcode("")}><X size={11} /></button>
              </span>
            )}
            {venueQuery && (
              <span className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E1E8FF", color: "#042C89" }}>
                Venue: {venueQuery}
                <button onClick={() => setVenueQuery("")}><X size={11} /></button>
              </span>
            )}
            {selectedDay && (
              <span className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#E1E8FF", color: "#042C89" }}>
                Date: {selectedDay.split("|").map(d => fmtDate(d)).join(" - ")}
                <button onClick={() => setSelectedDay(null)}><X size={11} /></button>
              </span>
            )}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <Loader2 size={40} className="animate-spin mb-3 opacity-40" />
            <p className="font-semibold text-sm">Loading camps…</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-20 rounded-3xl border border-[#E2E1E5] bg-red-50">
            <p className="font-semibold text-red-500">Failed to load camps</p>
            <p className="text-sm text-red-400 mt-1">{error}</p>
            <button
              onClick={loadCamps}
              className="mt-4 px-5 py-2 rounded-xl text-sm font-bold text-white"
              style={{ background: "#042C89" }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <MapPin size={44} className="mx-auto mb-3 opacity-25" />
            <p className="font-semibold">No venues found</p>
            <p className="text-sm mt-1">Try adjusting your filters</p>
          </div>
        )}

        {/* ✅ Venue cards with onShowMap */}
        {!loading && !error && paginated.map((venue) => (
          <VenueCard
            key={venue.venueId}
            venue={venue}
            onShowMap={handleShowMap}
          />
        ))}

        {/* Pagination */}
        {!loading && !error && filtered.length > 0 && (
          <div className="flex flex-col items-center gap-1">
            <Pagination current={page} total={totalPages} onChange={handlePageChange} />
            <p className="text-xs text-gray-400 pb-4">
              Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} venues
            </p>
          </div>
        )}
      </div>
    </div>
  );
}