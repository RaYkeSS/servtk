import { Box, Container } from "@mui/material";
import { StyledBox } from "@/components";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <StyledBox height="7vh" component="header" className={styles.header}>
      <Container>
        <h1>Header</h1>
      </Container>
    </StyledBox>
  );
}
