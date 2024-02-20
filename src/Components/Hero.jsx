
function Hero() {

    return (
        <>
        <section className="hero">
            <div className="container-h1">
                <h1>NÓS CRIAMOS</h1>
                <h2>Sites / Apps Mobile / Marca</h2>
                <p>Transformamos suas ideias em presença digital.</p>
            </div>
        <div className="obj">
                <div className="objchild">
                    <span className="inn6"></span>
                </div>
            </div>
        </section>
        
        <div className="main__action">
        <a className="main__scroll" href="#sobre">
            <div className="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(28,28,30,1)">
                </path>
            </svg>
            </div>
            <span className="main__scroll-text">Scroll</span>
        </a>
        </div>
        </>
        
    )
}

export default Hero