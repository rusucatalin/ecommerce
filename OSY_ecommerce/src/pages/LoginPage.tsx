import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { OnButton } from "../components/Buttons/Button";
import {
  useGetUsersByIdMutation,
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useUserLoginMutation,
} from "../redux-toolkit/slices/usersSlice";

const contentStyle: React.CSSProperties = {
  maxWidth: "300px",
  color: "white",
  justifyContent: "center",
  alignSelf: "center",
};
const loginforgot: React.CSSProperties = {
  float: "right",
};

const Login = () => {
  const { data, isFetching } = useGetUsersQuery();
  console.log(data);
  const [getUsersById, { data: abc }] = useGetUsersByIdMutation();
  const [userLogin] = useUserLoginMutation();
  const [test, setTest] = useState<number>(1);
  console.log(abc);
  // const [trigger, { data: bac }] = useLazyGetUsersQuery();
  // console.log(bac);
  const [form] = Form.useForm();
  const onSubmit = () => {
    console.log(form.getFieldsValue(true));
    userLogin(form.getFieldsValue(true));
  };
  const getUsers = () => {
    console.log(test);

    setTest(test + 1);
    getUsersById(test);
  };
  const onFinish = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      {/* <OnButton onClick={getUsers}>Click</OnButton> */}
      {/* <OnButton onClick={() => trigger()}>Click</OnButton> */}
      <Form
        onFinish={onFinish}
        initialValues={{ remember: true }}
        style={contentStyle}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your username" }]}
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
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            required
          ></Input.Password>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="" style={loginforgot}>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            onClick={onSubmit}
            className="login-form-button"
          >
            Log In{" "}
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export { Login };
