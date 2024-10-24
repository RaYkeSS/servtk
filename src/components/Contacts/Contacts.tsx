import { Container, Typography } from "@mui/material";
import { StyledBox } from "@/components";

export default function Contacts() {
  return (
    <StyledBox>
      <Container>
        <Typography variant="h2" gutterBottom>
          Рассчитать стоимость доставки
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Оставьте свой контактный номер, и мы вам перезвоним в ближайшее время.
        </Typography>
      </Container>
    </StyledBox>
  );
}
