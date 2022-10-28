import styled from '@emotion/styled';

export const RelatedItemsBox = styled.div(
  {
    marginTop: '12px',
    width: '100%',
    outline: '1px dashed tomato',
    textAlign:'left'
  }
);
export const RelatedItemsTitle = styled.h3(
  {
    textAlign:'center'
  }
);
export const ListsBox = styled.div(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '16px',
  }
);
export const RelatedItemsList = styled.ul(
  {
    marginTop: '12px',
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
      color: props.color,
    }),
);