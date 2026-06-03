import React, { useState } from "react";

// Toast Component
export const Toast = ({ toasts, removeToast }) => (
    <div className="fixed top-5 right-5 z-[10000] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
            <div
                key={toast.id}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white text-sm font-medium transition-all duration-300 min-w-[280px] pointer-events-auto
                    ${toast.type === 'success' ? 'bg-[#0DD180]' : toast.type === 'error' ? 'bg-red-500' : 'bg-yellow-500'}`}
            >
                <span className="text-lg">
                    {toast.type === 'success' ? '✅' : toast.type === 'error' ? '❌' : '⚠️'}
                </span>
                <span className="flex-1">{toast.message}</span>
                <button onClick={() => removeToast(toast.id)} className="ml-2 text-white/80 hover:text-white text-lg leading-none">×</button>
            </div>
        ))}
    </div>
);

// useToast Hook
export const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = 'success', duration = 4000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), duration);
    };

    const removeToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

    return { toasts, addToast, removeToast, Toast: () => <Toast toasts={toasts} removeToast={removeToast} /> };
};
