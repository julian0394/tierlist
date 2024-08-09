import { useAtom } from "jotai"
import { tierlistSelectedAtom } from "../store/atoms"

interface Props { }

const TierToggle = ({ }: Props) => {
  const [tierSelected, setTierSelected] = useAtom(tierlistSelectedAtom)

  return (
    <>
      <ul className="flex items-center justify-center gap-2 lg:max-w-[20vw] mx-auto my-5 px-2 py-1 border border-1 border-slate-500 rounded-md">
        <li className="flex-1 text-center">
            <input
              type="radio"
              name="tier"
              id="affinity"
              onChange={() => setTierSelected('affinity')}
              className="hidden"
            />
            <label htmlFor="affinity" className={`block px-2 py-1 rounded-md ${tierSelected === 'affinity' ? 'bg-slate-300': 'hover:bg-slate-200 cursor-pointer'} text-slate-800 transition-all duration-150`}>
              <p className="w-full text-lg font-semibold">Affinity</p>
            </label>
        </li>
        <li className="flex-1 text-center">
          <input
            type="radio"
            name="tier"
            id="affection"
            onChange={() => setTierSelected('affection')}
            className="hidden"
          />
          <label htmlFor="affection" className={`block px-2 py-1 rounded-md ${tierSelected === 'affection' ? 'bg-slate-300': 'hover:bg-slate-200 cursor-pointer'} text-slate-800 transition-all duration-150`}>
              <div className="block">
                  <div className="w-full text-lg font-semibold">Affection</div>
              </div>
          </label>
        </li>
      </ul>
    </>

  )
}

export default TierToggle
