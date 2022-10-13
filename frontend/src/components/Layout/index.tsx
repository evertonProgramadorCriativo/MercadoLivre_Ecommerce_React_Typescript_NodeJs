import React from "react";

import { Container } from './styles';

import Header from "../Header";
import Footer from "../Footer";
import SectionCarousel from "../SectionCarousel";
import SectionDayOffer from "../SectionDayOffer";
import SectionInterest from "../SectionInterest";
import SectionOtherStores from "../SectionOtherStores";
import SectionPopularCategories from "../SectionPopularCategories";
 


const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
       <Header />
       <SectionCarousel />
       <SectionDayOffer />
       <SectionInterest />
       <SectionOtherStores />
       <SectionPopularCategories />
       <Footer />

      </Container>
      
    </React.Fragment>
  );
};
export default Layout;