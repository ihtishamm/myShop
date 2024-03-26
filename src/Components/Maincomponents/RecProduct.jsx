import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function RecProduct() {
  return (
     
        <Card sx={{height:"310px", width:"220px", maxHeight:"310px", maxWidth:"220px", mt:2, mr:2}}>
        
        <CardMedia
  style={{height: "170px",width:"157px", justifyContent:'center' ,textAlign:'center', marginLeft:"30px"}}
  image="https://img.freepik.com/free-vector/mans-suit-realistic-composition-with-smart-costume-with-white-shirt-tie-jacket_1284-54345.jpg?size=626&ext=jpg&ga=GA1.1.744522913.1698312505&semt=sph"
  title="cot"
/>
     <Link to="/productpage"  style={{textDecoration:'none', color:'black'}}>
     <CardContent  sx={{mt:2}}>
        <Typography variant="h6">$10.09</Typography>
        <Typography color="#C5CAD2">Cannon Camera black<br/>100x Zoom</Typography>
         
     </CardContent>

            </Link>
       </Card>
     
  )
}
   