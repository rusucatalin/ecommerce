import React, { ReactNode } from "react";
import { IButtonInterface, StyledButton } from "./Buttonstyle";

interface ButtonProps extends IButtonInterface {
  children?: ReactNode;
  shape?: "circle";
  href?: string;
  position?: "relative";
}

export const OnButton = ({ children, shape, href, ...rest }: ButtonProps) => {
  return (
    <StyledButton styles={rest} shape={shape} href={href}>
      {children}
    </StyledButton>
  );
};

// export function OnButton({ children, shape, ...rest }: ButtonProps) {
//   return <StyledButton styles={rest}>{children}</StyledButton>;
// }
