// src/components/LoginPage.js

import React from 'react';
import { Form, Input, Button, notification} from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import 'antd/dist/antd.css'; // Ant Design styles

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();


  const openNotification = (message: string) => {
    notification.error({
      message: 'Login Failed',
      description: message,
      placement: 'topRight'
    });
  };


  const onFinish = (values: {name: string, email:string, password: string,}) => {
    console.log('Success:', values);
    // Redirect to home page if password is correct
    if (values.password === 'contractio') {
      navigate('/home', { state: { user: values } });
    } else {
      openNotification('Incorrect password');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
        <div className="login-form">
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please enter your password' },
              { min: 8, message: 'Password must be at least 8 characters' }
            ]}
          >
            <Input.Password />
          </Form.Item>

         

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
