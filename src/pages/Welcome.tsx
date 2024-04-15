import { PageContainer } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import React from 'react';
import { Table, Flex, Progress } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  type: string;
  number: string;
  note: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '模型 ID',
    dataIndex: 'key',
    key: 'key',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: '模型名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '算法类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '模型预测次数',
    key: 'number',
    dataIndex: 'number',
  },
  {
    title: '备注',
    key: 'note',
    dataIndex: 'note',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'KNN',
    type: '插补',
    number: '1',
    note: '',
  },
  {
    key: '2',
    name: 'CD-GAIN',
    type: '插补',
    number: '2',
    note: '',
  },
  {
    key: '3',
    name: 'DDC-GAIN',
    type: '插补',
    number: '3',
    note: '',
  },
  {
    key: '4',
    name: 'C-GAIN',
    type: '插补',
    number: '4',
    note: '总表',
  },
  {
    key: '6',
    name: 'GAIN',
    type: '插补',
    number: '5',
    note: '',
  },
  {
    key: '5',
    name: 'MICE',
    type: '插补',
    number: '6',
    note: '总表',
  },
];
// 4 6 4
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard colSpan="50%" bordered>
          <div
            style={{
              position: 'absolute',
              left: 25,
              top: 20,
              height: '20px',
              width: '4px',
              backgroundColor: '#8080FF',
            }}
          ></div>
          <h1 style={{ marginLeft: '12px', color: '#8080FF', fontSize: '16px' }}>快捷入口</h1>{' '}
          {/* 左边距以避开竖块 */}
          <hr
            style={{ backgroundColor: '#E8E8E8', height: '1px', border: 'none', margin: '16px 0' }}
          />
          <img
            src="http://img.haofeng.wiki/202404030905000.png"
            alt="Image description"
            style={{ height: '100px', width: '600px', marginTop: '79px', marginBottom: '95px' }}
          />
        </ProCard>
        <ProCard colSpan="50%" bordered>
          <div
            style={{
              position: 'absolute',
              left: 25,
              top: 20,
              height: '20px',
              width: '4px',
              backgroundColor: '#8080FF',
            }}
          ></div>
          <h1 style={{ marginLeft: '12px', color: '#8080FF', fontSize: '16px' }}>模型信息</h1>{' '}
          {/* 左边距以避开竖块 */}
          <hr
            style={{ backgroundColor: '#E8E8E8', height: '1px', border: 'none', margin: '16px 0' }}
          />
          <Table columns={columns} dataSource={data} size="small" pagination={false} />
        </ProCard>
      </ProCard>

      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard colSpan="30%" bordered split="horizontal">
          <div
            style={{
              position: 'absolute',
              left: 25,
              top: 20,
              height: '20px',
              width: '4px',
              backgroundColor: '#8080FF',
            }}
          ></div>
          <h1 style={{ marginLeft: '40px', color: '#8080FF', fontSize: '16px', marginTop: '18px' }}>
            数据统计
          </h1>{' '}
          {/* 左边距以避开竖块 */}
          <hr style={{ backgroundColor: '#E8E8E8', height: '1px', border: 'none' }} />
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <ProCard title="胃癌">
                1/6
                <Progress percent={16} showInfo={false} strokeColor="#8080FF" />
              </ProCard>
              <ProCard title="糖尿病">
                1/6
                <Progress percent={16} showInfo={false} strokeColor="#8080FF" />
              </ProCard>
            </ProCard>
            <ProCard split="vertical">
              <ProCard title="艾尔兹海默症">
                1/6
                <Progress percent={16} showInfo={false} strokeColor="#8080FF" />
              </ProCard>
              <ProCard title="肺癌">
                1/6
                <Progress percent={16} showInfo={false} strokeColor="#8080FF" />
              </ProCard>
            </ProCard>
            <ProCard split="vertical">
              <ProCard title="乳腺癌">
                1/6
                <Progress percent={16} showInfo={false} strokeColor="#8080FF" />
              </ProCard>
              <ProCard title="高血压">
                1/6
                <Progress percent={16} showInfo={false} strokeColor="#8080FF" />
              </ProCard>
            </ProCard>
          </ProCard>
        </ProCard>

        <ProCard colSpan="40%" bordered>
          <div
            style={{
              position: 'absolute',
              left: 25,
              top: 20,
              height: '20px',
              width: '4px',
              backgroundColor: '#8080FF',
            }}
          ></div>
          <h1 style={{ marginLeft: '12px', color: '#8080FF', fontSize: '16px' }}>登录统计</h1>{' '}
          {/* 左边距以避开竖块 */}
          <hr
            style={{ backgroundColor: '#E8E8E8', height: '1px', border: 'none', margin: '16px 0' }}
          />
          <img
            src="http://img.haofeng.wiki/202404031025596.png"
            alt=""
            style={{ height: '400px', width: '480px' }}
          />
        </ProCard>
        <ProCard colSpan="30%" bordered>
          <div
            style={{
              position: 'absolute',
              left: 25,
              top: 20,
              height: '20px',
              width: '4px',
              backgroundColor: '#8080FF',
            }}
          ></div>
          <h1 style={{ marginLeft: '12px', color: '#8080FF', fontSize: '16px' }}>登录历史</h1>{' '}
          {/* 左边距以避开竖块 */}
          <hr
            style={{ backgroundColor: '#E8E8E8', height: '1px', border: 'none', margin: '16px 0' }}
          />
          <img
            src="http://img.haofeng.wiki/202404031036050.png"
            alt=""
            style={{ height: '600px', width: '360px' }}
          />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default Welcome;
