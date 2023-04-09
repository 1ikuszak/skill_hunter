'use client';

import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';
import style from '../styles/auth_inputs.module.css';

const inputVariants = cva('', {
  variants: {
    _size: {
      default: 'w-[346px]',
      sm: 'w-[286px]',
      lg: 'w-[424px]',
    },
  },
  defaultVariants: {
    _size: 'default',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, _size, ...props }, ref) => {
    return (
      <div className={style.form__group}>
        <input
          className={cn(inputVariants({ _size, className }))}
          ref={ref}
          {...props}
          required
        />
        <label htmlFor={props.name}>{props.name}</label>
      </div>
    );
  }
);

export { Input, inputVariants };
