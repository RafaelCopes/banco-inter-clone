import { ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};
