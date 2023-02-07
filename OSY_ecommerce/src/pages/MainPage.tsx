import {
  AndroidOutlined,
  AppleOutlined,
  CustomerServiceOutlined,
  DesktopOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { Bar } from "../components/Bar/Bar";
import { Box } from "../components/Box/Box";
import { OnButton } from "../components/Buttons/Button";
import { Carousel } from "../components/Carousel/Carousel";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  justifyContent: "right, left",
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
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Box>

      <Box display="flex" gap={8} alignSelf="center" marginLeft={32}>
        <OnButton
          width={86}
          height={86}
          shape="circle"
          href="https://darwin.md/smartphone_apple-iphone-xr-64gb-white.html"
          position="relative"
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
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Box>
      <Box display="flex" gap={8} marginLeft={32} padding={32}>
        <OnButton width={400} height={400}></OnButton>
        <OnButton width={400} height={400}></OnButton>
        <OnButton width={400} height={400}></OnButton>
        <OnButton width={400} height={400}></OnButton>
      </Box>

      <Box display="flex" gap={8} alignSelf="center" marginLeft={32}>
        <OnButton width={64} height={64} borderRadius={6}>
          <InstagramOutlined />
        </OnButton>
        <OnButton width={64} height={64} borderRadius={6}>
          <FacebookOutlined />
        </OnButton>
      </Box>
      <Box
        display="flex"
        gap={5}
        borderStyle="solid"
        borderColor="#d9d9d9"
        padding={64}
        borderRadius={6}
        margin={32}
      >
        <Footer></Footer>
      </Box>
    </Box>
  );
}
