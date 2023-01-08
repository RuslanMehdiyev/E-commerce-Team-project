import { Box, ListItem } from "@mui/material";
import React, { useEffect } from "react";
import DetailsInformation from "./DetailsInformation";
import DetailSlider from "./DetailSlider";

function DetailsCard({ detailed }) {
  useEffect(() => {
    console.log(detailed);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    ></Box>
  );
}

export default DetailsCard;
