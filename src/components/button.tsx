import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
}
export default function Button({ children }: ButtonProps) {
    return (
        <a href="https://wa.me/5544984145020?text=Olá%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20o%20trabalho%20de%20vocês." className="bg-[#0daa4f] flex items-center justify-center gap-2 py-3 px-12 sm:text-center text-left xl:text-lg rounded text-white uppercase font-semibold">
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