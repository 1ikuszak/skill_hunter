'use client';

import { Search } from '@/components/Searchbar';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import logo from '../public/logo.svg';

const linkProps = {
  className: 'block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200',
  href: '#',
};

const links = [
  { text: 'First Link', href: '/add' },
  { text: 'Second Link', href: '/login' },
  { text: 'Third Link', href: '/register' },
  { text: 'Fourth Link', href: '#' },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center w-full py-2">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex items-center justify-center gap-2">
          <Image src={logo} width={38} alt="Logo" />
          <p className="text-xl font-medium">
            <span>Skill</span>
            <span className="text-primary">Hunter</span>
          </p>
        </div>

        <div>
          <Search placeholder="Jakiego serwisu dzisiaj poszukujesz?" />
        </div>

        <div className="flex items-center justify-center gap-4">
          {links.map(({ text, href }) => (
            <Button
              key={text}
              variant="link"
              size="sm"
              {...linkProps}
              href={href}
            >
              {text}
            </Button>
          ))}
        </div>

        <div>
          <Button variant="default" size="sm">
            get started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
