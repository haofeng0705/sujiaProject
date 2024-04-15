import { ProTable } from '@ant-design/pro-components';
import { Button, Tabs, Modal } from 'antd';
import { useState } from 'react';

export type TableListItem1 = {
  key: number;
  code: string;
  chabu: string;
  name: string;
  uploader: string;
  description: string;
  createdAt: number;
};
const tableListDataSource1: TableListItem1[] = [
  {
    key: 1,
    code: 'MT00001',
    chabu: 'string',
    name: '胃癌临床数据',
    uploader: 'admin',
    description: '胃癌临床数据',
    createdAt: 1712122209000,
  },
  {
    key: 2,
    code: 'MT00002',
    chabu: 'string',
    name: '胃癌体检数据',
    uploader: 'admin',
    description: '胃癌体检数据',
    createdAt: 1712122209000,
  },
  {
    key: 3,
    code: 'MT00003',
    chabu: 'string',
    name: '胃癌CT数据',
    uploader: 'admin',
    description: '胃癌CT数据',
    createdAt: 1712122209000,
  },
  {
    key: 4,
    code: 'MT00004',
    chabu: 'string',
    name: '胃癌血检数据',
    uploader: 'admin',
    description: '胃癌血检数据',
    createdAt: 1712122209000,
  },
];

export type TableListItem2 = {
  key: number;
  name: string;
  createdAt: number;
};
const tableListDataSource2: TableListItem2[] = [
  {
    key: 1,
    name: 'GAIN',
    createdAt: 1712122209000,
  },
  {
    key: 2,
    name: 'C-GAIN',
    createdAt: 1712122209000,
  },
  {
    key: 3,
    name: 'DDC-GAIN',
    createdAt: 1712122209000,
  },
  {
    key: 4,
    name: 'CD-GAIN',
    createdAt: 1712122209000,
  },
  {
    key: 5,
    name: 'MICE',
    createdAt: 1712122209000,
  },
];

export default () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Tabs defaultActiveKey="1" centered size={'large'} tabBarGutter={400}>
        <Tabs.TabPane tab="数据管理" key="1">
          <Modal
            title="请选择插补方法"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
          <ProTable<TableListItem1>
            columns={[
              {
                title: '序号',
                key: 'key',
                dataIndex: 'key',
                valueType: 'textarea',
              },
              {
                title: '编号',
                key: 'code',
                dataIndex: 'code',
                valueType: 'textarea',
              },
              {
                title: '插补',
                key: 'chabu',
                width: 120,
                valueType: 'option',
                render: () => [
                  <a key="a" onClick={showModal}>
                    插补
                  </a>,
                ],
              },
              {
                title: '上传者',
                key: 'uploader',
                dataIndex: 'uploader',
                valueType: 'textarea',
              },
              {
                title: '数据描述',
                key: 'description',
                dataIndex: 'description',
                valueType: 'textarea',
              },
              {
                title: '创建时间',
                key: 'createdAt',
                dataIndex: 'createdAt',
                valueType: 'dateTime',
              },
            ]}
            request={() => {
              return Promise.resolve({
                total: 200,
                data: tableListDataSource1,
                success: true,
              });
            }}
            rowKey="key"
            // headerTitle="数据管理"
            pagination={false}
            //
            search={{
              collapsed: false,
            }}
          />

          <h1>结果展示：</h1>
        </Tabs.TabPane>

        <Tabs.TabPane tab="插补方法管理" key="2">
          <ProTable<TableListItem2>
            columns={[
              {
                title: '序号',
                key: 'key',
                dataIndex: 'key',
                valueType: 'textarea',
              },
              {
                title: '插补名称',
                key: 'name',
                dataIndex: 'name',
                valueType: 'textarea',
              },

              {
                title: '创建时间',
                key: 'createdAt',
                dataIndex: 'createdAt',
                valueType: 'dateTime',
              },
              {
                title: '操作',
                key: 'chabu',
                width: 120,
                valueType: 'option',
                render: (_, row, index, action) => [
                  <a
                    key="a"
                    onClick={() => {
                      console.log(row, index, action);
                    }}
                  >
                    修改
                  </a>,
                ],
              },
            ]}
            request={() => {
              return Promise.resolve({
                total: 200,
                data: tableListDataSource2,
                success: true,
              });
            }}
            rowKey="key"
            // headerTitle="数据管理"
            pagination={false}
            // toolbar={{
            //   actions: [
            //     <Button
            //       key="primary"
            //       type="primary"
            //       onClick={() => {
            //         alert('add');
            //       }}
            //     >
            //       添加数据
            //     </Button>,
            //   ],
            // }}
            search={{
              collapsed: false,
            }}
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
