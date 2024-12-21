import icons from "../assets/icons/icons.svg";

const Logo = ({ width = "200px", height = "43px" }) => {
  return (
    <a href="https://vector-vs.com">
      <svg width={width + "px"} height={height + "px"}>
        <use href={`${icons}#logo`} />i
      </svg>
    </a>
  );
};

export default Logo;
