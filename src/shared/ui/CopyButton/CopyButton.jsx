import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { GoX } from "react-icons/go";
import { copyToClipboard } from "shared/helpers";
import { Button } from "./CopyButton.styled";

const initialState = {
  copy: FaRegCopy,
  success: GiCheckMark,
  failed: GoX,
};

const CopyButton = ({ size = "24", value }) => {
  const [state, setState] = useState("copy");
  const timeoutRef = useRef(null);

  const Icon = initialState[state];

  const handleCopy = useCallback(async () => {
    const result = await copyToClipboard(value);
    setState(result ? "success" : "failed");
    timeoutRef.current = setTimeout(() => {
      setState("copy");
    }, 600);
  }, [value]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Button state={state} onClick={handleCopy}>
      <Icon size={size} />
    </Button>
  );
};

export default CopyButton;

CopyButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
