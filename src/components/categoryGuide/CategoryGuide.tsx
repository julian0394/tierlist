import { CATEGORIES } from "../../models/tierlistData"
import CategoryElement from "./CategoryElement"

interface Props {  }

const CategoryGuide = ({  }: Props) => {
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap mx-auto my-5 px-5 py-3 max-w-[60vw] border-2 border-dashed border-slate-500 rounded-sm text-slate-800 font-semibold">
      { Object.values(CATEGORIES).map( category => (
          <CategoryElement
            name={category.label}
            categoryKey={category.key}
            key={crypto.randomUUID()}
          />
        ))
      }
    </div>
  )
}

export default CategoryGuide
