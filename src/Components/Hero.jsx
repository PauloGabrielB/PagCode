import gif from '../img/gif.gif'

export default function Hero() {

    return (
        <>
        <section id="home" className="hero">
            
            <div className="container-h1">
                <h1>NÓS CRIAMOS</h1>
                <h2>Sites / Apps Mobile / Marca</h2>
                <p>Transformamos suas ideias em presença digital.</p>
            </div>
        <div className="obj">
                {/* <div className="objchild">
                    <span className="inn6"></span>
                </div> */}
                <img src={gif} alt="" />
            </div>
        </section>
        </>
        
    )
}

