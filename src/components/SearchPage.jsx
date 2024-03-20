import React from "react";

import { Link } from "react-router-dom";
import { BtnLink, CenterInfo } from "../estilo-componentes/style-comp";

const SearhPage = () => {
  const celulares = ["Samsung", "LG", "Xiaomi", "Iphone", "Oppo"];
  return (
    <CenterInfo>
      <div>
        <h2>Pagina de busqueda</h2>
        <ul>
          {celulares.map((celular) => (
            <li key={celular}>
              <Link to={`/celulares/${celular}`}>
                <BtnLink>{celular}</BtnLink>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </CenterInfo>
  );
};
export default  SearhPage;