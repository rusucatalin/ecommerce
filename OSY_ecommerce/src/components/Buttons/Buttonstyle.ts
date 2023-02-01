import { Button } from "antd";
import styled from "styled-components";
export interface IButtonInterface {
  width?: number | string;
  background?: string;
}

export const StyledButton = styled(Button)(
  ({ styles }: { styles: IButtonInterface }) => ({ ...styles })
);
