import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const featuredData = [
    {
      img: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      title: "Austin",
      subTitle: "143 properties",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      title: "Reno",
      subTitle: "450 properties",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      title: "Dublin",
      subTitle: "328 properties",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      title: "Dublin",
      subTitle: "328 properties",
    },
    // {
    //   img: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    //   title: "Reno",
    //   subTitle: "450 properties",
    // },
  ];

  const { data, loading, error } = useFetch(
    "http://localhost:3001/api/hotels?featured=true"
  );

  return (
    <>
      <Typography variant="h6" fontWeight={700} sx={{ px: 3 }}>
        Home that you may love
      </Typography>
      <Box
        sx={{
          height: "380px",
          overflow: "hidden",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          py: 2,
          px: 3,
        }}
      >
        {loading ? (
          "Loading please wait"
        ) : (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              height: "100%",
              overflow: "visible",
            }}
          >
            {data.map((item) => (
              <Card
                key={item._id}
                sx={{
                  overflow: "hidden",
                  height: "100%",
                  flex: 1,
                }}
              >
                <CardMedia sx={{ height: "65%" }} image={`${item.photos[0]}`} />

                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bolder">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={300}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {item.city}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={500}>
                    Starting from {item.cheapestPrice}
                  </Typography>
                  {item.rating && (
                    <Box
                      display="flex"
                      alignItems="center"
                      // justifyContent="space-around"
                      gap={1}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ p: 0, fontWeight: "bold" }}
                      >
                        {item.rating}
                      </Button>
                      <span style={{ fontSize: "14px" }}>Excellent</span>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default FeaturedProperties;
