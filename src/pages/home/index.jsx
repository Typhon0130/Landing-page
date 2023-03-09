import React from "react";
import Layout from "../../components/layout";
import Navbar from "../navbar";
import Side from "../sidebar";
import MainPage from "./MainPage";

const Home = () => {
  const { Container, Row } = Layout;
  return (
    <Layout>
      <Container>
        <Navbar />
        <Row alignItems='flex-start'>
          <Side />
          <MainPage />
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
