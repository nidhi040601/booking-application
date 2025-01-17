import { AppBar, Box, Button, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Searchbar from "../searchbar/Searchbar";

const Navbar = () => {
  const [selectedTab, changeSelectedTab] = useState("stays");

  const handleTabChange = (event, newValue) => {
    changeSelectedTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 25, py: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Roomzy
          </Typography>
          <Button variant="outlined" color="white" sx={{ mr: 1 }}>
            Login
          </Button>
          <Button variant="outlined" color="white">
            Register
          </Button>
        </Box>

        <Tabs
          textColor="white"
          indicatorColor="secondary"
          onChange={handleTabChange}
          value={selectedTab}
          sx={{ pt: 1 }}
        >
          <Tab label="Stays"></Tab>
          <Tab label="Flights"></Tab>
          <Tab label="Car Rentals"></Tab>
          <Tab label="Attractions"></Tab>
        </Tabs>
        <Typography sx={{ pt: 1 }} variant="h5">
          One solution for all your stays
        </Typography>
        <Typography sx={{ pt: 1 }} variant="body1">
          Open an account and get 15% off on your first booking!
        </Typography>
        <Searchbar />
      </AppBar>
    </Box>
  );
};

export default Navbar;
