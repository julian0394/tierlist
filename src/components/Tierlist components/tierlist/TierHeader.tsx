import { useAtom } from "jotai"
import { Ranking } from "../../../models/tierlistData"
import { tierlistSelectedAtom } from "../../../store/atoms"
import { setLoveIcon } from "../../../utils/utils"

interface Props {
  rank: Ranking
}

const TierHeader = ({ rank }: Props) => {
  const [tierSelected] = useAtom(tierlistSelectedAtom)
  
  const isAffinity = tierSelected === 'affinity'

  const rankColor = (rank: Ranking) => {
    switch(rank) {
      case "S": return 'bg-rose-500'
      case "A": return 'bg-orange-500'
      case "B": return 'bg-yellow-500'
      case "C": return 'bg-lime-500'
      default: return 'bg-slate-500'
    }
  }
  
  return (
    <div className={`grid place-content-center text-black font-bold min-w-10 mx-1 rounded-sm select-none ${ !isAffinity && 'text-[20px]'} ${rankColor(rank)}`}>
      {isAffinity ? rank : setLoveIcon(rank)}
    </div>
  )
}

export default TierHeader
