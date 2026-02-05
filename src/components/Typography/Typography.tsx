import React from "react";
import { Typography as MUITypography } from "@mui/material";

export type TypographyVariant =
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption";

export interface TypographyProps {
  text: string;
  variant?: TypographyVariant;
  color?: string;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  library?: "mui" | "bootstrap";
}

const variantTagMap: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  caption: "span",
};

const Typography: React.FC<TypographyProps> = ({
  text,
  variant = "body1",
  color,
  align = "left",
  library = "mui",
}) => {
  if (library === "mui") {
    return (
      <MUITypography variant={variant} align={align} color={color}>
        {text}
      </MUITypography>
    );
  }

  const Tag: React.ElementType = variantTagMap[variant];

  return <Tag style={{ color, textAlign: align }}>{text}</Tag>;
};

export default Typography;
