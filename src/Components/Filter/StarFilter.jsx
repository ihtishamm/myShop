/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

  
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Checkbox, ListItemIcon, Rating, Typography } from '@mui/material';

export default function StarFilter() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 230, bgcolor: '#F7FAFC',ml:1 }}
      component="nav"
     
    >
      <ListItemButton onClick={handleClick}  dense>
        <ListItemText ><Typography variant='h6'>Ratings</Typography></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{mb:-2}}>
               <ListItemIcon>
                <Checkbox/>
              </ListItemIcon>
            <ListItemText>
                <Rating name="read-only" value={5} readOnly />
            </ListItemText>
          </ListItemButton >
           <ListItemButton  sx={{mb:-2}}>
            <ListItemIcon>
                <Checkbox/>
              </ListItemIcon>
            <ListItemText>
                <Rating name="read-only" value={4} readOnly />
            </ListItemText>
          </ListItemButton>
           <ListItemButton  sx={{mb:-2}}>
            <ListItemIcon>
                <Checkbox/>
              </ListItemIcon>
            <ListItemText>
                <Rating name="read-only" value={3} readOnly />
            </ListItemText>
          </ListItemButton>
           <ListItemButton  sx={{mb:-2}}>
            <ListItemIcon>
                <Checkbox/>
              </ListItemIcon>
            <ListItemText>
                <Rating name="read-only" value={2} readOnly />
            </ListItemText>
          </ListItemButton>
           <ListItemButton  sx={{mb:-2}}>
            <ListItemText>
                <ListItemIcon>
                <Checkbox/>
              </ListItemIcon>
                <Rating name="read-only" value={1} readOnly />
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
 