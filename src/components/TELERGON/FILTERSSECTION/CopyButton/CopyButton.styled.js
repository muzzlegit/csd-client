import styled from '@emotion/styled';

export const CopyButn = styled.button(
  {
    position: 'absolute',
    top: '0',
    right: '0',
    transform: 'translate(50%, -50%)',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3C4BF0',
    backgroundColor: '#212425',
    border: 'solid 1px rgba(60, 75, 240, .8)',
    borderRadius: '50%',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#3C4BF0',
      color: '#FFFFFF',
      borderColor: 'rgba(0,0,0,.2)',
      boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)'
    }
  }
);