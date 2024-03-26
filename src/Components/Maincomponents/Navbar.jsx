  import styled from "@emotion/styled";
  import { Link } from "react-router-dom";

import { AppBar, Box,  Toolbar, Typography ,   BottomNavigation, BottomNavigationAction,  Button, Input} from "@mui/material";
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
  import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import FavoriteIcon from '@mui/icons-material/Favorite'
    import { createTheme } from '@mui/material/styles';



 const theme =    createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    

const StyledToolBar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-evenly"
})


const Icons = styled(Box)({
   display: "none",
   gap: "20px",
    padding: "0 10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    },


}
)

   const Wrapper = styled(Input)({
      padding:"10px",
      border: "2px solid #8CB7F5",
      
      fontSize:"16px",
      width:"421px",
      borderRadius:"10px",
       borderTopRightRadius:"0px",
       textDecoration:"none",
       borderBottomRightRadius:"0px"
   })
 
      const Buttons = styled(Button)({
        borderTopLeftRadius: "none",
        borderBottomLeftRadius:"none",
      })
// const Catagories = [
//   { label: 'Automobiles'},
//   { label: 'Home Interior'},
//   { label: 'Cothes and wear'},
//   { label: "Food and Vegitables" },
//   { label: 'Sports and outdoor' },
//   { label: "Animal and Pets" },
//   { label: "Digital Product" },
// ]

      


export default function NavBar() {
   
    return (
 
        <AppBar sx={{bgcolor:"white"}} position="sticky">
                <StyledToolBar>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                   <ShoppingBagIcon sx={{color:"#8CB7F5" , width:"50px", height:"60px"}} />
            <Link to="/" style={{textDecoration:'none'}}>   <Typography variant="h6" sx={{display: {xs:'none', sm:"block"}, color:"#8CB7F5", fontWeight:"600"}}>Brand</Typography></Link>
                   </Box>

                   <Box sx={{display:"flex", maxHeight:"40px"}} >
                   
                   <Wrapper>
                 <input placeholder="search" />
                 </Wrapper>
           
            
             
           <Buttons variant="contained" size="medium">
          Search
        </Buttons>
       
      </Box>
     
    
                 <Icons>
               <BottomNavigation
        showLabels
      >

        <BottomNavigationAction label="Profile" icon={<PersonIcon   />}></BottomNavigationAction>
               
        <BottomNavigationAction label="Message" icon={<MessageIcon />} />
    <Link to="/Cart" style={{textDecoration:'none'}}>    <BottomNavigationAction label="Order" icon={<FavoriteIcon sx={{mb:0.5, mt:-0.5,}}/>} /><Typography mt={-2.6} ml={3} sx={{color:"gray", fontSize:"14px", textDecoration:'none'}}>Order</Typography></Link>
         <Link to="/Cart" style={{textDecoration:'none'}}> <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon  sx={{mb:0.5, mt:-0.5,}}/>} /><Typography mt={-2.6} ml={3} sx={{color:"gray", fontSize:"14px", textDecoration:'none'}}>Cart</Typography></Link>
          
               </BottomNavigation>
               </Icons>
               </StyledToolBar>
                </AppBar>
    )
}                                                

