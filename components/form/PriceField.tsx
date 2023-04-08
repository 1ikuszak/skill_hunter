import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';

const PriceFieldVariants = cva(
  'px-3 px-4 py-3 leading-tight transition duration-150 ease-in-out text-gray-700 border border-transparent rounded-r bg-neutral-100 focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm',
  {
    variants: {
      _size: {
        default: 'w-[150px]',
        sm: 'w-[70px]',
        lg: 'w-[140px]',
      },
    },
    defaultVariants: {
      _size: 'default',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof PriceFieldVariants> {
  name: string;
}

const PriceField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, _size, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={props.name}>{props.name}</label>
        <div className="flex">
          <span className="inline-flex items-center px-4 py-1 text-gray-400 rounded-l bg-slate-200">
            <svg
              width="10"
              className="fill-gray-400"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.7 18V15.85C2.81667 15.65 2.054 15.2667 1.412 14.7C0.770001 14.1333 0.299333 13.3333 0 12.3L1.85 11.55C2.1 12.35 2.471 12.9583 2.963 13.375C3.455 13.7917 4.10067 14 4.9 14C5.58333 14 6.16267 13.8457 6.638 13.537C7.11333 13.2283 7.35067 12.7493 7.35 12.1C7.35 11.5167 7.16667 11.0543 6.8 10.713C6.43333 10.3717 5.58333 9.984 4.25 9.55C2.81667 9.1 1.83333 8.56233 1.3 7.937C0.766667 7.31167 0.5 6.54933 0.5 5.65C0.5 4.56667 0.85 3.725 1.55 3.125C2.25 2.525 2.96667 2.18333 3.7 2.1V0H5.7V2.1C6.53333 2.23333 7.221 2.53767 7.763 3.013C8.305 3.48833 8.70067 4.06733 8.95 4.75L7.1 5.55C6.9 5.01667 6.61667 4.61667 6.25 4.35C5.88333 4.08333 5.38333 3.95 4.75 3.95C4.01667 3.95 3.45833 4.11267 3.075 4.438C2.69167 4.76333 2.5 5.16733 2.5 5.65C2.5 6.2 2.75 6.63333 3.25 6.95C3.75 7.26667 4.61667 7.6 5.85 7.95C7 8.28333 7.871 8.81267 8.463 9.538C9.055 10.2633 9.35067 11.1007 9.35 12.05C9.35 13.2333 9 14.1333 8.3 14.75C7.6 15.3667 6.73333 15.75 5.7 15.9V18H3.7Z" />
            </svg>
          </span>
          <input
            className={cn(PriceFieldVariants({ _size, className }))}
            ref={ref}
            {...props}
            required
          />
        </div>
      </div>
    );
  }
);

export { PriceField, PriceFieldVariants };
