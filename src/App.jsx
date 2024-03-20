import React from "react";
import "./App.css";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
  NavLink as NL,
  NavLink,
} from "react-router-dom";
import {
  BtnLink,
  CenteredCont,
  DetailsCont,
} from "./estilo-componentes/style-comp";

import Home from "./components/Home";
import SearhPage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDetails";

function App() {
  return (
    <div>
      <header>
        <a href="/">
          <img src="./images/celular.png" alt="" />
        </a>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Pagina de Busqueda</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <CenteredCont>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-page" element={<SearhPage />} />
          <Route path="/celulares/:nameCelular" element={<Celulares />}>
            <Route path="details" element={<CelularDetails />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </CenteredCont>
    </div>
  );
}

export default App;
