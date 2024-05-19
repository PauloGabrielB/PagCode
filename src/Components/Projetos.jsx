import imgcel from '../img/imgcel.png'


export default function Projetos() {
    return (
        
        <section id="projetos" className="tela-toda">
               <div className="explore-projetos">
            <h2>Explore Nossos Projetos</h2>
            <p>Inspire-se e alcance o sucesso online!</p>
            <p>Projetos web excepcionais.</p>
            <p>Superamos expectativas.</p>
            <p>Resultados que geram impacto real.</p>
            <p>Criamos experiências digitais cativantes.</p>
            <p>Convertemos e impulsionamos o sucesso dos negócios.</p>
            <p>Leve seu projeto ao próximo nível.</p>
        </div>
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
            <a href=""><button className="btn-icons">Vesitar Site</button></a>
        </div>
        {/* <div className="projeto">
            <h3>Página de Links</h3>
            <p>Cartão de Visitas</p>
            <img className='img4' src={imgcel} alt="" />
            <a href="https://souzaesantos.vercel.app/"><button>Vesitar Site</button></a>
        </div> */}
        </div>
        </div>
        </section>
        
    )
}