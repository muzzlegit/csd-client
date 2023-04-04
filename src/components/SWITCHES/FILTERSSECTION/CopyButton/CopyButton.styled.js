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
    color: '#806491',
    backgroundColor: '#202124',
    border: 'solid 1px #806491',

    '&:hover': {
      cursor: 'pointer',
      color: '#B9848C',
      boxShadow: '0px 0px 9px 5px #806491'
    }
  }
);