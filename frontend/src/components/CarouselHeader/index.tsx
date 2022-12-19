import React , { useState, useEffect } from 'react';

import   './styled.css';
 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowL from "../../Logo/arrowLeft.svg";


const CarouselHeader: React.FC = () => {
 
return (
   
  <Carousel showThumbs={false} showIndicators={true}  autoPlay infiniteLoop
  renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
    hasPrev && (
        <button onClick={clickHandler} className="ButtonLeft">
            <img 
                style={{ height: "20px", width: "20px" }}
                src={ArrowL} />
        </button>
    )
}
renderArrowNext={(clickHandler, hasNext, labelNext) =>
    hasNext && (
        <button onClick={clickHandler} className="ButtonRight">
            <img
                style={{ height: "20px", width: "20px"}}
                src={ArrowL} />
        </button>
    )
}


 >
  <div  >
      <img src="https://http2.mlstatic.com/D_NQ_733275-MLA51951276072_102022-OO.webp" width="100%"/>
      
  </div>
  <div>
      <img src="https://http2.mlstatic.com/D_NQ_707131-MLA51903701803_102022-OO.webp" width="100%"/>
       
  </div>
  <div>
      <img src="https://http2.mlstatic.com/D_NQ_610940-MLA51902963381_102022-OO.webp" width="100%" />
      
  </div>
 
</Carousel>
    
  );
};

 

export default CarouselHeader;