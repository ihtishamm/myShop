import { Box, Card } from "@mui/material";
import Category from "./Category";
import PicCard from "./picCard";
import Cards from "./Cards";


export default function FirstComponent() {
  return (
               <Card sx={{mt:3}}>
            <Box sx={{ height:"400px", width:"1180px", mt:2, maxWidth:"1180px" , maxHeight:"400px", display:"flex"}}>
                 <Category/>
                   <PicCard/>
                   <Cards/>
                   </Box>
                   </Card>
  )
}
