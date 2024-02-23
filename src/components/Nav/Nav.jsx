import { StyledLink } from "../../styled/Utils.styled";
import { StyledNav } from "./Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/music">Music</StyledLink>
      <StyledLink to="/videos">Videos</StyledLink>
    </StyledNav>
  );
};

export default Nav;
