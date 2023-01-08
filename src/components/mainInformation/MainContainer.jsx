import { Box } from "@mui/material";
import React from "react";
import styles from "../header/Header.module.css";
import salepic from "../../assets/header-icons/camera.jpg";
function MainContainer() {
  return (
    <>
      <Box
        className={styles.MainContainerDiv}
        sx={{
          width: "100%",
          margin: "60px 30px",
          display: "flex",
          gap: "120px",

          justifyContent: "space-around",
        }}
      >
        <Box>
          <h1 className={styles.camera}>Canon</h1>
          <h1 className={styles.camera}>camera</h1>
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p className={styles.btnish}>Shop now</p>
            <p className={styles.more}>View more</p>
          </Box>
        </Box>
        <Box className={styles.cameraContainer}>
          <img className={styles.cameraPicture} src={salepic} alt="" />
          {/* <button className={styles.circle}>Only $89</button> */}
        </Box>
      </Box>
    </>
  );
}

export default MainContainer;
