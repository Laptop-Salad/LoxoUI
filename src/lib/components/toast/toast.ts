import { writable } from "svelte/store";

export type ToastMessage = {
    text: string;
    title?: string;
    duration?: number;
};

export const toastStore = writable<ToastMessage | null>(null);

export function toast(text: string, title: string | null = null, duration: number = 2) {
    toastStore.set({ text, title, duration });

    setTimeout(() => {
        toastStore.set(null);
    }, duration * 1000);
}
