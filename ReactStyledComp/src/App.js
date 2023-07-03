import React from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import {GlobalStyle} from './Components/GlobalStyle'

function App() {
  return (
    <>
    <GlobalStyle/>
      <Header />
      <Container />
    </>
  );
}

export default App;
