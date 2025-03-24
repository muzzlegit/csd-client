import PropTypes from "prop-types";
import { Link } from "./VectorLink.styled";

const links = {
  copper: {
    link: "https://services.vector-vs.com/kalkulyator-pidboru-zhorstkoyi-shini",
    title: "Перейти на справжній калькулятор",
  },
  rpc: {
    link: "https://services.vector-vs.com/krm",
    title: "Перейти на дорослий конфігуратор",
  },
};

export const VectorLink = ({ linkName }) => {
  return (
    <Link
      href={links?.[linkName]?.link ?? "https://services.vector-vs.com"}
      target="_blank"
    >
      {links?.[linkName]?.title ?? "Перейти на сторінку коніфігураторів"}
    </Link>
  );
};

VectorLink.propTypes = {
  linkName: PropTypes.oneOf(["copper", "rpc"]),
};
