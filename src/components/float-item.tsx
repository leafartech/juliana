import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface FloatItemProps {
    children: ReactNode
}

export default function FloatItem({ children }: FloatItemProps) {
    return (
        <div className="flex gap-2 items-center rounded px-4 py-2 bg-[#132c46] text-white text-lg sm:text-xl inv">
            <ShieldCheckIcon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
            <span>{children}</span>
        </div>
    )
}