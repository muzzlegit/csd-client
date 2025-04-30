import { Link, useLocation } from "react-router-dom";
import { Container, Item } from "./NavBar.styled";
import { links } from "./linksConfig";

export const NavBar = () => {
  const location = useLocation();

  return (
    <Container>
      {links.map(({ icon: Icon, title, path }) => {
        return (
          <Link to={path} key={title}>
            <Item title={title} isActive={location.pathname === path}>
              <Icon size="34px" />
            </Item>
          </Link>
        );
      })}
    </Container>
  );
};
