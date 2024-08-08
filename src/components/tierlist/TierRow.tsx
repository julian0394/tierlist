import { Ranking, tierlistData } from "../../models/tierlistData"
import TierCell from "./TierCard"
import TierHeader from "./TierHeader"

interface Props {
  rank: Ranking
}

const TierRow = ({ rank }: Props) => {
  const tierData = tierlistData.filter( item => item.affinity === rank)
  
  return (
    <div className='flex items-stretch justify-start gap-1 py-1 bg-gray-900 rounded-sm'>
      <TierHeader rank={rank} />
      <div className="flex text-center gap-1 flex-wrap">
        { tierData.map( item => <TierCell key={crypto.randomUUID()} itemData={item} /> ) }
      </div>
    </div>
  )
}

export default TierRow
