import styled, { css } from 'styled-components';

import { transparentize } from 'polished';

import Button from '../../../components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    max-height: 60rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);
    padding: 2.4rem;
  `}
`;

export const AmountInvested = styled(Button)`
  ${({ theme }) => css`
    background: linear-gradient(
      90deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary} 100%
    );
    color: ${theme.colors.lightGrey};
    font-size: ${theme.fontSizes.small};
    width: 100%;
    height: 3.2rem;
    margin: 0.8rem 0;
    padding: 0.8rem 2.4rem;
    border-radius: ${theme.radius.small};

    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
      transform: scale(1.005);
      box-shadow: 0 0.4rem 0.4rem
        ${transparentize(0.72, theme.colors.secondary)};
    }
  `}
`;
