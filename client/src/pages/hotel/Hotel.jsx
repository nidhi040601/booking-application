import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Modal,
  Typography,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import Sheet from "@mui/joy/Sheet";
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";

const Hotel = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [sliderImageIndex, setSliderImageIndex] = useState(0);
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
    {
      img: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      title: "Dublin",
      subTitle: "328 properties",
    },
  ];

  const handleOpenModal = (index) => {
    setSliderImageIndex(index);
    setIsImageModalOpen(true);
  };

  const handleArrowButtonClick = (buttonType) => {
    let newSliderImageIndex;

    if (buttonType === "left") {
      newSliderImageIndex =
        sliderImageIndex === 0 ? featuredData.length - 1 : sliderImageIndex - 1;
    } else {
      newSliderImageIndex =
        sliderImageIndex === featuredData.length - 1 ? 0 : sliderImageIndex + 1;
    }

    setSliderImageIndex(newSliderImageIndex);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          py: 3,
          px: 10,
        }}
      >
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            borderRadius: 0,
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              height: "60%",
              width: "60%",
              border: "none",
              overflow: "hidden",
              display: "flex",
              fkexDirection: "row",
              alignItems: "center",
            }}
          >
            <ArrowLeftIcon
              color="white"
              onClick={() => handleArrowButtonClick("left")}
            />
            <img
              src={featuredData[sliderImageIndex].img}
              height="100%"
              width="100%"
              style={{ objectFit: "cover" }}
            />
            <ArrowRightIcon onClick={() => handleArrowButtonClick("right")} />
          </Sheet>
        </Modal>

        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" fontWeight={700}>
              700 Business Hotel
            </Typography>
            <Typography
              variant="body"
              fontStyle="underline"
              color="primary"
              fontWeight={300}
              fontSize={10}
            >
              Old Town Karko, Poland
            </Typography>
            <Typography
              variant="body"
              fontStyle="underline"
              color="primary"
              fontWeight={500}
              fontSize={17}
            >
              Excellend location - 1.3 km from centre
            </Typography>
            <Typography
              variant="body"
              fontStyle="underline"
              color="primary"
              fontWeight={500}
              fontSize={15}
            >
              Book a stay over $114 and get a free airport taxi
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{ height: "10px", padding: 2, minWidth: 0 }}
          >
            Reserve
          </Button>
        </Box>
        <ImageList
          sx={{
            width: "100%",
            height: 300,
          }}
          cols={3}
        >
          {featuredData.map((item, index) => (
            <ImageListItem
              sx={{
                overflow: "hidden",
                height: "100%",
                flex: 1,
              }}
              key={item.img}
            >
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={() => handleOpenModal(index)}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}
        >
          <Box
            sx={{
              flexBasis: "80%",
              flexGrow: 0,
              flexShrink: 1,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              p: 1,
              justifyContent: "stretch",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              Stay in the heart of the Poland
            </Typography>
            <Typography variant="body" fontWeight={300} fontSize={10}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "20%",
              flexGrow: 0,
              flexShrink: 1,
              backgroundColor: "rgba(235, 197, 28)",
              borderRadius: 2,
              p: 1,
              gap: 1,
            }}
          >
            <Typography variant="h6" fontWeight={700} fontSize={15}>
              Perfect for 9 day stay
            </Typography>
            <Typography variant="body" fontWeight={300} fontSize={10}>
              Location in the heart of Poland, this property has excellent score
              of 9.8!
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              $ 949 (9 nights)
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                height: "10px",
                width: "100%",
                padding: 2,
                minWidth: 0,
                fontSize: 8,
              }}
            >
              Reserve or Book now
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Hotel;
