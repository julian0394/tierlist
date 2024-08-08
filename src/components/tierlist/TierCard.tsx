import { useAtom } from "jotai"
import { TierlistItem } from "../../models/tierlistData"
import { categoryHoverAtom } from "../../store/categoryHoverAtom"
import { categoryColor } from "../../utils/utils"

interface Props {
  itemData: TierlistItem
}

const TierCard = ({ itemData }: Props) => {
  const [categoryHover] = useAtom(categoryHoverAtom)
  return (
    <div className={`flex flex-col items-center py-2 w-24 text-sm font-semibold rounded-sm ${categoryColor(itemData.category)} ${categoryHover !== itemData.category && !!categoryHover ? 'opacity-30' : ''} transition-all duration-300`}>
      <div className="grid place-content-center p-2 h-[72px] w-[72px] rounded-md bg-white">
        <img src={itemData.logo} className="bg-white select-none" height={64} width={64} alt={`Logo of ${itemData.name}`} />
      </div>
      <span className="pt-2 px-1">{itemData.name}</span>
    </div>
  )
}

export default TierCard
