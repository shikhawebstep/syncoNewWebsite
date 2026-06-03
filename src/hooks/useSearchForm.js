import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/pages/Common/Toast";

export function useSearchForm(basePath = "/find-a-class") {
  const [postcodeQuery, setPostcodeQuery] = useState("");
  const [postcodeSuggestions, setPostcodeSuggestions] = useState([]);
  const [postcodeOpen, setPostcodeOpen] = useState(false);
  const [postcodeLoading, setPostcodeLoading] = useState(false);
  
  const [venueQuery, setVenueQuery] = useState("");
  const [venues, setVenues] = useState([]);
  const [venueOpen, setVenueOpen] = useState(false);
  const [venueLoading, setVenueLoading] = useState(false);
  
  const { toasts, addToast, removeToast } = useToast();
  const navigate = useNavigate();

  // Fetch venues
  useEffect(() => {
    setVenueLoading(true);
    const endpoint = basePath === "/find-a-camp" ? "find-a-camp" : "find-class";
    fetch(`https://api.grabbite.com/api/open/${endpoint}`, {
      method: "GET",
      redirect: "follow",
    })
      .then((res) => {
          if (!res.ok) throw new Error("API error");
          return res.json();
      })
      .then((data) => {
        const list = Array.isArray(data)
          ? data
          : data?.data ?? data?.venues ?? data?.results ?? [];
        const venueMap = new Map();
        list.forEach((item) => {
          const name = item.venueName ?? item.venue;
          const area = item.area ?? "";
          if (name && !venueMap.has(name)) venueMap.set(name, area);
        });
        setVenues(Array.from(venueMap.entries()).map(([name, area]) => ({ name, area })));
      })
      .catch(console.error)
      .finally(() => setVenueLoading(false));
  }, [basePath]);

  // Fetch postcode suggestions
  useEffect(() => {
    if (postcodeQuery.trim().length < 2) {
      setPostcodeSuggestions([]);
      setPostcodeOpen(false);
      return;
    }
    const timer = setTimeout(async () => {
      setPostcodeLoading(true);
      try {
        const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(postcodeQuery.trim())}/autocomplete`);
        if (res.ok) {
          const data = await res.json();
          setPostcodeSuggestions(data.result ?? []);
          setPostcodeOpen((data.result ?? []).length > 0);
        }
      } catch (err) {}
      setPostcodeLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [postcodeQuery]);

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!postcodeQuery.trim() && !venueQuery.trim()) {
      addToast("Please enter a postcode or select a venue.", "warning");
      return;
    }
    const params = new URLSearchParams();
    if (postcodeQuery.trim()) {
      params.append("postcode", postcodeQuery.trim());
    }
    if (venueQuery.trim()) {
      params.append("venue", venueQuery.trim());
    }
    navigate(`${basePath}?${params.toString()}`);
  };

  return {
    postcodeQuery, setPostcodeQuery,
    postcodeSuggestions, setPostcodeSuggestions,
    postcodeOpen, setPostcodeOpen,
    postcodeLoading,
    venueQuery, setVenueQuery,
    venues,
    venueOpen, setVenueOpen,
    venueLoading,
    handleSearch,
    toasts,
    removeToast
  };
}
