import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import SearchItem from "../../components/searchItem/SearchItem";

const FromInputBig = styled(TextField)({
  marginTop: 5,
  "& .MuiInputBase-root": {
    borderRadius: 0,
  },
  "& .MuiInputBase-input": {
    backgroundColor: "white",
    fontSize: 10,
    fontWeight: 400,
    height: 1,
    borderRadius: 0,
  },
});

const FromInputSmall = styled(TextField)({
  marginTop: 5,
  "& .MuiInputBase-root": {
    borderRadius: 0,
  },
  "& .MuiInputBase-input": {
    backgroundColor: "white",
    fontSize: 10,
    fontWeight: 400,
    height: 1,
    width: 20,
    padding: "10px 15px",
    borderRadius: 0,
  },
});

const HotelList = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [dateRange, setDateRange] = useState([
    dayjs(location.state.dateRange[0].$d),
    dayjs(location.state.dateRange[1].$d),
  ]);
  const [searchOptions, setSearchOptions] = useState(
    location.state.searchOptionsValue
  );
  //Add validation
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleSearchOptionChange = (event, optionName) => {
    const updatedSearchOptionValue = event.target.value;

    const updatedSearchOptions = {
      ...searchOptions,
      [optionName]: updatedSearchOptionValue < 0 ? 0 : updatedSearchOptionValue,
    };

    setSearchOptions(updatedSearchOptions);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", flexDirection: "row", px: 10, py: 2 }}>
        <Box
          position="sticky"
          component="form"
          sx={{
            flexGrow: 1,
            top: 1,
            backgroundColor: "rgba(235, 197, 28)",
            borderRadius: 2,
            p: 2,
            height: "100%",
          }}
        >
          <Typography variant="body" fontWeight={700} sx={{ mb: 3 }}>
            Search
          </Typography>
          <Stack sx={{ my: 2 }}>
            <Stack sx={{ mt: 1 }}>
              <label style={{ fontSize: 13, fontWeight: 500 }}>
                Destination
              </label>
              <FromInputBig
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Stack>
            <Stack sx={{ mt: 1 }}>
              <label style={{ fontSize: 13, fontWeight: 500 }}>
                Check-in Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  sx={{
                    mt: 1,
                    "& .MuiPopper-root": {
                      width: "20px",
                      height: "20px",
                      backgroundColor: "yellow",
                    },
                    "& .MuiInputBase-root": {
                      paddingRight: 0,
                    },
                    "& .MuiInputBase-input": {
                      backgroundColor: "white",
                      fontSize: 10,
                      fontWeight: 400,
                      height: 1,
                      padding: "11px",
                      width: "100%",
                      borderRadius: 0,
                      cursor: "pointer",
                    },
                  }}
                  value={dateRange}
                  minDate={dayjs(Date())}
                  slots={{ field: SingleInputDateRangeField }}
                  onChange={(selectedDates) => setDateRange(selectedDates)}
                />
              </LocalizationProvider>
            </Stack>
            <span style={{ fontSize: 13, fontWeight: 500, marginTop: 15 }}>
              Options:
            </span>
            <Stack
              direction="row"
              alignItems="start"
              justifyContent="space-between"
              sx={{ mt: 2 }}
            >
              <label style={{ fontSize: 13, fontWeight: 500 }}>
                Min price (per night):
              </label>
              <FromInputSmall
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="start"
              justifyContent="space-between"
              sx={{ mt: 2 }}
            >
              <label style={{ fontSize: 13, fontWeight: 500 }}>
                Max price (per night):
              </label>
              <FromInputSmall
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="start"
              justifyContent="space-between"
              sx={{ mt: 2 }}
            >
              <label style={{ fontSize: 13, fontWeight: 500 }}>Adults:</label>
              <FromInputSmall
                value={searchOptions.Adults}
                onChange={(event) => handleSearchOptionChange(event, "Adults")}
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="start"
              justifyContent="space-between"
              sx={{ mt: 2 }}
            >
              <label style={{ fontSize: 13, fontWeight: 500 }}>Children:</label>
              <FromInputSmall
                value={searchOptions.Children}
                onChange={(event) =>
                  handleSearchOptionChange(event, "Children")
                }
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="start"
              justifyContent="space-between"
              sx={{ mt: 2 }}
            >
              <label style={{ fontSize: 13, fontWeight: 500 }}>Rooms:</label>
              <FromInputSmall
                value={searchOptions.Rooms}
                onChange={(event) => handleSearchOptionChange(event, "Rooms")}
              />
            </Stack>
          </Stack>
          <Button variant="contained" size="large" sx={{ width: "100%" }}>
            Search
          </Button>
        </Box>
        <Box sx={{ flexGrow: 7 }}>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </Box>
      </Box>
    </>
  );
};

export default HotelList;
