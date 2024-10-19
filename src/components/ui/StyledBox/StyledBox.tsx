import React from "react";
import Box from "@mui/material/Box";

import styles from "./StyledBox.module.scss";

export default function StyledBox({
  component = "section",
  height = "100vh",
  className,
  children,
}: IStyledBox) {
  return (
    <Box
      className={styles.item + " " + className}
      component={component}
      sx={{
        height: { height },
        p: 2,
        borderRadius: 4,
        boxShadow: 3,
      }}
    >
      {children}
    </Box>
  );
}

interface IStyledBox {
  component?: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
}
