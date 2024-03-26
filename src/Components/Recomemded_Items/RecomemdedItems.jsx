import { Box,   Typography } from "@mui/material";
import RecProduct from "../Maincomponents/RecProduct";



export default function RecomemdedItems() {
  return (
         <>
            <Typography mt={3} variant="h6" fontWeight="bold">Recommended Items</Typography>
             <Box sx={{width:"1180px", alignContent:'flex-start' , height:"696px",flexDirection:'row', display:'flex' , flexWrap:'wrap' }} bgcolor="#F7FAFC">
                  

                 <RecProduct/>
                <RecProduct/>
                <RecProduct/>
                <RecProduct/>
                <RecProduct/>
                <RecProduct/>
                <RecProduct/>
                <RecProduct/>
                <RecProduct/>
                <RecProduct/>
                
               
               
             </Box>
             </>
             
  )
}
