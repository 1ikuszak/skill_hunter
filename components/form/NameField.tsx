'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const NameField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={props.name}>{props.name}</label>
        <input
          className={cn(
            { className },
            'px-3 px-4 py-3 leading-tight w-full mb-3 transition duration-150 ease-in-out text-gray-700 border border-transparent rounded bg-slate-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm'
          )}
          ref={ref}
          {...props}
          required
        />
      </div>
    );
  }
);

export { NameField };
