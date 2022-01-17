import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useHistory } from "react-router-dom";
import { Button} from '@material-ui/core';

export default function MenuAppBar() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}

              >
                <MenuItem onClick={()=>{history.push("/Dashboard")}}>Dashboard</MenuItem>
                <MenuItem onClick={()=>{history.push("/Accounts")}}>Accounts</MenuItem>
                <MenuItem onClick={()=>{history.push("/Entities")}}>Entities</MenuItem>
                <MenuItem onClick={()=>{history.push("/Transactions")}}>Transactions</MenuItem>
                <MenuItem onClick={()=>{history.push("/Settings")}}>Settings</MenuItem>
                <MenuItem onClick={()=>{history.push("/")}}>SignOut</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}