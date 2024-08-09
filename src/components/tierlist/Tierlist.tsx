import TierRow from "./TierRow"

interface Props {}

const Tierlist = ({}: Props) => {
  return (
    <div className="flex flex-col gap-1 md:max-w-[80vw] md:mx-auto">
      <TierRow rank='S' />
      <TierRow rank='A' />
      <TierRow rank='B' />
      <TierRow rank='C' />
    </div>
  )
}

export default Tierlist
