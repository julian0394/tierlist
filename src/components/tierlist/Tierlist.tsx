import TierRow from "./TierRow"

interface Props { }

const Tierlist = ({  }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <TierRow rank='S' />
      <TierRow rank='A' />
      <TierRow rank='B' />
      <TierRow rank='C' />
      <TierRow rank='D' />
      <TierRow rank='E' />
    </div>
  )
}

export default Tierlist
