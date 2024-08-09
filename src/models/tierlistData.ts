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
  BUILDTOOLS: { key: 'buildTool', label: 'Build Tool' },
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
  affection: Ranking
  logo: string
}

export type Ranking = 'S' | 'A' | 'B' | 'C' | 'F'

export const tierlistData: TierlistItem[] = [
  { name: 'TypeScript', affinity: 'S', affection: 'S', logo: LOGOS.typescriptLogo, category: CATEGORIES.LANGUAGE.key },
  { name: 'JavaScript', affinity: 'S', affection: 'C', logo: LOGOS.javascriptLogo, category: CATEGORIES.LANGUAGE.key },
  { name: 'Java', affinity: 'C', affection: 'C', logo: LOGOS.JavaLogo, category: CATEGORIES.BACKEND.key },
  { name: 'Tailwind + (tw-merge, clsx & cva)', affinity: 'S', affection: 'S', logo: LOGOS.tailwindLogo, category: CATEGORIES.STYLES.key },
  { name: 'Styled Components', affinity: 'S', affection: 'A', logo: LOGOS.styledComponentsLogo, category: CATEGORIES.STYLES.key },
  { name: 'CSS Modules', affinity: 'A', affection: 'B', logo: LOGOS.cssModulesLogo, category: CATEGORIES.STYLES.key },
  { name: 'Sass', affinity: 'B', affection: 'B', logo: LOGOS.sassLogo, category: CATEGORIES.STYLES.key },
  { name: 'Zustand', affinity: 'S', affection: 'S', logo: LOGOS.zustandLogo, category: CATEGORIES.STATEMANAGMENT.key },
  { name: 'Jotai', affinity: 'S', affection: 'S', logo: LOGOS.jotaiLogo, category: CATEGORIES.STATEMANAGMENT.key },
  { name: 'TanStack Query', affinity: 'A', affection: 'S', logo: LOGOS.tanstackQueryLogo, category: CATEGORIES.STATEMANAGMENT.key },
  { name: 'Redux Toolkit', affinity: 'B', affection: 'C', logo: LOGOS.reduxLogo, category: CATEGORIES.STATEMANAGMENT.key },
  { name: 'Radix', affinity: 'S', affection: 'S', logo: LOGOS.radixLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'Shadcn UI', affinity: 'B', affection: 'B', logo: LOGOS.shadcnUiLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'Ant Design', affinity: 'S', affection: 'A', logo: LOGOS.antdLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'React Aria', affinity: 'A', affection: 'S', logo: LOGOS.reactAriaLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'Chakra UI', affinity: 'C', affection: 'B', logo: LOGOS.chakraUiLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'MUI', affinity: 'B', affection: 'C', logo: LOGOS.muiLogo, category: CATEGORIES.UICOMPONENTS.key },
  { name: 'Jest', affinity: 'A', affection: 'A', logo: LOGOS.JestLogo, category: CATEGORIES.TESTING.key },
  { name: 'React Testing Library', affinity: 'A', affection: 'A', logo: LOGOS.testingLibraryLogo, category: CATEGORIES.TESTING.key },
  { name: 'Mock Service Worker', affinity: 'A', affection: 'A', logo: LOGOS.mswLogo, category: CATEGORIES.TESTING.key },
  { name: 'Vite', affinity: 'A', affection: 'S', logo: LOGOS.viteLogo, category: CATEGORIES.BUILDTOOLS.key },
  { name: 'Create React App + craco', affinity: 'A', affection: 'C', logo: LOGOS.craLogo, category: CATEGORIES.BUILDTOOLS.key },
  { name: 'MySql', affinity: 'A', affection: 'A', logo: LOGOS.mysqlLogo, category: CATEGORIES.DATABASE.key },
  { name: 'SQL Server', affinity: 'C', affection: 'B', logo: LOGOS.sqlServerLogo, category: CATEGORIES.DATABASE.key },
  { name: 'React Hook Form', affinity: 'S', affection: 'S', logo: LOGOS.reactHookFormLogo, category: CATEGORIES.GENERAL.key },
  { name: 'React Router Dom', affinity: 'S', affection: 'S', logo: LOGOS.reactRouterLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Framer Motion', affinity: 'B', affection: 'A', logo: LOGOS.FramerMotionLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Zod', affinity: 'A', affection: 'A', logo: LOGOS.zodLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Tanstack Table', affinity: 'B', affection: 'A', logo: LOGOS.tanstackTableLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Next JS', affinity: 'F', affection: 'F', logo: LOGOS.nextjsLogo, category: CATEGORIES.FRAMEWORK.key },
  { name: 'Astro', affinity: 'F', affection: 'F', logo: LOGOS.astroLogo, category: CATEGORIES.FRAMEWORK.key },
  { name: 'Storybook', affinity: 'F', affection: 'F', logo: LOGOS.storybookLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Node JS', affinity: 'B', affection: 'B', logo: LOGOS.nodeLogo, category: CATEGORIES.BACKEND.key },
  { name: 'Express', affinity: 'A', affection: 'S', logo: LOGOS.expressLogo, category: CATEGORIES.BACKEND.key },
  { name: 'Vitest', affinity: 'F', affection: 'F', logo: LOGOS.vitestLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Drizzle', affinity: 'F', affection: 'F', logo: LOGOS.drizzleLogo, category: CATEGORIES.GENERAL.key },
  { name: 'MongoDB', affinity: 'F', affection: 'F', logo: LOGOS.mongoDbLogo, category: CATEGORIES.DATABASE.key },
  { name: 'Firebase', affinity: 'F', affection: 'F', logo: LOGOS.firebaseLogo, category: CATEGORIES.DATABASE.key },
  { name: 'Prisma', affinity: 'F', affection: 'F', logo: LOGOS.prismaLogo, category: CATEGORIES.GENERAL.key },
  { name: 'Postgre SQL', affinity: 'F', affection: 'F', logo: LOGOS.postgreSqlLogo, category: CATEGORIES.DATABASE.key },
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
