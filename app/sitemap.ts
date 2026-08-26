import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteUrl } from '@/lib/shared';

// Built from the Fumadocs page tree, so a new .mdx file is in the sitemap
// the moment it ships — nothing to remember to update by hand.
export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => ({
    url: `${siteUrl}${page.url}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
