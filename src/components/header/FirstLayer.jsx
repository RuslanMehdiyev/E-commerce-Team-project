import { Box } from "@mui/material";
import React from "react";
import styles from "./Header.module.css";
import location from "../../assets/header-icons/location-dot-solid.svg";
import bus from "../../assets/header-icons/bus-solid.svg";

function FirstLayer() {
  return (
    <>
      <Box>
        <p>Need help? Call us at (+994) 099 999 99 99</p>
      </Box>
      <Box sx={{ display: "flex", gap: "10px", flexWrap: "nowrap" }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <img className={styles.logo} src={location} />
          <p>Our store</p>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <img className={styles.logo} src={bus} />
          <p>Track Your Order</p>
        </Box>
      </Box>
    </>
  );
}

export default FirstLayer;
