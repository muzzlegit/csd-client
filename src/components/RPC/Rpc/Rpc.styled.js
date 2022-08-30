import styled from '@emotion/styled';

export const Container = styled.div(
  {
    margin: '40px auto 0 auto',
    padding: '10px',
    maxWidth: '1680px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px'
  }
);

export const CrpSection = styled.div(
  {
    position: 'relative',
    padding: '30px 30px 30px 30px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '0px 0px 9px 5px rgba(60,75,240,1)'
  }
);
export const CrpSetSection = styled.div(
  {
    marginBottom: '20px',
    padding: '4px',
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',

    '@media (max-width: 800px)': {
      flexDirection: 'column',
    }
  }
);
export const VentilationSection = styled.div(
  {
    display: 'flex',
    gap: '20px',

    '@media (max-width: 800px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }
  }
);
