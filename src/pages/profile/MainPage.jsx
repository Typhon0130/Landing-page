import Layout from "../../components/layout";
import Images from "constants/img.constant";
import { H1 } from "components/header";
import P from "components/paragraph";
import Button from "components/button";
import CardWrapper from "components/Card";

export default function MainPage() {
  const { Row, Column } = Layout;
  const { Background } = Images;
  const { Name, Brand, Price, Rate, CardRow } = CardWrapper;

  return (
    <Layout width="100%" paddingLeft="15%">
      <Row backgroundImage={Background} textAlign="start" flexDirection="row">
        <Column
          display="block"
          paddingLeft="10vw"
          width="50vw"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <H1 fontSize="48px" fontWeight="700" lineHeight="67px">
            Contribuez au monde de la Defi
          </H1>
          <P width="22vw" fontSize="24px" fontWeight="400" lineHeight="34px">
            Zapper est votre porte vers le Web3. Visualisez l'ensemble de vos
            portefeuilles. Suivez les positions d'autres investisseurs.
            Découvrez de nouvelles collections de NFTs, DAOs et applications
            DeFi.
          </P>
          <Button>Connecter votre portefeuille</Button>
        </Column>
      </Row>
      <Layout paddingBottom="10rem">
        <CardRow paddingTop="31px" paddingLeft="56px" justifyContent="space-around">
          <CardWrapper>
            <Row paddingBottom="28px">
              <Brand />
              <Name>Andromeda</Name>
            </Row>
            <Rate>Rating: Not rated</Rate>
            <Price>$11.99</Price>
          </CardWrapper>
          <CardWrapper>
            <Row paddingBottom="28px">
              <Brand />
              <Name>Andromeda</Name>
            </Row>
            <Rate>Rating: Not rated</Rate>
            <Price>$11.99</Price>
          </CardWrapper>
          <CardWrapper>
            <Row paddingBottom="28px">
              <Brand />
              <Name>Andromeda</Name>
            </Row>
            <Rate>Rating: Not rated</Rate>
            <Price>$11.99</Price>
          </CardWrapper>
          <CardWrapper>
            <Row paddingBottom="28px">
              <Brand />
              <Name>Andromeda</Name>
            </Row>
            <Rate>Rating: Not rated</Rate>
            <Price>$11.99</Price>
          </CardWrapper>
          <CardWrapper>
            <Row paddingBottom="28px">
              <Brand />
              <Name>Andromeda</Name>
            </Row>
            <Rate>Rating: Not rated</Rate>
            <Price>$11.99</Price>
          </CardWrapper>
          <CardWrapper>
            <Row paddingBottom="28px">
              <Brand />
              <Name>Andromeda</Name>
            </Row>
            <Rate>Rating: Not rated</Rate>
            <Price>$11.99</Price>
          </CardWrapper>
        </CardRow>
      </Layout>
    </Layout>
  );
}
