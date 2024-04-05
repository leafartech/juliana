import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";

interface ListTemProps {
    children: ReactNode
}

export default function ListItem({ children }: ListTemProps) {
    return (
        <li className="relative flex items-center gap-2 font-medium text-lg sm:text-xl">
            <CheckCircleIcon className="h-6 w-6 fill-emerald-400 absolute left-0" />
            <span className="ps-8 sm:ps-10">{children}</span>
        </li>
    )
}