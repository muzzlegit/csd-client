import { Footer } from "layouts/Footer/Footer";
import { Header } from "layouts/Header/Header";
import { Outlet } from "react-router-dom";
import { Container, Module } from "./RootLayout.styled";

export const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Module>
        <Outlet />
      </Module>
      <Footer />
    </Container>
  );
};
