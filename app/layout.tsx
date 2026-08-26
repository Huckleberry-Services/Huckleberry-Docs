import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { appName, siteUrl } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin'],
});

// Without a template every page title was just its heading — "Introduction"
// on its own is close to unclickable in a search result. metadataBase lets
// each page declare a relative canonical.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} — Facility, Energy and Environmental Management`,
    template: `%s | ${appName}`,
  },
  description:
    'Documentation for Huckleberry: utility billing, dashboards, controls and equipment, measurement and verification, and integrations.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
