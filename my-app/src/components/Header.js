import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import sunrise from '../images/SunriseLOGO.png';




export default function ButtonAppBar() {

    const imageStyle={marginRight:'15px'}
    const titleStyle={justifyContent: 'center'}

  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography style={titleStyle} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flexible Finance
          </Typography>
        <img alignt="right" style={imageStyle} src={sunrise} alt="icon" height="40" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}