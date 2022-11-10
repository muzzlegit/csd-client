import styled from '@emotion/styled';

export const Item = styled.div(
  {
    position: 'relative',
    padding: '4px 8px',
    display: 'inline-block',
    '&:hover': {
      cursor: 'pointer',
      color: '#66b7fa'
    }
  },  
  props => ({
    outline: props.outline,
    color: props.color,
  }),
);