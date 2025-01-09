import { Container, Typography, Box } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Searchbar from "../../components/searchbar/Searchbar";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ px: 10, pt: 3, pb: 5 }}>
        <Searchbar />
        <Featured />
        <Typography variant="h6" fontWeight={700}>
          Browse your property type
        </Typography>
        <PropertyList />
        <Typography variant="h6" fontWeight={700}>
          Home that you may love
        </Typography>
        <FeaturedProperties />
      </Box>
    </>
  );
};

export default Home;
