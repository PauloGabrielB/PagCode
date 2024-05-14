import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'
import icon5 from '../img/icon5.png'
import icon6 from '../img/icon6.png'
import icon7 from '../img/icon7.png'
import icon8 from '../img/icon8.png'
import icon9 from '../img/icon9.png'
import icon10 from '../img/icon10.png'

const Slider = () => {
  const slides = [
    { image: icon1 },
    { image: icon2 },
    { image: icon3 },
    { image: icon4 },
    { image: icon5 },
    { image: icon6 },
    { image: icon7 },
    { image: icon8 },
    { image: icon9 },
    { image: icon10 },

  ];

  return (
    
    <section className="tela-toda">
      <h1 className='carousel-h1'>Ferramentas Utilizadas</h1>
    <div className="slider">
      <div className="slide-track">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} height="100" width="250" alt="" />
          </div>
        ))}
      </div>
    </div>
    </section>
    
  );
};

export default Slider;