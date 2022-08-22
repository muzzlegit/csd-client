import styled from '@emotion/styled';

export const ManualVentilationSection = styled.div(
  {
    position: 'relative',
    marginTop: '40px',
    padding: '10px',
    width: 'auto',
    display: 'inline-flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)'
  }
);
export const ManualVentilationTitle = styled.h3(
  {
    marginBottom: '12px',
  }
);
export const ManualVentilationInput = styled.input(
  {
    marginBottom: '12px',
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