import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GrMenu } from "react-icons/gr";
export const Container = styled.div`
  grid-area: Herder;
  background-color: ${(props) => props.theme.colors.yellow};
  z-index: 60;

  @media (max-width: 1024px) {
    display: none;
   
  }
`;


export const HeaderIpad = styled.div`

display: none;
  @media (max-width: 1024px) {
    grid-area: Herder;
  background-color: ${(props) => props.theme.colors.yellow};
  z-index: 60;
  background-color:yellow;
  display: block;
 
 
  }
`;
export const HeaderIpadContainer = styled.div`


  @media (max-width: 1024px) {
   display: flex;
    align-items: center;
    position: relative;
 
 
  }
`;



export const Logo = styled.img`
  height: 3.4rem;
  width: 13.4rem;
  margin-top:1rem;

 
 
`;
export const MenuIpad = styled(GrMenu)`


@media (max-width: 1024px) {
   
  height: 3.4rem;
width: 7rem;
margin-top:1rem; 
margin-left: 30px;
  }


`;
export const LogoIpad = styled.img`
 display: none;
  @media (max-width: 1024px) {
    display: block;
    margin-right: 18px;
  }

 
 
`;
export const CepIcon = styled.img`
  
  font-size: 21px !important;
    width: 20px !important;
    position: relative !important;
    left: -36px !important;
    top: -2px;
    border: 0 !important;
    outline: none !important;

 
  
 
`;
 
export const CepContainer = styled.div`
     height: 4rem;
    width: 10.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0rem;
    border: 0;

 
  &:hover{
    border: solid 1px white !important;
    cursor: pointer;
    height: 4rem;
 
  }
  &:hover body {
 overflow: hidden;
 }
  > svg {
    font-size: 2.5rem;
    position: absolute;
    top: 21%;
    left: -2%;
  }
 
`;

export const CepText = styled.p`
  font-size: 1.2rem;
  position: absolute;
  top: 25%;
  left: 26%;
  font-weight: 40rem;
  border: 0 !important;
  outline: none !important;

 

`;

export const CepTextFeatured = styled.p`
  font-size: 1.2rem;
  position: absolute;
  top: 58%;
  left: 39%;
  font-weight: bold;
  border: 0 !important;
  outline: none !important;

 
`;

export const SearchContainer = styled.div`
  display: flex;
 
`;

export const Form = styled.form`
  position: relative;
  top: 0.5rem;
  @media (max-width: 600px) {
display: none;
   
  }
`;
export const Nexus600pxForm = styled.form`
 display: none;
  @media (max-width: 600px) {
    position: relative;
    top: 7rem;
    left: -8rem;
    display: block;
   
  }
`;

export const Nexus600PxIcons = styled.form`
  
  @media (max-width: 600px) {
    position: relative;
    top: 0rem;
    left: -20rem;
    display: flex;
     
    align-items: center;
  
   
  }
`;
 

export const InputSearch = styled.input`
  font-size: 2rem;
  width: 59.8rem;
  height: 3.9rem;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.7rem;
    width: 49.8rem;
    height: 5.5rem;
    padding-left: 2rem;
   
  }
 
`;

export const InputSearchButton = styled.button`
  margin-left: -4.4rem;
  width: 2.1rem;
  background: transparent;
  @media (max-width: 1024px) {
     margin-left: -5rem;
   
  }
  > svg {
    font-size: 2.5rem;

    position: absolute;
    top: 4px;
    color: #b7b7b7;
    @media (max-width: 1024px) {
      top: 16px;
      right: -6px;
   
  }
  }
 
`;
export const ButtonShoppingCard = styled.button`
  position: relative;
  width: 2.1rem;
  top: -2.3rem;

  > svg {
    @media (max-width: 1024px) {
      font-size: 3.5rem;
    position: absolute;
    color: #505050;
    top: -10px;

    }
  }

  @media (max-width: 600px) {
    
    top: 0px;

    }
`;

export const InputSearchButtonVerticalLine = styled.hr`
  border-left: 1px solid #b7b7b7;
  height: 2rem;
 
`;

export const ContainerMenu = styled.div`
  position: relative;
  z-index: 55;

 
`;
export const ContainerMenuTerceiro = styled.div`
  position: relative;
  display: flex;
  -ms-flex-align: center;
  align-items: center;

  flex-direction: column;

 
`;

export const ButtonHandler = styled.button`
  background: transparent;
  margin-left: -9px;
  color: white;
  z-index: 55;
  display: flex;
    justify-content: center;
    align-items: center;

 

`;




 

export const ColumnMenuCommerce = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 2.5rem;
  z-index: 55;

 
`;
export const ColumnMenuCommerceSegundo = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 30rem;
  margin-top: 20px;

 
`;

export const LineMenuCommerce = styled.li`
  font-size: 1.4rem;
  z-index: 55;
 
`;

export const ShoppingCardHeader = styled(HiOutlineShoppingCart)`
  font-size: 2rem;
   
`;
export const ModalCep = styled.div`
  z-index: 55;
  
  position: fixed;
  left: 0;
  top: 0px;
 width: 134.6rem;
 height: 66rem;
 
  background-color: rgba(0, 0, 0, 0.4);
 
 

`;

export const Box = styled.div`
  position: fixed;
    top: 178px;
    width: 672px;
    left: 227px;
    background: white;
    z-index: 100;
    height: 262px;
    color: #000;
    z-index: 57;
    
   
`;

export const BoxPrimeiro = styled.div`
  height: 118px;
  align-items: center;
  display: flex;
  padding: 0 40px;

 
`;

export const BoxTitulos = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;

 
`;
export const Titulo = styled.span`
  margin-bottom: 6px;
  font-size: 25px;

 
`;
export const Subtitulo = styled.span`
  font-size: 12px;
  margin-left: 43px;
  margin-top: 5px;

 
`;
export const ButtonFecha = styled.img`
height: 25px;
position: relative;
top: -9px;
left: 75px;
cursor: pointer;`;
export const BoxSegundo = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-evenly;
`;
export const BoxInput = styled.div`
  margin-left: -151px;
`;
export const Descricao = styled.label``;
export const FormCep = styled.form``;
export const Input = styled.input`
  height: 51px;
  width: 270px;
  border-radius: 10px;
  color: #333;
  border: 3px solid #3483fa !important;
  padding: 1px 2px 1px 6px;
  margin-top: 1rem;
`;
export const ButtonEnviar = styled.button`
  width: 57px;
  height: 32px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  margin-left: -63px;
  background: #3483fa;
`;
export const NaoCep = styled.span`
  margin-top: 46px;
  font-size: 13px;
  margin-left: -426px;
  color: blue;
  font-weight: 600;
  cursor: pointer;
`;


 