import {
  ButtonProps as UIButtonProps,
  Button as UIButton,
} from "@mui/material";
import { ReactElement } from "react";

type ButtonProps = {
  children: ReactElement | string;
} & UIButtonProps;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <UIButton
      // style={{ border: "1px solid red" }}
      className="border border-red-600"
      {...props}
    >
      {children}
    </UIButton>
  );
}
