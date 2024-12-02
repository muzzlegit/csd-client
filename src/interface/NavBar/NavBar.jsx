import { Link, useLocation } from "react-router-dom";
import { Container, Item } from "./NavBar.styled";
import { links } from "./linksConfig";

const NavBar = () => {
  const location = useLocation();
  return (
    <Container>
      {links.map(({ icon: Icon, title, path }) => {
        return (
          <Link to={path} key={title}>
            <Item title={title} isActive={location.pathname === path}>
              <Icon size="38px" />
            </Item>
          </Link>
        );
      })}
    </Container>
  );
};

export default NavBar;
