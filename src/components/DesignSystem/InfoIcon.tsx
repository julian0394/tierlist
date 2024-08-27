import { FaInfoCircle } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

interface Props {
  text: string
  id: string
}

const InfoIcon = ({ text, id }: Props) => {
  return (
    <>
      <span id={`tooltip-${id}`} className="p-1 text-sky-600"><FaInfoCircle size={12} /></span>
      <Tooltip className="z-50 " style={{backgroundColor: '#000', borderRadius: '5px', maxWidth: '15rem'}} anchorSelect={`#tooltip-${id}`} place="top">
        {text}
      </Tooltip>
    </>
  )
}

export default InfoIcon
