import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface FloatItemProps {
    children: ReactNode
}

export default function FloatItem({ children }: FloatItemProps) {
    return (
        <a
            href="https://wa.me/5544984145020?text=Olá%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20o%20trabalho%20de%20vocês."
            className="relative flex gap-2 items-center rounded px-4 py-2 bg-[#0daa4f] text-white text-lg sm:text-xl inv"
        >
            <ShieldCheckIcon className="absolute left-4 sm:w-8 sm:h-8 w-6 h-6 text-white" />
            <span className="sm:ps-12 ps-8">{children}</span>
        </a>
    )
}