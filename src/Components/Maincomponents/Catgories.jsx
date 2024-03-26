import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

  const Simple = styled(Typography)({
      textTransform:"capitalize",
      color:'black',
      fontWeight:'bold'
  })

export default function  Categroies() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <MenuIcon sx={{color:"black"}}></MenuIcon>

           <Simple>All catergory</Simple>
          
     
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        
         <Link  to="/productpage" style={{textDecoration:'none', color:'black'}}><MenuItem onClick={handleClose}><Typography sx={{}}>Automobiles</Typography></MenuItem></Link>
        
        <MenuItem onClick={handleClose}>Clothes and Wear</MenuItem>
        <MenuItem onClick={handleClose}>Home INterior</MenuItem>
        <MenuItem onClick={handleClose}>Computer and Tech</MenuItem>
        <MenuItem onClick={handleClose}>Tools and equipments</MenuItem>
        <MenuItem onClick={handleClose}>Sports and outdoor</MenuItem>
        <MenuItem onClick={handleClose}>Animal and Pets</MenuItem>
        <MenuItem onClick={handleClose}>Machinary Tools</MenuItem>
        <MenuItem onClick={handleClose}>More Catergory</MenuItem>
      </Menu>
    </div>
  );
}
