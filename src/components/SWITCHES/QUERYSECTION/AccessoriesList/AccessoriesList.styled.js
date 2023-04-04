import styled from '@emotion/styled';

export const AccessoriesListBox = styled.ul(
  {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '16px',
    backgroundColor: '#2a2c2f',
    border: '1px solid #2F70AF',
    borderRadius: '8px',
    boxShadow: '0px 0px 4px 4px rgba(47, 112, 175, 0.5)',
    animation: 'slideInUp',
    animationDuration: '1s',
  }
);
export const ListItem = styled.li(
  {
    position: 'relative',
    padding: '4px 16px',
    backgroundColor: '#252527',
  },  
  props => ({
    outline: props.outline
  }),
);