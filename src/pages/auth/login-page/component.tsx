/* 
    Developed by LK - Feb 2022 
*/

import React, { useEffect } from 'react';
import { Button, Row, Col, Form, Input, Typography, notification  } from 'antd';
import { LoginBox, CenterContent } from '../../../components/styled-common';
import { useNavigate  } from 'react-router-dom';
import { checkAuth } from '../../../utils/services';

interface Props {
  status: string,
  submitLogin: (body: any) => void;
}

const LoninComponent = (props: Props) : JSX.Element => {
  let navigate = useNavigate();

  useEffect(() => {
    if (checkAuth()){
      navigate('/dashboard')
    }
  }, []);

  useEffect(() => {
      if (props.status === "error"){
        notification.error({
          message: 'Login Notification',
          description: 'Given credentials not matched.',
        })
      }
  }, [props.status])

  return (
    <Row>
      <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}} xxl={{span: 24}}>
        <CenterContent>
            <LoginBox>
              <Typography.Title level={3} style={{textAlign: 'center', marginBottom: '1.6rem'}}>Login</Typography.Title>
              <Form
                name="login"
                layout='horizontal'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={(values) => {
                  props.submitLogin(values);
                }}
                onFinishFailed={(errorInfo: any) => { console.error('Failed:', errorInfo); }}
                autoComplete="on"
              >
                <Form.Item
                  label="Username"
                  name="email"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input type={"email"} />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button loading={props.status === "trigger"} type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </LoginBox>
        </CenterContent>
      </Col>
    </Row>
  );
}

export default LoninComponent;
