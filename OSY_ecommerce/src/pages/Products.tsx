import {
  ApiOutlined,
  HomeOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { configureStore } from "@reduxjs/toolkit";
import { Avatar, Breadcrumb } from "antd";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Menu from "antd/es/menu";
import Title from "antd/es/typography/Title";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsHeader } from "../components/ProductsHeader/ProductsHeader";
import { productsReducer } from "../redux-toolkit/slices/productSlice";

function Products() {
  const navigate = useNavigate();
  return (
    <div>
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar
            style={{ float: "right" }}
            shape="square"
            icon={<UserOutlined />}
          />
          <Title level={2} style={{ color: "white", textAlign: "left" }}>
            Eshop
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              onClick={({ key }) => {
                navigate(key);
              }}
              items={[{ label: "Home Page", key: "/", icon: <HomeOutlined /> }]}
            ></Menu>
          </Sider>

          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "white", padding: 20, minHeight: 800 }}>
                Content
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Eshop</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export { Products };
