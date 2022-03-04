/* 
    Developed by LK - Feb 2022 
*/

import React, { useEffect } from 'react';
import { Row, Col, Table, Tag, Spin } from 'antd';
import { BorderBox } from '../../components/styled-common';

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
      title: 'MCRF#',
      key: 'MCRF_Id',
      fixed: 'left',
      render: (e) => <Button size='small' type='link' onClick={() => {
          setEditData(e)
          setEditMode(true);
          setModalVisible(true);
      }}>{e.MCRF_Id}</Button>,
      },
  {
    title: 'Status',
    dataIndex: 'completed',
    key: 'completed',
    render: (text : boolean) => <Tag color={ text ? "green" : "red"}>{ text ? "True" : "False"}</Tag>,
  },
  {
    title: 'Created At',
    key: 'createdAt',
    dataIndex: 'createdAt'
  },
  {
    title: 'Updated At',
    key: 'updatedAt',
    dataIndex: 'updatedAt'
  },
  {
    title: 'Action',
    key: 'action'
  },
];

interface Props {
  loading: boolean,
  taskList: any,
  getTaskRequest: () => void
}

const DashboardComponent = ({ getTaskRequest, taskList, loading } : Props) : JSX.Element => {

  useEffect(() => {
    getTaskRequest()
  }, [])

  return (
    <Spin spinning={loading}>
      <BorderBox>
        <Row>
          <Col span={24}>
              <Table loading={false} columns={columns} dataSource={taskList} />
          </Col>
        </Row>
      </BorderBox>
    </Spin>
  );
}

export default DashboardComponent;
