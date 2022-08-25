import styled from '@emotion/styled';

export const VentilationSection = styled.div(
  {
    position: 'relative',
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
export const VentilationTitle = styled.h3(
  {
    // marginBottom: '12px',
  }
);
export const VentilationText = styled.p(
  {
    // marginBottom: '12px',
  }
);
export const VentilationValue = styled.p(
  {
    color: '#3C4BF0',
    fontSize: '20px',
    fontWeight: 'bold'
  }
);