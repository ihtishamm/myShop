import { Box, Card } from "@mui/material";
import OfferDate from "./Date";
import OfferCard from "./OfferCard";


export default function SecondComponent() {
  return (
      <Card sx={{mt:3}}>
        <Box sx={{height:"240px", maxHeight:"240px", width:"1180px", maxWidth:"1180px", display:"flex"}}>
              <OfferDate/>
              <OfferCard/>
              <OfferCard/>
              <OfferCard/>
              <OfferCard/>
              <OfferCard/>
        </Box>
             
      </Card>
  )
}
