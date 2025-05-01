import icons from "shared/assets/icons/icons.svg";

type LogoProps = {
  width?: string;
  height?: string;
};

export const Logo = ({ width = "200px", height = "43px" }: LogoProps) => {
  return (
    <a href="https://vector-vs.com">
      <svg width={width + "px"} height={height + "px"}>
        <use href={`${icons}#logo`} />i
      </svg>
    </a>
  );
};
