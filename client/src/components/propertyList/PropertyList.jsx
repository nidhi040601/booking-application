import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const PropertyList = () => {
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
    {
      img: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      title: "Reno",
      subTitle: "450 properties",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        overflow: "hidden",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ImageList
        cols={5}
        gap={15}
        sx={{
          height: "100%",
          overflow: "hidden",
        }}
      >
        {featuredData.map((item) => (
          <ImageListItem
            sx={{
              overflow: "hidden",
              height: "100%",
              flex: 1,
            }}
          >
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "70%",
                objectFit: "cover",
                borderRadius: 10,
              }}
            />

            <ImageListItemBar
              sx={{
                "& .MuiImageListItemBar-title": {
                  fontSize: "20px",
                  fontWeight: "bolder",
                  pb: 1,
                },
                flex: 1,
              }}
              title={item.title}
              subtitle={item.subTitle}
              position="below"
            ></ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default PropertyList;
