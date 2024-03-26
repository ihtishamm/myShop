import { Card, TextField, Typography } from "@mui/material";


export default function CouponCart() {
  return (
     <Card sx={{height:'110px', width:'280px', m:2}}>
           <Typography sx={{m:2}}>Have a Coupon?</Typography>
           <TextField sx={{width:'200px', height:'5px', maxHeight:'10px', mt:-2, ml:2}}
    
    
    value="add a coupon"
    
    InputProps={{endAdornment:<Typography color="blue">  Apply</Typography>}}
  />
     </Card>
  )
}
