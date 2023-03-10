import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/layout";
import Navbar from "../navbar";
import Side from "../sidebar";
import MainPage from "./MainPage";
import MainProfilePage from "../profile/MainProfilePage";

const Home = () => {
  const { Container, Row } = Layout;
  return (
    <Layout>
      <Container>
        <Navbar />
        <Row alignItems="flex-start" style={{ position: "relative" }}>
          <Side />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/profile" element={<MainProfilePage />} />
          </Routes>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
