"use client";

import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {
    const [step, setStep] = useState(() => {
        if (typeof window !== "undefined") {
            const savedStep = localStorage.getItem("bookingSteps");
            return savedStep !== null ? Number(savedStep) : 0;
        }
        return 0;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("bookingSteps", step);
        }
    }, [step]);

    // Shared states
    const [trialDate, setTrialDate] = useState(null);
    const [childrenCount, setChildrenCount] = useState(1);
    const [students, setStudents] = useState([
        {
            firstName: "",
            lastName: "",
            dob: "",
            age: 0,
            gender: "",
            medical: "",
        },
    ]);

    const [showPlans, setShowPlans] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [showBreakdown, setShowBreakdown] = useState(false);
    const [parents, setParents] = useState([]);
    const [emergency, setEmergency] = useState({});

    // You can also put derived data here if you want
    const venue = "The King Fahad Academy, East Acton Lane, London W3 7HD";

    const formattedTrialDate = trialDate
        ? trialDate instanceof Date
            ? trialDate.toLocaleDateString()
            : String(trialDate)
        : "";

    const sessionInfo = {
        area: "Acton",
        day: "Saturday",
        type: "Outdoor",
        date: formattedTrialDate || "N/A",
        time: "9:30 am – 10:30 am",
        ageGroup: "4–7 Years",
    };

    return (
        <BookingContext.Provider
            value={{
                step,
                setStep,
                trialDate,
                setTrialDate,
                childrenCount,
                setChildrenCount,
                students,
                setStudents,
                showPlans,
                setShowPlans,
                selectedPlan,
                setSelectedPlan,
                showBreakdown,
                setShowBreakdown,
                parents,
                setParents,
                venue,
                sessionInfo,
                emergency,
                setEmergency
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}
