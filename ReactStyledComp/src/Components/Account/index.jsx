import React, { useState } from "react";
import styled from 'styled-components'

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import money from "../../assets/images/dinheiro.svg";

import { Icon, Box, Btn, Details, Balance } from "../../Components/UI";

const IconMargin = styled(Icon)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        balance available{" "}
        <span>
          <Icon src={money} alt="Balance icon" />
        </span>
        {toggleState ? (
          <Balance>
            <Details>R$</Details> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privado : olho_icone}
          alt="balance privacy"
        />
      </Btn>
    </Box>
  );
};

export default Account;
