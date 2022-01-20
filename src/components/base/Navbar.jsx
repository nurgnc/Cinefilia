//route data
import routes from "../../router";
//css
import { ContainerFluid, Flex } from "../../styles/baseStyles";
import { Nav, Logo, StyledLink } from "../../styles/Navbar.styled";
//logo
import logo from "../../assets/img/logo.png";
const Navbar = () => {
  return (
    <ContainerFluid>
      <Nav>
        <StyledLink to="/">
          <Logo src={logo} alt="logo" />
        </StyledLink>

        <Flex>
          {routes
            .filter((navItem) => navItem.isNav)
            .map((navItem, index) => (
              <StyledLink key={index} to={navItem.path} aria-current="page">
                {navItem.title}
              </StyledLink>
            ))}
        </Flex>
      </Nav>
    </ContainerFluid>
  );
};

export default Navbar;
