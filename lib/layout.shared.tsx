import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
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
  };
}
