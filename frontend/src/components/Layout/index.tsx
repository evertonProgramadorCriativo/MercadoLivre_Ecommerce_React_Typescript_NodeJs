import React from "react";

import { Container } from './styles';

import Header from "../Header";
import Footer from "../Footer";
 
import Content from '../Content';
 
type Props = {
  children?: React.ReactNode
};
 


const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Container>
            
            <Header />
          <Content>
                { children }
            </Content>
          <Footer />
           
     </Container>
      
    </React.Fragment>
  );
};
export default Layout;