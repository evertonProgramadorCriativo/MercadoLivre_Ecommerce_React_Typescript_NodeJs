import React  from "react";
import Slider from 'react-slick';
import { Containe, Row, Column } from "../../styles/Grid/index";
import './styles.css'
import Impresora from "../../ImagemJpg/ImagemOfetasDoDIa/impresora.jpg";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowL from "../../Logo/arrowLeft.svg";

function  SamplePrevArrow (props:any) {
  const { className, style, onClick } = props;
  return (
    <div className="BoxarrowDayLeft">
    <img
      src={ArrowL}
      className='arrowDayLeft'
      style={{ ...style, display: "block",   }}
      onClick={onClick}
    /></div>
  );
}

function  SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div className="BoxarrowDayRigth">
    <img
      src={ArrowL}
      className='arrowDayRigth'
      style={{ ...style, display: "block",   }}
      onClick={onClick}
    /></div>
  );
}

const SectionDayOffer: React.FC = () => {
   
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6
        }
      }
       
    ],
   
   
  };

 
  return (
    <React.Fragment>
    
      
      <div className="Container">
      <Containe>

    
      <Row>
        
       
     
    
      <Slider {...settings}>
               <div>
                  <div className="Card--1"  >
                    <img className="ImgCard" src={Impresora} />
                    <div className="Box">
                      <div className="BoxPrice ">
                        <p className="Title">
                          R$ 90 <span className="Coin">50</span>
                        </p>
                        <p className="Discount">10% OFF</p>
                      </div>
                      <p className="Installment">
                        12x R$ 9 <span className="Fees">sem Fees</span>
                      </p>
                      <p className="Shipping">
                        Frete grátis <span className="Full"> Full</span>
                      </p>

                   
                    </div>
                    <div className="boxDescricao-1">
                      <p className="DescricaoTexto-1"> se passando pelo canal nos comentários para dar golpes,
                         ele passa um suposto número</p>
                    </div>
                  </div>
               </div>
               <div>
                  <div className="Card"  >
                    <img className="ImgCard" src={Impresora} />
                    <div className="Box">
                      <div className="BoxPrice ">
                        <p className="Title">
                          R$ 90 <span className="Coin">50</span>
                        </p>
                        <p className="Discount">10% OFF</p>
                      </div>
                      <p className="Installment">
                        12x R$ 9 <span className="Fees">sem Fees</span>
                      </p>
                      <p className="Shipping">
                        Frete grátis <span className="Full"> Full</span>
                      </p>

                    </div>
                  </div>
               </div>
               <div>
                  <div className="Card"  >
                    <img className="ImgCard" src={Impresora} />
                    <div className="Box">
                      <div className="BoxPrice ">
                        <p className="Title">
                          R$ 90 <span className="Coin">50</span>
                        </p>
                        <p className="Discount">10% OFF</p>
                      </div>
                      <p className="Installment">
                        12x R$ 9 <span className="Fees">sem Fees</span>
                      </p>
                      <p className="Shipping">
                        Frete grátis <span className="Full"> Full</span>
                      </p>

                    
                    </div>
                  </div>
               </div>
               <div>
                  <div className="Card" >
                    <img className="ImgCard" src={Impresora} />
                    <div className="Box">
                      <div className="BoxPrice ">
                        <p className="Title">
                          R$ 90 <span className="Coin">50</span>
                        </p>
                        <p className="Discount">10% OFF</p>
                      </div>
                      <p className="Installment">
                        12x R$ 9 <span className="Fees">sem Fees</span>
                      </p>
                      <p className="Shipping">
                        Frete grátis <span className="Full"> Full</span>
                      </p>

                   
                    </div>
                  </div>
               </div> 
               <div>
                  <div className="Card"  >
                    <img className="ImgCard" src={Impresora} />
                    <div className="Box">
                      <div className="BoxPrice ">
                        <p className="Title">
                          R$ 90 <span className="Coin">50</span>
                        </p>
                        <p className="Discount">10% OFF</p>
                      </div>
                      <p className="Installment">
                        12x R$ 9 <span className="Fees">sem Fees</span>
                      </p>
                      <p className="Shipping">
                        Frete grátis <span className="Full"> Full</span>
                      </p>

                
                    </div>
                  </div>
               </div>
               <div>
                  <div className="Card" >
                    <img className="ImgCard" src={Impresora} />
                    <div className="Box">
                      <div className="BoxPrice ">
                        <p className="Title">
                          R$ 90 <span className="Coin">50</span>
                        </p>
                        <p className="Discount">10% OFF</p>
                      </div>
                      <p className="Installment">
                        12x R$ 9 <span className="Fees">sem Fees</span>
                      </p>
                      <p className="Shipping">
                        Frete grátis <span className="Full"> Full</span>
                      </p>

                      
                    </div>
                  </div>
               </div>
               <div>
                  <div className="Card"  >
                    <img className="ImgCard" src={Impresora} />
                    <div className="Box">
                      <div className="BoxPrice ">
                        <p className="Title">
                          R$ 90 <span className="Coin">50</span>
                        </p>
                        <p className="Discount">10% OFF</p>
                      </div>
                      <p className="Installment">
                        12x R$ 9 <span className="Fees">sem Fees</span>
                      </p>
                      <p className="Shipping">
                        Frete grátis <span className="Full"> Full</span>
                      </p>

                    
                    </div>
                  </div>
               </div>
               <div>
                  <div className="Card"  >
                    <img className="ImgCard" src={Impresora} />
                    <div className="Box">
                      <div className="BoxPrice ">
                        <p className="Title">
                          R$ 90 <span className="Coin">50</span>
                        </p>
                        <p className="Discount">10% OFF</p>
                      </div>
                      <p className="Installment">
                        12x R$ 9 <span className="Fees">sem Fees</span>
                      </p>
                      <p className="Shipping">
                        Frete grátis <span className="Full"> Full</span>
                      </p>

                      
                    </div>
                  </div>
               </div> 
                
          </Slider>

         
         
    
          </Row>
          </Containe>
          
      </div>
       
     
    </React.Fragment>
  );
};
export default SectionDayOffer;
