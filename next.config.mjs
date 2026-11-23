import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// The sidebar mirrors the platform's own menu (Dashboards, Analytics, Profiles,
// Admin). These keep links to the pages' earlier addresses working.
const movedPages = [
  ['/docs/power-purchasing', '/docs/dashboards/power-purchasing'],
  ['/docs/dashboards', '/docs/dashboards/performance'],
  ['/docs/controls', '/docs/dashboards/facility-controls'],
  ['/docs/controls/equipment-graphics', '/docs/dashboards/facility-controls/equipment-graphics'],
  ['/docs/utility-billing', '/docs/analytics/utility-data'],
  ['/docs/utility-billing/:page', '/docs/analytics/utility-data/:page'],
  ['/docs/analytics', '/docs/analytics/measurement-verification'],
  ['/docs/analytics/option-c', '/docs/analytics/measurement-verification/option-c'],
  ['/docs/profiles', '/docs/profiles/sites'],
  ['/docs/integrations', '/docs/admin/data-connectors'],
  ['/docs/integrations/egauge', '/docs/admin/data-connectors/egauge'],
  ['/docs/integrations/notifications', '/docs/admin/account-management/notifications'],
];

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return movedPages.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default withMDX(config);
