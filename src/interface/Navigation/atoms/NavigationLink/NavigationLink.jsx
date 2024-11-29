import { Link } from "react-router-dom";
import { SvgIcon } from "shared/UI";
import { Item, LinkText, LinkWrap } from "./NavigationLink.styled";

const NavigationLink = ({
  rout,
  activeLink,
  isCollapse,
  handleActiveLink,
  ...rest
}) => {
  if (!rout) return null;
  const { link, title, icon } = rout;
  const isActive = activeLink === link;

  return (
    <Item
      onClick={() => {
        handleActiveLink(link);
      }}
      isActive={isActive}
      {...rest}
    >
      <Link
        to={link}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <LinkWrap>
          <SvgIcon svgName={icon} size="24px" />
          <LinkText isCollapse={isCollapse}>{title}</LinkText>
        </LinkWrap>
      </Link>
    </Item>
  );
};

export default NavigationLink;
