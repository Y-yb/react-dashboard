import { Table } from 'antd';
// 注意：样式文件要确保在 antd 样式之后引入，或者使用 CSS Modules
import './TransparentTable.css';

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name',width: '1.25rem' },
  { title: '年龄', dataIndex: 'age', key: 'age',width: '0.625rem' },
  { title: '地址', dataIndex: 'address', key: 'address',width: '6.25rem' },
];

const data = Array.from({ length: 5 }).map((_, index) => ({
  key: index,
  name: `用户${index}`,
  age: 18 + index,
  address: `北京市朝阳区${index}号`,
}));

// 给表格外层加一个唯一类名，进一步提升优先级
const TransparentTable = () => {
  return (
    <div className="table-wrapper"> {/* 外层容器 */}
      <Table
        columns={columns}
        dataSource={data}
        bordered={false}
        pagination={false}
        tableLayout="fixed"
        // 额外：强制重置表格的背景样式（双重保障）
        // style={{ backgroundColor: '#f00' }}
      />
    </div>
  );
};

export default TransparentTable;