import { useState, useRef, useEffect, useCallback } from "react";
import { Clock, Loader2, ChevronDown } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PostcodeSelect from "../../Common/PostcodeSelect";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { days } from "./days";

const congestionInfo =
  "This venue has no parking facilities available. Paid road parking is available.";

const parkingInfo =
  "This venue has no parking facilities available. Paid road parking is available.";

const BASE_URL = "https://api.grabbite.com";

// ─── useClickOutside hook ──────────────────────────────────────────────────────
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// ─── ModalWrapper ──────────────────────────────────────────────────────────────
function ModalWrapper({ onClose, children }) {
  const ref = useRef(null);
  useClickOutside(ref, onClose);
  return <div ref={ref}>{children}</div>;
}

// ─── API helper ────────────────────────────────────────────────────────────────
async function fetchClasses({ postalCode = "", venueName = "", day = "All" } = {}) {
  const params = new URLSearchParams();
  if (postalCode) params.set("postal_code", postalCode);
  if (venueName) params.set("venueName", venueName);
  if (day && day !== "All") params.set("day", day.toLowerCase());

  const url = `${BASE_URL}/api/open/find-class${params.toString() ? `?${params}` : ""}`;
  const response = await fetch(url, { method: "GET", redirect: "follow" });
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}

// ─── Helper: flatten classes object → array with day injected ─────────────────
function flattenClasses(classesObj = {}, dayFilter = "All") {
  return Object.entries(classesObj).flatMap(([day, arr]) => {
    if (dayFilter !== "All" && day.toLowerCase() !== dayFilter.toLowerCase()) return [];
    return arr.map((cls) => ({ ...cls, day }));
  });
}

// ─── Helper: parse time string "7:15 AM - 8:00 AM" → { start, end } ──────────
function parseTime(timeStr = "") {
  const parts = timeStr.split(" - ");
  return { start: parts[0] ?? timeStr, end: parts[1] ?? "" };
}

export default function MainPage() {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [selected, setSelected] = useState("All");
  const [students, setStudents] = useState(1);
  const mapRef = useRef(null);
  const resultsRef = useRef(null);

  // ── API state ──
  const [classes, setClasses] = useState([]);
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669532!2d-0.26640339995072626!3d51.528739805038576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1766649812397!5m2!1sen!2sin"
  );
  const mapIframeRef = useRef(null);

  // ── filter state ──
  const [selectedPostcode, setSelectedPostcode] = useState(searchParams.get("postcode") || "");
  const [selectedVenue, setSelectedVenue] = useState(searchParams.get("venue") || "");
  const [venueSearch, setVenueSearch] = useState("");

  useEffect(() => {
    setSelectedPostcode(searchParams.get("postcode") || "");
    setSelectedVenue(searchParams.get("venue") || "");
  }, [searchParams]);

  const handleSearchScroll = () => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleClassAction = (path, classId) => {
    navigate(`${path}?classId=${classId}`);
  };

  const toggleModal = (name) =>
    setActiveModal((prev) => (prev === name ? null : name));

  // ── fetch whenever filters change ──
  const loadClasses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchClasses({
        postalCode: selectedPostcode,
        venueName: selectedVenue,
        day: selected,
      });

      const list = Array.isArray(data) ? data : (data?.data ?? []);
      setClasses(list);

      const venueMap = new Map();
      list.forEach((item) => {
        const name = item.venueName ?? item.venue;
        const area = item.area ?? "";
        if (name && !venueMap.has(name)) {
          venueMap.set(name, area);
        }
      });
      const venueList = Array.from(venueMap.entries()).map(([name, area]) => ({ name, area }));
      setVenues(venueList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedPostcode, selectedVenue, selected]);

  useEffect(() => {
    loadClasses();
  }, [loadClasses]);

  const handlePostcodeSelect = (postcode) => {
    setSelectedPostcode(postcode);
    setSelectedVenue("");
  };

  const handleDaySelect = (day) => {
    setSelected(day);
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7] md:py-16 py-10 font-sans">
      <div className="mx-auto max-w-[1230px] px-4">

        {/* ── Header ── */}
        <div className="mb-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <h4 className="text-3xl font-bold light-blue-text">FIND A CLASS</h4>
          <div className="flex w-full flex-col gap-3 z-9999 md:w-auto md:flex-row">
            <PostcodeSelect onSearch={handleSearchScroll} />
          </div>
        </div>

        {/* ── Map ── */}
        <div
          ref={mapRef}
          className="mb-6 border-[9px] border-white md:mt-0 mt-[-50px] overflow-hidden min-h-60 rounded-3xl bg-gray-200"
        >
          <div className="relative aspect-[16/4] w-full">
            <iframe
              ref={mapIframeRef}
              className="absolute inset-0 h-full min-h-60 w-full"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>

        {/* ── Venue list + Day filter bar ── */}
        <div ref={resultsRef} className="flex relative justify-between pb-5">

          {/* Venue dropdown trigger */}
          <p
            className="md:text-[18px] text-[15px] text-[#34353B] font-semibold cursor-pointer md:flex items-center gap-2"
            onClick={() => toggleModal("venueModal")}
          >
            {selectedVenue || "List of Venues"}{" "}
            <span className="text-[#9E9FAA] text-[14px]">
              {venues.length > 0 ? `+${venues.length} results` : ""}
            </span>
            <ChevronDown
              className={`w-4 h-4 hidden md:block transition-transform ${activeModal === "venueModal" ? "rotate-180" : ""}`}
            />
          </p>

          {/* Venue modal */}
          {activeModal === "venueModal" && (
            <ModalWrapper onClose={() => setActiveModal(null)}>
              <div className="bg-white w-[515px] top-[35px] absolute z-50 border border-[#E1E2E6] shadow-xl p-4 rounded-[20px] max-h-[400px] overflow-hidden flex flex-col">
                <div className="mb-3 relative">
                  <input
                    type="text"
                    placeholder="Search venues..."
                    className="w-full p-2 pl-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-sky-500"
                    value={venueSearch}
                    onChange={(e) => setVenueSearch(e.target.value)}
                  />
                  <FaMapMarkerAlt className="absolute left-2.5 top-2.5 text-gray-400 w-4 h-4" />
                </div>

                <div className="overflow-y-auto flex-1 custom-scrollbar">
                  {loading ? (
                    <p className="text-sm text-gray-500 p-2">Loading venues…</p>
                  ) : error ? (
                    <p className="text-sm text-red-500 p-2">{error}</p>
                  ) : venues.length === 0 ? (
                    <p className="text-sm text-gray-500 p-2">No venues found.</p>
                  ) : (
                    <ul className="space-y-1 text-gray-900">
                      <li
                        className="text-[13px] p-2 text-[#34353B] font-medium cursor-pointer hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-50"
                        onClick={() => {
                          setSelectedVenue("");
                          setActiveModal(null);
                          setVenueSearch("");
                        }}
                      >
                        All Venues
                      </li>
                      {venues
                        .filter(
                          (v) =>
                            v.name.toLowerCase().includes(venueSearch.toLowerCase()) ||
                            v.area.toLowerCase().includes(venueSearch.toLowerCase())
                        )
                        .map((v, i) => (
                          <li
                            key={i}
                            className="text-[13px] p-2 text-[#34353B] font-medium cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => {
                              setSelectedVenue(v.name);
                              setActiveModal(null);
                              setVenueSearch("");
                            }}
                          >
                            <div className="flex flex-col">
                              <span className="font-semibold text-[#042C89]">{v.name}</span>
                              <span className="text-[11px] text-gray-400">{v.area}</span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </ModalWrapper>
          )}

          {/* Day filter */}
          <div className="flex gap-2 items-center">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => toggleModal("dayModal")}
            >
              <p className="text-[14px] text-[#34353B] cursor-pointer">
                {selected !== "All" ? selected : "Sort By Days"}
              </p>
              <ChevronDown
                className={`${activeModal === "dayModal" ? "rotate-180" : ""}`}
              />
            </div>

            {activeModal === "dayModal" && (
              <ModalWrapper onClose={() => setActiveModal(null)}>
                <div className="w-[130px] top-[30px] right-0 absolute z-50 poppins bg-white rounded-xl shadow-lg border border-[#E1E2E6] py-4 overflow-hidden">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => handleDaySelect(day)}
                      className={`w-full text-left px-5 py-1.5 text-[13px] transition
                        ${selected === day
                          ? "text-sky-500 font-semibold"
                          : "text-gray-800 hover:bg-gray-50"
                        }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </ModalWrapper>
            )}
          </div>
        </div>

        {/* ── Loading / Error state ── */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <Loader2 size={40} className="animate-spin mb-3 opacity-40" />
            <p className="font-semibold text-sm text-gray-400">Loading classes…</p>
          </div>
        )}
        {error && !loading && (
          <p className="text-center text-red-500 py-6">{error}</p>
        )}

        {/* ── Active filter badges ── */}
        {(selectedVenue || selectedPostcode) && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {selectedPostcode && (
              <span className="bg-[#E1E8FF] text-[#042C89] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2">
                Postcode: {selectedPostcode}
                <button onClick={() => setSelectedPostcode("")} className="ml-1 font-bold">
                  ✕
                </button>
              </span>
            )}
            {selectedVenue && (
              <span className="bg-[#E1E8FF] text-[#042C89] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2">
                Venue: {selectedVenue}
                <button onClick={() => setSelectedVenue("")} className="ml-1 font-bold">
                  ✕
                </button>
              </span>
            )}
          </div>
        )}

        {/* ── No results ── */}
        {!loading && !error && classes.length === 0 && (
          <p className="text-center text-gray-500 py-6">No classes found.</p>
        )}

        {/* ── Venue cards from API ── */}
        {!loading &&
          !error &&
          classes
            .filter((venueData) => flattenClasses(venueData.classes ?? {}, selected).length > 0)
            .map((venueData, idx) => (
              <VenueCard
                key={venueData.venueId ?? idx}
                venueData={venueData}
                dayFilter={selected}
                activeModal={activeModal}
                toggleModal={toggleModal}
                setActiveModal={setActiveModal}
                onClassAction={handleClassAction}
                students={students}
                setStudents={setStudents}
                mapRef={mapRef}
                onShowMap={(lat, lng, address) => {
                  if (lat && lng) {
                    setMapUrl(`https://www.google.com/maps?q=${lat},${lng}&output=embed`);
                  } else if (address) {
                    setMapUrl(`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`);
                  }
                  mapRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            ))}
      </div>
    </div>
  );
}

// ─── VenueCard ────────────────────────────────────────────────────────────────
function VenueCard({
  venueData,
  dayFilter,
  activeModal,
  toggleModal,
  setActiveModal,
  onClassAction,
  students,
  setStudents,
  mapRef,
  onShowMap,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
  };
  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
  };

  const venueId = venueData.venueId ?? Math.random();
  const venueName = venueData.venueName ?? "Unknown Venue";
  const postalCode = venueData.postal_code ?? "Unknown Venue";
  const location = venueData.area ?? "";
  const distance = venueData.distanceMiles ? `${venueData.distanceMiles} miles` : "";
  const type = venueData.facility ?? "";

  const classList = flattenClasses(venueData.classes ?? {}, dayFilter);

  const dayLabel =
    dayFilter === "All"
      ? Object.keys(venueData.classes ?? {})
        .map((d) => d.charAt(0).toUpperCase() + d.slice(1))
        .join(", ")
      : dayFilter;

  const terms = venueData.terms ?? [];
  const cardModal = (name) => `${venueId}-${name}`;

  return (
    <div className="rounded-[30px] bg-white p-2.5 border border-[#E2E1E5] mb-4">
      {/* Blue header bar */}
      <div className="relative sm:flex items-center justify-between rounded-[22px] bg-[#042C89] px-5 py-3 text-white">
        <div className="flex items-center text-[16px] poppins gap-2 mb-3 md:mb-0 text-sm">
          <FaMapMarkerAlt size={20} />
          {venueName} , {postalCode}
        </div>

        <div className="flex gap-3">
          {/* Subscription */}
          <div className="relative">
            <button
              onClick={() => toggleModal(cardModal("subscription"))}
              title="Subscription Plans"
              className="w-[26px] h-[26px]"
            >
              <img src="/assets/pound.png" alt="Subscription" className="w-full h-full object-contain" />
            </button>
            {activeModal === cardModal("subscription") && (
              <ModalWrapper onClose={() => setActiveModal(null)}>
                <SubscriptionModal
                  paymentGroups={venueData.paymentGroups ?? []}
                  students={students}
                  setStudents={setStudents}
                  toggleModal={toggleModal}
                  cardModal={cardModal}
                />
              </ModalWrapper>
            )}
          </div>

          {/* Term Dates */}
          <div className="relative">
            <button
              onClick={() => toggleModal(cardModal("termDates"))}
              className="w-[26px]"
              title="Term Dates"
            >
              <img src="/assets/calendar-circle.png" alt="" />
            </button>
            {activeModal === cardModal("termDates") && (
              <ModalWrapper onClose={() => setActiveModal(null)}>
                <TermDatesModal
                  terms={terms}
                  toggleModal={toggleModal}
                  currentDate={currentDate}
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                  handlePrevMonth={handlePrevMonth}
                  handleNextMonth={handleNextMonth}
                  daysInMonth={daysInMonth}
                  startOffset={startOffset}
                />
              </ModalWrapper>
            )}
          </div>

          {/* Map */}
          <div>
            <button
              onClick={() =>
                onShowMap(venueData.latitude, venueData.longitude, venueData.address || venueData.area)
              }
              className="w-[26px]"
              title="Map Info"
            >
              <img src="/assets/map.png" alt="" />
            </button>
          </div>

          {/* Congestion */}
          {venueData?.isCongested === true && (
            <div className="relative">
              <button
                onClick={() => toggleModal(cardModal("congestionInfo"))}
                className="w-[26px]"
                title="Congestion Info"
              >
                <img src="/assets/conjetion.png" alt="" />
              </button>
              {activeModal === cardModal("congestionInfo") && (
                <ModalWrapper onClose={() => setActiveModal(null)}>
                  <InfoPopover
                    title="Congestion Information"
                    text={venueData.congestionInfo ?? congestionInfo}
                  />
                </ModalWrapper>
              )}
            </div>
          )}

          {/* Parking */}
          {venueData?.hasParking === true && (
            <div className="relative">
              <button
                onClick={() => toggleModal(cardModal("parkingInfo"))}
                className="w-[26px]"
                title="Parking Info"
              >
                <img src="/assets/p.png" alt="" />
              </button>
              {activeModal === cardModal("parkingInfo") && (
                <ModalWrapper onClose={() => setActiveModal(null)}>
                  <InfoPopover
                    title="Parking Information"
                    text={venueData.parkingNote ?? venueData.parkingInfo ?? parkingInfo}
                  />
                </ModalWrapper>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden p-4 bg-[#F6F6F7] border border-[#FCF9F6] rounded-[22px] mt-4 space-y-4">
        <div className="md:flex justify-between">
          <div className="md:block flex items-center gap-2">
            <p className="font-semibold">{location}</p>
            <p className="text-sm text-gray-500">{distance}</p>
          </div>
          <div className="md:text-right md:block flex items-center gap-2">
            <p className="font-semibold">{dayLabel}</p>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
        </div>

        {classList.length === 0 ? (
          <p className="text-sm text-gray-400">No classes for selected day.</p>
        ) : (
          classList.map((cls, i) => (
            <ClassRowMobile key={cls.classId ?? i} cls={cls} onClassAction={onClassAction} i={i} />
          ))
        )}
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex p-5 bg-[#F6F6F7] border border-[#FCF9F6] rounded-[22px] mt-3 gap-4">
        <div className="w-[13%] flex flex-col justify-center pe-2 border-r border-r-[#E1E2E6]">
          <p className="font-semibold break">{location}</p>
          <p className="text-sm text-gray-500">{distance}</p>
        </div>
        <div className="w-[10%] flex flex-col justify-center border-r border-r-[#E1E2E6]">
          <p className="font-semibold text-[15px]">{dayLabel}</p>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
        <div className="w-[77%] flex justify-center flex-col">
          {classList.length === 0 ? (
            <p className="text-sm text-gray-400 py-2">No classes for selected day.</p>
          ) : (
            classList.map((cls, i) => (
              <ClassRowDesktop
                key={cls.classId ?? i}
                cls={cls}
                onClassAction={onClassAction}
                isFirst={i === 0}
                i={i}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// ─── ClassRowMobile ────────────────────────────────────────────────────────────
function ClassRowMobile({ cls, onClassAction, i }) {
  const isFullyBooked = cls.capacity === 0;
  const { start, end } = parseTime(cls.time ?? "");

  return (
    <div className="md:bg-white rounded-xl border border-[#E1E2E6] p-2 space-y-3">
      <div className="flex justify-between">
        <p className="font-bold">Class {i + 1}</p>
        <p className="text-sm text-[#384455] capitalize">{`${cls?.className || ""}${cls?.level ? ` (${cls.level})` : ""}`}</p>
      </div>

      <div className="flex items-center gap-1 justify-between text-[#384455] text-sm">
        <div className="flex gap-1 items-center lowercase">
          <Clock size={14} />
          {end ? `${start} – ${end}` : start}
        </div>
        {isFullyBooked ? (
          <span className="rounded-[8px] bg-[#F7EBEA] px-3 py-1 text-[12px] font-semibold text-[#FF5C40]">
            Fully booked
          </span>
        ) : (
          <span className="rounded-[8px] bg-[#E9F1EC] px-3 py-1 text-[12px] font-semibold text-[#34AE56]">
            +{cls.capacity} spaces
          </span>
        )}
      </div>

      {isFullyBooked ? (
        <button
          className="w-full bg-[#E1E8FF] p-3 rounded-[6px] text-[#042C89] text-xs font-bold"
          onClick={() => onClassAction("/find-a-class/waiting-list", cls.classId)}
        >
          Add to Waiting List
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          <button
            className="border border-[#042C89] p-3 rounded-[6px] text-[#042C89] text-xs font-bold"
            onClick={() => onClassAction("/find-a-class/book-membership", cls.classId)}
          >
            Book a Membership
          </button>
          {cls.allowFreeTrial && (
            <button
              className="bg-[#042C89] p-3 rounded-[6px] text-xs font-bold text-white"
              onClick={() => onClassAction("/find-a-class/book-free-trial", cls.classId)}
            >
              Book a FREE Trial
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ─── ClassRowDesktop ───────────────────────────────────────────────────────────
function ClassRowDesktop({ cls, onClassAction, isFirst, i }) {
  const isFullyBooked = cls.capacity === 0;
  const { start, end } = parseTime(cls.time ?? "");

  return (
    <div
      className={`flex justify-between items-center gap-2.5 ${!isFirst ? "border-t border-[#E1E2E6] mt-2 pt-2" : ""
        }`}
    >
      <div className="flex gap-4 w-[47%] justify-between items-center">
        <p className="font-bold w-[20%] text-[#282829] text-[13px]">Class {i + 1}</p>
        <p className="font-medium w-[35%] text-[#384455] capitalize text-[14.5px]">
          {`${cls?.className || ""}${cls?.level ? ` (${cls.level})` : ""}`}
        </p>
        <div className="flex w-[45%] items-center gap-1 text-[#384455] text-[14px] font-medium">
          <img src="/assets/TimeCircle.png" className="w-[18px]" alt="" />
          {end ? `${start} – ${end}` : start}
        </div>
      </div>

      <div className="w-[13%]">
        {isFullyBooked ? (
          <span className="rounded-[8px] bg-[#F7EBEA] px-3 py-1 text-[12px] font-semibold text-[#FF5C40]">
            Fully booked
          </span>
        ) : (
          <span className="rounded-[8px] bg-[#E9F1EC] px-3 py-1 text-[12px] font-semibold text-[#34AE56]">
            +{cls.capacity} spaces
          </span>
        )}
      </div>

      <div className="w-[35%] grid justify-end">
        {isFullyBooked ? (
          <button
            className="bg-[#E1E8FF] p-2 rounded-[6px] text-[#042C89] w-[140px] text-xs font-bold"
            onClick={() => onClassAction("/find-a-class/waiting-list", cls.classId)}
          >
            Add to Waiting List
          </button>
        ) : (
          <div className={`${cls.allowFreeTrial ? "grid" : "flex"} md:grid-cols-2 gap-2`}>
            <button
              className="border border-[#042C89] p-2 w-[140px] rounded-[6px] text-[#042C89] text-[11px] font-bold"
              onClick={() => onClassAction("/find-a-class/book-membership", cls.classId)}
            >
              Book a Membership
            </button>
            {cls.allowFreeTrial && (
              <button
                className="bg-[#042C89] p-2 rounded-[6px] w-[140px] text-xs font-bold text-white ms-2"
                onClick={() => onClassAction("/find-a-class/book-free-trial", cls.classId)}
              >
                Book a FREE Trial
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── InfoPopover ───────────────────────────────────────────────────────────────
function InfoPopover({ title, text }) {
  return (
    <div className={`md:w-[436px] w-[310px] ${title === "Parking Information" ? "-right-[7rem]" : "-right-[10rem] md:w-[436px]"} text-black poppins absolute md:-right-3 md:left-auto top-[30px] bg-white rounded-[20px] shadow-lg border border-[#E2E1E5] p-4 z-50`}>
      <div className="flex justify-between">
        <div>
          <p className="text-[18px] font-semibold text-[#FF5C40]">{title}</p>
          <p className="text-[#282829]">{text}</p>
        </div>
        <BsInfoCircle size={16} className="text-gray-400" />
      </div>
    </div>
  );
}

// ─── SubscriptionModal ────────────────────────────────────────────────────────
function SubscriptionModal({ paymentGroups, students, setStudents, toggleModal, cardModal }) {
  const allPlans = paymentGroups.flatMap((group) =>
    (group.paymentPlans ?? []).map((plan) => ({ ...plan, groupName: group.name }))
  );

  const filteredPlans = allPlans.filter((p) => p.students === students);

  return (
    <div className="text-black poppins md:w-[950px] w-[310px] absolute md:right-0 top-[30px] bg-white rounded-[20px] shadow-lg border border-[#E2E1E5] p-4 z-50">
      <div className="flex justify-between items-center mb-4 border-b pb-3 border-[#E2E1E5]">
        <h2 className="text-[24px] font-semibold text-gray-900">Subscription Plan</h2>
        <button
          onClick={() => toggleModal(null)}
          className="text-[#0F121C] text-xl font-bold hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="mb-4 flex gap-2 p-3 border md:w-max mx-auto border-[#E2E1E5] rounded-[19px] overflow-auto">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            onClick={() => setStudents(n)}
            className={`px-4 py-2 font-semibold transition rounded-[14px] ${students === n ? "bg-[#00A6E3] text-white" : "text-black hover:bg-gray-100"
              }`}
          >
            {n} Student{n > 1 ? "s" : ""}
          </button>
        ))}
      </div>

      {filteredPlans.length === 0 ? (
        <p className="text-center text-gray-400 py-6">
          No plans available for {students} student{students > 1 ? "s" : ""}.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="border border-[#E2E1E5] rounded-[20px] p-4">
              <p className="text-lg font-semibold mb-1">{plan.title}</p>
              <p className="text-xs text-gray-400 mb-4">{plan.groupName}</p>
              <h1 className="text-[32px] font-bold mb-2 border-b border-[#E2E1E5] pb-3">
                {plan.price}{" "}
                <span className="text-[16px] text-[#717073] font-medium">/ {plan.interval}</span>
              </h1>
              <ul className="my-4 space-y-2">
                <li className="text-sm font-medium text-[#282829] flex items-center gap-2">
                  <img src="/assets/greenTick.png" className="w-5" alt="" />
                  {plan.duration} {plan.interval}(s) duration
                </li>
                <li className="text-sm font-medium text-[#282829] flex items-center gap-2">
                  <img src="/assets/greenTick.png" className="w-5" alt="" />
                  {plan.priceLesson} per lesson
                </li>
                {plan.joiningFee && (
                  <li className="text-sm font-medium text-[#282829] flex items-center gap-2">
                    <img src="/assets/greenTick.png" className="w-5" alt="" />
                    Joining fee: {plan.joiningFee}
                  </li>
                )}
              </ul>
              <button className="w-full bg-[#042C89] text-white font-semibold py-3 rounded-[12px]">
                {plan.joiningFee ? `${plan.joiningFee} Joining Fee` : "Enrol Now"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── TermDatesModal ────────────────────────────────────────────────────────────
function TermDatesModal({
  terms,
  toggleModal,
  currentDate,
  selectedDay,
  setSelectedDay,
  handlePrevMonth,
  handleNextMonth,
  daysInMonth,
  startOffset,
}) {
  const allExclusionDates = new Set(terms.flatMap((t) => t.exclusionDates ?? []));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const isSessionDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return terms.some((t) => (t.sessionsMap ?? []).some((s) => s.sessionDate === dateStr));
  };

  const isExclusionDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return allExclusionDates.has(dateStr);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="text-black poppins md:w-[490px] w-[310px] absolute md:right-0 md:left-auto -left-[50px] top-[30px] bg-white rounded-[20px] shadow-lg border border-[#E2E1E5] p-4 z-50 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4 border-b pb-3 border-[#E2E1E5]">
        <h2 className="text-[24px] poppins font-semibold text-gray-900">Term Dates</h2>
        <button
          onClick={() => toggleModal(null)}
          className="text-[#0F121C] font-bold hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {/* Term list */}
      <div className="mb-6 space-y-5 text-center text-gray-600 text-xs select-none">
        {terms.length === 0 ? (
          <p className="text-gray-400">No term data available.</p>
        ) : (
          terms.map((term) => (
            <div key={term.id}>
              <p className="font-semibold text-[18px] text-[#1F1C1E] capitalize">
                {term.name} Term
              </p>
              <p className="text-[#717073] py-1 text-[14px] capitalize">Day: {term.day}</p>
              <p className="text-[#717073] py-1 text-[14px]">
                {formatDate(term.startDate)} – {formatDate(term.endDate)}
              </p>
              <p className="text-[#717073] text-[14px]">{term.totalSessions} sessions</p>
            </div>
          ))
        )}
      </div>

      {/* Calendar */}
      <div className="bg-[#F6F6F7] max-w-[90%] m-auto poppins shadow rounded-xl p-4 select-none">
        <div className="flex justify-center items-center text-gray-700 font-semibold mb-7">
          <button
            onClick={handlePrevMonth}
            className="p-1 rounded-full flex items-center justify-center w-8 h-8 hover:bg-[#3E3E47] hover:text-white"
          >
            <IoIosArrowBack />
          </button>
          <span className="mx-4 text-[#1F1C1E] font-semibold text-[16px]">
            {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
          </span>
          <button
            onClick={handleNextMonth}
            className="p-1 rounded-full flex items-center justify-center w-8 h-8 hover:bg-[#3E3E47] hover:text-white"
          >
            <IoIosArrowForward />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-gray-500 text-xs font-semibold mb-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div className="text-sm text-[#797A88]" key={i}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-gray-700 text-sm">
          {[...Array(startOffset)].map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const isSelected = day === selectedDay;
            const isSession = isSessionDate(day);
            const isExclusion = isExclusionDate(day);

            let dayClass = "py-4 text-[#797A88] rounded-full transition font-medium";
            if (isSelected) dayClass += " bg-[#0DD180] font-bold text-white";
            else if (isExclusion) dayClass += " bg-[#FDECEA] text-[#FF5C40] font-semibold";
            else if (isSession) dayClass += " bg-[#E1E8FF] text-[#042C89] font-semibold";
            else dayClass += " hover:bg-gray-200";

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={dayClass}
                title={isExclusion ? "Exclusion date" : isSession ? "Session date" : ""}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}