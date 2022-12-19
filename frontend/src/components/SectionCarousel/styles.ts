import styled from "styled-components";
interface ContainerProps {
  marginLeft:string;
  marginRight:string;
}

export const Container = styled.div`
 
   background-color: yellow;
height: 50rem;
  z-index: 48;
`;
export const Banner = styled.div`
background-color: white;
    height: 9rem;
    width: 120rem;
    display: flex;
    position: relative;
    margin-top: 8rem;
    align-items: center;
    padding: 1px 0px;

    @media (max-width: 1024px) {
       
      box-shadow: 5px 12px #1919e085;
    border: 2px solid #c7c7e85c !important;
    border-radius: 0 100px 100px 0;
    width: 70rem;
     }

     @media (max-width: 600px) {
       
       box-shadow: 5px 12px #1919e085;
     border: 2px solid #c7c7e85c !important;
     border-radius: 0 100px 100px 0;
     width: 56rem;
      }

`;
export const ImagemBanner = styled.img<ContainerProps>`
  height: 4.8rem;
  margin-right: ${(props )=> props.marginRight }; 
  margin-left: ${(props )=> props.marginLeft }; 
`;
export const Fees = styled.div`
  display: flex;
    align-items: center;
    width:28.6rem;
   
   
`;
export const SecondDropdownList = styled.div`
  position: absolute;
  left: 44rem;
  top: 0rem;
  width: 74.6rem;
  height: 80rem;
  background: #fff;
  z-index: 55;
  
    padding: 32px 0px 0px 30px;
    font-size: 1.6rem;
    color: black;
`;

export const FeesBox = styled.div`
   display: flex;
    flex-direction: column;
`;

export const Safe = styled.div`
    margin-right: 1rem;
    margin-left: 0.5rem;
`;
export const BoxImgMore= styled.div`
  width: 11.5rem;
    display: flex;
     
    justify-content: flex-end;

    @media (max-width: 600px) {
       
      width: 8rem;
     position: relative;
     left: -15px;
      }
`;



export const CashCard = styled.div`
  display: flex;
    align-items: center;

    @media (max-width: 1024px) {
       
       display: none;
 
      }
`;
export const CashCardBox = styled.div`
   display: flex;
    flex-direction: column;
    width: 22.4rem;
    justify-content: space-around;
`;


export const Pix = styled.div`
  display: flex;
    align-items: center;
    width: 19.3rem;

    @media (max-width: 1024px) {
       
      display: none;

     }
`;

export const PixBox = styled.div`
 display: flex;
    flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 1.8rem;

  @media (max-width: 600px) {
       
    font-size: 1.4rem;
 
      }
`;
 
export const Caption = styled.h3`
  font-size: 1rem;
`;
export const VerticalLineBanner = styled.hr`
border-left: 0.5rem solid #5697fa !important;
    height: 8rem;
     
    margin: 0px 4px 0px  5px;
`;
export const VerticalBlackLineBanner = styled.hr`
border-left: 0.5px solid #0000003b;
    height: 9rem;
    margin-right: 1.6rem;
`;
export const DropdownContent = styled.div`
width: 23.3rem;
max-width: 80rem;
height: 80rem;
position: absolute;
top: 0rem;
left: 21rem;
background: #333;
z-index: 55;
font-size: 1.7rem;
color:white;


`;

export const ColumnMenuCommerce = styled.ul`
 
 
  position: relative;
    z-index: 55;
    
     
`;
export const ModalDropDown = styled.div`
  z-index: 50;
  padding-top: 10rem;
  position: fixed;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;