import { Box, Typography } from "@mui/material";
import Categroies from "./Catgories";
import Options from "../NavComponents/Options";
import styled from "@emotion/styled";
import Language from "../NavComponents/Language";
import Country from "../NavComponents/Country";




 const Typo = styled(Typography)({
     
   marginRight:"14px",
   paddingTop:"6px",
  fontWeight:"bold"

 }) 

  
 


  export default function Header() {
    return (
           <Box sx={{height:"20px", maxHeight:"35px", bgcolor:'white', display: "flex", padding:2, justifyContent:'space-around' }}>
          
          <Box sx={{ display:'flex',  } }>
              <Categroies />
            
            <Typo>Hot Offers</Typo>
             <Typo>Gift Boxes</Typo>
             <Typo>Projects</Typo>
             <Typo>Menu Items</Typo>
             <Options/>
             </Box>
           
            
             <Box sx={{display:"flex", justifyContent:'flex-end', paddingTop:"4px"}}>
                   <Language/>
                   <Country/>
             </Box>
          </Box>
    )
  }
  
  