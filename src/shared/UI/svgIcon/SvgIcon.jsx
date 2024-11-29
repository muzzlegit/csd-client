import sprite from "shared/assets/icons/sprite.svg";

import { Svg } from "./SvgIcon.styled";

export const SvgIcon = ({ svgName, size, stroke, fill, style, ...rest }) => {
  return (
    <Svg
      width={size ?? "100%"}
      height={size ?? "100%"}
      stroke={stroke ?? "inherit"}
      fill={fill ?? "inherit"}
      style={style}
      {...rest}
    >
      <use href={sprite + `#${svgName}`}></use>
    </Svg>
  );
};
