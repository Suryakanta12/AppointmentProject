import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import {
  Apartment,
  Restaurant,
  LocalHospital,
  DirectionsCar,
  Spa,
  Checkroom,
  Work,
  Group,
  TrendingUp,
  QuestionAnswer,
} from "@mui/icons-material";

const OurBusinesses = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: 5 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          background: "linear-gradient(45deg, #0d47a1, #2196f3)",
          color: "#fff",
          py: 6,
          borderRadius: "16px",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Explore Our Diverse Business Portfolio
        </Typography>
        <Typography variant="h6" gutterBottom>
          Seven industries, one vision – excellence and trust.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            mt: 3,
            borderRadius: "12px",
            px: 4,
            textTransform: "none",
          }}
        >
          Discover More
        </Button>
      </Box>

      {/* Overview of Our Businesses */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: "Hostel", icon: Apartment, text: "Safe and affordable accommodations." },
            { title: "Food Catering", icon: Restaurant, text: "Delicious meals tailored for events." },
            { title: "Hospital Appointments", icon: LocalHospital, text: "Effortless doctor bookings." },
            { title: "Garage Services", icon: DirectionsCar, text: "Reliable vehicle repairs." },
            { title: "Beauty & Tattoo", icon: Spa, text: "Style and ink crafted by experts." },
            { title: "Fashion Design", icon: Checkroom, text: "Custom-designed outfits for you." },
            { title: "Professional Services", icon: Work, text: "Expert solutions for your needs." },
          ].map((business, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "12px",
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <business.icon sx={{ color: "#fff", fontSize: 30 }} />
                </Avatar>
                <Typography variant="h6">{business.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {business.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

    {/* Individual Business Highlights */}
<Box sx={{ my: 6 }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    textAlign="center"
    gutterBottom
    sx={{ mb: 4 }}
  >
    Explore Each Business
  </Typography>
  <Grid container spacing={4}>
    {[
      {
        title: "Hostel",
        description: "Find your home away from home.",
        icon: "https://img.icons8.com/color/48/hostel.png",
      },
      {
        title: "Food Catering",
        description: "Taste the excellence in every bite.",
        icon: "https://img.icons8.com/color/48/catering.png",
      },
      {
        title: "Hospital Appointments",
        description: "Your health, our priority.",
        icon: "https://img.icons8.com/color/48/hospital-room.png",
      },
      {
        title: "Garage Services",
        description: "We keep your vehicles running smoothly.",
        icon: "https://img.icons8.com/color/48/garage.png",
      },
      {
        title: "Beauty & Tattoo",
        description: "Unleash your style with our experts.",
        icon: "https://img.icons8.com/color/48/tattoo-machine.png",
      },
      {
        title: "Fashion Design",
        description: "Style tailored to perfection.",
        icon: "https://img.icons8.com/color/48/sewing-machine.png",
      },
      {
        title: "Professional Services",
        description: "Expertise that empowers.",
        icon: "https://img.icons8.com/color/48/professional.png",
      },
    ].map((business, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Box
          sx={{
            textAlign: "center",
            p: 3,
            bgcolor: "background.paper",
            borderRadius: "16px",
            boxShadow: 3,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6,
            },
          }}
        >
          <Box
            component="img"
            src={business.icon}
            alt={business.title}
            sx={{
              width: 60,
              height: 60,
              mb: 2,
            }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            {business.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {business.description}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>


      {/* Our Impact in Numbers */}
      <Box
        sx={{
          my: 6,
          py: 4,
          bgcolor: "secondary.main",
          color: "#fff",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Our Impact in Numbers
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {[
            { title: "20K+", subtitle: "Happy Customers" },
            { title: "500+", subtitle: "Expert Professionals" },
            { title: "100+", subtitle: "Cities Covered" },
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Typography variant="h3" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="h6">{item.subtitle}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call-to-Action */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Experience the Best?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2, borderRadius: "12px" }}
        >
          Explore Our Services
        </Button>
      </Box>
    </Box>
  );
};

export default OurBusinesses;
