'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={props.name}>{props.name}</label>
        <textarea
          className={cn(
            { className },
            'w-full px-3 px-4 transition duration-150 ease-in-out py-3 leading-tight text-gray-700 border border-transparent rounded bg-slate-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm resize-none'
          )}
          ref={ref}
          {...props}
          required
          placeholder="List the most important information about your service"
        />
      </div>
    );
  }
);

export { Textarea };
