import { CATEGORIES } from "../models/tierlistData"

export const categoryColor = (category: string) => {
  switch(category) {
    case CATEGORIES.FRAMEWORK.key: return 'bg-red-400/85'
    case CATEGORIES.LANGUAGE.key: return 'bg-amber-400/85'
    case CATEGORIES.STYLES.key: return 'bg-lime-400/85'
    case CATEGORIES.STATEMANAGMENT.key: return 'bg-emerald-400/85'
    case CATEGORIES.UICOMPONENTS.key: return 'bg-cyan-400/85'
    case CATEGORIES.TESTING.key: return 'bg-blue-400/85'
    case CATEGORIES.BUILDTOOLS.key: return 'bg-purple-400/85'
    case CATEGORIES.DATABASE.key: return 'bg-slate-400/85'
    case CATEGORIES.GENERAL.key: return 'bg-pink-400/85'
    case CATEGORIES.BACKEND.key: return 'bg-stone-400/85'
    default: return 'bg-black'
  }
}

export const setLoveIcon = (affinity: string) => {
  switch(affinity) {
    case 'S': return '😍'
    case 'A': return '😁'
    case 'B': return '😐'
    case 'C': return '😒'
    default: return '👽'
  }
}

export const setInputSize = (size: 0.5 | 1 | 2 | 3) => {
  if(size === 1) return 'flex-[1]'
  else if(size === 2) return 'flex-[2]'
  else if(size === 3) return 'flex-[3]'
  else return 'flex-[0.5]'
}
