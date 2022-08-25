import styled from '@emotion/styled';

export const Steps = styled.div(
  {
    position: 'relative'
  }
);

export const StepsList = styled.ul(
  {
    marginBottom: '40px',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    border: 'solid 1px rgba(60, 75, 240, .4)',
    borderRadius: '2px',
  }
);

export const StepsListItem = styled.li({
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    gap: '6px'
  },
  props => ({
    color: props.value === 0 ? '#FFFFFF' : '#3C4BF0',
  })
);

export const ResetButton = styled.button(
  {
    position: 'absolute',
    top: '0',
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

export const TotalCapacityBox = styled.div(
  {
    padding: '12px',
    display: 'inline-block',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0px 0px 4px 4px rgba(60,75,240,1)'
  }
);

export const TotalCapacityTitle = styled.h3(
  {
    marginBottom: '16px'
  }
);

export const TotalCapacityAmount = styled.p(
  {
    color: '#3C4BF0',
    fontSize: '20px',
    fontWeight: 'bold'
  }
);