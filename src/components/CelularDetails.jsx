import React from "react";
import {
    useParams
  } from "react-router-dom";
import { DetailsCont } from "../estilo-componentes/style-comp";
import dataCelu from "../data/dataCelu";


const CelularDetails = () => {
    const { nameCelular } = useParams();
    const detalles = dataCelu[nameCelular];
    return (
      <DetailsCont>
        <h1>Detalle del Movil {nameCelular}</h1>
        <h4>Modelo: {detalles.desc}</h4>
        <h4>Precio: {detalles.precio}</h4>
        <h4>Descripcion: {detalles.feat}</h4>
      </DetailsCont>
    );
  };
export default  CelularDetails;