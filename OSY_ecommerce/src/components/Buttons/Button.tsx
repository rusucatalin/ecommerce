import React, { ReactNode } from "react";
import { IButtonInterface, StyledButton } from "./Buttonstyle";

interface ButtonProps extends IButtonInterface {
  children: ReactNode;
}

export function OnButton({ children, ...rest }: ButtonProps) {
  return <StyledButton styles={rest}>{children}</StyledButton>;
}
