import { MarketingConfig } from '@/types';

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Login',
      href: '/login',
    },
    {
      title: 'Register',
      href: '/register',
    },
    {
      title: 'Add',
      href: '/add',
    },
    {
      title: 'Browse',
      href: '/browse',
    },
    {
      title: 'Contact',
      href: '/contact',
      disabled: true,
    },
  ],
};
