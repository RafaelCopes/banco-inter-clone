import styled, { css } from 'styled-components';
import Button from '../../../../components/Button';

export const Container = styled(Button)`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-size: ${theme.fontSizes.default};
    background: transparent;
    width: 100%;
    justify-content: flex-start;
    border-radius: 0;
    padding: 1.6rem 0;

    :not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGrey};
    }

    > div {
      :first-child {
        width: 3.2rem;
        height: 3.2rem;

        border-radius: 50%;

        background: ${theme.colors.lightGrey};

        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 2.33rem;
      }
    }

    > svg {
      margin-left: auto;
    }
  `}
`;
