import { Col, Grid, Row } from "antd";
import { Bar } from "../components/Bar/Bar";
import { Box } from "../components/Box/Box";
import { Carousel } from "../components/Carousel/Carousel";
import { Header } from "../components/Header/Header";

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
          height={400}
          color="#fff"
          lineHeight={300}
          textAlign="center"
          background="#364d79"
          padding={100}
          margin={32}
          borderRadius={6}
          borderColor="#d9d9d9"
          display="flex"
          borderStyle="solid"
          contentStyle={1}
        ></Carousel>
      </Box>
      <Box>
        <Row>
          <Col span={8}>Column 1</Col>
          <Col span={8}>Column 2</Col>
          <Col span={8}>Column 3</Col>
        </Row>
        ;
      </Box>
    </Box>
  );
}
