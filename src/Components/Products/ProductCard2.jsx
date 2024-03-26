import { Box, Button, Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import { Link } from "react-router-dom";
 import { useDispatch } from "react-redux";
import SaveForLater from "../Cart/SaveForLater";
                                          
 

export default function ProductCard2({id,name,orders,price, rating, discount, description, image,shipping ,}) { 
     
   const dispatch = useDispatch();
      
  
  return (
             <Card sx={{width:'920px', height:'230px', mt:3, display:"flex", justifyContent:'flex-end',
              
             key:{id}
            
             }}>
             <CardMedia 
        sx={{ height: 182, width:182, maxWidth:182, minWidth:182, mt:3, ml:2}}
        image={image}
        title="iphone 11"
      />
 
 
               <CardContent sx={{position:"relative"}}>
                 <Typography ml={3} variant="h6">{name}</Typography>
                 <Box display={'flex'}>
    <Typography  fontWeight='bold' variant='h6' ml={3}  mt={2}>${price}</Typography>
     <Typography sx={{textDecoration:'line-through'}} color="#929CAA" mt={2.5} ml={2}>${discount}</Typography>
     <Card sx={{height:'40px', width:"40px", position:"absolute", right:'30px'}}> 
      <Box ml={1} mt={1} bgcolor={'white'}> <Button onClick={()=> dispatch(SaveForLater(name)) }><FavoriteBorderIcon sx={{color:'blue', ml:-5, mt:-0.5}}/></Button></Box>
     </Card>
     </Box>  
        <Box display={'flex'} ml={3}>
       <Rating name="half-rating" defaultValue={rating} precision={0.5} />
        <Typography ml={1} color="#FF9017">{rating}</Typography>
         
          <FiberManualRecordTwoToneIcon sx={{width:'10px', height:'10px', ml:3, mt:0.8}} color="#D4CDC5"></FiberManualRecordTwoToneIcon>
           <Typography ml={1} color="#99A3B0">{orders} orders</Typography>
           <FiberManualRecordTwoToneIcon sx={{width:'10px', height:'10px', ml:2, mt:0.8, }} color="#D4CDC5"></FiberManualRecordTwoToneIcon>
            <Typography ml={1} color="#00b517">{shipping}</Typography>
        </Box>
          
            <Typography  mt={1} ml={3} fontSize={18} color="#505050">{description}</Typography>
         <Link style={{textDecoration:'none'}} to={`/productDescription/${id}`}>  <Typography color="#0D6EFD" fontSize={18} ml={3}>View details</Typography> </Link>
             </CardContent>
             </Card>
  )
}

  