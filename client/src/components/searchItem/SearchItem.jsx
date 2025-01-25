import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router";

const SearchItem = ({ item }) => {
  return (
    <Card sx={{ display: "flex", height: "200px", p: 1.5, m: 1 }}>
      <CardMedia sx={{ width: 200, borderRadius: 3 }} image={item.photos[0]} />
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              {item.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}
            >
              {/* <Typography
                variant="body"
                fontStyle="underline"
                color="primary"
                fontWeight={300}
                fontSize={10}
              >
                Old Town Karko
              </Typography> */}
              <Typography
                variant="body"
                fontStyle="underline"
                color="primary"
                fontWeight={300}
                fontSize={10}
              >
                {item.city}
              </Typography>
              <Typography
                variant="body"
                fontStyle="underline"
                color="primary"
                fontWeight={300}
                fontSize={10}
              >
                {item.distance} km from centre
              </Typography>
            </Box>
          </Box>
          {item.rating && (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body" fontWeight={700} fontSize={15}>
                  Good
                </Typography>
                <Typography variant="body" fontWeight={300} fontSize={10}>
                  384 reviews
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ height: "10px", padding: 2, width: "10px", minWidth: 0 }}
              >
                {item.rating}
              </Button>
            </Box>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography variant="body" fontWeight={700} fontSize={8}>
              {item.desc}
            </Typography>
            <Typography variant="body" fontWeight={300} fontSize={8}>
              1 large double bed
            </Typography>
            <Typography
              variant="body"
              fontWeight={700}
              color="red"
              fontSize={8}
            >
              Only 2 rooms left at this price at our site
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Typography variant="body" fontWeight={300} fontSize={8}>
              2 nights, 2 adults
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              CAD {item.cheapestPrice}
            </Typography>
            <Typography variant="body" fontWeight={300} fontSize={8}>
              Included taxes and charges
            </Typography>
            <Link to={`find/${item._id}`}>
              <Button
                variant="contained"
                size="small"
                sx={{ width: "100%", fontSize: 8, mt: 1 }}
              >
                See availability &gt
              </Button>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SearchItem;
