import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Sobre from './Components/Sobre'
import Projetos from './Components/Projetos'
import Slider from './Components/Slider'
import Contato from './Components/Contato'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <section className='tela-toda'>
    <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Slider />
      <Contato />
      <Footer />
    </section> 
    </>
  )
}

export default App
