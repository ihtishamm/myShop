import { Box, Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function SaveForLater() {
  return (
         <Card sx={{width:'1180px', height:'475px', minWidth:"1180px", maxHeight:"475px", mt:2}}>
               
                 <Typography m={2} ml={3} variant="h6" fontWeight="bold">Saved for later</Typography>
           
                   <Stack  direction={"row"} spacing={2.5} ml={1}>
                    <Box width={270} height={382}>
                           <Card sx={{width:270, height:240,  ml:2, bgcolor:'#EEEEEE'}}>
                            <CardMedia
                                 sx={{ height: " 185px",minHeight:'185px' , width:"225px", minWidth:'225px' ,ml:2.5, mt:3 ,}}
                                  image="src/Components/Resources/15.svg"
                                title="iphone 11" />
                             </Card>
                              <Stack ml={2} mt={1}>
                                 <Typography variant="h6" fontWeight="bold">$700.9</Typography>
                                    <Typography>Rolax Watch E4 2012</Typography>
                                <Typography >Full Waranty</Typography>
                                     <Button  sx={{borderColor:'#EEEEEE', height:40, width:'157px', mt:1, borderRadius:'10px', color:'#0D6EFD',fontWeight:'bold' , textTransform:'lowercase'}} variant="outlined"  startIcon={<ShoppingCartOutlinedIcon sx={{color:'#0D6EFD'}} />}>Move to cart</Button>
                                 </Stack> 
                    </Box>
                    <Box width={270} height={382}>
                           <Card sx={{width:270, height:240,  ml:2, bgcolor:'#EEEEEE'}}>
                            <CardMedia
                                 sx={{ height: " 185px",minHeight:'185px' , width:"225px", minWidth:'225px' ,ml:2.5, mt:3 ,}}
                                  image="src/Components/Resources/15.svg"
                                title="iphone 11" />
                             </Card>
                              <Stack ml={2} mt={1}>
                                 <Typography variant="h6" fontWeight="bold">$700.9</Typography>
                                    <Typography>Rolax Watch E4 2012</Typography>
                                <Typography >Full Waranty</Typography>
                                     <Button  sx={{borderColor:'#EEEEEE', height:40, width:'157px', mt:1, borderRadius:'10px', color:'#0D6EFD',fontWeight:'bold' , textTransform:'lowercase'}} variant="outlined"  startIcon={<ShoppingCartOutlinedIcon sx={{color:'#0D6EFD'}} />}>Move to cart</Button>
                                 </Stack> 
                    </Box>
                    <Box width={270} height={382}>
                           <Card sx={{width:270, height:240,  ml:2, bgcolor:'#EEEEEE'}}>
                            <CardMedia
                                 sx={{ height: " 185px",minHeight:'185px' , width:"225px", minWidth:'225px' ,ml:2.5, mt:3 ,}}
                                  image="src/Components/Resources/15.svg"
                                title="iphone 11" />
                             </Card>
                              <Stack ml={2} mt={1}>
                                 <Typography variant="h6" fontWeight="bold">$700.9</Typography>
                                    <Typography>Rolax Watch E4 2012</Typography>
                                <Typography >Full Waranty</Typography>
                                     <Button  sx={{borderColor:'#EEEEEE', height:40, width:'157px', mt:1, borderRadius:'10px', color:'#0D6EFD',fontWeight:'bold' , textTransform:'lowercase'}} variant="outlined"  startIcon={<ShoppingCartOutlinedIcon sx={{color:'#0D6EFD'}} />}>Move to cart</Button>
                                 </Stack> 
                    </Box>
                    <Box width={270} height={382}>
                           <Card sx={{width:270, height:240,  ml:2, bgcolor:'#EEEEEE'}}>
                            <CardMedia
                                 sx={{ height: " 185px",minHeight:'185px' , width:"225px", minWidth:'225px' ,ml:2.5, mt:3 ,}}
                                  image="src/Components/Resources/15.svg"
                                title="iphone 11" />
                             </Card>
                              <Stack ml={2} mt={1}>
                                 <Typography variant="h6" fontWeight="bold">$700.9</Typography>
                                    <Typography>Rolax Watch E4 2012</Typography>
                                <Typography >Full Waranty</Typography>
                                     <Button  sx={{borderColor:'#EEEEEE', height:40, width:'157px', mt:1, borderRadius:'10px', color:'#0D6EFD',fontWeight:'bold' , textTransform:'lowercase'}} variant="outlined"  startIcon={<ShoppingCartOutlinedIcon sx={{color:'#0D6EFD'}} />}>Move to cart</Button>
                                 </Stack> 
                    </Box>
                    </Stack>
                    </Card>
  )
}
