import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Link,
  Avatar,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const SignUp = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("user");
  const [gender, setGender] = useState("");
  const [businessTypes, setBusinessTypes] = useState([]);

  const handleBusinessTypeChange = (event) => {
    const { value, checked } = event.target;
    setBusinessTypes((prev) =>
      checked ? [...prev, value] : prev.filter((type) => type !== value),
    );
  };

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
        backgroundAttachment: "fixed", // ✅ Keeps the background fixed while scrolling
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
        <Box textAlign="center" mb={4}>
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

        {/* Account Type Selection */}
        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Sign Up As</FormLabel>
          <RadioGroup
            row
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <FormControlLabel value="user" control={<Radio />} label="User" />
            <FormControlLabel
              value="business"
              control={<Radio />}
              label="Business"
            />
          </RadioGroup>
        </FormControl>

        {/* Form Fields */}
        <Box component="form">
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Alternate Phone Number"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />

          {/* Date of Birth */}
          <TextField
            fullWidth
            type="date"
            label="Date of Birth"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />

          {/* Occupation */}
          <TextField
            fullWidth
            label="Occupation"
            variant="outlined"
            margin="normal"
            required
          />

          {/* Gender Selection */}
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          {/* Business Fields - Show only if Business is selected */}
          {accountType === "business" && (
            <>
              <TextField
                fullWidth
                label="Brand Name"
                variant="outlined"
                margin="normal"
                required
              />
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">Business Type</FormLabel>
                <FormGroup row>
                  {[
                    "Hostel",
                    "Hospital",
                    "Garage",
                    "BeautyTattoo",
                    "FoodCatering",
                    "FashionDesign",
                    "ProfessionalServices",
                    "Room Rent",
                  ].map((type) => (
                    <FormControlLabel
                      key={type}
                      control={
                        <Checkbox
                          checked={businessTypes.includes(type)}
                          onChange={handleBusinessTypeChange}
                          value={type}
                        />
                      }
                      label={type}
                    />
                  ))}
                </FormGroup>
              </FormControl>
              <TextField
                fullWidth
                label="State"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="District"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Pin Code"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                margin="normal"
                multiline
                rows={2}
                required
              />
            </>
          )}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </Box>

        {/* Login Redirect */}
        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link
              onClick={() => navigate("/SignIn")}
              underline="hover"
              color="primary"
              sx={{ cursor: "pointer" }}
            >
              Sign in here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
