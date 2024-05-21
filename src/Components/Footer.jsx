import logo from '../img/logo.png'
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    
    return (
        <>
        <section className="footer">
              <div className='container-footer'>
            <div className="footer-pt1">
                {/* <img src={logo} alt="" /> */}
                <p>A PagCode está comprometida com a sua implementação no mundo online.</p>
            </div>

            <div className="footer-pt2">
            <h1>PÁGINAS</h1>
                <div className="flinks">
                    <li className='nav-item'><a className='nav-link link-footer' href="#home">Home</a></li>
                    <li className='nav-item'><a className='nav-link link-footer' href="#sobre">Sobre</a></li>
                    <li className='nav-item'><a className='nav-link link-footer' href="#projetos">Projetos</a></li>
                    <li className='nav-item'><a className='nav-link link-footer' href="#contato">Contato</a></li>
                </div>
            </div>
            </div>

            <div className="footer-pt3">
                <h1>ESPECIALIDADES</h1>
                <h2>Criação de Sites Personalizados</h2>
                <h2>Desenvolvimento Seguro</h2>
                <h2>Suporte Contínuo</h2>
                <h2>Presença Digital</h2>
            </div>

            <div className="footer-pt4">
                <h3>CONTATOS</h3>
                <div className='pt4-contatos'>
                    <PiPhoneCallFill className='ico' />
                    <a href="https://wa.me/5585991856914"><h1>+55 085 991856914</h1></a>
                </div>
                <div className='pt4-contatos'>
                    <IoMdMail className='ico' />
                    <a href=""><h1>pagcode@hotmail.com</h1></a>
                </div>
                <div className='pt4-contatos'>   
                <a href="https://wa.me/5585991856914">
                <div className='fico'>
                <FaWhatsapp className='ico2' />
                </div>
                </a> 
                <a href="https://www.instagram.com/pagcode">
                <div className='fico'>
                <FaInstagram className='ico2' />
                </div>
                </a>
                <a href="https://github.com/PauloGabrielB">
                <div className='fico'>
                <FaGithub className='ico2' />
                </div>
                </a>           
                </div>

            </div>
           
            
             
        </section>
        <div className="dark-footer">
        <p className="copyright">© 2024 @PagCode. Todos os direitos reservados.</p>
        </div>
        </>
       
    
    )
}