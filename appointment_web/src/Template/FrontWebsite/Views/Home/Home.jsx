
import React from 'react';
import { Typography,Button,Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Header from 'Template/FrontWebsite/Components/Header.jsx';
import Banner from 'Template/FrontWebsite/Views/Home/Sections/Banner.jsx';
import Office from './Sections/Office.jsx';
import HostelDesign from './Sections/Hostel.jsx';
export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Banner/>
      <Office/>
      <HostelDesign/>

<Box>

        <Typography variant='h1'>Home</Typography>
        <Button variant="text" >Text</Button>
      <Button variant="contained" >Contained</Button>
      <Button variant="outlined" >Outlined</Button>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Word of the Day
        </Typography>
   
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
    <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </React.Fragment>
    
  );
}