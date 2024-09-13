import {
  Cell,
  Column,
  ColumnResizer,
  ResizableTableContainer,
  Row,
  Table,
  TableBody,
  TableHeader,
  useTableOptions,
} from "react-aria-components"

interface Props {
  descriptiveName: string
}

const DataTable = ({
  descriptiveName,
}: Props) => {
  // let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
  
  const columns = [
    {name: 'Name', id: 'name', isRowHeader: true},
    {name: 'Type', id: 'type'},
    {name: 'Date Modified', id: 'date'}
  ];
  const rows = [
    { name: 'Games', type: 'File folder', modDate: '6/7/2020' },
    { name: 'Program Files', type: 'File folder', modDate: '4/7/2021' },
    { name: 'bootmgr', type: 'System file', modDate: '11/20/2010' },
    { name: 'log.txt', type: 'Text Document', modDate: '1/18/2016' },
  ]
  return (
    <ResizableTableContainer>
      <Table aria-label={descriptiveName} className={'mt-5 border-2 border-slate-400'}>
        <TableHeader className={`bg-slate-200 text-slate-700 border-b border-slate-3  00`}>
          {/* <Column className={`py-2 px-3`}>
            <input type="checkbox" />
          </Column> */}
          { columns.map( column => (
            <Column
              key={crypto.randomUUID()}
              id={column.id}
              isRowHeader={column.isRowHeader}
              className={`py-2 px-4 border-l border-slate-300`}
            >
              {column.name}
            </Column>
          ))}
        </TableHeader>
      
        <TableBody className='text-slate-700'>
          { rows.map( (row, index) => (
            <Row key={crypto.randomUUID()} className={`${index % 2 === 0 ? 'bg-slate-100' : 'bg-white'} hover:bg-sky-300/20 cursor-pointer`}>
              {/* <Cell className='py-2 px-3'>
                <input type="checkbox" />
              </Cell> */}
              <Cell className={`py-2 px-4 border-l`}>{row.name}</Cell>
              <Cell className={`py-2 px-4 border-l`}>{row.type}</Cell>
              <Cell className={`py-2 px-4 border-l`}>{row.modDate}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </ResizableTableContainer>
  )
}

export default DataTable
