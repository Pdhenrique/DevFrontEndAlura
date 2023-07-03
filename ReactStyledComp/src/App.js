import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./Components/UI/theme";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTheme } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {

  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme((theme) => !theme)
  }

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <ThemeSwitcher theme={theme} />
      </BtnTheme>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
