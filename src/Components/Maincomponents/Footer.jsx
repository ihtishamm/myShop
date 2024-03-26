import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShopIcon from '@mui/icons-material/Shop';
  export default function Footer() {
    return (
           <Card sx={{height:"256px", width:'100%', display:"flex"}}>
                <Box m={5} ml={10}>
        
                    <Box sx={{display:"flex", alignItems:"center", mb:2}}>
                   <ShoppingBagIcon sx={{color:"#8CB7F5" , width:"50px", height:"60px"}} />
                <Typography variant="h6" sx={{display: {xs:'none', sm:"block"}, color:"#8CB7F5", fontWeight:"600"}}>Brand</Typography>
                   </Box>
                    <Typography variant="body" color="#717171" >Best information about the company<br/> checkout over social media handals</Typography>
                   <Stack direction={"row"} spacing={2} mt={2}>
                   
                      <Avatar sx={{ bgcolor:"#BDC4CD"[500], height:'32px', width:'32px' }}>f</Avatar>
                       <Avatar  sx={{ bgcolor:"#BDC4CD"[500], height:'32px', width:'32px' }}> <TwitterIcon/>  </Avatar>
                        <Avatar sx={{ bgcolor:"#BDC4CD"[500], height:'32px', width:'32px' }}><LinkedInIcon/></Avatar>
                         <Avatar sx={{ bgcolor:"#BDC4CD"[500], height:'32px', width:'32px' }}><InstagramIcon/></Avatar>
                          <Avatar sx={{ bgcolor:"#BDC4CD"[500], height:'32px', width:'32px' }}><YouTubeIcon/></Avatar>
                          </Stack>
                </Box> 
                    
                     <Box m={6} height="137px" width="90px">
                        <Typography variant="h6" fontWeight="bold">About</Typography>
                          <Stack mt={2}>
                             <Typography color="#BDC4CD">About us</Typography>
                              <Typography color="#BDC4CD">Find Stores</Typography>
                               <Typography color="#BDC4CD">Categories</Typography>
                                <Typography color="#BDC4CD">Blogs</Typography>
                          </Stack>
                     </Box>
                        <Box m={6} height="137px" width="90px">
                        <Typography variant="h6" fontWeight="bold">Partnership</Typography>
                          <Stack mt={2}>
                             <Typography color="#BDC4CD">About us</Typography>
                              <Typography color="#BDC4CD">Find Stores</Typography>
                               <Typography color="#BDC4CD">Categories</Typography>
                                <Typography color="#BDC4CD">Blogs</Typography>
                          </Stack>
                     </Box>
                     <Box m={6} height="137px" width="110px">
                        <Typography variant="h6" fontWeight="bold">Information</Typography>
                          <Stack mt={2}>
                             <Typography color="#BDC4CD">Help Center</Typography>
                              <Typography color="#BDC4CD">Money Refund</Typography>
                               <Typography color="#BDC4CD">Shipping</Typography>
                                <Typography color="#BDC4CD">Contact us</Typography>
                          </Stack>
                     </Box>
                     <Box m={6} height="137px" width="100px">
                        <Typography variant="h6" fontWeight="bold">For Users</Typography>
                          <Stack mt={2}>
                             <Typography color="#BDC4CD">Login</Typography>
                              <Typography color="#BDC4CD">Register</Typography>
                               <Typography color="#BDC4CD">Settings</Typography>
                                <Typography color="#BDC4CD">My order</Typography>
                          </Stack>
                     </Box>
                          <Box  m={4} mt={6} height="137px" width="100px">
                        <Typography variant="h6" fontWeight="bold">Get App</Typography>
                        <Stack mt={2}>
                         <Button sx={{height:'42px', width:'124px', bgcolor:"black", color:"white", mb:'10px'}} component="label" variant="contained" startIcon={<AppleIcon/>}>
                            <Typography textTransform="capitalize" fontSize={9}>download from <br/> <b>App Store</b></Typography></Button>

                               <Button sx={{height:'42px', width:'124px', bgcolor:"black", color:"white", mb:'10px'}} component="label" variant="contained" startIcon={<ShopIcon/>}>
                            <Typography textTransform="capitalize" fontSize={9}>download from <br/> <b>Play Store</b></Typography></Button>
                            </Stack>
                      </Box>
           </Card>
    )
  }
  