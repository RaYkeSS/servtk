import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function BenefitsCard({ children, icon, alt }: IBenefitsCard) {
  return (
    <Card sx={{ maxWidth: 365, maxHeight: "36vh" }}>
      <CardMedia
        sx={{ height: 140, p: 2, display: "flex", justifyContent: "center" }}
        title={alt}
      >
        {icon}
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}

interface IBenefitsCard {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  alt?: string;
}
