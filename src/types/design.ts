export type AccentPreset = 'amber' | 'monochrome' | 'sage';
export type DensityPreset = 'hybrid' | 'airy' | 'compact';
export type SectionId = 'hero' | 'projects' | 'competencies' | 'footer';

export interface SectionSlotConfig {
  id: SectionId;
  indexCode: string;
  enabled: boolean;
}

export interface SiteLayoutConfig {
  theme: {
    accentPreset: AccentPreset;
    densityPreset: DensityPreset;
    showBlueprintCrosshairs: boolean;
  };
  projects: {
    flagshipCount: number;
  };
  sections: SectionSlotConfig[];
}
