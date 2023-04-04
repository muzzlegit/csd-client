import styled from '@emotion/styled';

export const SearchBarBox = styled.div(
  {
    padding: '4px',
    width: '50%',
    textAlign: 'center',
    gap: '10px',
    color: '#2F70AF',
    border: '1px solid #2F70AF',
    borderRadius: '8px',
    boxShadow: '0px 0px 4px 4px rgba(47, 112, 175, 0.5)'
  }
);
export const SearchBarTitle = styled.h2(
  {
    width: '100%'
  }
);
export const SearchBarInput = styled.div(
  {
    marginTop: '12px',
    padding: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '10px'
  }
);