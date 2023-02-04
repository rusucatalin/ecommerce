import {
  AndroidOutlined,
  AppleOutlined,
  CustomerServiceOutlined,
  DesktopOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { Col, Grid, Row } from "antd";
import { Bar } from "../components/Bar/Bar";
import { Box } from "../components/Box/Box";
import { OnButton } from "../components/Buttons/Button";
import { Carousel } from "../components/Carousel/Carousel";
import { Header } from "../components/Header/Header";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export function MainPage() {
  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Header />
      </Box>
      <Box display="flex" alignSelf="center">
        <Bar />
      </Box>
      <Box>
        <Carousel
          autoplay={true}
          height={400}
          textAlign="center"
          background="#364d79"
          padding={100}
          margin={32}
          borderRadius={6}
          borderColor="#d9d9d9"
          display="flex"
          borderStyle="solid"
        >
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={{ color: "white" }}>2</h3>
          </div>
          <div>
            <h3 style={{ color: "white" }}>3</h3>
          </div>
          <div>
            <h3 style={{ color: "white" }}>4</h3>
          </div>
        </Carousel>
      </Box>

      <Box display="flex" gap={8} alignSelf="center" marginLeft={32}>
        <OnButton
          width={86}
          height={86}
          shape="circle"
          href="https://darwin.md/smartphone_apple-iphone-xr-64gb-white.html"
        >
          <AppleOutlined />
        </OnButton>
        <OnButton width={86} height={86} shape="circle">
          <AndroidOutlined />
        </OnButton>
        <OnButton width={86} height={86} shape="circle">
          <LaptopOutlined />
        </OnButton>
        <OnButton width={86} height={86} shape="circle">
          <CustomerServiceOutlined />
        </OnButton>
        <OnButton width={86} height={86} shape="circle">
          <DesktopOutlined />
        </OnButton>
      </Box>

      <Box>
        <Carousel
          height={400}
          textAlign="center"
          background="#364d79"
          padding={100}
          margin={32}
          borderRadius={6}
          borderColor="#d9d9d9"
          display="flex"
          borderStyle="solid"
        >
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={{ color: "white" }}>2</h3>
          </div>
          <div>
            <h3 style={{ color: "white" }}>3</h3>
          </div>
          <div>
            <h3 style={{ color: "white" }}>4</h3>
          </div>
        </Carousel>
      </Box>
    </Box>
  );
}
