import styled, { CSSObject } from "@emotion/styled";

type InputFieldProps = {
  styles?: CSSObject;
};

export const InputField = styled.input<InputFieldProps>(({ styles }) => ({
  padding: "4px",
  width: "100%",
  outline: "none",
  ...(styles || {}),
}));
