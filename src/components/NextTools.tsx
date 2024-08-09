import { tierlistData } from "../models/tierlistData"
import TierCard from "./tierlist/TierCard"

interface Props {}

const NextTools = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-start gap-5 mx-auto my-5 md:px-5 py-3 md:max-w-[80vw] border-2 border-dashed border-slate-500 rounded-sm text-slate-800 font-semibold">
      <h2 className="font-bold text-xl">Things to learn next (even in order)</h2>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        { tierlistData.map( tierListItem => {
            return tierListItem.affinity === 'F' && <TierCard itemData={tierListItem} />
          })
        }
      </div>
    </div>
  )
}

export default NextTools
