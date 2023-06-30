import React from "react";

import Titulo from "../Title";
import Conta from "../Account";

const Container = () => {
  return (
    <div className="container">
      <Titulo>Olá Fulano!</Titulo>
      <section className="content">
        <Conta />
      </section>
    </div>
  );
};

export default Container;
