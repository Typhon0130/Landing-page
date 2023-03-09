import React from "react";
import Layout from "../../components/layout";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import MainPage from "./MainPage";

const Home = () => {
  const { Container, Row } = Layout;
  return (
    <Layout>
      <Container>
        <Navbar />
        <Row
          display="grid"
          gridTemplateColumns="auto auto auto auto"
          gap="10px"
        >
          <Sidebar />
          <MainPage />
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
