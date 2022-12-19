import styled from "styled-components";

export const Container = styled.div`
  grid-area: Footer;
  background-color: white;
`;

export const Card = styled.div`
  align-items: center;

  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
  margin-top: 100px;
  > svg {
    color: blue;
    font-size: 70px;
  }
`;
export const ContainerFooterTerceiro = styled.div`
  align-items: center;

  display: flex;
  flex-direction: column;
`;
 
export const CardIpad = styled.div`
  @media (max-width: 1024px) {
   

display: flex;
flex-direction: column;
margin-left: 20%;
  }
  @media (max-width: 600px) {
   
   margin-left: 8%;
     }
`;
export const ImagemIcon = styled.img``;
export const SubTituloCard = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const ParagrafoCard = styled.pre`
  font-size: 14px;
  color: #999;
  line-height: 1.3;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 7.6rem;
  width: 30rem;

  line-height: "1.2";
`;

export const SpanCard = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.blue};
  line-height: 1.2;
`;

export const ContainerMaisInfo = styled.div`
  width: 100%;
  position: relative;
  border-top: 1px solid #e6e6e6 !important;
`;

export const ButtonMaisInfo = styled.button`
  position: relative;
  right: -51.8rem;
  top: -3.2rem;
  width: 20rem;
  height: 2.5rem;
  border-top: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  @media (max-width: 1024px) {
    right: -29.8rem;
   
  }
  @media (max-width: 600px) {
    right: -18.4rem;
   
  }
`;
 
export const IpadColunaDeMaisInfo = styled.div`
  @media (max-width: 1024px) {
    display: none;
   
  }
`;
export const InfoContainerButtonMais = styled.div``;

export const ContainerSubMenuFooterBackgrand = styled.div`
  background-color: #e6e6e6;
  margin-top: -3.8rem;
  margin-bottom: 2rem;
`;

export const ContanierDasColunas = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 3.3rem;
  height: 31.1rem;
  @media (max-width: 1024px) {
    max-width: 57rem;
    margin: 0 5%;
   
  }

  @media (max-width: 600px) {
    max-width: 44rem;
    margin: 0 0%;
   
  }
`;

 
 
  export const IpadSubFooter6List = styled.div`
  display: block;
  @media (max-width: 1024px) {

    display: none;
  }
`;

export const  IpadSubFooter2List = styled.div`
display: none;
@media (max-width: 1024px) {
display: block;
  
}
`;

export const Ipad6ColInfoFooter = styled.div`
  display: block;
  @media (max-width: 1024px) {

    display: none;
  }
`;

export const Ipad2ColInfoFooter = styled.div`
  display: none;
  @media (max-width: 1024px) {

    display: block;
  }
`;
export const IpadRowSubFooter = styled.div`
 
  @media (max-width: 1024px) {
 display: none;
   
  }
`;
 
export const TituloFooter = styled.div`
  font-size: 3rem;
  color: white;
`;

export const ImagemCardLeve1 = styled.img`
  height: 6rem;
`;

export const ImagemCardLeve2 = styled.img`
  height: 6rem;
`;

export const ImagemCardLeve3 = styled.img`
  height: 6rem;
`;

export const ColunaDeMaisInfo = styled.ul`
  color: black;
`;
export const RowEmDestaque = styled.li`
  font-weight: 600;
  margin-bottom: 1.6rem;
`;
export const RowInfo = styled.li``;
export const ContainerSubFooter = styled.div`
font-size:1.3rem;`;

export const ContainerItensSubFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColunaSubFooterList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-left: -2.8rem;
  @media (max-width: 1024px) {
 width: 30rem;
 margin-left: 0rem;
  }
`;
export const RowSubFooter = styled.li``;



export const ColunaSpanCopyright = styled.div`
 display: flex;
 flex-direction: column;
padding-top:2.9rem;`;

export const SpanCopyright = styled.span`
  margin-top: 1.5rem;
  margin-left: 1.4rem;
  margin-bottom: 1.4rem;
`;
