import styled from '@emotion/styled';

export const ItemListSection = styled.div(
  {
    width: 'auto',
    height: 'auto',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    border: 'solid 1px #3C4BF0',
    borderRadius: '10px',
    boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)',
        
    '@media (max-width: 800px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
);
export const ItemBox = styled.div(
  {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    border: 'solid 1px #3C4BF0',
    borderRadius: '10px',
    boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)',
  }
);
