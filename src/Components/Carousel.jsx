import icon1 from '../Img/icon1.png'
import icon2 from '../Img/icon2.png'
import icon3 from '../Img/icon3.png'
import icon4 from '../Img/icon4.png'
import icon5 from '../Img/icon5.png'
import icon6 from '../Img/icon6.png'
import icon7 from '../Img/icon7.png'
import icon8 from '../Img/icon8.png'
import icon9 from '../Img/icon9.png'
import icon10 from '../Img/icon10.png'

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
    <>
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
    </>
    
  );
};

export default Slider;