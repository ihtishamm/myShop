/* eslint-disable react/no-unescaped-entities */
import styled from "@emotion/styled";
import { Avatar, Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LanguageIcon from '@mui/icons-material/Language';
export default function InquiryCard() {

        
 const Buttons = styled(Button)({
   height:"40px",
   width:"248px",
  color:'white',
   marginLeft:"14px",
   textTransform:"capitalize",
   backgroundColor:"#127FFF",
    fontSize:'16px'
 })
   
    
 const Buttonss = styled(Button)({
   height:"40px",
   width:"248px",
  color:'#127FFF',
  backgroundColor:'white',
 fontSize:'16px',
   marginLeft:"14px",
   marginTop:"8px",
   textTransform:"capitalize"
 })
  return (
         <Card sx={{width:'280px', height:'325px', mt:2}}>
              
             
            <Box sx={{display:"flex", m:1}}>
                <Avatar   sx={{backgroundColor:"#C6F3F1", color:'#4CA7A7',   borderRadius:'10px',   border:'black', height:"48px", width:"48px", mt:1}}><Typography sx={{ fontVariant:'h6'  , fontSize:'30px' ,fontWeight:'bold'}}>
                    R</Typography></Avatar>
                  <Box ml={1}>
                 <Typography  variant="h6" ml={2}>Supplier </Typography>
                  <Typography  mt={-1} variant="h6" >Abdul Khan  LLC</Typography>
                  </Box>
                      </Box>  
                       <Divider sx={{mt:2, color:"gray"}} orientation="horizontal" />
                    
                      <Stack direction={"row"}>
                           <Typography mt={1}  ml={3} ><EmojiFlagsTwoToneIcon/></Typography>
                            <Typography mt={1} ml={3} sx={{color:"#8B96A5"}}>Germany, Berlin</Typography>
                            </Stack>
                              <Stack direction={"row"}>
                           <Typography mt={1}  ml={3} sx={{color:"#8B96A5"}}><ShieldOutlinedIcon/></Typography>
                            <Typography mt={1} ml={3} sx={{color:"#8B96A5"}}>Verified Sellar</Typography>
                            </Stack>
                              <Stack direction={"row"}>
                           <Typography mt={1}  ml={3} sx={{color:"#8B96A5"}}><LanguageIcon/></Typography>
                            <Typography mt={1} ml={3} sx={{color:"#8B96A5"}}>WorldWide Shipping</Typography>
                            </Stack>

         
                 <Buttons variant="contained"  sx={{mt:2}} >Send Inquery</Buttons>

                 
                   <Buttonss variant="contained" >Seller's Profile</Buttonss>
    
              
         
         </Card>
  )
}
