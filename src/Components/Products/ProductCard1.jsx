


import Card from '@mui/material/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box,Rating } from '@mui/material';

export default function ProductCard1() {
  return (
     <Box maxWidth='295px' maxHeight='405px' width={295} height={405}>
    <Card sx={{ height:'261px', width:'295px'}}>
      <CardMedia
        sx={{ height: 202, width:202,  ml:4 ,  mt:4}}
        image="src/Components/Resources/image33.png"
        title="iphone 11"
      />
    </Card>
           <Box display={'flex'}>
    <Typography  variant='h6' ml={3}  mt={2}>$99.9</Typography>
     <Typography sx={{textDecoration:'line-through'}} color="#929CAA" mt={2.5} ml={2}>$128.09</Typography>
     <Card sx={{height:'40px', width:"40px", position:'absolute', ml:"15%", mt:2}}> 
      <Box ml={1} mt={1} bgcolor={'white'}><FavoriteBorderIcon sx={{color:'blue'}}/></Box>
     </Card>
     </Box> 
        <Box display={'flex'} ml={3}>
        <Rating name="size-small" defaultValue={4} size='small'/>
        <Typography ml={1} color="#FF9017">7.5</Typography>
        </Box>
         <Typography ml={3} color="#868787">GoPro HERO6 Ak Action</Typography>
         <Typography ml={3}  color="#868787"> Camera - Black</Typography>
          
            
          
    </Box>
  );
}
