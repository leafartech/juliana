import Image from "next/image";
import Button from "./button";

export default function Header() {
    return (
        <header className="relative h-screen flex items-center justify-center px-4">
            <div className="absolute top-0 left-0 w-full h-full sm:block hidden">
                <Image
                    src="/images/bg1.png"
                    alt="Imagem de fundo"
                    // width={1280}
                    // height={832}
                    layout="fill"
                    className="object-cover"
                />
            </div>
            <Image
                src="/images/bg6.png"
                alt="Imagem de fundo"
                // width={1280}
                // height={832}
                layout="fill"
                className="object-cover sm:hidden block"
            />
            <div className="w-full max-w-6xl sm:grid sm:grid-cols-2 z-50">
                <div className="flex flex-col items-start gap-4">
                    <div className="sm:w-64 w-52">
                        <Image
                            src="/images/logo.png"
                            alt="Logo do Escritório de Advocacia"
                            width={466}
                            height={152}
                            layout="responsive"
                        />
                    </div>
                    <h1 className="text-white text-3xl xl:text-[42px] xl:leading-[2.8rem] font-semibold">Garanta seu benefício previdenciário de forma rápida e descomplicada</h1>
                    <p className="text-white text-lg sm:text-xl">O INSS negou seu benefício ou você não sabe qual benefício tem direito?</p>
                    <div className="">
                    </div>
                    <div className="max-w-sm w-full"><Button>Meu benefício aqui!</Button></div>
                </div>
            </div>
        </header>
    )
}