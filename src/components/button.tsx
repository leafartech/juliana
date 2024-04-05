import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <a href="" className="bg-[#0daa4f] flex items-center justify-center gap-2 py-3 px-6 sm:text-center text-left xl:text-lg rounded text-white uppercase font-semibold">
            <span className="w-8 h-8">
                <Image
                    src="/images/wpp.png"
                    alt="Logo do Whatsapp"
                    width={256}
                    height={237}
                />
            </span>
            <span>{children}</span>
        </a>
    )
}