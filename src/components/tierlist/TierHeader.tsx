import { Ranking } from "../../models/tierlistData"

interface Props {
  rank: Ranking
}

const TierHeader = ({ rank }: Props) => {
  const rankColor = (rank: Ranking) => {
    switch(rank) {
      case "S": return 'bg-rose-500'
      case "A": return 'bg-orange-500'
      case "B": return 'bg-yellow-500'
      case "C": return 'bg-lime-500'
      case "D": return 'bg-green-500'
      case "E": return 'bg-sky-500'
      default: return 'bg-slate-500'
    }
  }
  
  return (
    <div className={`grid place-content-center text-black font-bold min-w-10 mx-1 rounded-sm ${rankColor(rank)}`}>
      {rank ?? '-'}
    </div>
  )
}

export default TierHeader
