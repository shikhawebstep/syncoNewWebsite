import React, { useState, useEffect } from "react";
import TexturedBackground from "/assets/TexturedBackground.png";
import membershipBanner from "/assets/packagesBg.png";
import Select from "react-select";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

async function fetchClasses({ postalCode = "", venueName = "", day = "All" } = {}) {
    const params = new URLSearchParams();
    if (postalCode) params.set("postal_code", postalCode);
    if (venueName) params.set("venueName", venueName);
    if (day && day !== "All") params.set("day", day.toLowerCase());

    const url = `https://api.grabbite.com/api/open/find-class${params.toString() ? `?${params}` : ""}`;
    const response = await fetch(url, { method: "GET", redirect: "follow" });
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
}

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */

/**
 * Parse messy HTML from HolidayCampPackage / termsAndCondition into a
 * clean string array. Handles:
 *   - <li> lists with data-* attributes
 *   - <p> with <br>-separated lines
 *   - plain <p> text
 *   - &nbsp; / \u00a0 artefacts
 *   - null / undefined / empty input
 */
function stripHtml(html) {
    if (!html || typeof html !== "string") return [];
    const trimmed = html.trim();
    // Treat empty or &nbsp;-only paragraphs as empty
    if (!trimmed || /^<p>(\s|&nbsp;)*<\/p>$/i.test(trimmed)) return [];

    const div = document.createElement("div");
    div.innerHTML = trimmed;

    const clean = (str) =>
        (str || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();

    // 1) <li> items (covers all list variants)
    const liItems = Array.from(div.querySelectorAll("li"))
        .map((li) => clean(li.textContent))
        .filter(Boolean);
    if (liItems.length) return liItems;

    // 2) <br>-separated lines
    const brSplit = trimmed
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/gi, " ")
        .split("\n")
        .map(clean)
        .filter(Boolean);
    if (brSplit.length) return brSplit;

    // 3) Plain textContent fallback
    const text = clean(div.textContent || "");
    return text ? [text] : [];
}

/**
 * Safely format a price value to N decimal places.
 * Returns null when value is null / undefined / NaN.
 */
function fmt(val, decimals = 2) {
    const n = parseFloat(val);
    if (val == null || isNaN(n)) return null;
    return n.toFixed(decimals);
}

/* ─────────────────────────────────────────
   PLAN CLASSIFICATION
───────────────────────────────────────── */

function getPlanType(plan) {
    const title = (plan.title || "").toLowerCase();
    if (title.includes("flexi") || (plan.duration ?? 0) === 1) return "flexi";
    if ((plan.duration ?? 0) <= 6) return "six";
    return "twelve";
}

function getPlanLabel(plan) {
    const title = (plan.title || "").toLowerCase();
    if (title.includes("flexi")) return "Flexi Plan";
    if ((plan.duration ?? 0) === 1) return "Monthly Plan";
    if ((plan.duration ?? 0) <= 3) return `${plan.duration} Month Plan`;
    if ((plan.duration ?? 0) <= 6) return "6 Month Plan";
    return "12 Month Plan";
}

const PLAN_STYLES = {
    flexi: { bg: "#FFD400", text: "#042C89", accent: "#042C89", border: "#FFD400", tag: "No commitment" },
    six: { bg: "#17D783", text: "#ffffff", accent: "#17D783", border: "#17D783", tag: "Great value" },
    twelve: { bg: "#00A6E3", text: "#ffffff", accent: "#00A6E3", border: "#00A6E3", tag: "Best price" },
};

/* ─────────────────────────────────────────
   SMALL UI HELPERS
───────────────────────────────────────── */

function Row({ label, children }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "#6b7280" }}>{label}</span>
            <span style={{ fontSize: 15 }}>{children}</span>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>{title}</p>
            {children}
        </div>
    );
}

function CheckList({ items }) {
    return (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            {items.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#4b5563" }}>
                    <span style={{ color: "#0DD180", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                </li>
            ))}
        </ul>
    );
}

/* ─────────────────────────────────────────
   INFO MODAL
───────────────────────────────────────── */

function InfoModal({ plan, onClose }) {
    if (!plan) return null;

    const features = stripHtml(plan.HolidayCampPackage);
    const tcItems = stripHtml(plan.termsAndCondition);
    const price = fmt(plan.price);
    const perLesson = fmt(plan.priceLesson);
    const joinFee = plan.joiningFee != null ? fmt(plan.joiningFee) : null;

    return (
        <div
            onClick={(e) => e.target === e.currentTarget && onClose()}
            style={{
                position: "fixed", inset: 0,
                background: "rgba(0,0,0,0.55)",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 1000, padding: "1rem",
            }}
        >
            <div
                style={{
                    background: "#fff", borderRadius: 24, padding: "2rem",
                    maxWidth: 480, width: "100%", maxHeight: "85vh",
                    overflowY: "auto", position: "relative",
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute", top: 16, right: 16,
                        background: "#f3f4f6", border: "none", borderRadius: "50%",
                        width: 32, height: 32, cursor: "pointer",
                        fontSize: 18, color: "#6b7280",
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                >
                    ×
                </button>

                {/* Title */}
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#042C89", marginBottom: 4 }}>
                    {plan.title || "Plan details"}
                </h3>
                <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 20 }}>
                    {plan.duration != null ? `${plan.duration} month${plan.duration !== 1 ? "s" : ""}` : ""}
                    {plan.interval ? ` · ${plan.interval} billing` : ""}
                    {plan.students != null ? ` · ${plan.students} student${plan.students !== 1 ? "s" : ""}` : ""}
                </p>

                {/* Pricing grid */}
                <div style={{ background: "#f9fafb", borderRadius: 12, padding: "1rem", marginBottom: 16 }}>
                    {price !== null && (
                        <Row label="Monthly price">
                            <strong style={{ color: "#042C89" }}>£{price}</strong>
                        </Row>
                    )}
                    {perLesson !== null && (
                        <Row label="Per lesson">
                            <strong style={{ color: "#17D783" }}>£{perLesson}</strong>
                        </Row>
                    )}
                    {joinFee !== null && (
                        <Row label="Joining fee">
                            <strong style={{ color: "#f59e0b" }}>£{joinFee}</strong>
                        </Row>
                    )}
                </div>

                {features.length > 0 && (
                    <Section title="What's included">
                        <CheckList items={features} />
                    </Section>
                )}

                {tcItems.length > 0 && (
                    <Section title="Terms & conditions">
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                            {tcItems.map((t, i) => (
                                <li key={i} style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.5 }}>{t}</li>
                            ))}
                        </ul>
                    </Section>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   PLAN CARD
───────────────────────────────────────── */

function PlanCard({ plan, isMostPopular, childrenCount, onMoreInfo }) {
    const type = getPlanType(plan);
    const label = getPlanLabel(plan);
    const style = PLAN_STYLES[type] || PLAN_STYLES.twelve;
    const features = stripHtml(plan.HolidayCampPackage);
    const displayFeatures = features.length > 0 ? features : ["Access to all sessions at this venue"];

    const price = fmt(plan.price);
    const joinFee = plan.joiningFee != null ? fmt(plan.joiningFee) : null;

    return (
        <div className="relative overflow-hidden rounded-[26px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
            {isMostPopular && (
                <div className="absolute right-5 top-0 z-10 rounded-b-[12px] bg-[#FFD400] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#042C89]">
                    Most Popular
                </div>
            )}

            <div
                className="px-5 py-7 text-center text-white"
                style={{ backgroundColor: style.bg }}
            >
                <h2 className="text-[24px] font-bold">{label}</h2>
            </div>

            <div className="px-6 py-6">
                <ul className="mb-6 space-y-3">
                    {displayFeatures.slice(0, 3).map((f, i) => (
                        <li className="flex gap-2 items-center">
                            <img
                                src="/assets/GreenRoundCHeck.png"
                                alt="check"
                                className="w-5 h-5 mt-[2px]"
                            />
                            <span className="text-[14px] text-[#5F5F6D]">{f}</span>
                        </li>
                    ))}
                </ul>

                <div className="text-center">
                    {price !== null ? (
                        <div className="text-[38px] font-extrabold leading-none text-[#042C89]">
                            £{price}
                            <span className="ml-1 text-[16px] font-medium text-[#9ca3af]">/ month</span>
                        </div>
                    ) : (
                        <div className="text-[16px] text-[#9ca3af]">Price on request</div>
                    )}

                    {joinFee !== null && (
                        <div className="mt-2 text-[14px] font-semibold text-[#0DD180]">
                            One-off £{joinFee} Joining Fee
                        </div>
                    )}
                </div>

                <div className="mt-6 space-y-3">
                    <button
                        onClick={() => onMoreInfo(plan)}
                        className="w-full rounded-full bg-[#C9CBD6] py-3 text-[14px] font-semibold text-white"
                    >
                        More Info
                    </button>
                    <button className="w-full rounded-full bg-[#042C89] py-3 text-[14px] font-semibold text-white">
                        Book a Membership
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */

const Packages = () => {
    const [venues, setVenues] = useState([]);
    const [selectedVenueId, setSelectedVenueId] = useState("");
    const [children, setChildren] = useState(1);
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searched, setSearched] = useState(false);
    const [modalPlan, setModalPlan] = useState(null);
    const venueOptions = venues.map((v) => ({
        value: String(v.venueId),
        label: `${v.venueName || `Venue ${v.venueId}`}${v.area ? ` – ${v.area}` : ""}`,
        raw: v,
    }));
    useEffect(() => {
        fetchClasses()
            .then((data) => {


                setVenues(Array.isArray(data.data) ? data.data : []);
                setLoading(false);
            })
            .catch((err) => {
                setError(err?.message || "Failed to load venues");
                setLoading(false);
            });
    }, []);


    console.log('venues', venues)
    const selectedVenue =
        venues.find((v) => String(v.venueId) === String(selectedVenueId)) || null;

    function handleShowPrices() {
        if (!selectedVenue) return;

        const allPlans = (selectedVenue.paymentGroups || []).flatMap(
            (g) => (Array.isArray(g.paymentPlans) ? g.paymentPlans : [])
        );

        // Filter: match student count (treat null/undefined students as 1)
        const filtered = allPlans.filter(
            (p) => p != null && (p.students ?? 1) === children
        );

        // Sort by duration ascending (treat null duration as 0)
        const sorted = [...filtered].sort(
            (a, b) => (a.duration ?? 0) - (b.duration ?? 0)
        );

        setPlans(sorted);
        setSearched(true);
    }

    function resetResults() {
        setSearched(false);
        setPlans([]);
    }

    // Most popular: first 6-month plan, else middle index
    const mostPopularPlan =
        plans.find((p) => (p.duration ?? 0) >= 6 && (p.duration ?? 0) < 12) ||
        (plans.length > 0 ? plans[Math.floor(plans.length / 2)] : null);

    return (
        <section
            className="relative bg-[#F9FAFB] min-h-[1000px] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${TexturedBackground})` }}
        >
            <div
                className="py-[120px] bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${membershipBanner})` }}
            >
                <div className="container mx-auto">

                    {/* Headings */}
                    <h1 className="text-center leading-[1] lg:text-[48px] text-[#0DD180] permanent-marker font-medium">
                        SAMBA
                    </h1>
                    <h2 className="text-center text-[#042C89] text-[48px] font-semibold recline mb-8">
                        Packages
                    </h2>

                    {/* ── Selector card ── */}
                    <div className="flex mt-10 justify-center">
                        <div className="w-full max-w-[450px] bg-white rounded-4xl shadow-xl px-10 py-10 border-t-8 border-[#FFD400]">

                            <div className="text-center text-[#34353B] text-[18px] font-semibold mb-2">
                                Choose a venue
                            </div>

                            {/* Venue dropdown */}
                            {loading ? (
                                <div className="text-center text-[#9ca3af] py-4 text-[14px]">Loading venues…</div>
                            ) : error ? (
                                <div className="text-center text-red-500 py-4 text-[14px]">
                                    {error}
                                </div>
                            ) : venues.length === 0 ? (
                                <div className="text-center text-[#9ca3af] py-4 text-[14px]">No venues available.</div>
                            ) : (
                                <div className="relative mb-6">
                                    <Select
                                        options={venueOptions}
                                        value={venueOptions.find((opt) => opt.value === selectedVenueId) || null}
                                        onChange={(opt) => {
                                            setSelectedVenueId(opt ? opt.value : "");
                                            resetResults();
                                        }}
                                        placeholder="Select a venue"
                                        isSearchable
                                        isClearable
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                minHeight: 48,
                                                borderRadius: 12,
                                                borderColor: state.isFocused ? "#0DD180" : "#E5E7EB",
                                                boxShadow: "none",
                                                "&:hover": { borderColor: "#0DD180" },
                                                textAlign: "center",
                                            }),
                                            singleValue: (base) => ({
                                                ...base,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                position: "absolute",
                                            }),
                                            placeholder: (base) => ({
                                                ...base,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                position: "absolute",
                                                color: "#9ca3af",
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                borderRadius: 12,
                                                overflow: "hidden",
                                                zIndex: 9999,
                                            }),
                                        }}
                                    />
                                </div>
                            )}

                            {/* Children radio */}
                            <p className="text-center text-[#34353B] text-[16px] font-semibold mb-4">
                                How many children would you like to book?
                            </p>
                            <div className="flex justify-center gap-6 mb-8 flex-wrap">
                                {[1, 2, 3, 4].map((num) => (
                                    <label key={num} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="children"
                                            value={num}
                                            checked={children === num}
                                            onChange={() => {
                                                setChildren(num);
                                                resetResults();
                                            }}
                                            className="hidden"
                                        />
                                        <div className="w-6 h-6 rounded-full border-2 border-[#0DD180] flex items-center justify-center">
                                            <div
                                                className={`w-3 h-3 rounded-full bg-[#0DD180] transition-opacity ${children === num ? "opacity-100" : "opacity-0"
                                                    }`}
                                            />
                                        </div>
                                        <span className="text-[16px] text-[#5F5F6D]">{num}</span>
                                    </label>
                                ))}
                            </div>

                            <button
                                disabled={!selectedVenueId || loading}
                                onClick={handleShowPrices}
                                className="w-full bg-[#0DD180] hover:bg-[#0bbd72] disabled:bg-[#e5e7eb] disabled:text-[#9ca3af] disabled:cursor-not-allowed transition text-white font-semibold text-[20px] py-3 rounded-full"
                            >
                                Show Prices
                            </button>
                        </div>
                    </div>

                    {/* ── Results ── */}
                    {searched && (
                        <div className="mt-16 max-w-[1145px] m-auto">
                            {plans.length === 0 ? (
                                <p className="text-center text-[#9ca3af] text-[16px]">
                                    No plans available for {children} child{children > 1 ? "ren" : ""} at this venue.
                                </p>
                            ) : (
                                <>
                                    <p className="text-center text-[#5F5F6D] text-[15px] mb-8">
                                        {plans.length} plan{plans.length !== 1 ? "s" : ""} available at{" "}
                                        <strong className="text-[#042C89]">
                                            {selectedVenue?.venueName || "this venue"}
                                        </strong>{" "}
                                        for {children} child{children > 1 ? "ren" : ""}
                                    </p>

                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                            gap: "1.5rem",
                                            maxWidth: 1100,
                                            margin: "0 auto",
                                            padding: "0 1rem",
                                        }}
                                    >
                                        {plans.map((plan, idx) => (
                                            <PlanCard
                                                key={plan.id ?? idx}
                                                plan={plan}
                                                isMostPopular={
                                                    mostPopularPlan != null && plan.id === mostPopularPlan.id
                                                }
                                                childrenCount={children}
                                                onMoreInfo={setModalPlan}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                </div>
            </div>

            {/* Info modal */}
            {modalPlan && (
                <InfoModal plan={modalPlan} onClose={() => setModalPlan(null)} />
            )}
        </section>
    );
};

export default Packages;