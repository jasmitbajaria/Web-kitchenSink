import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";

export interface CardSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  headerAction?: React.ReactNode;
  footerActions?: React.ReactNode;
  children?: React.ReactNode;
}

const CardSection: React.FC<CardSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  headerAction,
  footerActions,
  children,
}) => {
  return (
    <Card
      sx={{
        width: 320,
        borderRadius: "8px",
      }}
    >
      {/* IMAGE */}
      {image && (
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={title}
        />
      )}

      {/* HEADER + CONTENT */}
      <CardContent>
        {title && (
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {subtitle}
          </Typography>
        )}

        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}

        {children}
      </CardContent>

      {/* ACTIONS */}
      {footerActions && (
        <CardActions sx={{ px: 2, pb: 2 }}>
          {footerActions}
        </CardActions>
      )}
    </Card>
  );
};

export default CardSection;
