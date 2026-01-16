import { Table } from 'antd';
import type { ColumnType } from 'antd/es/table';

interface DataRecord {
  key: string;
  name: string;
  age: number;
  address: string;
  total: string;
}

const dataSource: DataRecord[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    total: '合计：32岁 / 纽约',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    total: '合计：42岁 / 伦敦',
  },
];

const columns: ColumnType<DataRecord>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '合并列示例',
    dataIndex: 'total',
    key: 'total',
    render: (text, record, index) => {
      // 让“合并列示例”这一列跨3列（覆盖姓名/年龄/地址）
      return {
        children: text,
        props: {
          colSpan: 3, // 跨3列
        },
      };
    },
  },
  // 隐藏被跨列的“姓名”“年龄”“地址”列（仅在需要合并的行生效）
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name-hide',
    render: (text, record, index) => {
      return {
        children: text,
        props: {
          colSpan: 0, // 隐藏该列
        },
      };
    },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age-hide',
    render: (text, record, index) => {
      return {
        children: text,
        props: {
          colSpan: 0,
        },
      };
    },
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address-hide',
    render: (text, record, index) => {
      return {
        children: text,
        props: {
          colSpan: 0,
        },
      };
    },
  },
];

const ColumnMergeTable = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default ColumnMergeTable;