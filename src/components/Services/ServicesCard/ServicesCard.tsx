import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

export default function ServicesCard({ children, img, alt }: IServicesCard) {
  return (
    <Card
      sx={{
        height: "36vh",
        width: "18vw",
        maxWidth: "20vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "15vh",
          // p: 2,
          // display: "flex",
          // justifyContent: "center",
        }}
        title={alt}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {children}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Button variant="outlined">Подробнее</Button>
      </CardActions>
    </Card>
  );
}

interface IServicesCard {
  children?: React.ReactNode;
  img?: string;
  alt?: string;
}
