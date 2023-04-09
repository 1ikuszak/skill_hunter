'use client';

import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { cn } from '../lib/utils';
import google from '../public/google_logo.svg';

const buttonVariants = cva(
  'inline-flex items-center justify-center transition duration-150 ease-in-out rounded text-sm font-medium transition-colors focus:outline-none hover:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none transition duration-150 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-neutral-950 text-white hover:bg-neutral-800',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'bg-transparent border text-dark border-dark hover:bg-transparent',
        link: 'bg-transparent underline-offset-4 text-slate-300 font-normal hover:bg-transparent hover:underline',
        google: 'bg-white border border-neutral-300 gap-3 hover:bg-neutral-100',
        cta: 'bg-transparent font-medium text-primary hover:text-secondary hover:bg-transparent',
      },
      size: {
        default: 'py-2 px-9',
        sm: 'py-1 px-2',
        lg: 'px-8 h-11',
        xs: 'py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (variant === 'google') {
      return (
        <button
          className={cn(
            buttonVariants({
              variant,
              size,
              className,
            })
          )}
          ref={ref}
          {...props}
        >
          <Image src={google} alt="Google" />
          <div>{children}</div>
        </button>
      );
    }

    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
