import { Box,  Container, Stack, Typography } from "@mui/material";
import Navbar from "./Components/Maincomponents/Navbar";

import DiscountCard from "./Components/Products/DiscountCard";
import Footer from "./Components/Maincomponents/Footer";
import CartMenu from "./Components/Cart/CartMenu";
import CouponCart from "./Components/Cart/CouponCart";
import Checkout from "./Components/Cart/Checkout";
import Services from "./Components/Cart/services";
import SaveForLater from "./Components/Cart/SaveForLater";
import { useSelector } from "react-redux";


export default function CartPage() {
  const  {cart} = useSelector((state) => state.CartAll)

  let total = cart.length;
  return (
                 <Box sx={{backgroundColor:"#F7FAFC"}}>
                
                     <Navbar />
                 <Container sx={{mb:2}}>
                   <Typography variant="h6" mt={4}>My Cart ({total})</Typography> 
                    <Stack direction={"row"}>
                       <CartMenu/>
                       <Stack>
                        <CouponCart/>
                        <Checkout/>
                        </Stack> 
                        </Stack>
                         <Services/>
                         <SaveForLater/>
                     <DiscountCard/>
                 </Container>
                    <Footer/>
                 </Box> 
  )
}

      