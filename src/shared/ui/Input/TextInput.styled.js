import styled from "@emotion/styled";

export const InputField = styled.input(({ styles }) => ({
  padding: "4px",
  width: "100%",
  outline: "none",
  ...styles,
}));
