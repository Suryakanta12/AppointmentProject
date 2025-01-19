import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
  Slider,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";

const HostelDetails = () => {
  const [filters, setFilters] = useState({
    location: "",
    priceRange: [1000, 10000],
    type: { boys: false, girls: false, coed: false },
    amenities: { wifi: false, parking: false, ac: false },
  });
  const [sortBy, setSortBy] = useState("relevance");
  const [page, setPage] = useState(1);

  // Mock JSON Data (30 Hostels)
  const hostelData = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Hostel ${i + 1}`,
    location: `Location ${i % 5 === 0 ? "New York" : "San Francisco"}`,
    price: Math.floor(1000 + Math.random() * 9000),
    rating: (Math.random() * 5).toFixed(1),
    datePublished: `2025-01-${String(i + 1).padStart(2, "0")}`,
    distance: Math.floor(Math.random() * 20 + 1),
    amenities: ["Wi-Fi", "Parking", "AC"].filter(() =>
      Math.random() > 0.5 ? true : false
    ),
    image: `https://via.placeholder.com/300x200?text=Hostel+${i + 1}`,
  }));

  const itemsPerPage = 6;

  // Filter Logic
  const applyFilters = () => {
    let filteredData = [...hostelData];

    // Filter by location
    if (filters.location) {
      filteredData = filteredData.filter((hostel) =>
        hostel.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by price range
    filteredData = filteredData.filter(
      (hostel) =>
        hostel.price >= filters.priceRange[0] &&
        hostel.price <= filters.priceRange[1]
    );

    // Filter by type
    if (filters.type.boys || filters.type.girls || filters.type.coed) {
      filteredData = filteredData.filter((hostel) => {
        if (filters.type.boys && hostel.name.toLowerCase().includes("boys")) return true;
        if (filters.type.girls && hostel.name.toLowerCase().includes("girls")) return true;
        if (filters.type.coed && hostel.name.toLowerCase().includes("coed")) return true;
        return false;
      });
    }

    // Filter by amenities
    Object.keys(filters.amenities).forEach((amenity) => {
      if (filters.amenities[amenity]) {
        filteredData = filteredData.filter((hostel) =>
          hostel.amenities.includes(
            amenity.charAt(0).toUpperCase() + amenity.slice(1)
          )
        );
      }
    });

    // Sort by selected option
    if (sortBy === "lowToHigh") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (sortBy === "datePublished") {
      filteredData.sort(
        (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
      );
    } else if (sortBy === "distance") {
      filteredData.sort((a, b) => a.distance - b.distance);
    }

    return filteredData;
  };

  const filteredHostels = applyFilters();

  // Paginated Data
  const paginatedHostels = filteredHostels.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      {/* Filters Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          flexShrink: 0,
          p: 2,
          borderRight: { md: "1px solid #e0e0e0" },
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Filters
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Location
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter location..."
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={filters.priceRange}
            min={1000}
            max={10000}
            valueLabelDisplay="auto"
            onChange={(e, newValue) =>
              setFilters({ ...filters, priceRange: newValue })
            }
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Type
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.type.boys}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    type: { ...filters.type, boys: e.target.checked },
                  })
                }
              />
            }
            label="Boys"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.type.girls}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    type: { ...filters.type, girls: e.target.checked },
                  })
                }
              />
            }
            label="Girls"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.type.coed}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    type: { ...filters.type, coed: e.target.checked },
                  })
                }
              />
            }
            label="Co-ed"
          />
        </Box>
      </Box>

      {/* Hostel List Section */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight="bold">
            Hostels
          </Typography>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="relevance">Relevance</MenuItem>
            <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="highToLow">Price: High to Low</MenuItem>
            <MenuItem value="datePublished">Date Published</MenuItem>
            <MenuItem value="distance">Distance</MenuItem>
          </Select>
        </Box>
        <Grid container spacing={3}>
          {paginatedHostels.map((hostel) => (
            <Grid item xs={12} sm={6} md={4} key={hostel.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={hostel.image}
                  alt={hostel.name}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {hostel.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hostel.location}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    ${hostel.price}/month
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={Math.ceil(filteredHostels.length / itemsPerPage)}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HostelDetails;
