import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 10.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({theme}) => theme.colors.background}
`;

export const Wrapper = styled.div`
  max-width: 100rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftNav = styled.div`
  > svg {
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 1.1rem 0;
  }

  font-size: ${({theme}) => theme.fontSizes.big};
  font-weight: bold;

  display: flex;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
`;
