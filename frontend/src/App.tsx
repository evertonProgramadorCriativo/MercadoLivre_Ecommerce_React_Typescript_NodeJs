import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from './routes'
import light from './styles/themes/light' 
import { ThemeReactProvider } from "./components/lib";
 
const App: React.FC = () => {

  return (
    <React.Fragment>
      <ThemeReactProvider>
         
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
         
      </ThemeReactProvider>
    </React.Fragment>
  );
};
export default App;