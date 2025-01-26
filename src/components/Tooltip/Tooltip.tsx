import { Tooltip as UITooltip } from "@mui/material";
import { ReactElement } from "react";
type TooltipProps = {
  title: string;
  children: ReactElement;
};

export default function Tooltip({ children, title, ...props }: TooltipProps) {
  return (
    <UITooltip title={title} {...props}>
      {children}
    </UITooltip>
  );
}
