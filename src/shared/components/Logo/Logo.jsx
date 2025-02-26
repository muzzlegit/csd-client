import PropTypes from "prop-types";
import icons from "shared/assets/icons/icons.svg";

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

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
