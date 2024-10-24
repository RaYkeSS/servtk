import { Container, Grid2, Typography } from "@mui/material";
import { StyledBox } from "@/components";
import ServicesCard from "./ServicesCard/ServicesCard";

import ServicesContent from "./ServicesContent";

export default function Services() {
  return (
    <StyledBox>
      <Container>
        <Typography variant="h2" gutterBottom>
          Услуги
        </Typography>
        <Grid2 container spacing={2} justifyContent="space-between">
          {ServicesContent.map((e, i) => {
            return (
              <ServicesCard key={i} img={e.img}>
                {e.descr}
              </ServicesCard>
            );
          })}
        </Grid2>
      </Container>
    </StyledBox>
  );
}
