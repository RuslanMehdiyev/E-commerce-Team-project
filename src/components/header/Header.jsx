import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import FirstLayer from "./FirstLayer";
import SecondLayer from "./SecondLayer";

import ThirdLayer from "./ThirdLayer";
function Header() {
  return (
    <>
      <Box
        className={styles.containerHeader}
        sx={{
          height: "65px",
          display: "flex",
          alignItems: "center",
          margin: "0 40px",
        }}
      >
        <FirstLayer />
      </Box>
      <Box className={styles.secondLayer}>
        <SecondLayer />
      </Box>
      <ThirdLayer />
    </>
  );
}

export default Header;
