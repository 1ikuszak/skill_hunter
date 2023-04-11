'use client';

import * as React from 'react';
import { cn } from '../lib/utils';
import style from '../styles/auth_inputs.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={style.form__group}>
        <input className={cn({ className })} ref={ref} {...props} required />
        <label htmlFor={props.name}>{props.name}</label>
      </div>
    );
  }
);

export { Input };
