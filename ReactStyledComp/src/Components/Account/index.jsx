import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import money from "../../assets/images/dinheiro.svg";

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
      balance available{" "}
        <span>
          <img className="icon-image" src={money} alt="Balance icon" />
        </span>
        {toggleState ? (
          <div className="balance">
            <span className="detail">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="icon-image"
          src={toggleState ? privado : olho_icone}
          alt="balance privacy"
        />
      </button>
    </div>
  );
};

export default Account;
