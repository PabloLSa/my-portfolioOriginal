import Image from "next/image";

const About = () => {
  return (
    <>

      <div className="flex flex-col md:flex-row bg-zinc-900 items-center justify-center" id="about">

        <div className="flex items-center w-full md:w-1/2">
          <div className="mx-auto m-5">
            <Image
              src="/myphoto.png"
              alt="Minha Foto"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-left">
          <h1 className="font-bold text-2xl m-5 mb-0 text-white">Desenvolvedor Web</h1>
          <span className="font-semibold text-xl m-5 text-white"> Campinas, São Paulo</span>
          <p className="text-white text-left font-semibold m-5">
            Sou um desenvolvedor Full Stack, com paixão pelo design de  Front-end. Em agosto de 2022, realizei uma transição de carreira e me juntei à Trybe, onde através de projetos desafiadores e envolventes, tornei-me um especialista completo.
            Minha jornada nesse universo de programação tem sido incrível, hoje me sinto capaz de criar interfaces de usuário que são não apenas atraentes, mas também responsivas e funcionais!!
          </p>
        </div>
      </div>

    </>
  );
}

export default About;
