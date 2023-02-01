import styled from "styled-components";
import { Input, InputProps } from "antd";
import { SearchProps } from "antd/es/input";
export interface ISearchInterface {
  width?: number | string;
  height?: number | string;
}

export const StyledSearch = styled(Input.Search)(
  ({ style }: { style: ISearchInterface }) => ({ ...style })
);
