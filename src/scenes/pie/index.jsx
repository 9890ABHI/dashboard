import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <>
      <Box m="20px">
        <Header title={" Pie Chart"} subtitle={"simple Pie chart"} />
        <Box height={"75vh"}>
          <PieChart />
        </Box>
      </Box>
    </>
  );
};

export default Pie;
