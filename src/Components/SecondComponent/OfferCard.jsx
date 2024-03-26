import {   Box, Card,  CardContent,  CardMedia, Typography } from "@mui/material";


export default function OfferCard() {
  return (
       <Card sx={{height:"240px", width:"179px", maxHeight:"240px", maxWidth:"179px"}}>
        
        <CardMedia 
  style={{height: "30px",width:"100px", paddingTop: '56.25%', marginTop:"15px", marginLeft:"40px"}}
  image="https://freesvg.org/img/metalmarious_Laptop.png"
  title="Laptop"
/>
     <CardContent sx={{ justifyContent:'center', textAlign:"center"}}>
        <Typography variant="h6">Laptops</Typography>
        <Box sx={{height:"28px", width:"60px",backgroundColor:'#FFE3E3', ml:"40px", borderRadius:"10px"}}>
             <Typography marginLeft="3px" marginTop="3px" paddingTop="3px" color="#F0394D">-28%</Typography>
        </Box>
     </CardContent>
  
         
          
       </Card>
  )
}
