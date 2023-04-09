'use client';

import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';

const NameFieldVariants = cva(
  'px-3 px-4 py-3 leading-tight mb-3 transition duration-150 ease-in-out text-gray-700 border border-transparent rounded bg-neutral-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm',
  {
    variants: {
      _size: {
        default: 'w-[300px]',
        sm: 'w-[200px]',
        lg: 'w-[400px]',
      },
    },
    defaultVariants: {
      _size: 'default',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof NameFieldVariants> {
  name: string;
}

const NameField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, _size, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={props.name}>{props.name}</label>
        <input
          className={cn(NameFieldVariants({ _size, className }))}
          ref={ref}
          {...props}
          required
        />
      </div>
    );
  }
);

export { NameField, NameFieldVariants };
