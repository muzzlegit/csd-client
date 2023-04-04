import styled from '@emotion/styled';

export const ItemListBox = styled.div(
  {
    marginTop: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '12px',
    outline: '1px dashed tomato'
  }
);
export const ItemListBoxTitle = styled.h3(
  {

  }
);
export const ListBox = styled.ul(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '8px',
    width: '100%',

  }
);
export const ListItem = styled.li(
  {
    position: 'relative',
    padding: '4px 8px',

    '&:hover': {
      cursor: 'pointer',
      color: '#66b7fa'
    }
  },  
  props => ({
    outline: props.outline,
    color: props.color,
    border: props.selected ? '1px solid #2d3033' : null,
    borderRadius: props.selected ? '6px' : null,
    backgroundColor: props.selected ? '#1e2122' : null,
  }),
);