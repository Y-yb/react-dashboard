import { Table } from 'antd';
import type { ColumnType } from 'antd/es/table';

interface DataRecord {
  key: string;
  category: string;
  name: string;
  value: string;
}

const rawData: DataRecord[] = [
  { key: '1', category: 'Uptime', name: 'BCD', value: '89.66%' },
  { key: '2', category: 'Uptime', name: 'FTY', value: '97.57%' },
  { key: '3', category: 'Yield', name: 'BGA', value: '98.4%' },
  { key: '4', category: 'Yield', name: 'Chassis', value: '96.2%' },
];

// 预处理数据：计算每个category的rowSpan
const calculateRowSpan = (data: DataRecord[]) => {
  const result: (DataRecord & { rowSpan: number })[] = [];
  let currentCategory = '';
  let count = 0;

  // 先按category排序（确保相同category的行连续）
  const sortedData = [...data].sort((a, b) => a.category.localeCompare(b.category));

  sortedData.forEach((item, index) => {
    if (item.category !== currentCategory) {
      currentCategory = item.category;
      count = 1;
      // 统计当前category的总条数
      const total = sortedData.filter(i => i.category === currentCategory).length;
      result.push({ ...item, rowSpan: total });
    } else {
      count++;
      result.push({ ...item, rowSpan: 0 }); // 后续行隐藏
    }
  });

  return result;
};

const dataSource = calculateRowSpan(rawData);

const columns: ColumnType<DataRecord & { rowSpan: number }>[] = [
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
    render: (text, record) => {
      return {
        children: text,
        props: {
          rowSpan: record.rowSpan, // 动态设置行合并
        },
      };
    },
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '数值',
    dataIndex: 'value',
    key: 'value',
  },
];

const RowMergeTable = () => {
  return <Table dataSource={dataSource} columns={columns} bordered />;
};

export default RowMergeTable;