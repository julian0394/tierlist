import { FaInfoCircle } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

interface Props {
  text: string
  id: string
  clickable?: boolean
  openOnClick?: boolean
}

const InfoIcon = ({ text, id, clickable = false, openOnClick = false }: Props) => {
  return (
    <>
      <span id={`tooltip-${id}`} className="p-1 text-sky-600"><FaInfoCircle size={12} /></span>
      <Tooltip
        anchorSelect={`#tooltip-${id}`}
        place="top"
        clickable={clickable}
        openOnClick={openOnClick}
        className="z-50"
        style={{backgroundColor: '#000', borderRadius: '5px', maxWidth: '15rem'}}
      >
        {text}
      </Tooltip>
    </>
  )
}

export default InfoIcon
