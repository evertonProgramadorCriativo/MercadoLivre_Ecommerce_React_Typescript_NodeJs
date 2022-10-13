import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import light  from './styles/themes/light'
 

 

const App: React.FC = () => {

 

  return (
    <React.Fragment>
      <ThemeProvider theme={light}>
          <GlobalStyles /> 
        <Layout />
      </ThemeProvider>
      
    </React.Fragment>
  );
};
export default App;