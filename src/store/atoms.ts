import { atom } from "jotai"

export const categorySelectedAtom = atom<string | null>(null)
export const tierlistSelectedAtom = atom<'affinity' | 'affection'>('affinity')
