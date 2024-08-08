import { LOGOS } from '../assets/img'

export interface Category {
  key: Categorykey
  label: CategoryLabel
}
export const CATEGORIES = {
  LANGUAGE: { key: 'language', label: 'Language' },
  STATEMANAGMENT: { key: 'stateManagment', label: 'State Managment' },
  STYLES: { key: 'style', label: 'Style' },
  UICOMPONENTS: { key: 'uiComponents', label: 'UI Component Library' },
  TESTING: { key: 'testing', label: 'Testing' },
  FRAMEWORK: { key: 'framework', label: 'Framework' },
  BUILDTOOLS: { key: 'buildTools', label: 'Build Tools' },
  DATABASE: { key: 'database', label: 'Database' },
  BACKEND: { key: 'backend', label: 'Backend' },
  GENERAL: { key: 'general', label: 'General' },
} as const
export type CategoryLabel = typeof CATEGORIES[keyof typeof CATEGORIES]['label']
export type Categorykey = typeof CATEGORIES[keyof typeof CATEGORIES]['key']


export interface TierlistItem {
  name: string
  category: string
  affinity: Ranking
  love: Ranking
  logo: string
}

export type Ranking = 'S' | 'A' | 'B' | 'C' | 'D' | 'E'

export const tierlistData: TierlistItem[] = [
  { name: 'TypeScript', affinity: 'S', love: 'S', logo: LOGOS.typescriptLogo, category: CATEGORIES.LANGUAGE.key },
  { name: 'JavaScript', affinity: 'S', love: 'C', logo: LOGOS.javascriptLogo, category: CATEGORIES.LANGUAGE.key },
  { name: 'Java', affinity: 'D', love: 'C', logo: LOGOS.JavaLogo, category: CATEGORIES.BACKEND.key },
  { name: 'Tailwind + (tw-merge, clsx & cva)', affinity: 'S', love: 'S', logo: LOGOS.tailwindLogo, category: CATEGORIES.STYLES.key },
  { name: 'Styled Components', affinity: 'S', love: 'A', logo: LOGOS.styledComponentsLogo, category: CATEGORIES.STYLES.key },
  { name: 'CSS Modules', affinity: 'A', love: 'B', logo: LOGOS.cssModulesLogo, category: CATEGORIES.STYLES.key },
  { name: 'Sass', affinity: 'B', love: 'B', logo: LOGOS.sassLogo, category: CATEGORIES.STYLES.key },
  { name: 'Zustand', affinity: 'S', love: 'S', logo: LOGOS.zustandLogo, category: CATEGORIES.STATEMANAGMENT.key },
  { name: 'Jotai', affinity: 'S', love: 'S', logo: LOGOS.jotaiLogo, category: CATEGORIES.STATEMANAGMENT.key },
  { name: 'TanStack Query', affinity: 'A', love: 'A', logo: LOGOS.tanstackQueryLogo, category: CATEGORIES.STATEMANAGMENT.key },
  { name: 'Redux Toolkit', affinity: 'C', love: 'A', logo: LOGOS.reduxLogo, category: CATEGORIES.STATEMANAGMENT.key },
  { name: 'Radix', affinity: 'S', love: 'S', logo: LOGOS.radixLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'Shadcn UI', affinity: 'B', love: 'B', logo: LOGOS.shadcnUiLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'Ant Design', affinity: 'S', love: 'A', logo: LOGOS.antdLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'React Aria', affinity: 'A', love: 'S', logo: LOGOS.reactAriaLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'Chakra UI', affinity: 'D', love: 'B', logo: LOGOS.chakraUiLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'MUI', affinity: 'B', love: 'D', logo: LOGOS.muiLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'Jest', affinity: 'A', love: 'A', logo: LOGOS.JestLogo, category: CATEGORIES.TESTING.key },
  { name: 'React Testing Library', affinity: 'A', love: 'A', logo: LOGOS.testingLibraryLogo, category: CATEGORIES.TESTING.key },
  { name: 'Mock Service Worker', affinity: 'A', love: 'A', logo: LOGOS.mswLogo, category: CATEGORIES.TESTING.key },
  { name: 'Vite', affinity: 'A', love: 'S', logo: LOGOS.viteLogo, category: CATEGORIES.BUILDTOOLS.key },
  { name: 'Create React App + craco', affinity: 'A', love: 'B', logo: LOGOS.craLogo, category: CATEGORIES.BUILDTOOLS.key },
  { name: 'MySql', affinity: 'A', love: 'A', logo: LOGOS.mysqlLogo, category: CATEGORIES.DATABASE.key },
  { name: 'SQL Server', affinity: 'D', love: 'B', logo: LOGOS.sqlServerLogo, category: CATEGORIES.DATABASE.key },
  { name: 'React Hook Form', affinity: 'S', love: 'S', logo: LOGOS.reactHookFormLogo, category: CATEGORIES.GENERAL.key },
  { name: 'React Router Dom', affinity: 'S', love: 'S', logo: LOGOS.reactRouterLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Framer Motion', affinity: 'B', love: 'A', logo: LOGOS.FramerMotionLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Zod', affinity: 'A', love: 'A', logo: LOGOS.zodLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Tanstack Table', affinity: 'B', love: 'A', logo: LOGOS.tanstackTableLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Next JS', affinity: 'E', love: 'E', logo: LOGOS.nextjsLogo, category: CATEGORIES.FRAMEWORK.key },
  { name: 'Astro', affinity: 'E', love: 'E', logo: LOGOS.astroLogo, category: CATEGORIES.FRAMEWORK.key },
  { name: 'Storybook', affinity: 'E', love: 'E', logo: LOGOS.storybookLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Node JS', affinity: 'B', love: 'B', logo: LOGOS.nodeLogo, category: CATEGORIES.BACKEND.key },
  { name: 'Express', affinity: 'A', love: 'S', logo: LOGOS.expressLogo, category: CATEGORIES.BACKEND.key },
]
// - Framework UI: 💙 React (hooks)
// - Lenguaje: 😍 TypeScript | 😃 JavaScript | 😐 Java
// - Estilos: 😍 CSS Modules | 😍 Tailwind | 😃 Styled Components | 🙂 Sass
// - Manejo de estado: 😍 Zustand | 😍 Jotai | 😍 TanStack Query | 😐 Redux Toolkit | 😐 Context
// - Componentes UI: 😍 Radix | 😍 Shadcn | 😃 Ant Design | 🙂 Chakra | 🙂 NextUI | 😐 MUI
// - Pruebas: 🙂 Jest | 🙂 React Testing Library | 🙂 Mock Service Worker
// - Meta frameworks y build tools: 😍 Next JS | 😍 Vite | 😐 Create React App | 😐 Craco
// - Base de datos: 🙂 MySql | 😐 SQL Server
// - Generales: 😍 React Hook Form | 😍 React Router Dom | 😍 Framer Motion | 😍 Zod