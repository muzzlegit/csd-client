import styled from '@emotion/styled';

export const NavSection = styled.div(
  {
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    borderBottom: '1px solid #3C4BF0'
  }
);
export const NavLinkItem = styled.div(
  {

  }
);
export const NavLinkText = styled.span(
  {
    fontSize : '20px',
    '&:hover': {
      color: '#34bce6',
    }
  }
);