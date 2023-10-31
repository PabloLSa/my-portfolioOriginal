'use client'
import { useContext, useEffect, useState } from "react";

import ThemeContext from '../context/themeContext';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import { MdEmail } from "react-icons/md";
import { BsFillTelephonePlusFill, BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";



function Contact() {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [container, setContainer] = useState("containerDark");
  const [containerContact, setContainerContact] = useState(" .container-contact-dark");
  const [input, setInput] = useState('input-contact-dark');
  const [textArea, setTextArea] = useState('textarea-dark');
  const [themeText, setThemeText] = useState("text-transparent bg-gradient-to-br from-blue-700 via-purple-500 to-blue-900 bg-clip-text");


  function sendEmail(e: any) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }

    if (!validator.isEmail(email)) {
      alert('Email inválido');
      return;
    }
    if (message.length < 10) {
      alert('Mensagem muito curta');
      return;
    }
    if (name.length < 3) {
      alert('Nome inválido');
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send("service_izc1ovm", "template_3szu68j", templateParams, "McOMjZpTavG06s8UW")
      .then((response) => {
        alert('Email enviado com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        alert('Ocorreu um erro ao enviar o email, tente novamente mais tarde.');
      });

  }

  useEffect(() => {
    setContainer(theme.color === 'light' ? 'containerLight' : 'containerDark');

    setContainerContact(theme.color === 'light' ? 'container-contact-light' : 'container-contact-dark');

    setInput(theme.color === 'light' ? 'input-contact-light' : 'input-contact-dark');

    setTextArea(
      theme.color === 'light'
        ? 'textarea-white'
        : 'textarea-dark'
    );

    setThemeText(
      theme.color === 'light'
        ? 'text-transparent bg-gradient-to-br from-blue-700 via-fuchsia-500 to-fuchsia-500 bg-clip-text'
        : 'text-transparent bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 bg-clip-text'
    );




  }, [theme.color]);


  return (
    <>
      <div className={`flex flex-col lg:flex-row ${container}`} id="contact">
        {/* Card de Contato */}

        <div className="p-5 lg:w-1/2">
          <div className={`mt-0 lg:mt-14 max-w-none max-h-none ${containerContact}`}
            style={{
              boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
              padding: '0.4em',
              borderRadius: '0.6em',
              whiteSpace: 'nowrap',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={`w-full h-auto p-8 mx-auto text-center items-center rounded-lg`} >
            <Image
              src="/background.png"
              alt="BackGround linkendin"
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          </div>
            <span className="span">
            
              <span className={`ml-2 text-center ${themeText}`}>Conecte-se</span>
              <svg className="w-3.5 h-3.5 ml-2 mx-2 mt-1 text-purple-600" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <a href="https://www.linkedin.com/in/pablolandimdesadev/" target="_blank" rel="noreferrer"
                className="mx-2 mt-1 text-xl text-purple-600 transition-transform duration-300 hover:text-blue-600 hover:scale-125"
              >
                <BsLinkedin />
              </a>
              <a href="https://github.com/PabloLSa" target="_blank" rel="noreferrer"
                className="mx-2 mt-1 text-2xl text-purple-600 transition-transform duration-300 hover:text-gray-600 hover:scale-125"
              >
                <BsGithub />
              </a>
            </span>
            <div className="text-center ml-0 lg:ml-2 mt-[-4px]">
              <p className="flex items-center text-sm text-purple-600 md:text-lg">
                <MdEmail className="mr-2" />pablolandimdesa@gmail.com
              </p>
              <p className="flex items-center text-sm text-purple-600 md:text-lg">
                <BsFillTelephonePlusFill className="mr-2" /> (19)99628-6293
              </p>

            </div>
          </div>

        </div>

        {/* Formulário */}
        <div className="p-5 lg:w-1/2">


          <form className={`mb-6 text-3xl text-center rounded-lg mt-[-10px] lg:mt-6 ${containerContact}`}
            onSubmit={sendEmail}
            style={{
              boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
              padding: '0.4em',
              borderRadius: '0.6em',
              whiteSpace: 'nowrap',
            }}
          >
            <h1 className={`font-semibold mb-4 ${themeText}`}>Mensagem</h1>

            <div className="flex flex-col max-w-xl m-auto lg:flex-row lg:flex-wrap">
              <input
                type="text"
                className={`${input}`}
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                className={`${input}`}
                placeholder="Seu email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                cols={30}
                rows={8}
                className={`${textArea}`}
                placeholder="Inicialize o diálogo..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div className="mx-auto text-center">
                <button className="relative w-48 h-12 overflow-hidden text-lg font-bold text-white bg-purple-500 hover:bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-2xl" type="submit">
                  Enviar Mensagem
                </button>


              </div>
            </div>
          </form>


        </div>

      </div>


    </>
  );
}
export default Contact;