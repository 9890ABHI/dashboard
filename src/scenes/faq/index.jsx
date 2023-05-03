import { useTheme } from "@emotion/react";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box>
        <Header title="FAQ" subtitle={"Frequently asked questions"} />
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              How to set up and use Redux Toolkit with React-Redux Understanding
              of Redux terms and concepts
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Another important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              How to set up and use Redux Toolkit with React-Redux Understanding
              of Redux terms and concepts
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              randonm question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              How to set up and use Redux Toolkit with React-Redux Understanding
              of Redux terms and concepts
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Final question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              How to set up and use Redux Toolkit with React-Redux Understanding
              of Redux terms and concepts
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default FAQ;
