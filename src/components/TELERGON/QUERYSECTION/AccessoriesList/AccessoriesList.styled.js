import styled from '@emotion/styled';

export const AccessoriesListBox = styled.ul(
  {
    marginTop: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
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
  },  
  props => ({
    outline: props.outline
  }),
);