import { useState } from "react";
import { SvgIcon } from "shared/UI";
import { Button, Container, LinksList } from "./Navigation.styled";
import NavigationLink from "./atoms/NavigationLink/NavigationLink";
import { ROUTES } from "./routes";

export default function Navigation() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  return (
    <Container isCollapse={isCollapse}>
      <Button
        onClick={() => {
          setIsCollapse((prev) => !prev);
        }}
      >
        <SvgIcon
          svgName={isCollapse ? "arrow-left" : "arrow-right"}
          size="24px"
        />
      </Button>
      <LinksList isCollapse={isCollapse}>
        {ROUTES.map((rout) => (
          <NavigationLink
            key={rout.title}
            rout={rout}
            isCollapse={isCollapse}
            activeLink={activeLink}
            handleActiveLink={setActiveLink}
          />
        ))}
      </LinksList>
    </Container>
  );
}
