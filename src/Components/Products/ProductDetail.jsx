import { Box, Button, Card, CardMedia, Divider, Rating, Stack,  Typography } from "@mui/material";
 import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone'
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import DoneTwoTone from "@mui/icons-material/DoneTwoTone";
 import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import InquiryCard from "./InquiryCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Featuers/cartSlice";

 

 export default function ProductDetail({Param}) {
 
   const items = useSelector((state) => state.CartAll.items)
   const dispatch = useDispatch();
   
  const Found = items.find(obj => {
    return   obj.id == Param;
  })
  //  console.log(Found);
   return (
             
              <Card sx={{width:'1180px', height:'580px',mt:2, display:'flex', bgcolor:'#FAFBFC' }} >
                 <Box>
                  <Box>
                  <Card sx={{width:'380px', height:'280px', m:2}}>
                         <CardMedia 
        sx={{ height: "250px", width:"250px", mt:2 , ml:8}}
        image={Found.image}
        title="iphone 11"
      />
                  </Card>
                   </Box>
                    <Box  width={380} height={58} display={"flex"}>
                        <Card sx={{width:56, height:56, ml:3}}>
                            <CardMedia
                                 sx={{ height: "40px", width:"40px",mt:1, ml:0.5}}
                                  image={Found.image}
                                title="iphone 11" />
                 </Card>
                 <Card sx={{width:56, height:56, ml:2}}>
                            <CardMedia
                                 sx={{ height: "40px", width:"40px",mt:1, ml:0.5}}
                                  image={Found.image}
                                title="iphone 11" />
                       
                        </Card>
                        <Card sx={{width:56, height:56, ml:2}}>
                           <CardMedia
                                 sx={{ height: "40px", width:"40px",mt:1, ml:0.5}}
                                  image={Found.image}
                                title="iphone 11" />
                       
                        </Card>
                        <Card sx={{width:56, height:56, ml:2}}>
                           <CardMedia
                                 sx={{ height: "40px", width:"40px",mt:1, ml:0.5}}
                                  image={Found.image}
                                title="iphone 11" />
                       
                        </Card>
                        <Card sx={{width:56, height:56, ml:2}}>
                            <CardMedia
                                 sx={{ height: "40px", width:"40px",mt:1, ml:0.5}}
                                  image={Found.image}
                                title="iphone 11" />
                       
                        </Card>
                        <Card sx={{width:56, height:56, ml:2}}>
                            <CardMedia
                                 sx={{ height: "40px", width:"40px",mt:1, ml:0.5}}
                                  image={Found.image}
                                title="iphone 11" />
                       
                        </Card>
                    </Box>
                    </Box>
                      <Box width={430} height={514} m={2}> 
                      <Stack direction={"row"}>
                         <DoneTwoTone sx={{color:"green"}} />
                          <Typography ml={1} color={"green"}>In stock</Typography>
                      </Stack>
                       <Typography variant="h6" fontWeight="bolder">{Found.name}</Typography>
                        <Box display={'flex'} mt={1}>
        <Rating name="half-rating" defaultValue={Found.rating} precision={0.5} />
        <Typography ml={1} color="#FF9017">{Found.rating}</Typography>
          
          <FiberManualRecordTwoToneIcon sx={{width:'10px', height:'10px', ml:3, mt:0.8}} color="#D4CDC5"></FiberManualRecordTwoToneIcon>
           <Typography ml={1} color="#99A3B0" display={'flex'}><MessageTwoToneIcon/><Typography ml={1}>{Found.reviwe} reviews</Typography></Typography>
           <FiberManualRecordTwoToneIcon sx={{width:'10px', height:'10px', ml:2, mt:0.8, }} color="#D4CDC5"></FiberManualRecordTwoToneIcon>
            <Typography ml={1} color="#99A3B0" mt={0} display={'flex'}><ShoppingBasketTwoToneIcon/>  <Typography  ml={1}>{Found.reviwe} sold</Typography> </Typography>
        </Box>
                     
               <Box height={72} width={430} sx={{bgcolor:"#FFF0DF"}}>
                  
                    <Stack direction={"row"}>
                    <Stack ml={3}> 
                        <Typography mt={1} variant="h6" color="red">${Found.price}</Typography>
                        <Typography>50-100 pcs</Typography>
                    </Stack>
                        <Divider sx={{ml:4}}   orientation="vertical" flexItem /> 
                         <Stack ml={1}> 
                        <Typography mt={1} variant="h6" color="black">${Found.price}</Typography>
                        <Typography>70-100 pcs</Typography>
                    </Stack>
                            <Divider sx={{ml:4}}     orientation="vertical" flexItem /> 
                    <Stack ml={1} > 
                        <Typography mt={1} variant="h6" color="black">${Found.price}</Typography>
                        <Typography>700+ pcs</Typography>
                    </Stack>
                         </Stack>
               </Box>
                            <Stack direction={"row"}>
                           <Typography mt={2}  ml={0.5} sx={{color:"#8B96A5"}}>Price:</Typography>
                            <Typography mt={2} ml={"25%"} sx={{color:"#505050"}}>{Found.Behas}</Typography>
                            </Stack>
                            <Divider sx={{mt:1}} orientation="horizontal" />
                            <Stack direction={"row"}>
                           <Typography mt={2}  ml={0.5} sx={{color:"#8B96A5"}}>Type:</Typography>
                            <Typography mt={2} ml={14} sx={{color:"#505050"}}>{Found.Type}</Typography>
                            </Stack>
                            <Stack direction={"row"}>
                           <Typography mt={2}  ml={0.5} sx={{color:"#8B96A5"}}>Material:</Typography>
                            <Typography mt={2} ml={11}  sx={{color:"#505050"}}>{Found.Material}</Typography>
                            </Stack>
                            <Stack direction={"row"}>
                           <Typography mt={2}  ml={0.5} sx={{color:"#8B96A5"}}>Design:</Typography>
                            <Typography mt={2} ml={12} sx={{color:"#505050"}}>{Found.Design}</Typography>
                            </Stack>
                             <Divider sx={{mt:1}} orientation="horizontal" />
                            <Stack direction={"row"}>
                           <Typography mt={2}  ml={0.5} sx={{color:"#8B96A5"}}>Customizationn:</Typography>
                            <Typography mt={2} ml={4} sx={{color:"#505050"}}>{Found.Customization}</Typography>
                            </Stack>
                            <Stack direction={"row"}>
                           <Typography mt={2}  ml={0.5} sx={{color:"#8B96A5"}}>Protection:</Typography>
                            <Typography mt={2} ml={9} sx={{color:"#505050"}}>{Found.Protection}</Typography>
                            </Stack>
                            <Stack direction={"row"}>
                           <Typography mt={2}  ml={0.5} sx={{color:"#8B96A5"}}>Warranty:</Typography>
                            <Typography mt={2} ml={10} sx={{color:"#505050"}}>{Found.Warranty}</Typography>
                            </Stack>
                            <Divider sx={{mt:2}} orientation="horizontal" />
                      </Box>
                         
                          <Box>
                         <InquiryCard/>
                          <Stack direction={"row"} mt={4} ml={9}>
                             <ShoppingCartIcon sx={{color:'#127FFF'}}></ShoppingCartIcon>
                              <Button onClick={() => dispatch(addToCart(Found))} sx={{mt:-1}}>Add To Cart</Button>
                          </Stack>
                         </Box>

              </Card>
   )
 }
 
   