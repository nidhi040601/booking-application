import { Box } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ px: 25, pt: 3, pb: 5 }}>
        <Featured />
        <PropertyList />
        <FeaturedProperties />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
