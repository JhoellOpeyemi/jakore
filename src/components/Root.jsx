import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import { Container } from "../styled/Utils.styled";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Root;
