import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
import img7 from '../img/img9.gif';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [arquivo, setArquivo] = useState(null);

    function sendEmail(e) {
        e.preventDefault();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Preencha todos os campos!');
            return;
        }

        const templateParams = {
            from_name: nome,
            message: mensagem,
            email: email
        };

        emailjs.send('service_m1ve454', 'template_hjku15w', templateParams, 'XDNdIaWb3KTwEvdIB')
            .then((response) => {
                console.log('Email Enviado', response.status, response.text);
                setEmail('');
                setMensagem('');
                setNome('');
                setArquivo(null);
            }, (err) => {
                console.log('Erro ao Enviar', err);
            });
    }

    return (
        <section id='contato' className='Contato'>
            <h1 className="contato-h1">Alcance o sucesso online! Preencha o formulário abaixo e comece hoje mesmo.</h1>
            <div className="contato-container">
                <form className='form-container' onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            className='nome-input'
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='email-input'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            className='textarea'
                            id="mensagem"
                            value={mensagem}
                            onChange={(event) => setMensagem(event.target.value)}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>

                <div className="sobre-rigth">
                    <img src={img7} alt="" />
                    <div className="explore-projetos exp">
                    <p>Nosso processo é simples, rápido e personalizado para você.</p>
                    <p>Adapte seu site às suas metas comerciais e à sua marca.</p>
                    <p>Seu site de sucesso está a um formulário de distância.</p>
                    <p>A transformação digital da sua empresa começa aqui.</p>
                </div>
                </div>
            </div>
        </section>
    );
}
