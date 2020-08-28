import React from 'react';
import { observer } from 'mobx-react';
import useStores from '../stores/index';
import { Form, Input, Button, message } from 'antd';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 2px 0;
  border-radius: 4px;
`;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AuthTest = observer(() => {

  const history = useHistory();
  const { AuthStore } = useStores();
  const onFinish = values => {
    console.log('Success:', values);
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.register()
      .then(user => {
        console.log("注册成功");
        message.success("注册成功");
        history.push('/');
      }).catch(err => {
        console.log(err);
        message.error("注册失败");
      });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    message.error("表单提交异常");
  };

  const validateUsername = (rule, value) => {
    if(/\W/.test(value)) return Promise.reject('请使用字母数字下划线!');
    if(value.length < 4 || value.length > 10) return Promise.reject('在4到10之间！');
    return Promise.resolve();
  }

  return (
    <Wrapper>
      <h3>请注册您的账号</h3>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          {
            // https://ant.design/components/form-cn/#Rule
            validator: validateUsername
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            min:4,
            max: 10,
            message:"在4到10位之间",
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Wrapper>
  );
});

export default AuthTest;