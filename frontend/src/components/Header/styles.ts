import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";
export const Container = styled.div`
  grid-area: Herder;
  background-color: ${(props) => props.theme.colors.yellow};
  z-index: 50;
`;

export const Logo = styled.img`
  height: 34px;
  width: 134px;
`;

export const CepContainer = styled.div`
  height: 52px;
  width: 101px;
  position: relative;

  > svg {
    font-size: 25px;
    position: absolute;
    top: 21%;
    left: -2%;
  }
`;

export const CepText = styled.p`
  font-size: 12px;
  position: absolute;
  top: 25%;
  left: 26%;
  font-weight: 400;
`;

export const CepTextFeatured = styled.p`
  font-size: 12px;
  position: absolute;
  top: 58%;
  left: 39%;
  font-weight: bold;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const Form = styled.form`
  position: relative;
`;

export const InputSearch = styled.input`
  font-size: 17px;
  width: 598px;
  height: 39px;
  padding-left: 20px;
`;

export const InputSearchButton = styled.button`
  margin-left: -44px;
  width: 21px;
  background: transparent;

  > svg {
    font-size: 25px;

    position: absolute;
    top: 4px;
    color: #b7b7b7;
  }
`;
export const InputSearchButtonVerticalLine = styled.hr`
  border-left: 1px solid #b7b7b7;
  height: 20px;
`;

export const ContainerMenu = styled.div`
  position: relative;
  z-index: 55;
`;
export const ContainerMenuTerceiro = styled.div`
  position: relative;
  display: flex;
  align-items: end;

  flex-direction: column;
`;

export const ButtonHandler = styled.button`
  background: transparent;
  margin-left: -9px;
  color: white;
  z-index: 55;
`;
export const ModalDropDown = styled.div`
  z-index: 50;
  padding-top: 100px;
  position: fixed;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const DropdownContent = styled.div`
  width: 233px;
  max-width: 800px;
  height: 800px;
  position: absolute;
  top: 32px;
  background: #c8c8d7;
  z-index: 55;
`;

export const SecondDropdownList = styled.div`
  position: absolute;
  left: 232px;
  top: 32px;
  width: 746px;
  height: 800px;
  background: beige;
  z-index: 55;
`;

export const ColumnMenuCommerce = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  z-index: 55;
`;
export const ColumnMenuCommerceSegundo = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin-top: 20px;
`;

export const LineMenuCommerce = styled.li`
  font-size: 14px;
  z-index: 55;
`;

export const ShoppingCardHeader = styled(HiOutlineShoppingCart)`
  font-size: 20px;
`;
