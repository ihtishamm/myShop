import {  Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
  

export default function SourceProduct() {
  return (
    
       <Link to="/ProductPage"  style={{textDecoration:'none'}}>
      <Card sx={{height:"127px", width:"218px", maxHeight:"127px", maxWidth:"218px", position:"relative"}}>
        
        <CardMedia
  style={{width:"75px", height:"75px", position:"absolute", bottom:"8px", right:"10px"}}
  image="https://img.freepik.com/free-vector/sticker-white-t-shirt-with-coathanger_1308-88578.jpg?size=626&ext=jpg"
  title="chair"
/>
     <CardContent>
        <Typography variant="h6">Soft Chair</Typography>
            <Typography color="#8B96A5">From <br/> USD 19</Typography>
     </CardContent>
     </Card>
      </Link>
  )
}
  


   