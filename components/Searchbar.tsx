import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import * as React from 'react';
import { cn } from '../lib/utils';
import search_icon from '../public/search.svg';

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
          <Image src={search_icon} width={16} height={15} alt="Search" />
        </button>
      </form>
    );
  }
);

export { Search, searchVariants };
