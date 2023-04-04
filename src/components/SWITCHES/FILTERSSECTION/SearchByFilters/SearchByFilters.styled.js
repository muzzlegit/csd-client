import styled from '@emotion/styled';
import 'animate.css';

export const FiltersContainer = styled.div(
  {
    margin: '0',
    padding: '8px',
    // height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    
    animation: 'slideInRight',
    animationDuration: '1s',
    outline: '1px dashed tomato'
  }
);
export const ItemsContainer = styled.div(
  {
    margin: '0',
    padding: '8px',
    // height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    
    animation: 'slideInRight',
    animationDuration: '1s',
    outline: '1px dashed tomato'
  }
);
export const AccessoriesListContainer = styled.div(
  {
    width: '33%',
    animation: 'slideInRight',
    animationDuration: '1s',
    outline: '1px dashed tomato'
  }
);
export const RelatedItemsListContainer = styled.div(
  {
    width: '33%',
    animation: 'slideInRight',
    animationDuration: '1s',
    outline: '1px dashed tomato'
  }
);
export const ItemsListContainer = styled.div(
  {
    width: '33%',
    animation: 'slideInRight',
    animationDuration: '1s',
    outline: '1px dashed tomato'
  }
);