'use client';

import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';

const textareaVariants = cva(
  'px-3 px-4 transition duration-150 ease-in-out py-3 leading-tight text-gray-700 border border-transparent rounded bg-neutral-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm resize-none',
  {
    variants: {
      _size: {
        default: 'w-[700px]',
        sm: 'w-[400px]',
        lg: 'w-[700px]',
      },
    },
    defaultVariants: {
      _size: 'default',
    },
  }
);

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  name: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, _size, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={props.name}>{props.name}</label>
        <textarea
          className={cn(textareaVariants({ _size, className }))}
          ref={ref}
          {...props}
          required
        />
      </div>
    );
  }
);

export { Textarea, textareaVariants };
