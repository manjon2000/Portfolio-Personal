// import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ titulo, subtitle }) => {
  return (
    <>
      <header className='header'>
        <div className='header__title'>
          <h1>{titulo}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className='header__buttons'>
          <Link className='header__btn-primary' to='/proyectos'>
            PROYECTOS
          </Link>
          <a
            className='header__btn-secundary'
            href='https://www.linkedin.com/in/albert-jurado-manjon-0878b2198/'
            target='_blank'
            rel='noreferrer'>
            CONTACTAME
          </a>
        </div>
      </header>
    </>
  );
};
export default Header;
