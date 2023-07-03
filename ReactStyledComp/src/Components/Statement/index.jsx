import React from "react";
import { Box, Btn } from "../../Components/UI";

import { extratoLista } from "../../info";
import Items from "../Items";

const Statement = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Btn>Ver mais</Btn>
    </Box>
  );
};

export default Statement;
