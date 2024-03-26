import { Box, Typography } from "@mui/material";
import SuppliersCountry from "./SuppliersCountry";


export default function Suppliers() {
  return (
         <Box sx={{height:'138px', width:'1180px', mt:4}}>
         <Typography  variant="h6" fontWeight="bold">Supplies by region</Typography>
         <Box sx={{display:'flex', flexDirection:'row', flexWrap:"wrap"}}>
            <SuppliersCountry/>
            <SuppliersCountry/>
            <SuppliersCountry/>
            <SuppliersCountry/>
            <SuppliersCountry/>
            <SuppliersCountry/>
            <SuppliersCountry/>
            <SuppliersCountry/>
            <SuppliersCountry/>
            <SuppliersCountry/>
         </Box>
         </Box>
  )
}
