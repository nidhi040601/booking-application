import {
  Box,
  Input,
  TextField,
  Button,
  Menu,
  MenuItem,
  ListItem,
  ListItemText,
  List,
  Stack,
  Icon,
  Typography,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Searchbar = () => {
  const searchOptions = ["Adults", "Children", "Rooms"];
  const [searchOptionsValue, setSearchOptionsValue] = useState({
    Adults: 0,
    Children: 0,
    Rooms: 0,
  });
  const [dateRange, setDateRange] = useState([dayjs(Date()), dayjs(Date())]);

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

  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "1px solid rbga(235, 197, 28)",
        borderRadius: 5,
        my: 2,
      }}
    >
      <Toolbar>
        <TextField
          id="outlined-basic"
          placeholder="What are you looking for?"
          variant="outlined"
          sx={{ flexGrow: 2, mr: 1 }}
        />
        <Box sx={{ flexGrow: 1, mr: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              sx={{ width: "100%" }}
              value={dateRange}
              slots={{ field: SingleInputDateRangeField }}
              onChange={(selectedDates) => setDateRange(selectedDates)}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ flexGrow: 1, mr: 1 }}>
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
        <Button variant="contained">Search</Button>
      </Toolbar>
    </Box>
  );
};

export default Searchbar;
