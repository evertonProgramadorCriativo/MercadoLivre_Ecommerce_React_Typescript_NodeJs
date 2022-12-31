import React  ,{useContext ,useEffect} from "react";
import More from "../../Logo/view-more.svg";
import Credit from "../../Logo/credit-card.svg";
import Mercado from "../../Logo/mercado-creditsv2.svg";
import Qr from "../../Logo/qr.svg";
import CarouselHeader from "../CarouselHeader";
 
import {
  Banner,
  Safe,
  Fees,
  CashCard,
  Pix,
  Title,
  Caption,
  Container,
  ImagemBanner,
  FeesBox,
  BoxImgMore,
  CashCardBox,
  PixBox,
  ModalDropDown,
  VerticalLineBanner,
  VerticalBlackLineBanner,
  DropdownContent,
  ColumnMenuCommerce,
  SecondDropdownList
} from "./styles";
import { Containe, Row, Column } from "../../styles/Grid/index";
 
import './styled.css'
import ArrowLeftWhite from "../../Logo/arrowLeftWhite.svg";
 
import { ThemeContext } from "../lib";

interface ImagemProps {
  marginLeft?:  string ;
  marginZeroLeft?:  string ;
  marginRight?:string ;
}
const listMune1 : string[] = 
["Veículos","Supermercado","Tecnologia","Casa e Móveis","Eletrodomésticos","Esportes e Fitness",
"Ferramentas","Construção","Indústria e Comércio","Saúde","Acessório para Veiculos",
"Beleza e Cuidado Pessoal","Moda","Bebês","Brinquedos","Imóveis","Compra Internacional","Produtos Sustentaveis",
"Mais Vendidos","Lojas Officias"] 
const listTecnologiaCelulares : string[] = ["Celulares e Telefones","Celulares e Smartphones","Acessórios para Celulares",  ]

const listTecnologiaInformatica : string[] = [ "Informática","Componentes para PC","Impressão","Acessórios para Notebook","Conectividade  e  Redes", ]

const listTecnologiaCamera : string[] = [ " Câmeras e Acessórios","Acessórios para Câmeras","Câmeras",]
const listTecnologiaEletronicos : string[] = [ "Eletrônicos, Áudio e Vídeos","Acessórios para Áudio e Vídeo",
"Áudio Portátil e Acessórios"," Componentes Eletrônicos","Equipamento para DJs" ]

const listTecnologiaGames : string[] = ["Games","Video Games",
"Video Games","Filperamas e Arcode" ]
const listlistTecnologiaTevevisores : string[] = [ "Televisores"]

const SectionCarousel: React.FC<ImagemProps> = ({
  marginLeft='10px',
  marginZeroLeft="0px",
  marginRight='10px',
}) => {


 
  const {activatingLargeDropDown, activatingSmallDropDown,LargeExitButton, LargeDropDownManagerButton ,SuspendenExit } = useContext(ThemeContext);
  
  useEffect(() => {
    console.log(activatingSmallDropDown + "   " + activatingLargeDropDown);
  }, [activatingSmallDropDown, activatingLargeDropDown ]);
  return (
    <Container>
         {activatingSmallDropDown == true ? (
        <ModalDropDown     onMouseEnter={ SuspendenExit}  />
      ) : null}
       
       <ColumnMenuCommerce >

    { activatingSmallDropDown ? (
                  <DropdownContent className="dropdown-content">
           
                    {<ul className="colunalinhaMenu">
                      {
                        
                        listMune1.map((value, index:number) =>
                         index == 2 ?
                       <li className="linhaMenu rowDropDown" onMouseEnter={LargeDropDownManagerButton} key={index}>{value} 
                        <img className="ButtonHanderDropDwonArrowWhite" src={ArrowLeftWhite}  />
                        
                       </li>:
                       <li  className="linhaMenu" key={index}>{value}</li>
                      )}
                      
                    </ul>}
                  </DropdownContent>
                ) : null}
                
                {activatingLargeDropDown ? (
                  <SecondDropdownList>

                    <div className="TituloContainer">
                      <h2 className="TituloSecondDropdown">Tecnológia</h2>
                      
                    </div>
                    <hr className="TituloBarraSecondDropdown"/>
                  <div className="ConteinerSecondDropDown">

                             <div >
                            {
                            <ul className="SecondDropdownListColuna">
                                {
                                  
                                  listTecnologiaCelulares.map((value, index:number) =>
                                  index == 0   ?
                                <li className="linhaSutitulo" key={index}>{value}</li>:
                                <li className="linhaSecondDropdown"  key={index}>{value}</li>

                                
                                )} 
                                
                              </ul>}
                              {<ul className="SecondDropdownListColuna">
                                {
                                  
                                  listTecnologiaInformatica.map((value, index:number) =>
                                  index == 0  ?
                                <li className="linhaSutitulo" key={index}>{value}</li>:
                                <li className="linhaSecondDropdown"  key={index}>{value}</li>

                                
                                )} 
                                
                              </ul>}
                              </div>
                              <div>
                              {<ul className="SecondDropdownListColuna">
                                {
                                  
                                  listTecnologiaCamera.map((value, index:number) =>
                                    index == 0  ?
                                <li className="linhaSutitulo" key={index}>{value}</li>:
                                <li  className="linhaSecondDropdown" key={index}>{value}</li>

                                
                                )} 
                                
                              </ul>}
                              {<ul className="SecondDropdownListColuna">
                                {
                                  
                                  listTecnologiaEletronicos.map((value, index:number) =>
                                    index == 0  ?
                                <li className="linhaSutitulo" key={index}>{value}</li>:
                                <li  className="linhaSecondDropdown"  key={index}>{value}</li>

                                
                                )} 
                                
                              </ul>}
                               </div>
                               <div>
                              {<ul className="SecondDropdownListColuna">
                                {
                                  
                                  listTecnologiaGames.map((value, index:number) =>
                                    index == 0  ?
                                <li className="linhaSutitulo" key={index}>{value}</li>:
                                <li className="linhaGameSecondDropdown"  key={index}>{value}</li>

                                
                                )} 
                                
                              </ul>}
                              {<ul className="SecondDropdownListColuna">
                                {
                                  
                                  listlistTecnologiaTevevisores.map((value, index:number) =>
                                index == 0?
                                <li className="linhaSutitulo" key={index}>{value}</li>:
                                <li className="linhaSecondDropdown" key={index}>{value}</li>

                                
                                )} 
                                
                              </ul>}
                               </div>
                    </div>
                  </SecondDropdownList>
                ) : null}
 </ColumnMenuCommerce>
      <CarouselHeader />  
      <Containe>
  
        <Row>
          <Banner>
          <VerticalLineBanner/>
            <Safe>
              <Title>Pagamento rápido e seguro</Title>
              <Caption>com Mercado Pago</Caption>
            </Safe>
            <VerticalBlackLineBanner/>
            <Fees>
            <ImagemBanner  marginLeft={marginLeft}  marginRight={ marginRight}  src={Credit} />
            <FeesBox>
               <Title>Até 10 parcelas sem juros</Title>
              <Caption>ver mais</Caption>
            </FeesBox>
             
            </Fees>
            
            <CashCard>
              <ImagemBanner marginLeft={marginLeft} marginRight={ marginRight} src={Mercado} />
              <CashCardBox>
              <Title>Parcelamento sem cartão</Title>
              <Caption>com Mercado Pago</Caption>
              </CashCardBox>
            </CashCard>
             
            <Pix>
            <ImagemBanner  marginLeft={marginLeft} marginRight={ marginRight} src={Qr} />
              <PixBox>
                 <Title>Via Pix</Title>
              <Caption>com Mercado Pago</Caption>
              </PixBox>
            </Pix>
           
            <BoxImgMore>
             <ImagemBanner  marginLeft={marginZeroLeft} marginRight={marginZeroLeft}src={More} /> 
            </BoxImgMore>
            
          </Banner>
        </Row>
      </Containe>
    </Container>
  );
};

export default SectionCarousel;