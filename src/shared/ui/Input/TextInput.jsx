import PropTypes from "prop-types";
import { InputField } from "./TextInput.styled";

const TextInput = ({ value, handleInputValue, placeholder, styles }) => {
  return (
    <InputField
      type="text"
      value={value}
      onChange={handleInputValue}
      placeholder={placeholder}
      styles={styles}
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleInputValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  styles: PropTypes.object,
};
