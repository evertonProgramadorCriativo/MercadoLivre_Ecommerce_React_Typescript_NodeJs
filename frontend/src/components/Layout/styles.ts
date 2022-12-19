import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: 134.3rem    ;
grid-template-rows: 10rem  100rem   55rem !important;
grid-template-areas: 
'Herder '
'ContentMain'
'Footer'
;
height: 100vh;


@media (max-width: 600px) {
    display: grid;
grid-template-columns: 134.3rem    ;
grid-template-rows: 15rem  100rem   55rem !important;
grid-template-areas: 
'Herder '
'ContentMain'
'Footer'
;
height: 100vh;
 
  }
`;
/**
 * header 100 px altura Lagura full
 * banner 510  aluta
 *  
 * oferta do dia 890
 * 
 * mercado pontos 729
 * confira 398
 * outras lojas 505
 * 
 * voce pode se interessar 398
 *  semana de moveis 515
 * categorias populares
 * 473
 * 
 * footer 715
 */