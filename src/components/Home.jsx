import React from "react";
import {Link,} from "react-router-dom";
import { Button, invertTheme, theme } from "../estilo-componentes/theme";
import { ThemeProvider } from "styled-components";
const Home = () => {
    return (
      <ThemeProvider theme={theme}>
        <div className="features">
        <h2>Bienvenidos</h2>
        <p>Somos una tienda de celulares online</p>
        <ThemeProvider theme={invertTheme}>
        <Link to="/search-page">
          <Button>Ver mas</Button>
        </Link>
        </ThemeProvider>
        </div>
      </ThemeProvider>
    );
  };

export default Home;