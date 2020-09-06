import styled, { css } from 'styled-components';

import { Container as Button } from '../../../../components/Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    width: 100%;
    height: 7.2rem;
    padding: 1.6rem 0 1.6rem 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${theme.radius.small};

    svg {
      stroke-width: 1.5;
    }

    ${Button} {
      :hover {
        svg {
          transform: scale(1.02);
          stroke-width: 1.8;
        }
      }
    }
  `}
`;

export const Balance = styled.div`
  ${({ theme }) => css`
    > span {
      display: block;
      font-size: ${theme.fontSizes.small};

      :last-child {
        height: 2.3rem;
        background: ${theme.colors.grey}b3;
        border-radius: ${theme.radius.small};
      }
    }

    > strong {
      font-size: ${theme.fontSizes.big};
      color: ${theme.colors.darkGrey};
      margin-left: 0.4rem;
    }
  `}
`;
