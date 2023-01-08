import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { storeContext } from "../../context/storeContext";
import { Box } from "@mui/system";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { network } from "../../utils/network/network";
function ThirdLayer() {
  let { setFilterBy } = useContext(storeContext);

  let { categories } = useContext(storeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (element) => {
    setAnchorEl(null);
    setFilterBy(element);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "60px",
        justifyContent: "space-around",
      }}
    >
      <button
        className={styles.burgerBtn}
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Browse Categories
      </button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {categories.map((element) => {
          return (
            <Link
              style={{
                color: "black",
              }}
              key={element}
              to={"/products"}
            >
              <MenuItem onClick={() => handleClose(element)}>
                {element.toUpperCase()}
              </MenuItem>
            </Link>
          );
        })}
      </Menu>
      <Box className={styles.menuLine}>
        <Link
          style={{
            color: "black",
          }}
          to={"/"}
        >
          <h2>Home</h2>
        </Link>
        <Link
          style={{
            color: "black",
          }}
          to={"/products"}
        >
          {" "}
          <h2>Products</h2>
        </Link>

        <h2> Blog </h2>
        <h2> About Us </h2>
      </Box>
      <Box
        sx={{
          verticalAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 className={styles.returninfo}>30 Days Free Return</h2>
      </Box>
    </Box>
  );
}

export default ThirdLayer;
