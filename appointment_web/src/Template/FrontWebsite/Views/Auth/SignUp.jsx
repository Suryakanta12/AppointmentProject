import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Link,
  Avatar,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const SignUp = () => {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("https://img.freepik.com/premium-vector/technology-background-with-hitech-digital-data_29971-1134.jpg?w=1060")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "40%" },
          backgroundColor: "rgba(255, 255, 255)",
          borderRadius: 4,
          boxShadow: 5,
          padding: 4,
          backdropFilter: "blur(5px)",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              width: 70,
              height: 70,
              margin: "0 auto",
            }}
          >
            <PersonAddAltIcon sx={{ fontSize: 36 }} />
          </Avatar>
          <Typography
            variant="h5"
            fontWeight="bold"
            mt={2}
            color="primary.main"
          >
            Create Your Account
          </Typography>
        </Box>

        {/* Form Section */}
        <Box component="form">
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              py: 1.5,
              fontSize: "1rem",
              mt: 2,
            }}
          >
            Sign Up
          </Button>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            my: 3,
          }}
        >
          <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#e0e0e0" }} />
          <Typography variant="body2" sx={{ px: 2, color: "grey.600" }}>
            OR
          </Typography>
          <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#e0e0e0" }} />
        </Box>

        {/* Social Sign-Up Buttons */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Sign up with Google
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Sign up with Facebook
            </Button>
          </Grid>
        </Grid>

        {/* Login Redirect */}
        <Box
          sx={{
            mt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="grey.700">
            Already have an account?{" "}
            <Link onClick={()=>navigate("/SignIn")} underline="hover" color="primary" sx={{ cursor: "pointer" }}>
              Sign in here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
