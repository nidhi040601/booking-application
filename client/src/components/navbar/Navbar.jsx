import { AppBar, Box, Button, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useContext, useState } from "react";
import Searchbar from "../searchbar/Searchbar";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [selectedTab, changeSelectedTab] = useState("Stays");

  const handleTabChange = (event, newValue) => {
    changeSelectedTab(newValue);
  };

  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 25, py: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Link
            to="/"
            style={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
          >
            <Typography variant="h4">Roomzy</Typography>
          </Link>
          {user ? (
            <div>{user.username}</div>
          ) : (
            <Box>
              <Button
                variant="outlined"
                color="white"
                sx={{ mr: 1 }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button variant="outlined" color="white">
                Register
              </Button>
            </Box>
          )}
        </Box>

        <Tabs
          textColor="white"
          indicatorColor="secondary"
          onChange={handleTabChange}
          value={selectedTab}
          sx={{ pt: 1 }}
        >
          <Tab label="Stays" value={"Stays"}></Tab>
          <Tab label="Flights" value={"Flights"}></Tab>
          <Tab label="Car Rentals" value={"Car Rentals"}></Tab>
          <Tab label="Attractions" value={"Attractions"}></Tab>
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
