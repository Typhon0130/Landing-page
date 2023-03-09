import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Images from "constants/img.constant";
import { H1 } from "components/header";
import P from "components/paragraph";
import Button from "components/button";

export default function MainPage() {
  const { Row, Column } = Layout;
  const { Background } = Images;

  return (
    <Layout flex="0 0 85%">
      <Row
        backgroundImage={Background}
        textAlign="start"
        flexDirection="column"
      >
        <Column
          display="block"
          paddingLeft="10vw"
          width="50vw"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <H1 fontSize='48px' fontWeight='700' lineHeight='67px'>Contribuez au monde de la Defi</H1>
          <P style={{width: '22vw'}} fontSize='24px' fontWeight='400' lineHeight='34px'>
            Zapper est votre porte vers le Web3. Visualisez l'ensemble de vos
            portefeuilles. Suivez les positions d'autres investisseurs.
            Découvrez de nouvelles collections de NFTs, DAOs et applications
            DeFi.
          </P>
          <Button>Connecter votre portefeuille</Button>
        </Column>
      </Row>
      <Row></Row>
    </Layout>
  );
}
