import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const foodData = [
  { name: "Biryani", image: "https://via.placeholder.com/150?text=Biryani" },
  { name: "Pizza", image: "https://via.placeholder.com/150?text=Pizza" },
  { name: "North Indian", image: "https://via.placeholder.com/150?text=North+Indian" },
  { name: "Rolls", image: "https://via.placeholder.com/150?text=Rolls" },
  { name: "Burger", image: "https://via.placeholder.com/150?text=Burger" },
  { name: "Chinese", image: "https://via.placeholder.com/150?text=Chinese" },
  { name: "Cake", image: "https://via.placeholder.com/150?text=Cake" },
  { name: "Shawarma", image: "https://via.placeholder.com/150?text=Shawarma" },
  { name: "Noodles", image: "https://via.placeholder.com/150?text=Noodles" },
  { name: "Dosa", image: "https://via.placeholder.com/150?text=Dosa" },
  { name: "Chole Bhature", image: "https://via.placeholder.com/150?text=Chole+Bhature" },
  { name: "Kebab", image: "https://via.placeholder.com/150?text=Kebab" },
  { name: "Pastry", image: "https://via.placeholder.com/150?text=Pastry" },
  { name: "South Indian", image: "https://via.placeholder.com/150?text=South+Indian" },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "50%",
        right: "10px",
        zIndex: 1,
        transform: "translateY(-50%)",
        backgroundColor: "#fff",
        ":hover": { backgroundColor: "#f5f5f5" },
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "50%",
        left: "10px",
        zIndex: 1,
        transform: "translateY(-50%)",
        backgroundColor: "#fff",
        ":hover": { backgroundColor: "#f5f5f5" },
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

const HostelDesign = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Typography variant="h5" textAlign="center" gutterBottom>
        Order our best food options
      </Typography>
      <Slider {...settings}>
        {foodData.map((food, index) => (
          <Box key={index} sx={{ textAlign: "center", padding: "10px" }}>
            <Box
              component="img"
              src={food.image}
              alt={food.name}
              sx={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                margin: "0 auto",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Typography variant="body1" mt={1}>
              {food.name}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HostelDesign;
