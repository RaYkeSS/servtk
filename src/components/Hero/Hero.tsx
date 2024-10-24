import { Button, Container, Grid2, Typography } from "@mui/material";
import { StyledBox } from "@/components";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <StyledBox className={styles.hero}>
      <Container
        component={Grid2}
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        height="70%"
        gap="7vh"
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{ color: "primary.contrastText", maxWidth: "80%" }}
        >
          Грузоперевозки по всей Росии
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{ color: "primary.contrastText" }}
        >
          Оказываем услуги по логистике на всех направлениях в пределах
          Российской Федерации — работаем ежедневно и, при необходимости,
          круглосуточно!
        </Typography>
        <Button
          size="large"
          variant="outlined"
          sx={{
            color: "primary.contrastText",
            borderColor: "primary.contrastText",
          }}
        >
          Консультация
        </Button>
      </Container>
    </StyledBox>
  );
}
