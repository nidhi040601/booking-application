import { ListItem, Box, List } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(51, 117, 222)",
        px: 11,
        py: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          justifyContent: "space-between",
          //   px: 5,
        }}
      >
        <List sx={{ color: "primary" }}>
          <ListItem>Countires</ListItem>
          <ListItem>Regions</ListItem>
          <ListItem>Cities</ListItem>
          <ListItem>Districts</ListItem>
          <ListItem>Hotels</ListItem>
        </List>
        <List>
          <ListItem>Countires</ListItem>
          <ListItem>Regions</ListItem>
          <ListItem>Cities</ListItem>
          <ListItem>Districts</ListItem>
          <ListItem>Hotels</ListItem>
        </List>
        <List>
          <ListItem>Countires</ListItem>
          <ListItem>Regions</ListItem>
          <ListItem>Cities</ListItem>
          <ListItem>Districts</ListItem>
          <ListItem>Hotels</ListItem>
        </List>
        <List>
          <ListItem>Countires</ListItem>
          <ListItem>Regions</ListItem>
          <ListItem>Cities</ListItem>
          <ListItem>Districts</ListItem>
          <ListItem>Hotels</ListItem>
        </List>
      </Box>
      <span style={{ fontWeight: 500, color: "white", paddingLeft: "15px" }}>
        Copyright @ 2022 Roomzy
      </span>
    </Box>
  );
};

export default Footer;
