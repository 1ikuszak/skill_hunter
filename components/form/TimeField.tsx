'use client';

import { Icons } from '@/components/icons';
import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const TimeField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor={props.name}>{props.name}</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 py-1 text-gray-400 rounded-l bg-slate-200">
            <Icons.clock10 />
          </span>
          <input
            className={cn(
              { className },
              'w-full px-1 py-3 transition duration-150 ease-in-out leading-tight text-gray-700 border border-transparent rounded-r bg-slate-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm'
            )}
            ref={ref}
            {...props}
            placeholder="provide deadline"
            required
          />
        </div>
      </div>
    );
  }
);

export { TimeField };
