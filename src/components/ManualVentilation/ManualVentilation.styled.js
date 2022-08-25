import styled from '@emotion/styled';

export const ManualVentilationSection = styled.div(
  {
    position: 'relative',
    padding: '10px',
    width: '180px',
    display: 'inline-flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    borderRadius: '10px',
    boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)'
  }
);
export const ManualVentilationTitle = styled.h3(
  {

  }
);
export const ManualVentilationInput = styled.input(
  {
    width: '40px',
    textAlign: 'center'
  }
);
export const ManualVentilationValue = styled.p(
  {
    color: '#3C4BF0',
    fontSize: '20px',
    fontWeight: 'bold'
  }
);