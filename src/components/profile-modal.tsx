/* 
    Developed by LK - Feb 2022 
*/

import React, { useEffect } from 'react';
import { Modal, Form, Input, message } from 'antd';
import copy from 'copy-to-clipboard';
import moment from 'moment';

interface Props {
  data: any;
  visible: boolean;
  onHandle: () => void;
}

const ProfileModalComponent = ({ data, visible, onHandle }: Props) : JSX.Element => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (data !== null){
        form.setFieldsValue({...data, createdAt: moment(data.createdAt).local().format("DD-MMM-YYYY")});
    }
  }, [data])

  return (
    <Modal
        title="Profile"
        centered
        visible={visible}
        okText="Copy email"
        onOk={() => {
            copy(data?.email, {
                debug: true,
                message: 'Press # to copy'
            });
            message.info("Email Copied")
        }}
        onCancel={() => onHandle()}
    >
        <Form
            layout='vertical'
            form={form}
        >
            <Form.Item
                label="Name"
                name="name"
            >
                <Input placeholder='Name' />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
            >
                <Input placeholder='Email' />
            </Form.Item>
            <Form.Item
                label="Age"
                name="age"
            >
                <Input placeholder='Age' />
            </Form.Item>
            <Form.Item
                label="Create At"
                name="createdAt"
            >
                <Input placeholder='Create At' />
            </Form.Item>
        </Form>
    </Modal>
  );
}

export default ProfileModalComponent;
