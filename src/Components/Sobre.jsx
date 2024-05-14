import img1 from '../img/img1.gif'
import img2 from '../img/img2.gif'
import img3 from '../img/img3.gif'
import img4 from '../img/img4.gif'

export default function Sobre() {
    return (
        <>
        <section id='sobre' className="Sobre">
            <h1 className='title-cards'>Quais os Benéficios de ter um Site ?</h1>
        <div className="sobre-part1">
            <div className="card1">
                <img src={img1} alt="" />
                <div className="card-text">
                    <h1>Presença Online</h1>
                    <p>Potencialize seu negócio com uma presença online impactante. Desbloqueie uma série de benefícios, desde maior visibilidade até oportunidades de crescimento, com os nossos sites personalizados para empresas. Descubra como podemos levar sua marca ao próximo nível digital.</p>
                </div>
            </div>
            <div className="card2">
                <img src={img2} alt="" />
                <div className="card-text">
                    <h1>Alcance Global</h1>
                    <p>Alcance o mundo inteiro com o poder da sua presença online. Nossos sites são projetados para expandir os horizontes do seu negócio, conectando-o a uma audiência global. Explore como podemos ajudá-lo a conquistar novos mercados e alcançar sucesso além das fronteiras.</p>
                </div>
            </div>
        </div>
        <div className="sobre-part2">
            <div className="card3">
                <img src={img3} alt="" />
            <div className="card-text">
                    <h1>Credibilidade</h1>
                    <p>Construa credibilidade online para sua empresa. Com nossos sites profissionais e bem projetados, você pode estabelecer uma presença confiável e autêntica na internet. Descubra como nossa expertise pode fortalecer a reputação da sua marca e atrair a confiança dos seus clientes</p>
                </div>
            </div>
            <div className="card4">
                <img src={img4} alt="" />
                <div className="card-text">
                    <h1>Vendas 24H</h1>
                    <p>Abra as portas do seu negócio para o mundo, 24 horas por dia, 7 dias por semana. Com nossos sites eficientes e responsivos, você pode estar sempre disponível para seus clientes, oferecendo produtos e serviços a qualquer hora do dia ou da noite. Descubra como podemos ajudá-lo a impulsionar suas vendas online, mesmo enquanto você dorme.</p>
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