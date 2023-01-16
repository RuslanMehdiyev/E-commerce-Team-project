import { Box } from "@mui/material";
import React, { useContext } from "react";
import logo from "../../assets/header-icons/logo.svg";
import user from "../../assets/header-icons/user-regular.svg";
import cart from "../../assets/header-icons/cart.svg";
import heart from "../../assets/header-icons/heart-regular.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { storeContext } from "../../context/storeContext";
function SecondLayer() {
  let { favorites } = useContext(storeContext);
  return (
    <>
      <Box>
        <img className={styles.logoName} src={logo} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <input
          className={styles.inputArea}
          placeholder="Search any image"
          type="text"
        />
        <button className={styles.searchButton}>Search</button>
      </Box>
      <Box
        sx={{ display: "flex", gap: "10px", color: "white" }}
        className={styles.creditentials}
      >
        <img className={styles.logo} src={user} />
        <p>Sign in</p>
        <Link to={"/favorites"}>
          <img className={styles.logo} src={heart} />
        </Link>

        <Box className={styles.count}>
          <p>{favorites.length}</p>
        </Box>
        <p>Sign in</p>
        <img className={styles.logo} src={cart} />
        <Box className={styles.count}>
          <p>0</p>
        </Box>

        <p>Cart</p>
      </Box>
    </>
  );
}

export default SecondLayer;
