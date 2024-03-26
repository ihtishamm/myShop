/* eslint-disable react/no-unescaped-entities */
import styled from "@emotion/styled";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";

 
  
 const Buttons = styled(Button)({
   height:"25px",
   width:"180px",
  color:'white',
   marginLeft:"9px",
   textTransform:"capitalize"
 })
   
    
 const Buttonss = styled(Button)({
   height:"25px",
   width:"180px",
  color:'#599BFE',
  backgroundColor:'white',

   marginLeft:"9px",
   marginTop:"8px",
   textTransform:"capitalize"
 })
  
  
export default function Cards() {
  return (
    
       <Box m={2} mt={0}>
        
         <Card sx={{height:"150px", width:"200px", maxHeight:"150px", maxWidth:"200px", backgroundColor:"#E3F0FF", mb:2}}>
            <Box sx={{display:"flex", m:1}}>
                <Avatar src="/broken-image.jpg"  sx={{backgroundColor:"#C7E1FF", border:'black', height:"44px", width:"44px"}}/>
                  <Box>
                 <Typography  variant="h6" ml={2}>Hi, user </Typography>
                  <Typography  variant="h6" >let's get started</Typography>
                  </Box>
            </Box>  
                 <Buttons variant="contained" > join now </Buttons>
                   <Buttonss variant="contained"> log in  </Buttonss>
    
              
         </Card>
         <Card sx={{height:"95px" , width:"200px", maxHeight:"95px", maxWidth:"200px",backgroundColor:"#F38332", mb:2}}>
           <Typography variant="h6" ml={2}  color="white">Get us $10 off <br/>with a new <br/>supplies</Typography>
             
         </Card>
        <Card sx={{height:"95px" , width:"200px", maxHeight:"95px", maxWidth:"200px",backgroundColor:"#55BDC3"}}>
          <Box >
          <Typography variant="h6" ml={2}  color="white">Send quotes with<br/>supplies<br/>preferences</Typography>
          </Box>
        </Card>
      
       </Box>
  )
}
