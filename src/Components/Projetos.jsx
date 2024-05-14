
export default function Projetos() {
    return (
        
        <section className="tela-toda">
            <h1 className='proj-h1'>Explore Nossos Projetos: Inspire-se e Alcance o Sucesso Online!</h1>
            <p className='proj-p'>Descubra o que torna os nossos projetos web verdadeiramente excepcionais. <br /><br /> Navegue pela nossa galeria de trabalhos, cada um representando o nosso compromisso em superar expectativas e entregar resultados que geram impacto real para nossos clientes. <br /><br /> Não apenas construímos sites, criamos experiências digitais que cativam, convertem e impulsionam o sucesso dos negócios. Deixe-se inspirar e leve o seu projeto para o próximo nível conosco.</p>   
            <div className="projetos">
        <div className="projetos-container">
        <div className="projeto">
            <h3>Landing Page Foody</h3>
            <p>Site para empresa de Alimentos</p>
            <div className="img1"></div>     
            <a href=""><button>Vesitar Site</button></a>      
        </div>
        <div className="projeto">
            <h3>Souza & Santos Consultoria</h3>
            <p>Site para empresa de Consultoria</p>
            <div className="img2"></div>
            <a href="https://souzaesantos.vercel.app/"><button>Vesitar Site</button></a>
        </div>
        <div className="projeto">
            <h3>Rede Máquinas</h3>
            <p>Empresa de Locação Civil</p>
            <div className="img3"></div>
            <a href=""><button className="btn-icons">Ver Site</button></a>
        </div>
        </div>
        </div>
        </section>
        
    )
}