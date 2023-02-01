import styled from "styled-components";
import { Carousel } from "antd";

export interface ICarouselInterface {
  height?: number | string;
  background?: string;
  lineHeight?: number | string;
  textAlign?: "center";
  color?: string;
  padding?: number | string;
  margin?: number | string;
  borderRadius?: number | string;
  borderColor?: string;
  display?: "flex" | "block";
  contentStyle?: number | string;
  borderStyle?: string;
}

export const StyledCarousel = styled(Carousel)(
  ({ style }: { style: ICarouselInterface }) => ({ ...style })
);
