import {
  SkyDemoPageImports
} from './shared/demo-page-imports';

export interface SkyDemoComponent {
  name: string;
  icon: string;
  summary: string;
  url?: string;
  path?: string[];
  getCodeFiles?: () => any[];
  components?: SkyDemoComponent[];
  imports?: SkyDemoPageImports;
}
