import React, { useState, useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { BiSearchAlt2 } from "react-icons/bi";

import { Containe, Row, Column } from "../../styles/Grid/index";

import {
  Container,
  Logo,
  CepContainer,
  CepText,
  CepTextFeatured,
  SearchContainer,
  Form,
  InputSearch,
  InputSearchButton,
  InputSearchButtonVerticalLine,
  ContainerMenu,
  ContainerMenuTerceiro,
  ButtonHandler,
  DropdownContent,
  ColumnMenuCommerce,
  ColumnMenuCommerceSegundo,
  LineMenuCommerce,
  SecondDropdownList,
  ModalDropDown,
  ShoppingCardHeader,
} from "./styles";
import logo from "../../Logo/logo-pt__large_plus@2x.png";
import Toggle from "../Toggle";

const Header: React.FC = () => {
  const [activatingSmallDropDown, setActivatingSmallDropDown] = useState(false);
  const SmallDropDownManagerButton = () => {
    setActivatingSmallDropDown((current) => !current);
  };
  const smallExitButton = () => {
    setActivatingSmallDropDown(false);
  };

  const [activatingLargeDropDown, setActivatingLargeDropDown] = useState(false);
  const LargeDropDownManagerButton = () => {
    setActivatingLargeDropDown((current) => !current);
  };

  const LargeExitButton = () => {
    setActivatingLargeDropDown(false);
  };

  const SuspendenExit = () => {
    LargeExitButton();
    smallExitButton();
  };

  useEffect(() => {
    console.log(activatingSmallDropDown + "   " + activatingLargeDropDown);
  }, [activatingSmallDropDown, activatingLargeDropDown]);
  return (
    <React.Fragment>
      {activatingSmallDropDown == true ? (
        <ModalDropDown onMouseEnter={SuspendenExit} />
      ) : null}
      <Container>
        <Containe>
          <Row>
            <Column grid="2">
              <Logo src={logo} />
              <CepContainer>
                <GrLocation />
                <CepText>Informe seu</CepText>
                <CepTextFeatured>CEP</CepTextFeatured>
              </CepContainer>
            </Column>

            <Column grid="6">
              <SearchContainer>
                <Form>
                  <InputSearch
                    placeholder="Buscar produtos, Marcas e muito mais ..."
                    type="text"
                  />
                  <InputSearchButton>
                    {" "}
                    <InputSearchButtonVerticalLine /> <BiSearchAlt2 />
                  </InputSearchButton>
                </Form>
              </SearchContainer>

              <ContainerMenu>
                <ColumnMenuCommerce onMouseEnter={SuspendenExit}>
                  <ButtonHandler
                    onMouseEnter={SmallDropDownManagerButton}
                    type="button"
                  >
                    Categorias
                  </ButtonHandler>
                  <LineMenuCommerce>Ofertas do dia</LineMenuCommerce>
                  <LineMenuCommerce>Histórico</LineMenuCommerce>
                  <LineMenuCommerce>Supermercado</LineMenuCommerce>
                  <LineMenuCommerce>Moda</LineMenuCommerce>
                  <LineMenuCommerce>Vender</LineMenuCommerce>
                  <LineMenuCommerce>Contato</LineMenuCommerce>
                </ColumnMenuCommerce>

                {activatingSmallDropDown ? (
                  <DropdownContent className="dropdown-content">
                    <ul>
                      <li>
                        {" "}
                        <a href="#">Link 1</a>
                      </li>
                      <li onMouseEnter={LargeDropDownManagerButton}>
                        <a href="#">Link 2</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">Link 30</a>
                      </li>
                    </ul>
                  </DropdownContent>
                ) : null}
                {activatingLargeDropDown ? (
                  <SecondDropdownList>
                    <ul>
                      <li>
                        <a href="#">Link 13</a>
                      </li>
                      <li>
                        <a href="#">Link 13</a>
                      </li>
                      <li>
                        <a href="#">Link 13</a>
                      </li>
                      <li>
                        <a href="#">Link 13</a>
                      </li>
                    </ul>
                  </SecondDropdownList>
                ) : null}
              </ContainerMenu>
            </Column>
            <Column grid="4">
              <ContainerMenuTerceiro>
                <Toggle />
                <ColumnMenuCommerceSegundo>
                  <LineMenuCommerce>Crie sua conta</LineMenuCommerce>
                  <LineMenuCommerce>Entre</LineMenuCommerce>
                  <LineMenuCommerce>Compras</LineMenuCommerce>
                  <LineMenuCommerce>
                    <ShoppingCardHeader />
                  </LineMenuCommerce>
                </ColumnMenuCommerceSegundo>
              </ContainerMenuTerceiro>
            </Column>
          </Row>
        </Containe>
      </Container>
    </React.Fragment>
  );
};
export default Header;
