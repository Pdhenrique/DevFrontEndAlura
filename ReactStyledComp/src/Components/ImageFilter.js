import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";

import { Icon } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <Icon src={alimentacao} alt="Restaurante" />,
    Utilidades: <Icon src={utilidades} alt="utilidades" />,
    Saude: <Icon src={saude} alt="Saude" />,
    Transporte: <Icon src={transporte} alt="Transporte" />,
    default: <Icon src={outros} alt="Outros" />,
  };
  return Images[type] || Images.default
};
