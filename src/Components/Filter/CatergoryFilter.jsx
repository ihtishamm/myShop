
  
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Typography } from '@mui/material';
export default function CategoryFilter() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 230, bgcolor: '#F7FAFC',  ml:1}}
      component="nav"
     
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText><Typography variant='h6'>Catergories</Typography></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
            <ListItemText primary="Mobile accessory" />
          </ListItemButton>
           <ListItemButton>
            <ListItemText primary="Electorics" />
          </ListItemButton>
           <ListItemButton>
            <ListItemText primary="SmartPhones" />
          </ListItemButton>
           <ListItemButton>
            <ListItemText primary="Modern tech" />
          </ListItemButton>
           <ListItemButton>
            <ListItemText sx={{color:"#0D6EF6"}}>See all</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
 
