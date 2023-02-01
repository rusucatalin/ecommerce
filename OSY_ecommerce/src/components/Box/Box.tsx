import React, { ReactNode } from "react";
import { IBoxInterface, StyledBox } from "./Boxstyle";

interface BoxProps extends IBoxInterface {
  children: ReactNode;
}

export function Box({ children, ...rest }: BoxProps) {
  return <StyledBox styles={rest}>{children}</StyledBox>;
}
