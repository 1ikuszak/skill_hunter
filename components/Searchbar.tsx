import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../lib/utils';

const searchVariants = cva(
  'rounded-l border border-gray-300 focus:outline-none focus:ring-blue-400 px-2 py-1 placeholder:text-sm',
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

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchVariants> {
  placeholder?: string;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ placeholder, className, _size, ...props }, ref) => {
    return (
      <form className="flex">
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={cn(searchVariants({ _size, className }))}
          {...props}
        />
        <button className="flex items-center justify-center px-2 rounded-r bg-neutral-800">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7123 15L10.2123 10.5C9.76362 10.859 9.2476 11.1432 8.66426 11.3526C8.08093 11.562 7.4602 11.6667 6.80208 11.6667C5.17174 11.6667 3.79208 11.1022 2.66311 9.9732C1.53354 8.84363 0.96875 7.46368 0.96875 5.83333C0.96875 4.20299 1.53354 2.82303 2.66311 1.69346C3.79208 0.564487 5.17174 0 6.80208 0C8.43243 0 9.81238 0.564487 10.942 1.69346C12.0709 2.82303 12.6354 4.20299 12.6354 5.83333C12.6354 6.49145 12.5307 7.11218 12.3213 7.69551C12.1119 8.27885 11.8277 8.79487 11.4688 9.24359L15.9688 13.7436L14.7123 15ZM6.80208 9.87179C7.92388 9.87179 8.87755 9.47932 9.66311 8.69436C10.4481 7.9088 10.8405 6.95513 10.8405 5.83333C10.8405 4.71154 10.4481 3.75786 9.66311 2.97231C8.87755 2.18735 7.92388 1.79487 6.80208 1.79487C5.68029 1.79487 4.72661 2.18735 3.94106 2.97231C3.1561 3.75786 2.76362 4.71154 2.76362 5.83333C2.76362 6.95513 3.1561 7.9088 3.94106 8.69436C4.72661 9.47932 5.68029 9.87179 6.80208 9.87179Z"
              fill="#F8F8F8"
            />
          </svg>
        </button>
      </form>
    );
  }
);

export { Search, searchVariants };
