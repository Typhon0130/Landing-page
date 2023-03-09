import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Images from "constants/img.constant";
import { H1 } from "components/header";
import P from "components/paragraph";
import Button from "components/button";

export default function MainPage() {
  const { Row } = Layout;
  const { Background } = Images;

  return (
    <Layout
      gridColumnStart="2"
      gridColumnEnd="8"
      style={{ border: "1px solid red" }}
    >
      <Row backgroundImage={Background}>
        <H1>Contribuez au monde de la Defi</H1>
        <P>
          Zapper est votre porte vers le Web3. Visualisez l'ensemble de vos
          portefeuilles. Suivez les positions d'autres investisseurs. Découvrez
          de nouvelles collections de NFTs, DAOs et applications DeFi.
        </P>
        <Button>Connecter votre portefeuille</Button>
      </Row>
      <Row></Row>
    </Layout>
  );
}
