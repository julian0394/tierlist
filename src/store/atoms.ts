import { atom } from "jotai"

export const categoryHoverAtom = atom<string | null>(null)
export const tierlistSelectedAtom = atom<'affinity' | 'affection'>('affinity')
