import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";


export default function  GedgetSource() {

    const Buttons = styled(Button)({
    color:"black",
    backgroundColor:"white",
    textTransform:'capitalize',
    marginTop:"20px"


 })
  return (
    <Box height="270px" width="280px"   maxHeight="270px"  sx={{backgroundImage:`url(https://sabaitalia.com/Saba/Prodotti/SOFAS/PIXEL/web_images/image-thumb__902__productDetailSlider/saba-Pixel20_folder-cover.webp)`}}>
           
           <Box  pl={2} pt={3}>
         <Typography variant="h5"  fontWeight="bold">Consumer <br/>electronic and <br/>gadgets</Typography>
         <Buttons variant="contained" >Source now</Buttons>
      
         </Box>
        </Box>
    
  )
}
