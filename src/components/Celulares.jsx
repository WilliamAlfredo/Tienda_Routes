import React from "react";
import {
    Link,
    Outlet,
  } from "react-router-dom";
import { CenterInfo } from "../estilo-componentes/style-comp";
import { ThemeProvider } from "styled-components";
import { Button, theme } from "../estilo-componentes/theme";

const Celulares = ({nameCelular}) => {


  return (
    <CenterInfo>
      <ThemeProvider theme={theme}>
        <div className="features">
          <h2>Info de Celulares</h2>
          <p>{nameCelular}</p>
          <Link to="details">
            {" "}
            <Button>Ver Detalles</Button>
          </Link>
          <Outlet />
        </div>
      </ThemeProvider>
    </CenterInfo>
  );
};
export default Celulares;
