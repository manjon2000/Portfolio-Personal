import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import Menu from "../../assets/images/icon-menu-mobile.svg";
import "./style.css";
// =====================================
// -------------------------------------
// =====================================
function NavBar(){
  const [widthSize, setWidthSize] = useState("");
  const [openMenu, setOpenMenu] = useState("");
  useEffect(() => {
    // Fix error fix the React memory leak warning USE SETTIMEOUT
    setTimeout(() => {
   const mopen = () => {
      setOpenMenu("navbar__menu--actived");
      if (openMenu === "navbar__menu--actived") {
        setOpenMenu("");
      }
    };
    window.addEventListener("click", {mopen});
},2000);
   
  }, [openMenu]);
  useEffect(() => {
    // Fix error, the React memory leak warning USE setTimeout()
    setTimeout(() => {
      const sizeWidth = () => {
        const sizeWidth = window.innerWidth;
        setWidthSize(sizeWidth);
        setWidthSize({});
      };
      window.addEventListener("resize", { sizeWidth });
    },2000);
  }, [widthSize]);
  return (
    <>
      <nav className={`Navbar ${widthSize <= 425 ? "mobile" : "desktop"}`}>
        <section className='navbar--desktop'>
          <div className='logo_nav_bar'>
            <img src={Logo} alt='Logo navbar' title='Logo-Navbar' />
          </div>
          <div className='navbar__menu--desktop'>
            <Link to='/'>Inicio</Link>
            <Link to='/sobre-mi'>Sobre Mi</Link>
            <Link to='/proyectos'>Proyectos</Link>
          </div>
        </section>

        <section
          className={`navbar--mobile ${openMenu.length > 0 ? openMenu : null}`}>
          <div className='navbar__icon--mobile'>
            <img src={Menu} alt='icon--mobile' />
          </div>
        </section>
      </nav>
      <div className={`navbar__menu--animation ${openMenu}`}>
        <Link to='/'>INICIO</Link>
        <Link to='/sobre-mi'>SOBRE MI</Link>
        <Link to='/proyectos'>PROYECTOS</Link>
      </div>
    </>
  );
};

export default NavBar;
