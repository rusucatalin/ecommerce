import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import Password from "antd/es/input/Password";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OnButton } from "../components/Buttons/Button";
import {
  useGetUsersByIdMutation,
  useLoginUsersMutation,
  // useGetUsersQuery,
  // useLazyGetUsersQuery,
} from "../redux-toolkit/slices/usersSlice";

const contentStyle: React.CSSProperties = {
  maxWidth: "300px",
  color: "white",
  justifyContent: "center",
  alignSelf: "center",
  alignContent: "center",
  margin: "0 auto",
};
const loginforgot: React.CSSProperties = {
  float: "right",
};

const Login = () => {
  const [form] = Form.useForm();

  const [loginUsers, { data: loginUserData }] = useLoginUsersMutation();
  const onSubmit = () => {
    loginUsers(form.getFieldsValue(true));
  };

  return (
    <div>
      {/* <OnButton onClick={getUsers}>Click</OnButton> */}
      {/* <OnButton onClick={() => trigger()}>Click</OnButton> */}
      <Form
        // onFinish={onFinish}
        // initialValues={{ remember: true }}
        style={contentStyle}
        form={form}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your username" }]}
          hasFeedback
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email address"
            required
          ></Input>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password" }]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            required
          ></Input.Password>
        </Form.Item>
        <Form.Item>
          {/* <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
          <a className="login-form-forgot" href="" style={loginforgot}>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            // htmlType="submit"
            onClick={onSubmit}
            className="login-form-button"
          >
            Log In{" "}
          </Button>
          Or <Link to="/register">Register</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export { Login };
