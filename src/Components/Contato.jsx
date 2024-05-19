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
                    <div className="mb-3">
                        <label className="form-label" htmlFor="formFile">Arquivo:</label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={(event) => setArquivo(event.target.files[0])}
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
                    <div className='rigth-p'>
                        <p>Faça parte da transformação digital da sua empresa em apenas alguns cliques! Preencha nosso formulário de contato e dê o pontapé inicial para ter um site que realmente faz a diferença. Nosso processo simplificado e personalizado garante que cada aspecto do seu novo site seja adaptado às suas metas comerciais e à identidade da sua marca. Não espere mais, comece sua jornada para o sucesso online agora mesmo!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
