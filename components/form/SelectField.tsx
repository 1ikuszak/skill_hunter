'use client';

import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';

const selectVariants = cva(
  'px-2 py-3 leading-tight transition duration-150 ease-in-out text-gray-700 border border-transparent rounded bg-neutral-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm',
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

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  name: string;
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ placeholder, className, _size, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={props.name}>{props.name}</label>
        <div>
          <select
            className={cn(selectVariants({ _size, className }))}
            ref={ref}
            {...props}
            required
          >
            <option disabled selected hidden value={placeholder}>
              {placeholder}
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    );
  }
);

export { Select, selectVariants };
