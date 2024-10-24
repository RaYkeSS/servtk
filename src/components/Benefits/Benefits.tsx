import { Container, Grid2, Typography } from "@mui/material";
import { StyledBox } from "@/components";
import BenefitsCard from "./Card/BenefitsCard";

import BenefitsContent from "./BenefitsContent";

export default function Benefits() {
  return (
    <StyledBox>
      <Container>
        <Typography variant="h2" gutterBottom>
          Наши преимущества
        </Typography>
        <Grid2 container spacing={3}>
          {BenefitsContent.map((e, i) => {
            return (
              <BenefitsCard key={i} icon={e.icon}>
                <Typography>{e.title}</Typography>
                <Typography>{e.descr}</Typography>
              </BenefitsCard>
            );
          })}
        </Grid2>
      </Container>
    </StyledBox>
  );
}
