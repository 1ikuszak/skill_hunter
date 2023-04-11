'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { MobileNav } from '@/components/mobile-nav';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import { Button } from './Button';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex justify-between">
      <Link href="/" className="items-center hidden space-x-2 md:flex">
        <Icons.logo />
        <p className="text-xl font-semibold text-neutral-900">SkillHunter</p>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-semibold text-slate-600 hover:text-slate-700',
                item.href.startsWith(`/${segment}`) && 'text-slate-900',
                item.disabled && 'opacity-60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="text-xl font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
      <div className="flex items-center justify-center">
        <Button>get started</Button>
      </div>
    </div>
  );
}
