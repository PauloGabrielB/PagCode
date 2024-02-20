
import { FaWhatsapp, FaInstagram } from "react-icons/fa";


function Formulario() {
 

  return (
    <>
    <section id='contato' className='Contato'>
    <h1 className="contato-h1">Contato</h1>
    <div className="social-icons">
        <a className='wsp-ico' target='blank' href="https://api.whatsapp.com/send?phone=5585991856914">
        <FaWhatsapp /> WhatsApp 
        </a>
        <a className='insta-ico' target='blank' href="https://www.instagram.com/pagcode">
          <FaInstagram /> Instagram
        </a>
      </div>
    </section>
    </>
    
    
  );
}

export default Formulario;