import React, { useState } from "react";
import HomeOutlineIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlineIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlineIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlineIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlineIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlineIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlineIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlineIcon from "@mui/icons-material/MapOutlined";

import { tokens } from "../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Link to={to}>
        <MenuItem
          active={selected === title}
          style={{ color: colors.gray[400] }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          {!isCollapsed && (
            <>
              <Typography>{title}</Typography>
            </>
          )}
        </MenuItem>
      </Link>
    </>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-ineer-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
          width: isCollapsed ? "85px" : "300px",
          // transitionDelay: 5000,
          transition: "ease-in-out 0.8s",
        }}
      >
        <ProSidebarProvider collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* logo and menu icon */}
            {isCollapsed && (
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0px 20px 0px ",
                  color: colors.gray[400],
                }}
              ></MenuItem>
            )}
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                mt="10px"
              >
                <Typography variant="h3" color={colors.gray[900]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
            {!isCollapsed && (
              <>
                <Box mb="25px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      alt="profile "
                      width={"50px"}
                      height={"50px"}
                      src={require("../../assets/user.jpg")}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>

                  <Box textAlign="center">
                    <Typography
                      variant="h3"
                      color={colors.gray[400]}
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      ED Roh
                    </Typography>
                    <Typography variant="h5" color={colors.gray[400]}>
                      VP Fancy Admin
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
            {/* Menu items */}
            <Box paddingLeft={isCollapsed ? "5%" : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              {!isCollapsed && (
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Data
                </Typography>
              )}

              <Item
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contact Information"
                to="/contact"
                icon={<ContactsOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {!isCollapsed && (
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  pages
                </Typography>
              )}

              <Item
                title="Profile form"
                to="/form"
                icon={<PersonOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ page"
                to="/faq"
                icon={<HelpOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {!isCollapsed && (
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Charts
                </Typography>
              )}

              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie chart"
                to="/pie"
                icon={<PieChartOutlineOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line chart"
                to="/line"
                icon={<TimelineOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography chart"
                to="/geography"
                icon={<MapOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            {/* {isCollapsed && (
              <>
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                  <ItemIcons
                    title="Dashboard"
                    to="/"
                    icon={<HomeOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <ItemIcons
                    title="Manage Team"
                    to="/team"
                    icon={<PeopleOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <ItemIcons
                    title="Contact Information"
                    to="/contacts"
                    icon={<ContactsOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <ItemIcons
                    title="invoices Balances"
                    to="/invoices"
                    icon={<ReceiptOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <ItemIcons
                    title="Profile form"
                    to="/form"
                    icon={<PersonOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <ItemIcons
                    title="Calender"
                    to="/calender"
                    icon={<CalendarTodayOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <ItemIcons
                    title="FAQ page"
                    to="/faq"
                    icon={<HelpOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <ItemIcons
                    title="Bar Chart"
                    to="/bar"
                    icon={<BarChartOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <ItemIcons
                    title="Pie chart"
                    to="/pie"
                    icon={<PieChartOutlineOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <ItemIcons
                    title="Line chart"
                    to="/line"
                    icon={<TimelineOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <ItemIcons
                    title="Geography chart"
                    to="/geography"
                    icon={<MapOutlineIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Box>
              </>
            )} */}
          </Menu>
        </ProSidebarProvider>
      </Box>
    </>
  );
};

export default Sidebar;
