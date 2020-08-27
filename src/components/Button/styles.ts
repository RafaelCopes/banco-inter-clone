import styled, { css } from 'styled-components';

import { ButtonProps } from './Button';

const variants = {
  primary: css`
  `,
  secondary: css`
    height: 4rem;

    background: transparent;
    border: 0.1rem solid ${({theme}) => theme.colors.secondary};
    border-radius: 0.4rem;
  `,
  transparent: css`
    background: transparent;
  `,
}

export const Container = styled.button<ButtonProps>`
  ${({theme, variant}) => css`

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.8rem 2.4rem;

    color: ${theme.colors.secondary};

    background: ${theme.colors.background};
    border: 0;

    transition: ${theme.transition.default};

    * {
      transition: ${theme.transition.default};
    }

    ${variant && variants[variant]};
  `}
`;
