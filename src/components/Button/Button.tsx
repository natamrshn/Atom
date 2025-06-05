import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  filled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  filled = true,
  ...props
}: ButtonProps) => {
  const className = `button ${variant} ${filled ? 'filled' : 'outlined'}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
