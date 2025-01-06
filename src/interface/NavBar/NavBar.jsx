import { useAuth } from "modules/profile";
import { Link, useLocation } from "react-router-dom";
import { Container, Item } from "./NavBar.styled";
import { links } from "./linksConfig";

const NavBar = () => {
  const location = useLocation();
  const { isAuth } = useAuth();

  return (
    <Container>
      {links
        .filter((rout) => !rout?.protected || isAuth)
        .map(({ icon: Icon, title, path }) => {
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
