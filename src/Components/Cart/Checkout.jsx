import { Button, Card, Divider, Stack, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useSelector, useDispatch } from "react-redux";
import { cartTotal } from "../../Featuers/cartSlice";

export default function Checkout() {
  
const dispatch = useDispatch();
 dispatch(cartTotal());

  const  { totalPrice} = useSelector((state) => state.CartAll)
 
    
  return (
         <Card sx={{width:'280px', height:'302px', ml:2}}>
                
                 <Typography display={"flex"} sx={{m:2, justifyContent:'space-between'}}>Subtotal:  <span><Typography>{totalPrice}</Typography></span></Typography>
                  <Typography display={"flex"} sx={{m:2, mt:-1 ,justifyContent:'space-between'}}>Discount:  <span><Typography color={'red'}> - $90.00</Typography></span></Typography>
                   <Typography display={"flex"} sx={{m:2,mt:-1, justifyContent:'space-between'}}>Tax:  <span><Typography color={"green"}>+$84</Typography></span></Typography>
                   <Divider variant="middle" />
                   <Typography display={"flex"} sx={{m:2, justifyContent:'space-between'}} variant="h6">Total:  <span><Typography variant="h6">$100</Typography></span></Typography>
                   <Button  variant="contained" sx={{width:248, height:54, maxHeight:54, bgcolor:"green", ml:2}}  >checkout</Button>
                    <Stack direction={"row"} m={2} justifyContent={"center"} spacing={3}>
                             <PaymentIcon/>
                             <AccountBalanceWalletOutlinedIcon/>
                             <PaymentIcon/>
                             <AccountBalanceWalletOutlinedIcon/>
                    </Stack>
         </Card>
  )
}
