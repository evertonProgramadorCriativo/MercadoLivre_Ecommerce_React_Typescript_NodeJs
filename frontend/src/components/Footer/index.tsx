import React, { useState } from "react";

import { Container } from "./styles";
import { Containe, Row, Column } from "../../styles/Grid/index";
import {
  Card,
  ImagemIcon,
  SubTituloCard,
  ParagrafoCard,
  SpanCard,
  ContainerFooterTerceiro,
  ContainerMaisInfo,
  ContanierDasColunas,
  ColunaDeMaisInfo,
  RowInfo,
  ButtonMaisInfo,
  RowEmDestaque,
  ContainerSubFooter,
  ContainerItensSubFooter,
  ColunaSubFooterList,
  RowSubFooter,
  SpanCopyright,
  InfoContainerButtonMais,
  ContainerSubMenuFooterBackgrand,
  TituloFooter,
  ImagemCardLeve1,
  ImagemCardLeve2,
  ImagemCardLeve3,
} from "./styles";
import PaymentSrc from "../../Logo/payment.svg";
import ProtectedSrc from "../../Logo/protected.svg";
import ShippingSrc from "../../Logo/shipping.svg";

const Footer: React.FC = () => {
  const [ativado3, setAtivado3] = useState(false);
  const buttonHandler3 = () => {
    setAtivado3((current) => !current);
  };
  return (
    <React.Fragment>
      <Container>
        <TituloFooter>Ofertas Mercado livre</TituloFooter>
        <Containe>
          <Row>
            <Column grid="4">
              <Card>
                <ImagemCardLeve1 src={PaymentSrc} />
                <ContainerFooterTerceiro>
                  <SubTituloCard>Escolha como pagar</SubTituloCard>
                  <ParagrafoCard>
                    {`Com o Mercado Pago, você paga com cartão,
   boleto ou Pix. Você também pode pagar em
    até 12x no boleto com o Mercado  Crédito`}
                  </ParagrafoCard>
                  <SpanCard>Como pagar com Mercado Pago</SpanCard>
                </ContainerFooterTerceiro>
              </Card>
            </Column>
            <Column grid="4">
              <Card>
                <ImagemCardLeve2 src={ProtectedSrc} />
                <ContainerFooterTerceiro>
                  <SubTituloCard>Frete grátis a partir de R$ 79</SubTituloCard>
                  <ParagrafoCard>
                    {`    Só por estar cadastrado no Mercado Livre,
você tem frete grátis em milhares de produtos.
    É um benefício do Mercado Pontos.`}
                  </ParagrafoCard>
                  <SpanCard>Saiba mais sobre este benefício</SpanCard>
                </ContainerFooterTerceiro>
              </Card>
            </Column>
            <Column grid="4">
              <Card>
                <ImagemCardLeve3 src={ShippingSrc} />
                <ContainerFooterTerceiro>
                  <SubTituloCard>Segurança, do início ao fim</SubTituloCard>
                  <ParagrafoCard>
                    {` Você não gostou do que comprou? Devolva!
   No Mercado Livre não há nada que você não
         possa fazer, porque você está sempre
                                   protegido.`}
                  </ParagrafoCard>
                  <SpanCard>Como te protegemos</SpanCard>
                </ContainerFooterTerceiro>
              </Card>
            </Column>
          </Row>
        </Containe>

        <ContainerMaisInfo>
          <InfoContainerButtonMais>
            <Containe>
              <Row>
                <Column grid="12">
                  <ButtonMaisInfo onMouseEnter={buttonHandler3} type="button">
                    Mais Informações
                  </ButtonMaisInfo>
                </Column>
              </Row>
            </Containe>
          </InfoContainerButtonMais>

          {ativado3 ? (
            <ContainerSubMenuFooterBackgrand>
              <Containe>
                <Row>
                  <Column grid="12">
                    <ContanierDasColunas>
                      <ColunaDeMaisInfo>
                        <RowEmDestaque>Sobre o</RowEmDestaque>
                        <RowInfo>Mercado Livre</RowInfo>
                        <RowInfo>Investor relations</RowInfo>
                        <RowInfo>Tendências</RowInfo>
                        <RowInfo>Sustentabilidade</RowInfo>
                      </ColunaDeMaisInfo>

                      <ColunaDeMaisInfo>
                        <RowEmDestaque>Outros Sites</RowEmDestaque>
                        <RowInfo>Desenvolvedores</RowInfo>
                        <RowInfo>Mercado Pago</RowInfo>
                        <RowInfo>Mercado Envios</RowInfo>
                        <RowInfo>Mercado Shops</RowInfo>
                        <RowInfo>Mercado ads</RowInfo>
                        <RowInfo>Mercado LIvre Ideias</RowInfo>
                      </ColunaDeMaisInfo>
                      <ColunaDeMaisInfo>
                        <RowEmDestaque>Contato</RowEmDestaque>
                        <RowInfo>Comprar</RowInfo>
                        <RowInfo>Vender</RowInfo>
                        <RowInfo>Solução de problemas</RowInfo>
                        <RowInfo>Segurança</RowInfo>
                      </ColunaDeMaisInfo>
                      <ColunaDeMaisInfo>
                        <RowEmDestaque>Redes sociais</RowEmDestaque>
                        <RowInfo>Twitter</RowInfo>
                        <RowInfo>Facebook</RowInfo>
                        <RowInfo>Instagram</RowInfo>
                        <RowInfo>Youtube</RowInfo>
                      </ColunaDeMaisInfo>
                      <ColunaDeMaisInfo>
                        <RowEmDestaque>Minha Conta</RowEmDestaque>
                        <RowInfo>Entre</RowInfo>
                        <RowInfo>Vender</RowInfo>
                      </ColunaDeMaisInfo>
                      <ColunaDeMaisInfo>
                        <RowEmDestaque>Mercado Pontos</RowEmDestaque>
                        <RowInfo>Nivel 6</RowInfo>
                        <RowInfo>Disney+</RowInfo>

                        <RowInfo>Star+</RowInfo>
                        <RowInfo>HBO MAX</RowInfo>

                        <RowInfo>Paramount+</RowInfo>
                        <RowInfo>Deezer</RowInfo>
                      </ColunaDeMaisInfo>
                    </ContanierDasColunas>
                  </Column>
                </Row>
              </Containe>
            </ContainerSubMenuFooterBackgrand>
          ) : null}
        </ContainerMaisInfo>

        <Containe>
          <Row>
            <ContainerSubFooter>
              <ContainerItensSubFooter>
                <ColunaSubFooterList>
                  <RowSubFooter>Trabalhe Conosco</RowSubFooter>
                  <RowSubFooter>Termos e condições</RowSubFooter>
                  <RowSubFooter> Como Cuidamos da sua Privacidade</RowSubFooter>
                  <RowSubFooter>Acessibilidade</RowSubFooter>
                  <RowSubFooter>Contato</RowSubFooter>
                  <RowSubFooter>Informações sobre seguros</RowSubFooter>
                </ColunaSubFooterList>
                <SpanCopyright>
                  Copyright © 1999-2022 Ebazar.com.br LTDA.
                </SpanCopyright>
                <SpanCopyright>
                  CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003,
                  Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado
                  Livre.
                </SpanCopyright>
              </ContainerItensSubFooter>
            </ContainerSubFooter>
          </Row>
        </Containe>
      </Container>
    </React.Fragment>
  );
};
export default Footer;

//150 px 2 coluna , 598 px  6 coluna , 340px 4coluna
