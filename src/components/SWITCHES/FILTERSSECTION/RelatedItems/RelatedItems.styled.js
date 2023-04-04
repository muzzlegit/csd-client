import styled from '@emotion/styled';

export const RelatedItemsBox = styled.div(
  {    
    padding: '16px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: '#2a2c2f',
    borderRadius: '8px',
    animation: 'slideInRight',
    animationDuration: '1s',
    border: '1px solid #2F70AF',
    boxShadow: '0px 0px 4px 4px rgba(47, 112, 175, 0.5)'
  }
);
export const RelatedItemsTitle = styled.h3(
  {
    color: '#2F70AF',
  }
);
export const RelatedItemsList = styled.ul(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '16px',
  }
);
export const ListItem = styled.li(
  {
    position: 'relative',
    padding: '4px 16px',
    backgroundColor: '#252527',
    '&:hover': {
      cursor: 'pointer',
    }
  },  
    props => ({
      boxShadow: props.isSelected ? '0px 0px 4px 4px #00ffe7' : 'none',
      color: props.isSelected ? '#00ffe7' : 'inherit',
    }),
);