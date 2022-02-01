import NavBar from "../../components/NavBar/NavBar";
import ImgSobreMi from "../../assets/images/sobremi--img.jpg";
import "./style.css";
import SmalltDesign from "./SmalltDesign";
function sobreMi(){
  return (
    <>
      {<NavBar />}
      <main role='main' className='sobre-mi'>
        {/* ----------------------------------------------------- */}
        <section className='sobre-mi__container--desktop'>
          <div className='sobre-mi__card--desktop'>
            <div className='sobre-mi__img--desktop'>
              <img src={ImgSobreMi} alt='Imagen Sobre Mi' />
            </div>
            {/* ----------------------------------------------------- */}
            <div className='sobre-mi__skills--desktop'>
              <div className='sobre-mi__skills--title--desktop'>
                <h3>Habilidades</h3>
              </div>
              <div className='sobre-mi__skills--items--desktop flex--items text-white'>
                <p>HTML 5</p>
                <p>CSS 3</p>
              </div>
              <div className='sobre-mi__skills--items--desktop flex--items text-white'>
                <p>JAVASCRIPT</p>
                <p>JQUERY</p>
              </div>
            </div>
            {/* ----------------------------------------------------- */}
            <div className='sobre-mi__conocimientos--desktop'>
              <div className='sobre-mi__conocimientos--title--desktop text-white'>
                <h3>Conocimientos</h3>
              </div>
              <div className='sobre-mi__conocimientos--items--desktop flex--items text-white'>
                <p>REACT.JS</p>
                <p>WORDPRESS</p>
              </div>
              <div className='sobre-mi__conocimientos--items--desktop flex--items text-white'>
                <p>PHP</p>
                <p>MYSQL</p>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------- */}
          <div className='sobre-mi__info--desktop'>
            <div className='sobre-mi__info--headings--desktop'>
              <h2>Sobre Mi</h2>
            </div>
            <div className='sobre-mi__bio--desktop'>
              <p>
                Continuamente aprendiendo y adquiriendo nuevas habilidades en
                función a las actuales y futuras demandas y tendencias tecnológicas
                en el campo del desarrollo web en general.
                Apasionado con el trabajo que realizo, ofrecido en cada proyecto.
              </p>
            </div>
          </div>
        </section>

        {<SmalltDesign />}
      </main>
    </>
  );
};

export default sobreMi;
