import PropTypes from "prop-types";
import { useEffect } from "react";

export const SvgSprite = ({ spriteURL }) => {
  useEffect(() => {
    const existingSprite = document.getElementById("svg-sprite");
    if (existingSprite) return;

    fetch(spriteURL)
      .then((res) => res.text())
      .then((svgText) => {
        const div = document.createElement("div");
        div.style.display = "none";
        div.innerHTML = svgText;
        div.id = "svg-sprite";
        document.body.appendChild(div);
      })
      .catch((err) => console.error("SVG Sprite Load Error:", err));
  }, [spriteURL]);

  return null;
};

SvgSprite.propTypes = {
  spriteURL: PropTypes.string.isRequired,
};
