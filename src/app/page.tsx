import ListItem from "@/components/List/listItem";
import Team from "@/components/MySwiper/team";
import Testmonials from "@/components/MySwiper/testmonials";
import Button from "@/components/button";
import FloatItem from "@/components/float-item";
import Header from "@/components/header";
import Heroflex from "@/components/heroflex";
import Section from "@/components/section";

import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      <Header />
      <main className="sm:py-32 py-12 bg-zinc-50">
        <Section classNameS="pb-12 sm:pb-24">
          <Heroflex
            alt="Foto da Juliana Iatskiu Furquim"
            height={327}
            width={327}
            imagePath="bg2"
            reverse={true}
            imgClassName="rounded"
          >
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl sm:text-3xl font-bold">Você...</h4>
              <ul className="flex flex-col gap-2">
                <ListItem>Já teve um benefício negado</ListItem>
                <ListItem>Já esperou incansavelmente por uma resposta.</ListItem>
                <ListItem>Sofre com a dúvida sobre quais benefícios você tem direito.</ListItem>
                <ListItem>Já sentiu a angústia e a incerteza ao buscar seus direitos previdenciários.</ListItem>
                <ListItem>Tem a sensação de estar lutando sozinho contra o INSS.</ListItem>
              </ul>
              <p className="text-xl"><strong>Saiba que não precisa ser assim!</strong></p>
            </div>
          </Heroflex>
        </Section>
        <Section classNameS="pb-12 sm:pb-24">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center max-w-3xl flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Nossa equipe está  aqui para oferecer orientação e o suporte personalizado que você precisa</h2>
              <p className="subheadline">Tudo isso para superar esses desafios e garantir que receba todos os benefícios do INSS que você tem direito.</p>
            </div>
            <div className="flex justify-center w-full max-w-2xl">
              <Image
                alt="IMAGEM DE TESTE"
                height={285}
                width={486}
                layout="responsive"
                src="/images/bg3.png"
              />
            </div>
            <div className="text-center max-w-3xl flex flex-col gap-2">
              <p className="subheadline">Com <strong>mais de 17 anos de experiência</strong>, podemos transformar sua jornada previdenciária em uma experiência tranquila e bem-sucedida</p>
              <div className="flex justify-center">
                <Button>Meu benefício aqui!</Button>
              </div>
            </div>
          </div>
        </Section>
        <Section classNameS="bg-[#132C46] relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[224px] h-[224px] bg-white z-50 blur-[224px]"></div>
          <div className="w-full flex justify-start">
            <div className="relative flex flex-col items-start gap-8 max-w-4xl py-16 sm:py-32 sm:ps-24 z-[999]">
              <div className="sm:block hidden absolute top-0 left-0 w-6 h-full bg-white "></div>
              <div className="w-48 sm:w-52">
                <Image
                  src="/images/logo.png"
                  alt="Logo do Escritório de Advocacia"
                  width={466}
                  height={152}
                  layout="responsive"
                />
              </div>
              <div className="text-white flex flex-col gap-4">
                <h3 className="font-bold text-2xl">Nós sabemos o quão difícil é ter o seu pedido de aposentadoria negado mesmo após toda uma vida de trabalho...</h3>
                <p className="text-xl text-zinc-200">Ou então como é estar com alguma doença e o perito dizer que você não está incapaz...</p>
                <h3 className="font-bold text-2xl">Agora imagine viver livre da ansiedade constante que acompanha a negação de um benefício previdenciário.</h3>
                <p className="text-xl text-zinc-200">Com nossa equipe ao seu lado, você não precisa enfrentar esses desafios sozinho. <strong>Nós entendemos sua situação e estamos aqui para fornecer a orientação especializada</strong> e o apoio necessário para garantir que você receba todos os <strong>benefícios do INSS aos quais tem direito</strong>.</p>
                <p className="text-xl text-zinc-200">Não deixe que a preocupação e a confusão dominem sua vida. Entre em contato hoje mesmo e dê o primeiro passo em direção a um <strong>futuro seguro e protegido</strong>.</p>
              </div>
              <div className="sm:max-w-sm w-full">
                <Button>Meu benefício aqui!</Button>
              </div>
            </div>
          </div>
        </Section>
        <Section classNameS="py-12 sm:py-24">
          <Heroflex
            alt="Imagem da Equipe"
            height={327}
            width={327}
            imagePath="bg4"
            imgClassName="rounded"
          >
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl sm:text-3xl font-bold">Nosso objetivo é sempre priorizar o melhor benefício no menor tempo possível. </h4>
              <ul className="flex flex-col gap-2">
                <ListItem>Atendimento online</ListItem>
                <ListItem>Atendimento domiciliar</ListItem>
                <ListItem>Atendimento no nosso escritório</ListItem>
              </ul>
              <p className="text-lg font-medium">Trabalhamos de forma clara e objetiva, sempre informando o andamento do seu processo, para que você tenha clareza e segurança, sentindo-se de fato bem assistido.</p>
              <div className="">
                <Button>Meu benefício aqui!</Button>
              </div>
            </div>
          </Heroflex>
        </Section>
        <Section classNameS="pb-12 sm:pb-24">
          <div className="flex flex-col items-center gap-4">
            <div className="sm:text-center max-w-3xl flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Prestamos todo o suporte jurídico necessário junto ao INSS e também perante a Justiça.</h2>
              <p className="subheadline">Trabalhamos com todos os benefícios previdenciários:</p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap max-w-4xl">
              <FloatItem>Pensão por Morte</FloatItem>
              <FloatItem>Aposentadoria por Idade</FloatItem>
              <FloatItem>Aposentadoria por Tempo de Contribuição</FloatItem>
              <FloatItem>Aposentadoria por Incapacidade Permanente (Ap. por Invalidez)</FloatItem>
              <FloatItem>Auxílio por Incapacidade Temporária (Auxílio-doença)</FloatItem>
              <FloatItem>Auxílio-acidente</FloatItem>
              <FloatItem>Benefício de Prestação Continuada (BPC) - LOAS</FloatItem>
              <FloatItem>Salário-maternidade</FloatItem>
              <FloatItem>Auxílio-reclusão</FloatItem>
            </div>
          </div>
        </Section>
        <Section classNameS="border-y-2 border-[#132C46] py-1" className="w-full max-w-full bg-[#132C46]">
          <div className="py-6 flex justify-center ">
            <div className="w-48">
              <Image
                src="/images/logo.png"
                alt="Logo do Escritório de Advocacia"
                width={466}
                height={152}
                layout="responsive"
              />
            </div>
          </div>
        </Section>
        <Section classNameS="py-12 sm:py-24" className="overflow-hidden">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="text-center xl:max-w-3xl flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Tem dúvida se realmente vamos te ajudar?</h2>
              <p className="subheadline">Veja o que nossos clientes dizem:</p>
            </div>
            <div className="flex justify-center xl:max-w-4xl sm:max-w-3xl w-full max-w-full">
              <Testmonials />
            </div>
          </div>
        </Section>
        <Section classNameS="pb-12 sm:pb-24" className="overflow-hidden">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="text-center xl:max-w-3xl flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Conheça nosso time de advogados</h2>
            </div>
            <div className="flex justify-center xl:max-w-4xl sm:max-w-3xl w-full max-w-full">
              <Team />
            </div>
          </div>
        </Section>
        <Section classNameS="">
          <div className="sm:grid sm:grid-cols-3 items-center sm:gap-12 flex flex-col gap-4 max-w-4xl">
            <div className="w-full">
              <Image
                src={`/images/bg5.png`}
                height={295}
                width={196}
                alt="Imagem da Juliana Iatskiu Furquim"
                layout="responsive"
                className={`w-full sm:max-w-[450px]`}
              />
            </div>
            <div className=" col-span-2 flex flex-col gap-4">
              <h4 className="text-3xl font-bold">Quem somos?</h4>
              <p className="subheadline">Meu nome é Juliana Iatskiu Furquim, sou advogada previdenciarista há 17 anos, e nosso escritório trabalha para conseguir o melhor benefício no menor tempo possível. </p>
              <p className="subheadline">Nosso escritório conta com um extenso corpo jurídico de advogados e bachareis, todos prontos para atendê-los.</p>
              <Button>Meu benefício aqui!</Button>
            </div>
          </div>
        </Section>
      </main>
      <footer className="pt-1 border-t-2 border-[#132C46]">
        <div className="bg-[#132C46] w-full flex flex-col items-center gap-6 py-6 px-4 text-center">
          <div className="w-48">
            <Image
              src="/images/logo.png"
              alt="Logo do Escritório de Advocacia"
              width={466}
              height={152}
              layout="responsive"
            />
          </div>
          <p className="text-white opacity-40 font-medium text-sm">Todos os direitos reservados - Todos os direitos reservados - Juliana Iatskiu Furquim 2024</p>
        </div>
      </footer>
    </div>
  )
}