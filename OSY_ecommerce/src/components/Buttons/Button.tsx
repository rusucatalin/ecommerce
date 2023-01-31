import React, {ReactNode} from "react";
import { IButtonInterface, StyledButton } from "./Buttonstyle";

interface ButtonProps extends IButtonInterface{children:ReactNode}

export function OnButton({children, ...rest}:ButtonProps){
    console.log(rest)
    return <StyledButton styles={rest}>{children}</StyledButton>}