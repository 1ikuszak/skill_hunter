'use client';

import { Icons } from '@/components/icons';
import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const PriceField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor={props.name}>{props.name}</label>
        <div className="flex">
          <span className="inline-flex items-center px-2 text-gray-400 rounded-l bg-slate-200">
            <Icons.euro />
          </span>
          <input
            className={cn(
              { className },
              'px-1 py-3 w-full leading-tight transition duration-150 ease-in-out text-gray-700 border border-transparent rounded-r bg-slate-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm'
            )}
            ref={ref}
            {...props}
            placeholder="enter fair price"
            required
          />
        </div>
      </div>
    );
  }
);

export { PriceField };
