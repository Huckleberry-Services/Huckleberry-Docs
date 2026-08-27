import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

const SITE_URL = 'https://huckleberryservices.com';
// "Platform" goes to the app itself, not the marketing page describing it —
// someone reading the docs is a user looking for their portal, not a prospect.
const PORTAL_URL = 'https://portal.huckleberryservices.com';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // Logo returns to the main site rather than to /docs, the usual
      // convention for a docs subdomain. Without it there was no route back
      // to huckleberryservices.com from anywhere in the documentation.
      url: SITE_URL,
      title: (
        <span className="flex items-center">
          <Image
            src="/logo-retina.png"
            alt="Huckleberry"
            width={140}
            height={48}
            priority
          />
          <span className="sr-only">{appName}</span>
        </span>
      ),
    },
    links: [
      {
        text: 'Platform',
        url: PORTAL_URL,
        external: true,
      },
      {
        text: 'Contact',
        url: `${SITE_URL}/#contact`,
        external: true,
      },
    ],
  };
}
