import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function ExtaServicesCard() {
  return (
    <Card sx={{ width:'280px', height:'200px', mt:3 , mr:2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120px"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
          alt="green iguana"
        />
         <Box bgcolor="#D1E7FF" borderRadius="50%" width="50px" height="50px" position='absolute' ml={"75%"} mt={"-10%"}>
             <Button><SearchIcon sx={{color:'black', textAlign:'center', justifyContent:'center',mr:1, pt:1.2}}/></Button>
         </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" >
              Source from <br /> industry hub
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
