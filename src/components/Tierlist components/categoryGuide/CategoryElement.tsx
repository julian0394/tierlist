import { useAtom } from 'jotai'
import { Categorykey, CategoryLabel } from '../../../models/tierlistData'
import { categoryColor } from '../../../utils/utils'
import { categorySelectedAtom } from '../../../store/atoms'

interface Props {
  name: CategoryLabel
  categoryKey: Categorykey
}

const CategoryElement = ({ name, categoryKey }: Props) => {
  const [_, setCategorySelected] = useAtom(categorySelectedAtom)

  return (
    <button
      onFocus={() => setCategorySelected(categoryKey)}
      onBlur={() => setCategorySelected(null)}
      className='flex items-center gap-2 p-2 hover:bg-slate-300/50 focus:bg-slate-400/40 focus:outline-none cursor-pointer rounded-md transition-colors duration-150 select-none'
    >
      <div className={`h-4 w-4 rounded-md border border-slate-900/10 ${categoryColor(categoryKey)}`} />
      <span>{name}</span>
    </button>
  )
}

export default CategoryElement
