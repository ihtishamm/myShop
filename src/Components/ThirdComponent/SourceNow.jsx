import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";


export default function SourceNow() {

    const Buttons = styled(Button)({
    color:"black",
    backgroundColor:"white",
    textTransform:'capitalize',
    marginTop:"20px"


 })
  return (
    <Box height="257px" width="280px"   maxHeight="257px"  sx={{backgroundImage:`url(https://sabaitalia.com/Saba/Prodotti/SOFAS/PIXEL/web_images/image-thumb__902__productDetailSlider/saba-Pixel20_folder-cover.webp)`}}>
           
         
           <Box pl={2} pt={3}>
         <Typography variant="h5" fontWeight="bold">Home and <br/>Outdoor</Typography>
         <Buttons variant="contained">Source now</Buttons>
         </Box>
      
         </Box>
       
  )
}