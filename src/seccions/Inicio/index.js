import React from 'react';
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

function Inicio(){
  return (
    <>
      {<NavBar />}
      {<Header titulo='ALBERT MANJON' subtitle='DESARROLLADOR FRONT-END' />}
    </>
  );
};

export default Inicio;
