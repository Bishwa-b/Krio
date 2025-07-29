
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all duration-200 relative',
        'focus:outline-none focus:ring-2 focus:ring-supple-cyan focus:ring-offset-2 focus:ring-offset-supple-dark',
        'active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100',
        {
          'bg-supple-cyan text-supple-dark hover:bg-supple-cyan/90 shadow-md hover:shadow-lg': variant === 'primary',
          'border border-supple-cyan text-supple-cyan hover:bg-supple-cyan/10': variant === 'outline',
          'text-supple-cyan hover:bg-supple-cyan/10': variant === 'ghost',
          'px-3 py-1 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <span className={cn(
        "flex items-center justify-center",
        { "opacity-0": isLoading }
      )}>
        {children}
      </span>
      
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
    </button>
  );
};

export default Button;
