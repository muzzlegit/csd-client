import React from "react";
import { Container, Item } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Container>
      <Item />
      <Item isActive={true} />
      <Item />
      <Item />
    </Container>
  );
};

export default NavBar;
