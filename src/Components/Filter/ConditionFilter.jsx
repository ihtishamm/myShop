/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

  
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Checkbox, ListItemIcon, Radio, Typography } from '@mui/material';

export default function ConditionFilter() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '230px', maxWidth: 230,  bgcolor: '#F7FAFC',ml:1 }}
      component="nav"
     
    >
      <ListItemButton onClick={handleClick}  dense>
        <ListItemText ><Typography variant='h6'>Conditions</Typography></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{mb:-2}}>
               <ListItemIcon>
              <Radio  />
              </ListItemIcon>
            <ListItemText primary="Any" />
          </ListItemButton >
           <ListItemButton  sx={{mb:-2}}>
            <ListItemIcon>
                <Radio  />
              </ListItemIcon>
            <ListItemText primary="Brand New" />
          </ListItemButton>
           <ListItemButton  sx={{mb:-2}}>
            <ListItemIcon>
               <Radio />
              </ListItemIcon>
            <ListItemText primary="Old Item" />
          </ListItemButton>
           <ListItemButton  sx={{mb:-2}}>
            <ListItemIcon>
                <Radio/>
              </ListItemIcon>
            <ListItemText primary="Renified" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}