import styled from '@emotion/styled';

export const MainSwitchCoefficientSection = styled.div(
  {
    position: 'absolute',
    bottom: '-8%',
    right: '20%',
    transform: 'translate(50%, -50%)',
    padding: '8px',
    width: '100px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 1px #3C4BF0',
    borderRadius: '50%',

    '&:hover': {
      boxShadow: '0px 0px 4px 4px rgba(60,75,240,1)'
    }
  }
);

export const MainSwitchCoefficientTitle = styled.h2(
  {
    marginBottom: '10px',
    fontSize: '14px',
  }
);

export const MainSwitchInput = styled.input(
  {
    width: '30px',
    textAlign: 'center',
  }
);
export const ResetButton = styled.button(
  {
    position: 'absolute',
    top: '0%',
    right: '50%',
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
export const IncrementButton = styled.button(
  {
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translate(50%, -50%)',
    width: '30px',
    height: '30px',
    textAlign: 'center',
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
export const DecrementButton = styled.button(
  {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translate(-50%, -50%)',
    width: '30px',
    height: '30px',
    textAlign: 'center',
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