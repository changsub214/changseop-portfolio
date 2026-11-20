import type { ProjectCaseStudy } from '@/types/portfolio';
import { project01OntologyAgent } from './01-ontology-context-agent';
import { project02DataOpsPlane } from './02-declarative-dataops-plane';
import { project03AxWorkbench } from './03-ax-vibe-workflow-runtime';
import { project04StreamingSemantic } from './04-streaming-semantic-model';

/**
 * Isolated Project Registry.
 * To add/hide a project in Stage 2, drop a module file here or toggle `published`.
 */
export const projectRegistry: ProjectCaseStudy[] = [
  project01OntologyAgent,
  project02DataOpsPlane,
  project03AxWorkbench,
  project04StreamingSemantic,
];
