import styled from '@emotion/styled';
import 'animate.css';

export const SearchContainer = styled.div(
  {
    position: 'relative',
    padding: '8px',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    animation: 'slideInLeft',
    animationDuration: '1s'
  }
);
export const ItemContainer = styled.div(
  {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    animation: 'slideInLeft',
    animationDuration: '1s'
  }
);
export const RelatedItemContainer = styled.div(
  {
    position: 'absolute',
    top: '0',
    right: '0',
    transform: 'translate(100%, 0)',
    maxWidth: '40%',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    animation: 'slideInLeft',
    animationDuration: '1s'
  }
);
export const SearchTitle = styled.h2(
  {
    // width: '100%'
  }
);