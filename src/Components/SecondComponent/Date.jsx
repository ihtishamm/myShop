import { Box,  Card,  Typography } from "@mui/material";


export default function OfferDate() {
  return (

       <Card sx={{width:"260px", height:"240px",maxWidth:"281px", maxHeight:"240px"}}>
        
         <Box m={3}>
            <Typography variant="h6" fontWeight="bold">Deals and Offers</Typography>
            <Typography>Hygiene equipments</Typography>
       </Box>
               <Box sx={{display:'flex', m:2} }>
                 <Box height={50} width={45} sx={{backgroundColor:"#606060", borderRadius:"10px", color:'white', mr:1}}>
                       <Typography fontWeight="bolder" ml={1.5}>04</Typography>  
                       <Typography ml={0.5}>Days</Typography>              
                 </Box>
                  <Box height={50} width={45} sx={{backgroundColor:"#606060", borderRadius:"10px", color:'white',mr:1}}>
                       <Typography fontWeight="bolder" ml={1.5}>10</Typography>  
                       <Typography ml={0.5}>Hour</Typography>              
                 </Box>
                  <Box height={50} width={45} sx={{backgroundColor:"#606060", borderRadius:"10px", color:'white',mr:1}}>
                       <Typography fontWeight="bolder" ml={1.5}>57</Typography>  
                       <Typography ml={1}>Min</Typography>              
                 </Box>
                  <Box height={50} width={45} sx={{backgroundColor:"#606060", borderRadius:"10px", color:'white',mr:1}}>
                       <Typography fontWeight="bolder" ml={1.5}>04</Typography>  
                       <Typography ml={1}>Sec</Typography>              
                 </Box>
               </Box>
       </Card>
  )
}
