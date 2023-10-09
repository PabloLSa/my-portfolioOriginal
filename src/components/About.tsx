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
            Meu nome é Leandro Henrique. Sou bacharel em Educação Física, especialista em Saúde e Fitness, com mais de 20 anos de atuação. Tenho expertise em pesquisa em obesidade, além de formação em biomecânica, fisiologia, rendimento esportivo, exercícios resistidos e emagrecimento. 
            Sou reconhecido pela minha abordagem personalizada e compromisso com resultados. Meu foco é a transformação fitness com metas reais e concretas. Possuo um histórico comprovado de sucesso contínuo diante da minha dedicação e disponibilidade em ajudar as pessoas a atingir seus objetivos de saúde e condicionamento físico.
            </p>
          </div>
        </div>

    </>
  );
}

export default About;
