import React, { useState, useEffect ,useContext  } from "react";
import ReactDOM from 'react-dom';
import { BiSearchAlt2 } from "react-icons/bi";
 

import './styled.css'
import { Containe, Row, Column } from "../../styles/Grid/index";

import {
  Container,
  Logo,
  CepIcon,
  CepContainer,
  CepText,
  CepTextFeatured,
  SearchContainer,
  Form,
  InputSearch,
  InputSearchButtonVerticalLine,
  InputSearchButton,
  ButtonShoppingCard,
  Nexus600PxIcons,
  ContainerMenu,
  ContainerMenuTerceiro,
  ButtonHandler,
  LogoIpad,
  ColumnMenuCommerce,
  ColumnMenuCommerceSegundo,
  LineMenuCommerce,
  HeaderIpad,
  MenuIpad,
  ShoppingCardHeader,
  Box,
  BoxPrimeiro,
  BoxTitulos,
  Titulo,
  Subtitulo,
  ButtonFecha,
  BoxSegundo,
  BoxInput,
  Descricao,
  FormCep,
  Input,
  ButtonEnviar,
  NaoCep,
  ModalCep,
  HeaderIpadContainer,
  Nexus600pxForm
} from "./styles";
 
import logo from "../../Logo/logo-pt__large_plus@2x.png";
import LogoSamll from "../../Logo/LogoSmall.svg";
import  cepIcon  from "../../Logo/CepIcon.svg";
import Toggle from "../Toggle";
 import Close from "../../Logo/cepCLose.svg"
 import { ThemeContext } from "../lib";

import ArrowLeftWhite from "../../Logo/arrowLeftWhite.svg";
 

const Header: React.FC = () => {
  const { activatingSmallDropDown,activatingLargeDropDown , SmallDropDownManagerButton } = useContext(ThemeContext);
  
  


  const [BoxCepExit, setBoxCepExit] = useState(false);
  const BoxCep = () => {
    setBoxCepExit((current) => !current);
    document.body.style.overflow = 'hidden';
     
  };
    const CepExitButton = () => {
    setBoxCepExit(false);
    document.body.style.overflow = 'auto';
  };

  
 
  useEffect(() => {
    console.log(activatingSmallDropDown + "   " + activatingLargeDropDown);
  }, [activatingSmallDropDown, activatingLargeDropDown ,BoxCepExit]);
  return (
    <React.Fragment>

      <HeaderIpad>
      <Containe>
          <Row>
            <Column grid="12">
        <HeaderIpadContainer>
       <LogoIpad src={LogoSamll }  />
             <Nexus600pxForm>
                  <InputSearch
                    placeholder="Buscar produtos ..."
                    type="text"
                  />
                  <InputSearchButton>
                    {" "}
                    <InputSearchButtonVerticalLine /> <BiSearchAlt2 />
                  </InputSearchButton>
                </Nexus600pxForm>
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
              <Nexus600PxIcons> 

                <MenuIpad  />
                     <ButtonShoppingCard>
                      <ShoppingCardHeader />  
                     </ButtonShoppingCard>
                     </Nexus600PxIcons>

                </HeaderIpadContainer>
                </Column>
            </Row>
            </Containe>
      </HeaderIpad>
      
     {BoxCepExit == true ? (
         <ModalCep  >
         <Box>
             <BoxPrimeiro>
               <BoxTitulos>
                 <Titulo>Selelcione onde quer receber suas compras</Titulo>
                 <Subtitulo>
                   Você poderá ver custos e prazos de entrega precisos em tudo que
                   procurar
                 </Subtitulo>
               </BoxTitulos>
               <ButtonFecha  src={Close}  onClick={CepExitButton}/>
             </BoxPrimeiro>
             <BoxSegundo>
               <BoxInput>
                 <FormCep>
                   <Descricao>
                     Código de Endereçamento Postal
                     <Input
                       placeholder="Informar um Cep"
                       type="text"
                       name="cep"
                     ></Input>
                   </Descricao>
                   <ButtonEnviar id="button">Usar</ButtonEnviar>
                 </FormCep>
               </BoxInput>
               <NaoCep>Não sei o meu CEP</NaoCep>
             </BoxSegundo>
           </Box>
           </ModalCep> 
      ) : null}
               
      <Container>
        <Containe>
          <Row>
            <Column grid="2">
              <Logo src={logo} />
           
              <CepContainer  onClick={BoxCep}>
               <CepIcon  src={cepIcon  }   />
                <div>
                <CepText>Informe seu</CepText>
                <CepTextFeatured>CEP</CepTextFeatured>
                </div>
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

                    <ButtonShoppingCard>
                  
                  </ButtonShoppingCard>
                </Form>
              </SearchContainer>

              <ContainerMenu>
                <ColumnMenuCommerce /**  onMouseEnter={SuspendenExit}*/>
               
                
                     
                          <ButtonHandler
                          onMouseEnter={SmallDropDownManagerButton}
                          type="button"
                        >
                          Categorias
                          <img className="ButtonHanderArrowWhite" src={ArrowLeftWhite} />
                        </ButtonHandler>
                      

                  <LineMenuCommerce>Ofertas do dia</LineMenuCommerce>
                  <LineMenuCommerce>Histórico</LineMenuCommerce>
                  <LineMenuCommerce>Supermercado</LineMenuCommerce>
                  <LineMenuCommerce>Moda</LineMenuCommerce>
                  <LineMenuCommerce>Vender</LineMenuCommerce>
                  <LineMenuCommerce>Contato</LineMenuCommerce>
                </ColumnMenuCommerce>

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
export default Header  ;
 
