import { useAtom } from 'jotai'
import { Categorykey, CategoryLabel } from '../../models/tierlistData'
import { categoryColor } from '../../utils/utils'
import { categoryHoverAtom } from '../../store/atoms'

interface Props {
  name: CategoryLabel
  categoryKey: Categorykey
}

const CategoryElement = ({ name, categoryKey }: Props) => {
  const [_, setCategoryHover] = useAtom(categoryHoverAtom)

  return (
    <div
      onMouseEnter={() => setCategoryHover(categoryKey)}
      onMouseLeave={() => setCategoryHover(null)}
      className='flex items-center gap-2 p-2 hover:bg-slate-400/40 cursor-pointer rounded-md transition-colors duration-150 select-none'
    >
      <div className={`h-4 w-4 rounded-md border border-slate-900/10 ${categoryColor(categoryKey)}`} />
      <span>{name}</span>
    </div>
  )
}

export default CategoryElement
