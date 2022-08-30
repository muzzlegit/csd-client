import styled from '@emotion/styled';

export const MainSwitchSection = styled.div(
  {
    width: 'auto',
    height: 'auto',
    padding: '10px',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    border: 'solid 1px #3C4BF0',
    borderRadius: '10px',
    boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)'
  }
);
export const MainSwitchCurrent = styled.span(
  {
    color: '#3C4BF0',
    fontSize: '20px',
    fontWeight: 'bold'
  }
);