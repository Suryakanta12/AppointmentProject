import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const ContactUs = () => {
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
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography variant="h3" fontWeight="bold" gutterBottom>
      Contact Us
    </Typography>
    <Typography variant="subtitle1" color="text.secondary">
      *Your Connection to Excellence – Reach Out Today*
    </Typography>
  </Box>

  {/* Contact Options Section */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: 4,
      mb: 8,
      justifyContent: "center",
    }}
  >
    {[
      {
        icon: <PhoneIphoneIcon fontSize="large" color="primary" />,
        title: "Call Us",
        description: "+1 234 567 890",
      },
      {
        icon: <MailOutlineIcon fontSize="large" color="primary" />,
        title: "Email Us",
        description: "contact@yourbusiness.com",
      },
      {
        icon: <LocationOnOutlinedIcon fontSize="large" color="primary" />,
        title: "Visit Us",
        description: "123 Main Street, Your City, Country",
      },
    ].map((option, index) => (
      <Box
        key={index}
        sx={{
          textAlign: "center",
          p: 3,
          bgcolor: "rgba(0, 0, 0, 0.03)",
          borderRadius: "12px",
          flex: 1,
          boxShadow: 1,
        }}
      >
        {option.icon}
        <Typography variant="h6" fontWeight="bold" mt={2}>
          {option.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {option.description}
        </Typography>
      </Box>
    ))}
  </Box>

  {/* Contact Form Section */}
  <Box
    sx={{
      maxWidth: "800px",
      margin: "0 auto",
      p: 4,
      bgcolor: "rgba(0, 0, 0, 0.03)",
      borderRadius: "12px",
      boxShadow: 3,
    }}
  >
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      *We'd Love to Hear From You*
    </Typography>
    <Typography variant="body1" color="text.secondary" mb={3}>
      Fill out the form below, and we’ll get back to you as soon as possible.
    </Typography>
    <form>
      <TextField
        fullWidth
        label="Your Name"
        variant="outlined"
        sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
      />
      <TextField
        fullWidth
        label="Your Email"
        variant="outlined"
        sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
      />
      <TextField
        fullWidth
        label="Subject"
        variant="outlined"
        sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
      />
      <TextField
        fullWidth
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{ textTransform: "none", borderRadius: "12px" }}
      >
        Send Message
      </Button>
    </form>
  </Box>

  {/* Social Media Section */}
  <Box sx={{ textAlign: "center", mt: 8 }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      *Connect With Us on Social Media*
    </Typography>
    <Typography variant="body1" color="text.secondary" mb={4}>
      Stay updated with the latest news and updates.
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
      {[
        { icon: <FacebookIcon fontSize="large" />, link: "#" },
        { icon: <TwitterIcon fontSize="large" />, link: "#" },
        { icon: <InstagramIcon fontSize="large" />, link: "#" },
        { icon: <LinkedInIcon fontSize="large" />, link: "#" },
      ].map((social, index) => (
        <IconButton
          key={index}
          sx={{
            bgcolor: "primary.main",
            color: "#fff",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          {social.icon}
        </IconButton>
      ))}
    </Box>
  </Box>
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

export default ContactUs;
