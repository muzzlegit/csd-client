import { CSSObject } from "@emotion/react";
import { type ChangeEvent } from "react";
import { InputField } from "./TextInput.styled";

type TextInputProps = {
  name?: string;
  value: string | number;
  placeholder?: string;
  handleInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  styles?: CSSObject;
};

export const TextInput = ({
  name,
  value,
  handleInputValue,
  placeholder,
  styles,
}: TextInputProps) => {
  return (
    <InputField
      name={name}
      type="text"
      value={value}
      onChange={handleInputValue}
      placeholder={placeholder}
      styles={styles}
    />
  );
};
