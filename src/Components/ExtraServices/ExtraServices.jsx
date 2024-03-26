import { Box, Typography } from "@mui/material";
import ExtaServicesCard from "./ExtaServicesCard";


export default function ExtraServices() {
  return (
          <Box sx={{height:'256px', width:'1180px'}}>
         <Typography  variant="h6" fontWeight="bold">Our Extra Services</Typography>
         <Box sx={{display:'flex', flexDirection:'row'}}>
            <ExtaServicesCard/>
             <ExtaServicesCard/>
              <ExtaServicesCard/>
               <ExtaServicesCard/>
         </Box>
         </Box>
       
  )
}
