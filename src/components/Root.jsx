import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import { Container } from "../styled/Utils.styled";

const Root = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  );
};

export default Root;
