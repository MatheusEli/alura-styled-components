import React from "react";
import alimentacao from '../assets/images/alimentacao.svg';
import olho from '../assets/images/olho.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import outros from '../assets/images/outros.svg';
import { IconeTema } from "./UI";


export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante"/>,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades"/>,
        Saude: <IconeTema src={saude} alt="Saude"/>,
        Transporte: <IconeTema src={transporte} alt="Transporte"/>,
        Olho: <IconeTema src={olho} alt="Olho"/>,
        default: <IconeTema src={outros} alt="Outro"/>
    }

    return Images[type] || Images.default;
}