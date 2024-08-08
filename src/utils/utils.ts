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
    case CATEGORIES.DATABASE.key: return 'bg-pink-400/85'
    case CATEGORIES.GENERAL.key: return 'bg-slate-400/85'
    case CATEGORIES.BACKEND.key: return 'bg-stone-400/85'
    default: return 'bg-black'
  }
}

//! TODO: Crear funcion para poner un icono en amor
export const setLoveIcon = (love: string) => {
  switch(love) {
    case 'S': return ''
    default: return ''
  }
}
