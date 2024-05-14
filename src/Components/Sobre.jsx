import img1 from '../img/img1.gif'
import img2 from '../img/img2.gif'
import img3 from '../img/img3.gif'
import img4 from '../img/img4.gif'

export default function Sobre() {
    return (
        <>
        <section className="Sobre">
            <h1 className='title-cards'>Quais os Benéficios de ter um Site ?</h1>
        <div className="sobre-part1">
            <div className="card1">
                <img src={img1} alt="" />
                <div className="card-text">
                    <h1>Presença Online</h1>
                    <p>Na PagCode, criamos sites personalizados, dinâmicos e seguros, combinando UI/UX com a identidade visual de cada cliente. Utilizamos as melhores tecnologias para garantir desempenho e desenvolvemos uma estrutura ideal para transmitir uma comunicação para o seu público-alvo.</p>
                </div>
            </div>
            <div className="card2">
                <img src={img2} alt="" />
                <div className="card-text">
                    <h1>Alcance Global</h1>
                    <p>Não apenas criamos sites excepcionais, mas também garantimos sua evolução continua. Oferecemos serviços de manutenção, alteração de layout, estrutura e conteúdo, além da implementação de novas funcionalidades, seu site sempre atualizado e alinhado com suas necessidades em constante mudança.</p>
                </div>
            </div>
        </div>
        <div className="sobre-part2">
            <div className="card3">
                <img src={img3} alt="" />
            <div className="card-text">
                    <h1>Credibilidade</h1>
                    <p>Fornecemos um serviço de hospedagem confiável, garanttindo disponibilidade e segurança em todos os acessos ao seu site. Conte conosco para manter sua presença online protegida e acessivel a qualquer momento.</p>
                </div>
            </div>
            <div className="card4">
                <img src={img4} alt="" />
                <div className="card-text">
                    <h1>Vendas 24H</h1>
                    <p>Nossa equipe está disponivel todos os dias úteis para atende-lo e resolver suas duvidas e problemas. Conte conosco para fornecer assistência continua e garantir que sua experiência conosco seja sempre tranquila e satisfatoria.</p>
                </div>
            </div>
        </div>
        <h1 className='desc-title'>Sobre Nós</h1>
            <div className="sobre-desc">
                <p>A PagCode é uma empresa especializada no desenvolvimento de websites personalizados para empresas de todos os tamanhos. Nossa equipe de especialistas em design e desenvolvimento trabalha em estreita colaboração com nossos clientes para criar soluções digitais que impulsionam a presença online e o sucesso dos negócios. Combinando criatividade, expertise técnica e foco no usuário, entregamos websites de alta qualidade que destacam a marca, geram engajamento e impulsionam o crescimento.</p>
            </div>
        </section>
        </>
    )
}