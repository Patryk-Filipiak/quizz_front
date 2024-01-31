import { ReactNode, useState } from "react";
import { Toast } from "./types";

export const useDialog = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [popup, setPopup] = useState<ReactNode | null>(null);

    return {
        toast: {
            list: toasts,
            send: (message: string) => {
                const toast = { content: message }
                setToasts(current => { 
                    return [toast,...current];
                });
                setTimeout(() => setToasts(toasts.filter(current => current !== toast)), 3000)
            }
        },
        popup: {
            content: popup,
            show: (content: ReactNode) => setPopup(content),
            cancel: () => setPopup(null),
        }
    }
}


