import { Cell, Column, Row, Table, TableBody, TableHeader } from "react-aria-components"

interface Props {
  descriptiveName: string
}

const CustomTable = ({
  descriptiveName,
}: Props) => {
  const rows = [
    { name: 'Games', type: 'File folder', modDate: '6/7/2020' },
    { name: 'Program Files', type: 'File folder', modDate: '4/7/2021' },
    { name: 'bootmgr', type: 'System file', modDate: '11/20/2010' },
    { name: 'log.txt', type: 'Text Document', modDate: '1/18/2016' },
  ]
  return (
    <Table aria-label={descriptiveName} selectionMode="single">
      <TableHeader className={`bg-slate-100 text-slate-700`}>
        {/* <Column className={`py-2 px-3`}>
          <input type="checkbox" />
        </Column> */}
        <Column className={`py-2 px-4 border-l border-slate-200`} isRowHeader>Name</Column>
        <Column className={`py-2 px-4 border-l border-slate-200`}>Type</Column>
        <Column className={`py-2 px-4 border-l border-slate-200`}>Date Modified</Column>
      </TableHeader>

      
      <TableBody className='bg-white text-slate-700'>
        { rows.map( row => (
          <Row key={crypto.randomUUID()} className={`hover:bg-sky-300/20 cursor-pointer`}>
            {/* <Cell className='py-2 px-3'>
              <input type="checkbox" />
            </Cell> */}
            <Cell className={`py-2 px-4 border-l border-slate-200`}>{row.name}</Cell>
            <Cell className={`py-2 px-4 border-l border-slate-200`}>{row.type}</Cell>
            <Cell className={`py-2 px-4 border-l border-slate-200`}>{row.modDate}</Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  )
}

export default CustomTable
