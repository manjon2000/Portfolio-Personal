import React, { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./seccions/Inicio";
import Proyectos from "./seccions/Proyectos";
import SobreMi from "./seccions/SobreMi";

function App() {
  return (
    <>
      <Router basename='process.env.PUBLIC_URL'>
        <Routes>
          <Route  exact path='/' element={<Inicio />} />
          <Route  exact path='/sobre-mi' element={<SobreMi />} />
          <Route  exact path='/proyectos' element={<Proyectos/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

