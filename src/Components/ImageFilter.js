import React from "react";
import alimentacao from '../assets/images/alimentacao.svg';
import olho from '../assets/images/olho.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import outros from '../assets/images/outros.svg';
import { Icone } from "./UI";


export default (type) => {
    const Images = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante"/>,
        Utilidades: <Icone src={utilidades} alt="Utilidades"/>,
        Saude: <Icone src={saude} alt="Saude"/>,
        Transporte: <Icone src={transporte} alt="Transporte"/>,
        Olho: <Icone src={olho} alt="Olho"/>,
        default: <Icone src={outros} alt="Outro"/>
    }

    return Images[type] || Images.default;
}