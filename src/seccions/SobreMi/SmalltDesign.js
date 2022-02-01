import ImgSobreMi from "../../assets/images/sobremi--img.jpg";
function SmalltDesign(){
  return (
    <>
      <section className='sobre-mi__container--small text-white'>
        {/* ---------------------------------------------- */}
        <div className='sobre-mi__img--small'>
          <img src={ImgSobreMi} alt='sobre mi imagen' title='sobre mi imagen' />
        </div>
        {/* ---------------------------------------------- */}
        <div className='sobre-mi__info--small'>
          <h1 className='sobre-mi__heading'>SOBRE MI</h1>
          <p>
            Continuamente aprendiendo y adquiriendo nuevas habilidades en
            función a las actuales y futuras demandas y tendencias tecnológicas
            en el campo del desarrollo web en general.
            Apasionado con el trabajo que realizo, ofrecido en cada proyecto.
          </p>
        </div>
        {/* ---------------------------------------------- */}
        <div className='sobre-mi__skills--small'>
          <h3 className='sobre-mi__skills--title--small'>Habilidades:</h3>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JAVASCRIPT</p>
          <p>JQUERY</p>
        </div>
        <div className='sobre-mi__conocimientos--small'>
          <h3 className='sobre-mi__conocimientos--title--small'>
            Conocimientos:
          </h3>
          <p>REACT.JS</p>
          <p>WORDPRESS</p>
          <p>PHP</p>
          <p>MYSQL</p>
        </div>
      </section>
    </>
  );
};

export default SmalltDesign;
