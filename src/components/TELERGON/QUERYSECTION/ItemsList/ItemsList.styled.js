import styled from '@emotion/styled';

export const ItemsListBox = styled.ul(
  {
    marginTop: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // textAlign: 'left',
    gap: '8px',
    border: '1px solid #2d3033',
    borderRadius: '10px',
    backgroundColor: '#1e2122'
  }
);
export const ListItem = styled.li(
  {
    position: 'relative',
    padding: '4px 8px',
    textAlign: 'left'
  },  
  props => ({
    outline: props.outline
  }),
);