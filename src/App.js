
import React, { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./seccions/Inicio";
import Proyectos from "./seccions/Proyectos";
import SobreMi from "./seccions/SobreMi";

function App() {
  return (
    <>
      <Router basename='process.env.PUBLIC_URL'>
        <Routes>
          <Route  path='/' element={<Inicio />} />
          <Route  path='sobre-mi' element={<SobreMi />} />
          <Route  path='proyectos' element={<Proyectos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

