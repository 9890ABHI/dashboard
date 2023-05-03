import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m="20px">
        <Header
          title={" Geography Chart"}
          subtitle={"simple Geography chart"}
        />
        <Box
          height={"75vh"}
          border={`1px solid ${colors.gray[500]}`}
          borderRadius="10px"
        >
          <GeographyChart />
        </Box>
      </Box>
    </>
  );
};

export default Geography;
