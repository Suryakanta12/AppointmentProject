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

const NewsRoom = () => {
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



<Box sx={{ py: 8, px: 4, bgcolor: "background.default" }}>
  {/* Page Header */}
  <Typography
    variant="h3"
    fontWeight="bold"
    textAlign="center"
    gutterBottom
    sx={{ mb: 6 }}
  >
    Welcome to Our Newsroom
  </Typography>
  <Typography
    variant="subtitle1"
    textAlign="center"
    color="text.secondary"
    sx={{ mb: 6 }}
  >
    Get the latest updates, insights, and stories from our diverse business ventures.
  </Typography>

  {/* News Sections */}
  <Grid container spacing={6}>
    {[
      {
        title: "Innovations in Hostel Living",
        punchline: "Reimagining Comfort for the Next Generation",
        description:
          "Explore how we're setting trends in student living with modern amenities and premium services.",
        image: "https://img.freepik.com/free-photo/happy-young-people-using-tablet-students-learning-having-fun-friends-party-home-hipster-company-together-two-men-one-woman-smiling-positive-online-education-listening-music_285396-212.jpg?t=st=1736865732~exp=1736869332~hmac=b807afa63d4fa27784089798632fbc0543fb1a7e5ade12e9226a694495750c55&w=996",
      },
      {
        title: "Catering Success Stories",
        punchline: "From Kitchens to Hearts",
        description:
          "Discover how our catering services are making events unforgettable with world-class cuisines.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Healthcare Breakthroughs",
        punchline: "Empowering Lives with Care",
        description:
          "Stay informed about our latest efforts to make healthcare accessible and efficient.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Garage Tech Trends",
        punchline: "Driving the Future of Maintenance",
        description:
          "Learn about our cutting-edge technology and expertise in vehicle servicing.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Beauty & Ink Chronicles",
        punchline: "Unveiling Creativity, One Style at a Time",
        description:
          "Dive into the artistry of our beauty experts and tattoo artists, making bold statements.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Fashion Runway Insights",
        punchline: "Where Innovation Meets Elegance",
        description:
          "Stay ahead with updates from the fashion world, curated by our in-house designers.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Professional Spotlights",
        punchline: "Inspiring Stories of Excellence",
        description:
          "Meet the professionals who are transforming industries with their expertise.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Customer Testimonials",
        punchline: "Real Stories, Real Impact",
        description:
          "Hear from our customers about how our services have positively impacted their lives.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Sustainability Initiatives",
        punchline: "Building a Better Tomorrow",
        description:
          "Discover our commitment to sustainability and how we’re making a difference.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Events & Announcements",
        punchline: "Stay in the Loop",
        description:
          "Don’t miss out on our upcoming events, launches, and exciting collaborations.",
        image: "https://via.placeholder.com/400x250",
      },
    ].map((section, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Box
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
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
            src={section.image}
            alt={section.title}
            sx={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              {section.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ fontStyle: "italic", mb: 1 }}
            >
              {section.punchline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {section.description}
            </Typography>
          </Box>
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

export default NewsRoom;
