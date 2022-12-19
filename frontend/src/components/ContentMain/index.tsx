import React from "react";
import SectionCarousel from "../SectionCarousel";
import SectionDayOffer from "../SectionDayOffer";
 
import { Container } from './styles';
 
 
 
 

const ContentMain: React.FC  = ( ) => {
  return (
   <Container> 
    <SectionCarousel/>
    <SectionDayOffer/>
    
    </Container>
  
       
  )
 
};
export default ContentMain;