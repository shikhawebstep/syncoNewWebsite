import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, X } from "lucide-react";

const ICONS = {
    success: <CheckCircle className="w-5 h-5 shrink-0 text-white" />,
    error: <XCircle className="w-5 h-5 shrink-0 text-white" />,
    warning: <AlertTriangle className="w-5 h-5 shrink-0 text-white" />,
};

const BG = {
    success: "bg-[#0DD180]",
    error: "bg-red-500",
    warning: "bg-yellow-500",
};

const ToastItem = ({ toast, removeToast }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true));
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => removeToast(toast.id), 300);
    };

    return (
        <div
            className={`flex items-start gap-3 px-4 py-3 rounded-xl shadow-lg text-white text-sm font-medium
                w-[340px] max-w-[340px] pointer-events-auto transition-all duration-300
                ${BG[toast.type] || "bg-gray-700"}
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
            <div className="mt-0.5">{ICONS[toast.type]}</div>
            <span className="flex-1 break-words leading-snug text-left">{toast.message}</span>
            <button
                onClick={handleClose}
                className="mt-0.5 shrink-0 text-white/70 hover:text-white transition-colors"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export const Toast = ({ toasts, removeToast }) => (
    <div className="fixed top-5 right-5 z-[10000] flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} removeToast={removeToast} />
        ))}
    </div>
);

export const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const removeToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

    const addToast = (message, type = "success", duration = 4000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), duration);
    };

    return {
        toasts,
        addToast,
        removeToast,
        Toast: () => <Toast toasts={toasts} removeToast={removeToast} />,
    };
};