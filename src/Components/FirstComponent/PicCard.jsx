import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

 const Buttons = styled(Button)({
    color:"black",
    backgroundColor:"white",
    textTransform:'capitalize',
    marginTop:"20px"

 })
 

export default function PicCard() {
    return (
        <Box height="380px" width="665px"   sx={{backgroundImage:`url(src/Components/Resources/Maskgroup.png)`}} pt="2">
           
           <Box m={6}>
         <Typography variant="h6" >Lastest tranding</Typography>
          <Typography variant="h5" fontWeight='bolder'>Electronic Items</Typography>
         <Buttons variant="contained" >learn more</Buttons>

         </Box>
        </Box>
    );
}
