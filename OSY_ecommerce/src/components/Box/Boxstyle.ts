import styled from "styled-components";
export interface IBoxInterface {
  width?: number | string;
  background?: string;
  display?: "flex" | "block";
  marginRight?: number | string;
  marginLeft?: number | string;
  gap?: number;
  textAlign?: "right";
  justifyContent?: "right";
  flexDirection?: "column" | "row";
  alignSelf?: "center" | "start" | "end";
}

export const StyledBox = styled.div(
  ({ styles }: { styles: IBoxInterface }) => ({ ...styles })
);
