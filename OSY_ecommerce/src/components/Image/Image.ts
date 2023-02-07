import { Image } from "antd";
import styled from "styled-components";
import { ImageProps } from "antd";
export interface IImageInterface {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}

export const StyledImage = styled(Image)(
  ({ style }: { style: IImageInterface }) => ({ ...style })
);
export { Image };
