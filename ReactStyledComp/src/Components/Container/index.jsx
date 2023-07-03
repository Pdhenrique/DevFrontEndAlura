import React from "react";
import styled from "styled-components";
import Titulo from "../Title";
import Conta from "../Account";
import Statement from '../Statement'

const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;
const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
}
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
        <Statement/>
      </Content>
    </Container>
  );
};
