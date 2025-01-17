import {
  Box,
  TextField,
  Button,
  Menu,
  MenuItem,
  ListItem,
  ListItemText,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useNavigate } from "react-router";

const Searchbar = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState([dayjs(Date()), dayjs(Date())]);
  console.log(dayjs(Date()).toISOString());

  const searchOptions = ["Adults", "Children", "Rooms"];
  const [searchOptionsValue, setSearchOptionsValue] = useState({
    Adults: 0,
    Children: 0,
    Rooms: 0,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleSearchOptionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSearchOptionClose = () => {
    setAnchorEl(null);
  };
  const handleValueIncrement = (label, operation) => {
    const udpdatedValue =
      operation === "increment"
        ? searchOptionsValue[label] + 1
        : searchOptionsValue[label] - 1;

    const updatedOptionValues = {
      ...searchOptionsValue,
      [label]: udpdatedValue < 0 ? 0 : udpdatedValue,
    };
    setSearchOptionsValue(updatedOptionValues);
  };

  const handleSearch = () => {
    navigate("/hotels", {
      state: { destination, dateRange, searchOptionsValue },
    });
  };

  return (
    <Box
      sx={{
        mt: 2,
        height: "auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextField
        id="outlined-basic"
        placeholder="What are you looking for?"
        variant="standard"
        sx={{
          flexGrow: 2,
          backgroundColor: "white",
          border: "3px solid rgba(235, 197, 28)",
          borderRadius: 2,
          height: "40px",
          "& .MuiInputBase-input": {
            height: "100%",
            padding: "12px",
          },
        }}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "white",
          border: "3px solid rgba(235, 197, 28)",
          borderRadius: 2,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            sx={{
              width: "100%",
              height: "40px",
              "& .MuiInputBase-input": {
                height: "100%",
                padding: "12px",
                cursor: "pointer",
              },
            }}
            value={dateRange}
            minDate={dayjs(Date())}
            slots={{ field: SingleInputDateRangeField }}
            onChange={(selectedDates) => setDateRange(selectedDates)}
          />
        </LocalizationProvider>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "white",
          border: "3px solid rgba(235, 197, 28)",
          borderRadius: 2,
          height: "40px",
          "& .MuiInputBase-input": {
            height: "100%",
            padding: "12px",
            cursor: "pointer",
          },
        }}
      >
        <TextField
          value={`${searchOptionsValue.Adults} Adult . ${searchOptionsValue.Children} Children . ${searchOptionsValue.Rooms} Rooms`}
          id="search-option"
          aria-controls={open ? "search-option-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleSearchOptionClick}
          sx={{ width: "100%" }}
        />

        <Menu
          id="search-option-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleSearchOptionClose}
        >
          <MenuItem>
            <List>
              {searchOptions.map((item) => (
                <ListItem>
                  <ListItemText sx={{ pr: 2 }}>{item}</ListItemText>
                  <Stack direction="row" spacing={1} sx={{ display: "flex" }}>
                    <AddCircleOutlineIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleValueIncrement(item, "increment")}
                    />
                    <Typography variant="body2">
                      {searchOptionsValue[item]}
                    </Typography>
                    <RemoveCircleOutlineIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleValueIncrement(item, "decrement")}
                    />
                  </Stack>
                </ListItem>
              ))}
            </List>
          </MenuItem>
        </Menu>
      </Box>
      <Button
        sx={{
          border: "3px solid rgba(235, 197, 28)",
          borderRadius: 2,
          height: "44px",
        }}
        variant="contained"
        size="large"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default Searchbar;
