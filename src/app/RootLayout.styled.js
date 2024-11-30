import styled from "@emotion/styled";

export const Container = styled.main(({ theme }) => ({
  height: '100%',
  width: '100%',
  backgroundColor: theme.colors?.primary?.[100] || "#FFF",


}))
