import Image from "next/image";
import Button from "./button";

export default function Header() {
    return (
        <header className="relative h-screen flex items-end sm:items-center justify-center px-4 sm:pb-0 pb-12 radial">
            <div className="sm:grid sm:grid-cols-2 sm:items-center w-full max-w-6xl">
                <Image
                    src="/images/bg6.png"
                    alt="Imagem de fundo"
                    // width={1280}
                    // height={832}
                    layout="fill"
                    className="object-cover sm:hidden block"
                />
                <div className="">
                    <div className="flex flex-col items-start gap-4">
                        <div className="sm:w-64 w-48 sm:relative sm:top-0 absolute top-6">
                            <Image
                                src="/images/logo.png"
                                alt="Logo do Escritório de Advocacia"
                                width={466}
                                height={152}
                                layout="responsive"
                            />
                        </div>
                        <h1 className="z-50 text-white text-3xl xl:text-[42px] xl:leading-[2.8rem] font-semibold">Garanta seu benefício previdenciário de forma rápida e descomplicada</h1>
                        <p className="z-50 text-white text-lg sm:text-xl">O INSS negou seu benefício ou você não sabe qual benefício tem direito?</p>
                        <div className="z-50">
                        </div>
                        <div className="z-50 max-w-sm w-full"><Button>Meu benefício aqui!</Button></div>
                    </div>
                </div>
                <div className="sm:flex hidden justify-end">
                    <Image
                        src="/images/bg1.png"
                        alt="Foto da Juliana"
                        width={444}
                        height={500}
                        layout=""
                        className="rounded"
                    />
                </div>
            </div>
        </header>
    )
}