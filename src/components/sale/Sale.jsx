import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "../header/Header.module.css";

import salepic from "../../assets/header-icons/salepic.jpg";
function Sale() {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          margin: "40px auto",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundImage: `url(${salepic})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid
              sx={{
                textAlign: "center",
                margin: "50px auto",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                alignItems: "center",
              }}
              item
              xs={4}
            >
              <button className={styles.btnish}> New Laptop</button>
              <p className={styles.saleinfo}>Sale up to 50% off</p>
              <p className={styles.white}> 12 inch hd display</p>
              <button className={styles.btnish}>Shop now</button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Sale;
