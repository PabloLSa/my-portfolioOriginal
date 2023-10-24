'use client'
import { useContext, useEffect, useState } from "react";

import ThemeContext from '../context/themeContext';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import { MdEmail } from "react-icons/md";
import { BsFillTelephonePlusFill} from "react-icons/bs";
import Carousel from "./Carousel";



function Contact() {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');





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


  return (
    <>
  <div className={`flex flex-col mt-10 lg:flex-row`} id="contact">
        {/* Card de Contato */}

        <div className="p-5 lg:w-1/2 hover:text-[#C850C0]">
          <div className="font-semibold text-2xl text-center  text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to bg-purple-400 bg-clip-text">
            Tecnologias Essenciais
          </div>
          <Carousel />
        </div>
        
        {/* Formulário */}
        <div className="p-5 lg:w-1/2">
          <form className={`mb-6 text-3xl text-center rounded-lg`}
            onSubmit={sendEmail}
            style={{
              boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
              padding: '0.4em',
              borderRadius: '0.6em',
              whiteSpace: 'nowrap',
            }}
          >
            <h1 className={`font-semibold mb-4`}>Mensagem</h1>

            <div className="flex flex-col max-w-xl m-auto lg:flex-row lg:flex-wrap">
              <input
                type="text"
                className=""
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                className=""
                placeholder="Seu email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                cols={30}
                rows={8}
                className=""
                placeholder="Inicialize o diálogo..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div className="mx-auto text-center">
                <button className="relative w-48 h-12 overflow-hidden text-lg font-bold text-white bg-purple-500 hover:bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-2xl" type="submit">
                  Enviar Mensagem
                </button>
                <div className="mt-2 text-center">
                <p className="flex items-center text-sm text-purple-600 md:text-lg">
                    <MdEmail className="mr-2" />pablolandimdesa@gmail.com
                  </p>
                  <p className="flex items-center text-sm text-purple-600 md:text-lg">
                    <BsFillTelephonePlusFill className="mr-2" /> (19)99628-6293
                  </p>
                </div>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    
    </>

  );
}
export default Contact;