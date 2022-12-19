import React from 'react';

import   './styled.css';
 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselHeader: React.FC = () => {
 
 
return (
 
  <Carousel showThumbs={false} showIndicators={true}  autoPlay infiniteLoop >
  <div>
      <img src="https://http2.mlstatic.com/D_NQ_733275-MLA51951276072_102022-OO.webp" />
      
  </div>
  <div>
      <img src="https://http2.mlstatic.com/D_NQ_707131-MLA51903701803_102022-OO.webp" />
       
  </div>
  <div>
      <img src="https://http2.mlstatic.com/D_NQ_610940-MLA51902963381_102022-OO.webp" />
      
  </div>
 
</Carousel>
    
  );
};

 

export default CarouselHeader;