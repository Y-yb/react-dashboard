import { useTable } from 'react-table';
import type { Column } from 'react-table';

// 模拟表格数据（和之前一致）
const tableData = [
  { project: 'V3-HSG', week1: '98.5%', week2: '97.8%', week3: '99.2%' },
  { project: 'V4-HSG', week1: '96.3%', week2: '97.1%', week3: '98.0%' },
  { project: 'D23-MCH', week1: '95.7%', week2: '96.4%', week3: '97.5%' },
];

// 定义表格数据类型
type TableData = typeof tableData[0];

// v7 列定义（和 v8 写法不同，更简单）
const columns: Array<Column<TableData>> = [
  {
    Header: 'Project', // 表头文字
    accessor: 'project', // 对应数据的字段名
    Cell: ({ value }: { value: string }) => <span>{value}</span>, // 单元格渲染
  },
  {
    Header: 'Wk 1',
    accessor: 'week1',
    Cell: ({ value }: { value: string }) => <span className="text-green-600">{value}</span>,
  },
  {
    Header: 'Wk 2',
    accessor: 'week2',
    Cell: ({ value }: { value: string }) => <span className="text-orange-600">{value}</span>,
  },
  {
    Header: 'Wk 3',
    accessor: 'week3',
    Cell: ({ value }: { value: string }) => <span className="text-green-600">{value}</span>,
  },
];

export default function TrendTable() {
  // v7 核心 API：useTable（无需额外配置，开箱即用）
  const {
    getTableProps, // 表格根元素的 props
    getTableBodyProps, // 表格体的 props
    headerGroups, // 表头组
    rows, // 行数据
    prepareRow, // 行预处理（必须调用）
  } = useTable<TableData>({
    columns,
    data: tableData,
  });

  return (
    <div className="overflow-x-auto">
      {/* 表格根元素：绑定 getTableProps */}
      <table {...getTableProps()} className="min-w-full border-collapse">
        <thead>
          {/* 渲染表头 */}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 border text-left text-sm font-medium"
                >
                  {column.render('Header')} {/* v7 渲染表头的方式 */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* 表格体：绑定 getTableBodyProps */}
        <tbody {...getTableBodyProps()}>
          {/* 渲染行数据 */}
          {rows.map((row) => {
            prepareRow(row); // 必须调用：预处理行数据
            return (
              <tr {...row.getRowProps()} className="border-b hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 text-sm"
                  >
                    {cell.render('Cell')} {/* v7 渲染单元格的方式 */}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}