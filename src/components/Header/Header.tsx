import { Button, Container, Toolbar, Typography } from "@mui/material";
import { StyledBox } from "@/components";
import Image from "next/image";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <StyledBox height="9vh" component="header" className={styles.header}>
      <Container className={styles.container}>
        <Image src="/img/logo.png" height={50} width={100} alt="Логотип СТК" />
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" component={Button} sx={{ flexGrow: 1 }}>
            О нас
          </Typography>
          <Typography variant="h6" component={Button} sx={{ flexGrow: 1 }}>
            Услуги
          </Typography>
          <Typography variant="h6" component={Button} sx={{ flexGrow: 1 }}>
            Этапы
          </Typography>
          <Typography variant="h6" component={Button} sx={{ flexGrow: 1 }}>
            Преимущества
          </Typography>
        </Toolbar>
        <Button color="inherit">Обратная связь</Button>
      </Container>
    </StyledBox>
  );
}

{
  /* <nav className={styles.nav}>
          <a className={styles.link}>About</a>
          <a className={styles.link}>Contacts</a>
        </nav> */
}
