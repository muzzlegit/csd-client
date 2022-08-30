import styled from '@emotion/styled';

export const CopperContainer = styled.div(
  {
    margin: '40px auto 0 auto',
    padding: '16px',
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    borderRadius: '10px',
    boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)'
  }
);
export const CooperPriceInput = styled.input(
  {
    padding: '8px',
    width: '80px',
    fontSize: '20px',
    textAlign: 'center'
  }
);
export const DiscountWrap = styled.div(
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  }
);
export const CooperDiscount = styled.span(
  { 
    padding: '4px 8px',
    width: '100px',
    fontSize : '20px',
    color: '#eb5d0b',
    borderRadius: '2px',
    boxShadow: '0px 0px 5px 2px #eb5d0b'
  }
);
export const CopyButton = styled.button(
  {
    position: 'absolute',
    top: '0%',
    right: '0%',
    transform: 'translate(50%, -50%)',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3C4BF0',
    backgroundColor: '#212425',
    border: 'solid 1px rgba(60, 75, 240, .8)',
    borderRadius: '50%',


    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#3C4BF0',
      color: '#FFFFFF',
      borderColor: 'rgba(0,0,0,.2)',
      boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)'
    }
  }
);