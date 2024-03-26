
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Card, Stack, Typography } from '@mui/material';
export default function Services() {
  return (
           <Stack  direction={'row'} m={4}>

          
       <Box height="36px" width={218} mb={2}>
                <Box display={"flex"} mt={1}>
                 <Card sx={{width:48, height:48 , bgcolor:'#DEE2E7', borderRadius:'50%'}}>
                       <LockOutlinedIcon sx={{ml:1.5, mt:1.5}}/>
                 </Card> 
                  <Stack ml={2} >
                <Typography>Secure Payment</Typography>
                 <Typography variant="body2" color="#D0D3D6">Have You ever finally </Typography>
                 </Stack>
                 </Box>
            </Box>
            <Box height="36px" width={218} mb={2}>
                <Box display={"flex"} mt={1}>
                 <Card sx={{width:48, height:48 , bgcolor:'#DEE2E7', borderRadius:'50%'}}>
                       <CommentOutlinedIcon  sx={{ml:1.5, mt:1.5}}/>
                 </Card> 
                  <Stack ml={2} >
                <Typography>Customer Support</Typography>
                 <Typography variant="body2" color="#D0D3D6">Have You ever finally </Typography>
                 </Stack>
                 </Box>
            </Box>
            <Box height="36px" width={218} mb={2}>
                <Box display={"flex"} mt={1}>
                 <Card sx={{width:48, height:48 , bgcolor:'#DEE2E7', borderRadius:'50%'}}>
                       <LocalShippingIcon sx={{ml:1.5, mt:1.5}}/>
                 </Card> 
                  <Stack ml={2} >
                <Typography>Free delivery</Typography>
                 <Typography variant="body2" color="#D0D3D6">Have You ever finally </Typography>
                 </Stack>
                 </Box>
            </Box>
              </Stack>
  )
}
