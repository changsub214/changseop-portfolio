import type { SiteLayoutConfig } from '@/types/design';

/**
 * Single Control Tower for visual tuning & section composition.
 * Adjust presets or slot ordering here without editing feature components.
 */
export const siteLayoutConfig: SiteLayoutConfig = {
  theme: {
    accentPreset: 'amber',
    densityPreset: 'hybrid',
    showBlueprintCrosshairs: true,
  },
  projects: {
    flagshipCount: 2,
  },
  sections: [
    { id: 'hero', indexCode: '00', enabled: true },
    { id: 'projects', indexCode: '01', enabled: true },
    { id: 'competencies', indexCode: '02', enabled: true },
    { id: 'footer', indexCode: '03', enabled: true },
  ],
};
