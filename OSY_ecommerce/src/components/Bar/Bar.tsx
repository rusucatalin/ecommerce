import {
  AndroidOutlined,
  ApiOutlined,
  AppleOutlined,
  HomeOutlined,
  LaptopOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
  UnorderedListOutlined,
  UsbOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Affix, Menu } from "antd";
import { ReactNode } from "react";
import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";
import { Search } from "../Search/Search";
import { IBarInterface } from "./Barstyle";
const contentStyle: React.CSSProperties = {
  justifyContent: "center",
};

interface BarProps extends IBarInterface {
  children: ReactNode;
}

// export function Bar() {return <> <HomeOutlined></HomeOutlined> </>  }

export function Bar({}) {
  return (
    <div>
      <>
        <Box display="flex">
          <Box display="flex" gap={6}>
            <Search width={800} enterButton></Search>
          </Box>
          <Box>
            <OnButton>
              <ShoppingCartOutlined />
            </OnButton>
          </Box>
        </Box>

        <Menu
          mode="horizontal"
          style={contentStyle}
          items={[
            {
              label: "Smartphone/Tablets",
              key: "Smarthphone/Tablets",
              icon: <ApiOutlined />,
              children: [
                {
                  label: <Menues />,
                  key: "Menues",
                  style: { height: "fit-content" },
                },
              ],
            },
            {
              label: "Laptop",
              key: "Laptop",
              icon: <LaptopOutlined />,
              children: [
                {
                  label: <LaptopMenu />,
                  key: "LaptopMenu",
                  style: { height: "fit-content" },
                },
              ],
            },
            {
              label: "Accessories",
              key: "accessories",
              icon: <UsbOutlined />,
              children: [
                {
                  label: <AccMenu />,
                  key: "accmenu",
                  style: { height: "fit-content" },
                },
              ],
            },
          ]}
        ></Menu>
      </>
    </div>
  );
}
function Menues() {
  return (
    <div>
      <Menu
        items={[
          { label: "Mobile", key: "mobile", type: "group" },
          { label: "Apple", key: "apple", icon: <AppleOutlined /> },
          { label: "Android", key: "android", icon: <AndroidOutlined /> },
          { label: "Phone", key: "phone", icon: <PhoneOutlined /> },
        ]}
      />
      <Menu
        items={[
          { label: "Tablets", key: "tablet", type: "group" },
          { label: "Apple", key: "apple", icon: <AppleOutlined /> },
          { label: "Android", key: "android", icon: <AndroidOutlined /> },
        ]}
      />
    </div>
  );
}
function LaptopMenu() {
  return (
    <div>
      <Menu
        items={[
          { label: "Laptop", key: "laptop", type: "group" },
          { label: "Apple", key: "apple", icon: <AppleOutlined /> },
          { label: "Ultrabook", key: "ultra", icon: <LaptopOutlined /> },
          { label: "For Bussines", key: "buss", icon: <LaptopOutlined /> },
        ]}
      />
      <Menu
        items={[
          { label: "Gaming ", key: "gamming", type: "group" },
          { label: "Asus", key: "asus", icon: <LaptopOutlined /> },
          { label: "HP Omen", key: "hp", icon: <LaptopOutlined /> },
        ]}
      />
    </div>
  );
}
function AccMenu() {
  return (
    <div>
      <Menu
        items={[
          { label: "Accessories", key: "accessories", type: "group" },
          { label: "Airpods", key: "airpods", icon: <AppleOutlined /> },
          { label: "Earbuds", key: "earbuds", icon: <AndroidOutlined /> },
        ]}
      />
      <Menu
        items={[
          { label: "Connectivity", key: "conect", type: "group" },
          { label: "Adapters", key: "adapters", icon: <ApiOutlined /> },
          { label: "Cables", key: "cables", icon: <ThunderboltOutlined /> },
        ]}
      />
    </div>
  );
}
