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
  margin-top: 10px;
  margin-bottom: 10px;
  height: 76px;
  width: 300px;

  line-height: "1.2";
`;

export const SpanCard = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.blue};
  line-height: 1.2;
`;

export const ContainerMaisInfo = styled.div`
  width: 100%;
  position: relative;
  border-top: 1px solid #e6e6e6;
`;

export const ButtonMaisInfo = styled.button`
  position: relative;
  right: -518px;
  top: -34px;
  width: 200px;
  height: 25px;
  border-top: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
`;

export const InfoContainerButtonMais = styled.div``;

export const ContainerSubMenuFooterBackgrand = styled.div`
  background-color: #e6e6e6;
  margin-top: -38px;
  margin-bottom: 20px;
`;

export const ContanierDasColunas = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 33px;
  height: 311px;
`;
export const TituloFooter = styled.div`
  font-size: 30px;
  color: white;
`;

export const ImagemCardLeve1 = styled.img`
  height: 60px;
`;

export const ImagemCardLeve2 = styled.img`
  height: 60px;
`;

export const ImagemCardLeve3 = styled.img`
  height: 60px;
`;

export const ColunaDeMaisInfo = styled.ul`
  color: black;
`;
export const RowEmDestaque = styled.li`
  font-weight: 600;
  margin-bottom: 16px;
`;
export const RowInfo = styled.li``;
export const ContainerSubFooter = styled.div``;

export const ContainerItensSubFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColunaSubFooterList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-left: -28px;
`;
export const RowSubFooter = styled.li``;

export const SpanCopyright = styled.span`
  margin-top: 15px;
`;
