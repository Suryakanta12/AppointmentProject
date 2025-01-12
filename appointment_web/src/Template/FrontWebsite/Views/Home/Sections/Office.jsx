import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Tabs,
  Tab,
  TabPanel,
} from '@mui/material';

const officeData = [
  {
    title: "Executive Offices",
    purpose: "Designed for top-level management, such as CEOs, CFOs, or directors.",
    features: [
      "Luxurious furniture and decor",
      "Conference or meeting space attached",
      "Private restrooms or amenities",
      "Enhanced privacy and security",
    ],
    examples: [
      "Executive suites in corporate buildings",
      "CEO offices in multinational companies",
    ],
    image: "https://via.placeholder.com/300x200?text=Executive+Offices",
  },
  {
    title: "Managerial Offices",
    purpose: "Offices for mid-level managers who need privacy and space for team coordination.",
    features: [
      "Moderate size, typically equipped with a desk, chair, and storage",
      "Often includes space for small team meetings",
    ],
    examples: [
      "Department head offices in IT firms",
      "Team lead offices in engineering consultancies",
    ],
    image: "https://via.placeholder.com/300x200?text=Managerial+Offices",
  },
  // Add more office data as needed
];

const OfficeCard = ({ data }) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, overflow: 'hidden', transition: '0.3s', ':hover': { transform: 'scale(1.05)' } }}>
      <CardMedia
        component="img"
        height="200"
        image={data.image}
        alt={data.title}
        sx={{ position: 'relative' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {data.title}
        </Typography>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Purpose" />
          <Tab label="Features" />
          <Tab label="Examples" />
        </Tabs>
        <Box sx={{ p: 2 }}>
          {tabValue === 0 && (
            <Typography variant="body2">{data.purpose}</Typography>
          )}
          {tabValue === 1 && (
            <ul>
              {data.features.map((feature, idx) => (
                <li key={idx}>
                  <Typography variant="body2">{feature}</Typography>
                </li>
              ))}
            </ul>
          )}
          {tabValue === 2 && (
            <ul>
              {data.examples.map((example, idx) => (
                <li key={idx}>
                  <Typography variant="body2">{example}</Typography>
                </li>
              ))}
            </ul>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default function OfficeDesign() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Unique Office Designs
      </Typography>
      <Grid container spacing={4}>
        {officeData.map((office, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <OfficeCard data={office} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


