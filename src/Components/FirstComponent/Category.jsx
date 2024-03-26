import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";


export default function Category() {
  return (
          <Box flex={1} padding="2"  height="360px" width="250px" maxHeight="360px" maxWidth="250px"> 
          
     <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              
              <ListItemText primary="Automobiles" />
            </ListItemButton>
          </ListItem>
              
                <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              
          
              <ListItemText primary="Clothes and Wear" />
            </ListItemButton>
          </ListItem>
           
                   <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemText primary="Home Interior" />
            </ListItemButton>
          </ListItem>

              <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              
              <ListItemText primary="Computer and Tech" />
            </ListItemButton>
          </ListItem>

           <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
             
              <ListItemText primary="Tools and euipments" />
            </ListItemButton>
          </ListItem>
            
            <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
             
              <ListItemText primary="Sports and Outdoor" />
            </ListItemButton>
          </ListItem>

            <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
           
              <ListItemText primary="Animal and pets" />
            </ListItemButton>
          </ListItem>
           
            <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
             
              <ListItemText primary="More Category" />
            </ListItemButton>
          </ListItem>
           
          </List>
          </Box>
          </Box>
  )
}
