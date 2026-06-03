"use client";

import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {
    const [step, setStep] = useState(0);

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
    const [showBreakdown, setShowBreakdown] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [campDates, setCampDates] = useState(null);
    const [parents, setParents] = useState([]);
    const [emergency, setEmergency] = useState([]);
    const [paymentDetails, setPaymentDetails] = useState({
        accountHolder: "",
        sortCode: "",
        accountNumber: "",
    });

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

    const [discount, setDiscount] = useState({ code: "", amount: 0 });

    const resetBookingData = () => {
        setStep(0);
        setTrialDate(null);
        setChildrenCount(1);
        setStudents([
            {
                firstName: "",
                lastName: "",
                dob: "",
                age: 0,
                gender: "",
                medical: "",
            },
        ]);
        setShowPlans(false);
        setSelectedPlan(null);
        setShowBreakdown(false);
        setParents([]);
        setEmergency([]);
        setPaymentDetails({
            accountHolder: "",
            sortCode: "",
            accountNumber: "",
        });
        setDiscount({ code: "", amount: 0 });
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
                setEmergency,
                paymentDetails,
                setPaymentDetails,
                discount,
                setDiscount,
                resetBookingData,campDates, setCampDates
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

