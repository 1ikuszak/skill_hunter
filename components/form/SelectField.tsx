'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor={props.name}>{props.name}</label>
        <div>
          <select
            className={cn(
              { className },
              'w-full px-2 py-3 leading-tight transition duration-150 ease-in-out text-gray-700 border border-transparent rounded bg-slate-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm'
            )}
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

export { Select };
